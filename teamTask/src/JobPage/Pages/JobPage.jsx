import Map from "../Images/Map.png"
import Google from "../Images/Google.png"
import  Spotify from "../Images/Spotify.png"
import Adobe from "../Images/Adobe.png"
import Shopify from "../Images/Shopify.png"
import Coursera from "../Images/Coursera.png"
import HeroImage from "../Images/HeroImage.png"
import Header from '../../LandingPage/Components/Header'
import Footer from '../../LandingPage/Components/Footer'
import Jobcards from "../Components/Jobcards"

function JobPage() {
  return (
    <div>
        <Header/>
        <div className=" pt-10 md:pt-6 z-0">
            <img src={Map} alt="map" className="relative md:min-h-screen "/>
            <img src={HeroImage} alt="hero image" className="absolute top-0 md:min-h-screen w-full pt-10 md:pt-20" />  
        </div>
        <div className="md:p-5">
            <h1 className="font-serif text-xl p-2 md:pt-5 md:text-4xl">Recent Jobs Available</h1>

            <div className="grid grid-cols-2 p-5">
                <div>
                    <h1>Search by Job Title</h1>
                </div>
                <div className="flex flex-col">
                    <Jobcards
                    time="10 min ago"
                    logo={Google}
                    title="Google"
                    position="Senior Product Designer"
                    duration="Full time"
                    salary="$40000-$42000"
                    location="New-Delhi"/>

                    <Jobcards
                    time="12 min ago"
                    logo={Spotify}
                    title="Spotify"
                    position="Associate Content Strategist"
                    duration="Part time"
                    salary="$28000-$32000"
                    location="Greater-Noida"/>

                    <Jobcards
                    time="12 min ago"
                    logo={Adobe}
                    title="Adobe"
                    position="UI/UX Designer"
                    duration="Part time"
                    salary="$85000-$115,000"
                    location="Greater Noida"/>

                    <Jobcards
                    time="15 min ago"
                    logo={Shopify}
                    title="Shopify"
                    position="Partner Marketing Manager"
                    duration="Part time"
                    salary="$25000-$82000"
                    location="New-Delhi"/>

                    <Jobcards
                    time="20 min ago"
                    logo={Coursera}
                    title="Coursera"
                    position="University Partnership Associate"
                    duration="Part time"
                    salary="$40000-$42000"
                    location="Lucknow"/>
                </div>

            </div>
        </div>
        
        <Footer/>
      
    </div>
  )
}

export default JobPage
