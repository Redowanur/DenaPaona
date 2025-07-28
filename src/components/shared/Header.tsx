import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react';
import Logo from '../../assets/logo.png';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[90%] max-w-7xl mx-auto h-18 my-2 flex justify-between items-center">
            <div onClick={() => navigate('/')} className='cursor-pointer'>
                <img src={Logo}  className='w-40 bg-[#00A79D] p-2 rounded-xl' />
            </div>
            <div className='flex gap-6'>
                <button className='flex justify-center items-center border px-5 py-2 font-semibold rounded-xl'>
                    Get the App
                    <ArrowUpRight />
                </button>
                <button className='bg-black text-white px-5 py-2 font-semibold rounded-xl'>
                    Sign In
                </button>
            </div>
        </div>)
}

export default Header