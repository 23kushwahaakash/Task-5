import toast from "react-hot-toast";
import axios from "axios";
import {JOBSEEKER_API_ENDPOINT} from "../APIs/Data"

export const handleResumeUpload = async (e) => {
    const accessToken = localStorage.getItem("accessToken");

    const file = e.target.files[0];
    if (!file)
        return false;

    if (file.size > 2*1024*1024){
        toast.error("File must be under 2MB!");
        return false;
    }

    if (
        !file.type.includes("pdf") && 
        !file.type.includes("word")){
        toast.error("Only PDF or DOC allowed!");
        return false;
    }

    const formData = new FormData();
    formData.append("resume",file);

    try{
        await axios.post(
            `${JOBSEEKER_API_ENDPOINT}/uploadresume`, 
            formData,{
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                },
                withCredentials:true,
            }
        );
        return true;
    }
    catch{
        return false;
    }
};
