import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { LogOut, Settings, User } from 'lucide-react';

const Header = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [active, setActive] = useState('Home');

    const menu = [
        {
            text: 'Home',
            link: '/dashboard'
        },
        {
            text: 'Friends',
            link: '/friends'
        },
        {
            text: 'Groups',
            link: '/groups'
        },
    ]

    return (
        <div className='bg-[#00A79D]'>
            <div className="w-[90%] max-w-7xl mx-auto h-18 flex justify-between items-center relative">
                <div onClick={() => navigate('/')} className='cursor-pointer transform hover:scale-105 transition-transform duration-200'>
                    <img src={Logo} className='w-40' />
                </div>
                <nav className='hidden md:flex text-white md:justify-center md:items-center gap-10 text-xl'>
                    {menu.map(item => (
                        <span key={item.text} className={`cursor-pointer ${active === item.text && 'text-yellow-300'}`} onClick={() => {
                            navigate(item.link);
                            setActive(item.text);
                        }} >{item.text}</span>
                    ))}
                </nav>
                <div className='w-10 h-10 rounded-full bg-white cursor-pointer' onClick={() => setShow(!show)} />
                {show &&
                    <div className={`
                                absolute bg-white rounded-2xl shadow-2xl w-72 p-2 top-18 right-0 border border-gray-100
                                transform transition-all duration-300 origin-top-right
                                ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'}
                            `}>
                        {/* User info */}
                        <div className='px-4 py-3 border-b border-gray-100'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg'>
                                    JD
                                </div>
                                <div>
                                    <p className='font-semibold text-gray-800'>John Doe</p>
                                    <p className='text-sm text-gray-500'>john.doe@example.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu items */}
                        <div className='py-2'>
                            <DropdownItem icon={<User size={18} />} text="Profile" />
                            <DropdownItem icon={<Settings size={18} />} text="Settings" />
                        </div>

                        <div className='h-px bg-gray-100 my-2' />

                        <div className='py-2'>
                            <DropdownItem
                                icon={<LogOut size={18} />}
                                text="Sign out"
                                className="text-red-600 hover:bg-red-50"
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

interface DropdownItemProps {
    icon: React.ReactNode;
    text: string;
    className?: string;
}

const DropdownItem = ({ icon, text, className = "" }: DropdownItemProps) => (
    <button className={`
        w-full flex items-center gap-3 hover:bg-gray-50 px-4 py-3 rounded-xl text-gray-700 cursor-pointer
        ${className}
    `}>
        {icon}
        <span className="font-medium">{text}</span>
    </button>
);

export default Header