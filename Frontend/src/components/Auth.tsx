import { useState } from "react";
import { SignupInput } from "@abdulhameed_0808/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const Auth = ({type}:{type:"signup" | "signin"}) => {
    const navigate=useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });
    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log(postInputs);
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ?"signup":"signin"}`,postInputs) 
            const jwt=response.data.jwt;    
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        }catch(e){
            console.log(e)
            alert("An error occured while signing up")
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="">
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-500 flex items-center justify-center">
    {type === "signup" ? (
        <>
            Already have an account?{" "}
            <a href="signin" className="hover:underline text-blue-500">
                Login
            </a>
        </>
    ) : (
        <>
            Don't have an account?{" "}
            <a href="signup" className="hover:underline text-blue-500">
                Sign Up
            </a>
        </>
    )}
</div>

                </div>
                <div className="pt-4 ">

            {type === "signup" ? (
                <LabelledInput label="Name" placeholder="Enter your Name" onChange={(e)=>{console.log(e.target.value)
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })}}/>
            ) : null}
                
                <LabelledInput label="Email" placeholder="Enter your email" onChange={(e)=>{console.log(e.target.value)
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }}/>
                <LabelledInput label="Password" type={"password"} placeholder="Enter your password"   onChange={(e)=>{console.log(e.target.value)
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value})
                }}/>
                <div className="py-3">
                    
                <button type="button" onClick={handleSubmit}  className="  bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                    {type === "signup" ? "Sign Up" : "Sign In"}
                </button>
                </div>
                </div></div>
            </div>
        </div>
    );
};
function LabelledInput ({label, placeholder, onChange, type = "text"}: 
    {label: string, placeholder: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type?: string}) {
    return (
        <div>
           <label className="block mb-2 text-sm font-medium text-gray-900 pt-2">{label}</label>
            <input 
                onChange={onChange} 
                type={type} 
                id={label} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                placeholder={placeholder} 
                required 
            />
        </div>
    )
}
