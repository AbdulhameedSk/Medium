import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
export const Signin =()=>{
    return (
        <div className="flex">
            <div className="flex justify-center items-center h-screen w-full md:w-1/2">
                <div>
                    <Auth type="signin"/>
                </div>
            </div>  
            <div className="bg-slate-200 w-1/2 items-center justify-center hidden md:flex">
                <Quote/>
            </div>
        </div>
    )
}