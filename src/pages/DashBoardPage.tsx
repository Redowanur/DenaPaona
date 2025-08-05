// import { Plus } from "lucide-react"
import Balance from "../components/layout/Balance"
import RecentActivity from "../components/layout/RecentActivity"

const DashBoardPage = () => {
	return (
		<div className="w-[90%] max-w-7xl mx-auto">
			<div className="lg:flex lg:flex-row-reverse gap-5 my-8">
				<div className="lg:w-[70%] ">
					<div className="text-center">
						<p className="font-semibold text-3xl md:text-4xl">👋 Welcome back, <span className="text-[#00A79D] ">Redowan</span></p>
						<p className="text-lg md:text-xl text-gray-500">Lets's settle some দেনাপাওনা today!</p>
					</div>

					<p className="bg-red-500">add expense</p>
				</div>
				<Balance />
			</div>
			<RecentActivity/>
		</div>
	)
}

export default DashBoardPage