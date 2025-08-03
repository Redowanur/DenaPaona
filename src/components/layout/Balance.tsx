const Balance = () => {
    return (
        <>
            <p className="font-bold text-3xl text-center mb-5">Balance Summery</p>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="bg-green-50 mx-auto rounded-xl border border-green-200 p-5 w-full">
                    <div className="flex justify-center items-center gap-2 w-fit">
                        <div className="w-3 h-3 rounded-full bg-green-700" />
                        <p className="text-lg text-green-700">You're owed</p>
                    </div>
                    <p className="font-bold text-3xl  text-green-800">৳ 140 BDT</p>
                </div>
                <div className="bg-red-50 mx-auto rounded-xl border border-red-200 p-5 w-full">
                    <div className="flex justify-center items-center gap-2 w-fit">
                        <div className="w-3 h-3 rounded-full bg-red-700" />
                        <p className="text-lg text-red-700">You owed</p>
                    </div>
                    <p className="font-bold text-3xl  text-red-800">৳ 200 BDT</p>
                </div>
            </div>
        </>
    )
}

export default Balance