import {Mail} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ForgotForm() {
  const navigate = useNavigate(); 

  return (
    <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
        <div className="md:w-[100%] flex justify-center items-center flex-col">
          <h1 className=" mb-5 mt-5 text-2xl font-bold">Forgot Password</h1>
          <form className="w-[80%]">
            <div className="flex gap-2 mb-7 mt-15 border-b border-gray-300">
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
          </form>
          <button 
            type="submit" 
            className="bg-[#15294B] mb-20 mt-8 hover:shadow-[0_4px_20px_#60A5FA] transition-shadow duration-300 w-[70%] px-25 py-5 rounded-md text-white text-2xl" 
            onClick={() => navigate('/forgotpassword/verifyotp')} 
          >
            Send OTP
          </button>
          <a href="/" className="hover:underline mb-10 text-blue-500">Back to Login</a>
        </div>
    </div>
  )
}

export default ForgotForm