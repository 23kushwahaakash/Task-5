import NextStep from '../Images/NextStep.png'
import { Search, Mic,Home } from 'lucide-react';

function Header() {
  return (
    <div>
      <div className='flex gap-2 justify-center items-center'>
        <img src={NextStep} alt="NextStep logo" />
        <h1 className='font-serif text-lg'>NextStep</h1>
      </div>
      <div>
        <div className="flex items-center gap-3  hover:bg-gray-200 transition-colors duration-200 rounded-full px-4 py-3 w-full max-w-md border border-gray-200">
            <Search className="w-5 h-5 text-gray-600 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
            />
            <Mic className="w-5 h-5 text-gray-600 flex-shrink-0 cursor-pointer hover:text-gray-800" />
        </div>
        <div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
               <Home className="w-5 h-5 text-gray-700" />
               <span className="text-gray-700 font-medium text-lg">Home</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header
