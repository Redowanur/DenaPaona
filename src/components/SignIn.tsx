import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignInVisible }: any) => {
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="w-85 lg:w-100">
			<form className="">
				<p className="text-3xl font-bold mb-4 text-center">Sign In</p>
				<div className="flex flex-col justify-center items-center gap-6">
					<input
						required
						type="email"
						placeholder="Enter your email"
						className="outline-none bg-gray-100 px-6 py-3 rounded-xl w-full transform hover:scale-105 transition-all duration-300"
					/>
					<div className="w-full flex items-center bg-gray-100 rounded-xl pr-3 transform hover:scale-105 transition-all duration-300">
						<input
							required
							type={isPasswordVisible ? 'text' : 'password'}
							placeholder="Enter your password"
							className="outline-none px-6 py-3 w-full"
						/>
						<div className="cursor-pointer">
							{isPasswordVisible ? <Eye size={20} color="gray" onClick={() => setPasswordVisible(false)} /> : <EyeOff size={20} color="gray" onClick={() => setPasswordVisible(true)} />}
						</div>
					</div>
					<button className='px-6 py-3 font-bold text-white bg-[#00B2A5] transition-all duration-300 rounded-xl text-lg shadow-lg transform hover:scale-105 hover:shadow-xl outline-none w-full' onClick={() => navigate('dashboard')} >
						Sign In
					</button>
				</div>
			</form>
			<div className="flex justify-between items-center my-5">
				<div className="h-[1px] bg-black/15 w-[45%]" />
				<p className="text-black/50">or</p>
				<div className="h-[1px] bg-black/15 w-[45%]" />
			</div>
			<button className='px-6 py-3 transition-all duration-300 rounded-xl text-lg shadow-md transform hover:scale-105 hover:shadow-lg outline-none w-full flex justify-center items-center gap-3 border border-gray-200 '>
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						fill="#4285F4"
					/>
					<path
						d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						fill="#34A853"
					/>
					<path
						d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						fill="#FBBC05"
					/>
					<path
						d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						fill="#EA4335"
					/>
				</svg>
				Sign in with Google
			</button>
			<p className="text-center text-gray-500 mt-5">Don't have an account? <span className="underline hover:font-bold text-[#00B2A5] cursor-pointer" onClick={() => setSignInVisible(false)} >Sign Up</span></p>
		</div>
	)
}

export default SignIn