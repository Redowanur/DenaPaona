const SignIn = () => {
	return (
		<form className="">
			<p className="text-3xl font-bold mb-4 text-center">Sign In</p>
			<div className="flex flex-col justify-center items-center gap-6">
				<input
					type="email"
					placeholder="Enter your email"
					className="outline-none bg-gray-100 px-6 py-3 rounded-xl"
				/>
				<input
					type="password"
					placeholder="Enter your password"
					className="outline-none bg-gray-100 px-6 py-3 rounded-xl"
				/>
				<button className='px-6 py-3 font-bold text-white bg-[#00B2A5] hover:bg-gray-50 transition-all duration-300 rounded-xl text-lg shadow-lg transform hover:scale-105 hover:shadow-xl outline-none w-full'>
					Sign In
				</button>

			</div>
		</form>
	)
}

export default SignIn