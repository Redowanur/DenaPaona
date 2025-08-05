import { faker } from '@faker-js/faker';
import { ArrowDown, ArrowUp, Pencil, Trash2 } from 'lucide-react';
// import Modal from '../shared/Modal';

const transactionTypes = [1, 2];
const transactionPurposes = [
	'Movie Ticket',
	'Dinner',
	'Grocery',
	'Electric Bill',
	'Mobile Recharge',
	'Book Purchase',
	'Online Course',
	'Ride Share',
	'Gift',
	'Rent'
];

function generateFakeTransaction() {
	const purpose = faker.helpers.arrayElement(transactionPurposes);
	const type = faker.helpers.arrayElement(transactionTypes);
	const name = faker.person.firstName();
	const amount = faker.number.int({ min: 50, max: 1000 });
	const date = faker.date.between({ from: '2025-01-01', to: '2025-06-30' });
	const formattedDate = new Intl.DateTimeFormat('en-GB').format(date);

	return {
		purpose,
		type,
		with: name,
		amount,
		date: formattedDate,
	};
}

// Example: generate 5 transactions
const transactions = Array.from({ length: 10 }, generateFakeTransaction);

const RecentActivity = () => {
	return (
		<div className="mb-5 lg:w-[70%] ">
			<p className="text-2xl font-semibold py-3">Recent Activities</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{transactions.map((item, id) => (
					<div key={id} className='px-4 py-3 bg-gray-50 rounded-xl flex justify-between items-center transition-all duration-300 transform hover:scale-105'>
						<div className='flex justify-center items-center gap-4 h-full'>
							<div className={`${item.type === 1 ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'} rounded-full w-8 h-8 flex justify-center items-center`}>
								{item.type === 1 ? <ArrowDown size={18} /> : <ArrowUp size={18} />}
							</div>
							<div className='flex flex-col gap-1'>
								<p className='font-semibold'>{item.purpose}</p>
								<p className='text-gray-700 text-sm'>{item.with + ' '}•{' ' + item.date}</p>
							</div>
						</div>

						<div className='flex md:flex-col justify-center items-center gap-2'>
							<p className={`font-bold ${item.type === 1 ? 'text-green-500' : 'text-red-400'}`}>{item.type == 1 ? '+' : '-'}৳{item.amount}{'.00'} </p>
							<div className='flex justify-center items-center'>
								<div className='text-gray-500 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:text-green-500 hover:bg-green-50'>
									<Pencil size={17} />
								</div>
								<div className='text-gray-500 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:text-red-500 hover:bg-red-50'>
									<Trash2 size={17} />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* <Modal  >gdfv</Modal> */}
		</div>
	)
}

export default RecentActivity