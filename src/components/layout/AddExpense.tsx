const AddExpense = () => {
  return (
    <div className="w-85 md:w-120 ">
      <p className="text-3xl font-semibold">Add Expense</p>
      <form className="my-4">
        <p className="font-semibold text-gray-600 my-2">Description</p>
        <textarea
          placeholder="e.g Dinner, Movie ticket, Rickshaw bhara"
          className="outline-none bg-gray-100 px-6 py-3 rounded-xl w-full resize-none"
        />
        <div className="flex justify-center items-center mt-8 gap-5">
          <button className='px-6 py-3 font-bold transition-all duration-300 rounded-xl text-lg shadow-lg transform hover:scale-105 hover:shadow-xl outline-none w-full cursor-pointer'>
            Cancel
          </button>
          <button className='px-6 py-3 font-bold text-white bg-[#00B2A5] transition-all duration-300 rounded-xl text-lg shadow-lg transform hover:scale-105 hover:shadow-xl outline-none w-full cursor-pointer'>
            Add
          </button>

        </div>
      </form>
    </div>
  )
}

export default AddExpense