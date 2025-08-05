import { ArrowRight, Receipt, TrendingUp } from 'lucide-react'
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import SignIn from '../SignIn';
import Modal from '../shared/Modal';
import SignUp from '../SignUp';

const HeroSection = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isSignInVisible, setSignInVisible] = useState(true);

    const handleClick = () => {
        setIsOpen(true);
        setSignInVisible(true);
    }

    return (
        <div className="bg-gradient-to-br from-[#00A79D] via-[#00B5A8] to-[#0bb0a6] relative overflow-hidden">
            {/* Animated background elements */}
            <div className='w-110 md:w-150 lg:w-200 h-110 md:h-150 lg:h-200 z-0 rounded-full bg-white/10 absolute bottom-40 md:bottom-30 lg:bottom-10 -left-30 md:-left-25 lg:-left-20 pointer-events-none animate-pulse' />
            <div className='w-60 h-60 z-0 rounded-full bg-white/5 absolute top-20 -right-20 pointer-events-none animate-pulse' />
            <div className='w-32 h-32 z-0 rounded-full bg-white/8 absolute top-1/2 right-1/4 pointer-events-none animate-pulse' />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-2 h-2 bg-white/20 rounded-full absolute top-1/4 left-1/4 animate-ping"></div>
                <div className="w-1 h-1 bg-white/30 rounded-full absolute top-1/3 right-1/3 animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="w-3 h-3 bg-white/15 rounded-full absolute bottom-1/3 left-1/5 animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Navigation */}
            <div className="w-[90%] max-w-7xl mx-auto pt-6 h-18 flex justify-between items-center relative z-20">
                <div onClick={() => navigate('/')} className='cursor-pointer transform hover:scale-105 transition-transform duration-200'>
                    <img src={Logo} className='w-40' />
                </div>
                <div className='flex gap-4'>
                    <button className='bg-white px-6 py-3 text-[#00A79D] font-bold hover:bg-gray-50 transition-all duration-300 rounded-xl text-lg shadow-lg transform hover:scale-105 hover:shadow-xl outline-none cursor-pointer' onClick={handleClick} >
                        Sign In
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className='flex flex-col lg:flex-row justify-between items-center py-16 lg:py-20 w-[90%] max-w-7xl mx-auto relative z-10'>
                <div className='max-w-3xl lg:max-w-2xl'>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                        <TrendingUp className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-medium">Trusted by 10M+ users worldwide</span>
                    </div>

                    <h1 className='text-white font-bold text-6xl md:text-7xl lg:text-8xl leading-tight mb-6'>
                        Split <span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>expenses</span> with friends
                    </h1>

                    <p className='text-white/90 my-8 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl'>
                        Keep track of shared expenses and balances with housemates, trips, groups, friends, and family. Never worry about who owes what again.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className='group bg-white px-8 py-4 text-[#00A79D] font-bold hover:bg-gray-50 transition-all duration-300 rounded-xl text-xl shadow-lg transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 justify-center cursor-pointer'>
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        <button className='bg-transparent border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-[#00A79D] transition-all duration-300 rounded-xl text-xl transform hover:scale-105 cursor-pointer'>
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right side illustration/mockup area */}
                <div className="hidden xl:block mt-16 lg:mt-0 lg:ml-12 relative">
                    <div className="w-80 h-96 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="p-8 h-full flex flex-col justify-center items-center text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                <Receipt className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-center">Split Bill</h3>
                            <div className="space-y-3 w-full">
                                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                                    <span className="text-sm">Dinner</span>
                                    <span className="font-semibold">$120</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                                    <span className="text-sm">You owe</span>
                                    <span className="font-semibold text-yellow-300">$40</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {isSignInVisible ? <SignIn setSignInVisible={setSignInVisible} /> : <SignUp setSignInVisible ={setSignInVisible} />}
            </Modal>
        </div>
    )
}

export default HeroSection