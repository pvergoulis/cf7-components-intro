import {useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
}

const initialValues = {
    name: "",
    email: "",
    message: ""

}


const MultiFieldForm = () =>{

    const [values,setValues]=useState<FormValues>(initialValues);
    const[submittedData, setSubmittedData]=useState<FormValues | null>(null);


    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        setSubmittedData(values);
        setValues(initialValues);
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        // setValues({...values, [e.target.name]: e.target.value});
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }


    const handleClear = () =>{
        setValues(initialValues)
        setSubmittedData(null)
    }



    return (
        <>
            <div className=" mt-8 space-y-4 mx-auto max-w-sm">


            <form onSubmit={handleSubmit} className=" mt-8 space-y-4 mx-auto max-w-md " >
                <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                    value={values.name}
                    className="px-4 py-2 rounded border w-full"
                    type="text"
                    required
                />

                <input
                    name="email"
                    value={values.email}
                    placeholder="Email"
                    className="px-4 py-2 rounded border w-full"
                    type="email"
                    onChange={handleChange}
                    required
                />

                <textarea
                className="px-4 py-2 rounded border w-full"
                placeholder="type your Message"
                name="message"
                onChange={handleChange}
                value={values.message}
                required>
                </textarea>

                <div className="flex gap-4 mx-auto justify-center">
                    <button
                        type="submit"
                        className="bg-cf-dark-red text-white px-4 py-2 rounded">
                        Submit
                    </button>

                    <button
                        onClick={handleClear}
                        type="button"
                        className="bg-gray-200 text-cf-gray-700 px-4 py-2 rounded">
                        Clear
                    </button>
                </div>

                {submittedData && (
                    <div className="mt-6 border-t pt-4 space-y-2">
                        <h2 className="font-semibold">Submitted Data</h2>
                        <p> Name : <strong>{submittedData.name}</strong></p>
                        <p> Email : <strong>{submittedData.email}</strong></p>
                        <p> Message : <strong>{submittedData.message}</strong></p>
                    </div>
                )}

            </form>
            </div>
        </>
    )
}

export default MultiFieldForm;