import NextStep from "../Images/NextStep.png"
import Facebook from "../Authorisation/Images/facebook.png"
import Apple from "../Authorisation/Images/apple.png"
import Google from "../Authorisation/Images/google.png"


function Footer() {
  return (
    <div className="gradient-animate text-white grid">
        <div className="m-20 border-b pb-15 grid grid-cols-4">
            <div className=" w-[80%] grid-col-1 mb-10">
                <div className="flex flex-col items-start">
                    <div className="flex gap-2 justify-center items-center mb-10">
                        <img src={NextStep} alt="NextStep logo" />
                        <h1 className="font-serif">NextStep</h1>
                    </div>
                    <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 grid-col-2">
                <h1 className="text-xl font-semibold">About</h1>
                <h1>Companies</h1>
                <h1>Pricing</h1>
                <h1>Terms</h1>
                <h1>Advice</h1>
                <h1>Privacy Policy</h1>
            </div>
            <div className="flex flex-col gap-3 grid-col-3">
                <h1 className="text-xl font-semibold">Resources</h1>
                <h1>Help Docs</h1>
                <h1>Guide</h1>
                <h1>Updates</h1>
                <h1>Contact Us</h1>
            </div>
            <div className="flex flex-col gap-3 grid-col-4">
                <h1 className="text-xl font-semibold">Get job notifications</h1>
                <p>The latest job news, articles, sent to your inbox weekly.</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Email Address" className="bg-white text-gray-800 p-3"/>
                    <button className="bg-[#15294B] p-3 text-lg">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="flex justify-between mx-20">
            <h1>2025 @ NextStep. All rights reserved.</h1>
            <div className="flex gap-5 pb-5">
                <img src={Facebook} alt="facebook" className="w-10 h-10" />
                <img src={Apple} alt="apple" className="w-10 h-10"/>
                <img src={Google} alt="google" className="w-10 h-10" />
            </div>
        </div>
    </div>

    
  )
}

export default Footer
