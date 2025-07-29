import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-[#00A79D]'>
            <div className="w-[90%] max-w-7xl mx-auto h-18 flex justify-between items-center">
                <div onClick={() => navigate('/')} className='cursor-pointer'>
                    <img src={Logo} className='w-40' />
                </div>
                <div className='flex gap-6'>
                    <button className='bg-black text-white px-5 py-3 font-semibold rounded-xl'>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header