import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
export const Signup =()=>{
    return (
        <div className="flex">
            <div className="flex justify-center items-center h-screen w-1/2">
            <div>
                <Auth type="signup"/>
            </div>
            </div>  
            <div className="bg-slate-200 w-1/2 items-center justify-center hidden md:flex">
            <Quote/>
            </div>
        </div>
    )
}