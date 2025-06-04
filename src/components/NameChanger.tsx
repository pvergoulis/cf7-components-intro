import {useEffect, useState} from "react";

const NameChanger = () =>{
    const [ name, setName] = useState("");

    useEffect(()=>{
        document.title = name ? `Hello ${name} !` : "Hello Stranger";
    },[name])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        setName(e.target.value);
    }

  useEffect (()=>{
      const id : number = setInterval(()=>console.log("tick"),1000)
      return () => clearInterval(id)
  }, [])

    return  (
        <>
            <h1 className="text-center text-xl pt-4">Hello, {name || "Stranger"}</h1>
            <div className="text-center mt-4">
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter Name..."
                    className="border ps-2 px-4 py-2"
                />
            </div>


        </>
    )
}


export default NameChanger;