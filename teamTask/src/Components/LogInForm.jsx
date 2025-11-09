import { Eye,EyeOff,Mail,Lock } from "lucide-react";
import {useState} from "react";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import apple from "../Images/apple.png";

function LogInForm() {
    const [showPassword,setShowPassword]=useState(false);
    const togglePasswordVisibility=()=>setShowPassword(!showPassword);


  return (
    <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
        <div className="md:w-[100%] flex justify-center items-center flex-col">
          <h1 className=" mb-5 mt-5 text-2xl font-bold">Login</h1>
          <form className="w-[80%]">
            <div className="flex gap-2 mb-7 border-b border-gray-300">
               <label htmlFor="email"><Mail/></label>
               <div className=" mb-3">
                <input 
                type="email" 
                id="email" 
                placeholder="Enter your Email address" 
                className="focus:outline-none"
                />
                </div>
                </div>
            
            <div className="flex flex-between gap-2 mb-3 pb-2 border-b border-gray-300">
            <div className="flex gap-40">
              <div className="flex gap-2">
                <label htmlFor="password"><Lock/></label>
                <input 
                type={showPassword ? "text" :"password"} 
                id="password" 
                placeholder="Enter your Password"
                className="focus:outline-none" 
                />
              </div>
              {showPassword?(
                  <EyeOff onClick={togglePasswordVisibility} className="cursor-pointer "/>)
                  :(
                  <Eye onClick={togglePasswordVisibility} className="cursor-pointer"/>)
                  }
            </div>
            </div>
            <div className="flex justify-between items-center pb-5 ">
                <label className="text-xs flex gap-1">
                    <input  type="checkbox"  placeholder="Password"/>
                     Remember me
                </label>
                <a href="/forgotpassword" className="hover:underline text-blue-800 text-xs">Forgot Password?</a>
            </div>
          </form>
          <button type="submit" className="bg-[#15294B] hover:shadow-[0_4px_20px_#60A5FA] transition-shadow duration-300 px-30 py-5 mb-3 rounded-md text-white text-2xl">Log in</button>
          <p className="text-gray-400">or continue with</p>
          <div className="flex gap-5 mt-5 mb-5">
            <img src={facebook} alt="facebook logo" className="w-10 h-10" />
            <img src={apple} alt="apple logo" className="w-10 h-10" />
            <img src={google} alt="google logo" className="w-10 h-10"/>
          </div>
        </div>
    </div>
  )
}

export default LogInForm
