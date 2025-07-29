import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png';


const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#00A79D] relative overflow-hidden mb-20">
            <div className='w-110 md:w-150 lg:w-200 h-110 md:h-150 lg:h-200 z-0 rounded-full bg-[#0bb0a6] absolute bottom-40 md:bottom-30 lg:bottom-10 -left-30 md:-left-25 lg:-left-20 pointer-events-none' />

            <div className="w-[90%] max-w-7xl mx-auto mt-2 h-18 flex justify-between items-center">
                <div onClick={() => navigate('/')} className='cursor-pointer z-10'>
                    <img src={Logo} className='w-40' />
                </div>
                <div className='flex gap-6 z-10'>
                    <button className='bg-white px-5 py-2 text-[#00A79D] font-bold cursor-pointer rounded-xl text-xl'>
                        Sign In
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-center py-10 lg:py-0 w-[90%] max-w-7xl h-fit mx-auto' >
                <div className='max-w-2xl z-10'>
                    <p className='mt-10 text-white font-semibold text-6xl md:text-7xl lg:text-8xl'>Split expenses with friends</p>
                    <p className='text-white my-5 text-lg md:text-xl lg:text-2xl'>Keep track of shared expenses and balances with housemates, trips, groups, friends, and family</p>
                    <button className='bg-white px-5 py-2 text-[#00A79D] font-bold cursor-pointer rounded-xl text-xl mb-10'>Get Started</button>
                </div>

                {/* <div className='h-full z-10 hidden lg:block'>
                    <img src={CashPayment} />
                </div> */}
            </div >

        </div>
    )
}

export default HeroSection