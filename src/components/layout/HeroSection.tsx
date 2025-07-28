// import Underline from '../../assets/underline.png';
import CashPayment from '../../assets/cash-payment.png';

const HeroSection = () => {
    return (
        <div className="w-[90%] max-w-7xl bg-[#00A79D] h-fit mx-auto rounded-2xl">
            {/* Intro */}
            <div className='flex justify-between items-center px-10'>
                <div className='w-150'>
                    {/* <div className='w-fit relative flex flex-col justify-center items-center'>
                        <h1 className='text-7xl text-white font-bold'>DenaPaona</h1>
                        <div className='w-100 absolute top-16'>
                            <img
                                src={Underline}
                                className=''
                            />
                        </div>
                    </div> */}
                    <p className='mt-10 text-white font-semibold text-8xl'>Split expenses with friends</p>
                    <p className='text-white mt-5 text-xl'>Keep track of shared expenses and balances with housemates, trips, groups, friends, and family</p>
                    <button className='bg-white px-5 py-2 text-[#00A79D] font-bold cursor-pointer rounded-xl text-xl mt-5'>Get Started</button>
                </div>

                <div className='w-90'>
                    <img src={CashPayment} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
// #FFCBB2