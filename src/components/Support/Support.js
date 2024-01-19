import Image from "next/image";


const Support = () => {
    return (
        <div className="border p-5 m-10  rounded  bg-zinc-400">
            <h1 className="text-center font-semibold text-3xl pb-5  ">Support</h1>
            <div className="grid grid-cols-3 h-52  border-8 rounded-md">
                <div className="flex flex-col justify-center items-center bg-white border-r-2 " >
                    <h1>Contact Us</h1>
                    <p>Response my take up to 24 hours</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-white border-r-2 " >
                    <h1>Call  Us</h1>
                    <p>5PM - 8PM . Monday to Friday</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-white " >
                    <h1>Live Chat</h1>
                    <p>5PM - 8PM . Monday to Friday</p>
                </div>
            </div>
        </div>
    );
};

export default Support;