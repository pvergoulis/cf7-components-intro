import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button.tsx";

const formSchema = z.object({
    name: z.string().trim().nonempty("Name is required"),
    email: z
        .string()
        .trim()
        .nonempty("Email is required")
        .email("Email is Invalid"),
    message: z
        .string()
        .trim()
        .nonempty("Message is required")
        .min(5, "Message must be at least than 5")
        .max(8, "Message must be at most than 8")
})

type FormValues = z.infer<typeof formSchema>;

const initialValues = {
    name: "",
    email: "",
    message: "",
};

const MultiFieldFormWithReactHook = () => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
        watch,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    })

    const onSubmit = (data : FormValues) => {
        console.log("data", data);
        reset()
    }

    const onClear =() =>{
        reset()
    }

    const watchedValues = watch()

    return(
        <>
            <h1 className="mt-20 text-center">hello</h1>
            <div className="flex max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            {...register("name")} // name= name
                            placeholder="Name"
                            className="w-full px-4 py-2 rounded border"
                        />
                        {errors?.name && (
                            <p className="text-cf-dark-red">{errors.name.message}</p>)}
                    </div>

                    <div>
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="w-full px-4 py-2 rounded border"
                        />
                        {errors?.email && (
                            <p className="text-cf-dark-red">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                         <textarea
                             {...register("message")}
                             placeholder="Type your message"
                             className="w-full px-4 py-2 rounded border"
                         ></textarea>
                        {errors?.message && (
                            <p className="text-cf-dark-red">{errors.message.message}</p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-cf-dark-red text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={onClear}
                            className="bg-gray-200 text-cf-gray-700 px-4 py-2 rounded">
                            Clear
                        </button>

                        <Button variant="outline">Click me</Button>
                    </div>

                    {/*{ submittedData && (*/}
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <h2 className="font-semibold">Live Data</h2>
                            <p><strong>Name:</strong> {watchedValues.name}</p>
                            <p><strong>Email:</strong> {watchedValues.email}</p>
                            <p><strong>Message:</strong> {watchedValues.message}</p>
                        </div>
                    {/*)}*/}

                </form>
            </div>
        </>
    )
};

export default MultiFieldFormWithReactHook;