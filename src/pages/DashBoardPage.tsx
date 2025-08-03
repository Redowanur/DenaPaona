import Balance from "../components/layout/Balance"
import RecentActivity from "../components/layout/RecentActivity"

const DashBoardPage = () => {
	return (
		<div>
			<div className="w-[90%] max-w-7xl mx-auto py-5">
				<Balance/>
				<RecentActivity/>
			</div>
		</div>
	)
}

export default DashBoardPage