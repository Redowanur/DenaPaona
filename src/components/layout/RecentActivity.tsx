import { faker } from '@faker-js/faker';

const transactionTypes = ['give money', 'receive money'];
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
  const amount = faker.number.int({ min: 50, max: 5000 }) + ' BDT';
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
    <div className="shadow-md rounded-xl border border-gray-200 my-5">
        <p className="text-2xl font-semibold">Recent Activity</p>
        {transactions.map(item => (
            <div className='border-t px-4 py-1 border-gray-200'>
                <p>{item.purpose}</p>
            </div>
        ))}
    </div>
  )
}

export default RecentActivity