import { faker } from "@faker-js/faker";

const transactionTypes = [1, 2];

function generateFakeTransaction() {
    const type = faker.helpers.arrayElement(transactionTypes);
    const name = faker.person.firstName();
    const amount = faker.number.int({ min: 50, max: 1000 });

    return {
        type,
        with: name,
        amount,
    };
}

const transactions = Array.from({ length: 5 }, generateFakeTransaction);

const PendingExpenses = () => {
  return (
    <div>
      <p className="text-2xl font-semibold pt-8 pb-4">Pending Expenses</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-0 lg:max-h-[50vh] lg:overflow-y-auto lg:shadow-sm lg:px-3 lg:rounded-xl">
        {transactions.map((item, id) => (
          <div
            key={id}
            className="group relative cursor-pointer flex items-center rounded-xl bg-gray-50 h-25 lg:h-18 lg:rounded-none lg:border-b lg:border-gray-200 lg:bg-white"
          >
            {/* Left border indicator on hover (mobile only) */}
            <div
              className="absolute left-0 top-0 h-full w-2 rounded-l-xl bg-[#1cd3c7] 
                         opacity-0 transition-opacity duration-200 
                         group-hover:opacity-100 lg:hidden"
            />

            {/* Content */}
            <div
              className="ml-5 w-full transition-all duration-300 hover:translate-x-2 
                         lg:ml-0"
            >
              <p className="text-lg font-medium">{item.with}</p>
              <p
                className={`text-sm font-semibold ${
                  item.type === 1 ? 'text-green-500' : 'text-red-400'
                }`}
              >
                {item.type === 1 ? 'Owes you' : 'You owe'}{' ৳' + item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PendingExpenses