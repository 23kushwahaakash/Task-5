import checkMark from "../Images/checkMark.png"
import { useNavigate } from "react-router-dom";

function UpdatedPasswordForm() {
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        navigate("/");
    }

  return (
    <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
        <div className="md:w-[100%] flex justify-center items-center flex-col mt-20 mb-15">
            <img src={checkMark} alt="checkMark" className="w-15 h-15" />
            <h1 className=" mb-5 mt-5 text-2xl font-bold">Updated</h1>
            <h1>Congratulations! Your password is updated</h1>
            <h1 className="mb-20">successfully. Click continue to login</h1>
            <button 
            type="submit" 
            className="bg-[#15294B] hover:shadow-[0_4px_20px_#60A5FA] transition-shadow duration-300 px-30 py-5 mb-3 rounded-md text-white text-2xl"
            onClick={handleResetPassword}
            >Continue</button>
        </div>
    </div>
  )
}

export default UpdatedPasswordForm
