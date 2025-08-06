// import { Plus } from "lucide-react"
import { Plus } from "lucide-react"
import Balance from "../components/layout/Balance"
import PendingExpenses from "../components/layout/PendingExpenses"
import RecentActivity from "../components/layout/RecentActivity"
import { useDevice } from "../contexts/DeviceContext"
import AddExpense from "../components/layout/AddExpense"
import Modal from "../components/shared/Modal"
import { useState } from "react"

const DashBoardPage = () => {
	const { isMobile } = useDevice();
	const [isOpen, setIsOpen] = useState(false);


	return (
		<div className="w-[90%] max-w-7xl mx-auto">
			<div className="flex flex-col lg:flex-row-reverse gap-5 my-8 ">
				<div className="text-center lg:w-[75%]">
					<p className="font-semibold text-3xl md:text-4xl">👋 Welcome back, <span className="text-[#00A79D] ">Redowan</span></p>
					<p className="text-lg md:text-xl text-gray-500">Lets's settle some দেনাপাওনা today!</p>
					{!isMobile &&
						<AddExpense/>
					}
				</div>
				<div className="lg:w-[25%]" >
					<Balance />
					{isMobile &&
						<button className='px-6 py-3 font-bold text-white bg-[#00B2A5] transition-all duration-300 rounded-xl text-lg shadow-lg transform hover:scale-105 hover:shadow-xl outline-none w-full cursor-pointer flex justify-center items-center gap-2 mt-5' onClick={() => setIsOpen(true)} >
							<Plus size={23} />Add Expense
						</button>
					}
					<PendingExpenses />
				</div>
			</div>
			<RecentActivity />
			{isMobile &&
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<AddExpense />
				</Modal>
			}
		</div>
	)
}

export default DashBoardPage