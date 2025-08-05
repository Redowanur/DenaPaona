import { ArrowDown, ArrowUp } from "lucide-react"

const Balance = () => {
    return (
        <div className="w-full flex lg:flex-col justify-center items-center gap-5 lg:w-[30%] ">
            <div className="bg-[#00A79D] mx-auto rounded-xl shadow-sm p-5 w-full h-40 flex flex-col justify-center">
                <div className="flex justify-center items-center gap-1 w-fit">
                    <div className="flex justify-center items-center text-white">
                        <ArrowDown />
                    </div>
                    <p className="text-md md:text-lg text-white font-semibold">You get</p>
                </div>
                <p className="font-bold text-[26px] md:text-3xl text-white">৳ 140 BDT</p>
            </div>
            <div className="bg-white mx-auto rounded-xl shadow-sm p-5 w-full h-40 flex flex-col justify-center">
                <div className="flex justify-center items-center gap-1 w-fit">
                    <div className="flex justify-center items-center text-[#00A79D]">
                        <ArrowUp />
                    </div>
                    <p className="text-md lg:text-lg text-[#00A79D] font-semibold ">You owe</p>
                </div>
                <p className="font-bold text-[26px] md:text-3xl text-3xl  text-[#00A79D] ">৳ 200 BDT</p>
            </div>
        </div>
    )
}

export default Balance