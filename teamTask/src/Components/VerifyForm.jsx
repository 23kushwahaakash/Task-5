import {ArrowLeft} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react"; 


function VerifyForm() {
  const navigate = useNavigate();  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) value = value.slice(0, 1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
}

 const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
};

const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      console.log("OTP:", otpValue);
      alert(`Verifying OTP: ${otpValue}`);
    } else {
      alert("Please enter all 6 digits");
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
    alert("OTP resent!");
  };


  return (
    <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
        <div className="md:w-[100%] flex justify-center items-center flex-col mb-10">
          <div className="flex gap-35 w-[100%]">
            <button 
              onClick={() => window.history.back()}  
              className="hover:shadow-xl border flex justify-center items-center border-gray-300 w-12 rounded-4xl mt-2 ml-2 h-12"
            >
              <ArrowLeft/>
            </button>
            <h1 className="mb-5 mt-5 text-2xl font-bold">Verify OTP</h1>
          </div>
          <form className="w-[80%] flex flex-col justify-center items-center">
            <p>A 6-digit code has been sent to </p>
            <p>Enter the OTP</p>
            <div className="flex gap-2 md:gap-3 mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 md:w-14 md:h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-white transition"
                />
              ))}
              </div>
          </form>
          <button type="submit" className="bg-[#15294B] mb-5 mt-8 hover:shadow-[0_4px_20px_#60A5FA] transition-shadow duration-300 w-[70%] px-25 py-5 rounded-md text-white text-2xl">Verify OTP</button>
          <h1>Didn't receive the code?<a href="/forgotpassword" className="hover:underline mb-10 text-blue-500">Resend OTP</a></h1>
        </div>
    </div>
  )
}

export default VerifyForm