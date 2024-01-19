import Image from "next/image";
import Link from "next/link";


const Banner = () => {
    const image1 = 'https://i.ibb.co/ts6HdqY/Banner1.jpg';
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <Image alt="" src={image1} className="w-full " width={10} height={10} />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className="text-6xl font-bold">Unlock Insights with our Surveys</h2>
                        <p>Make a Difference - Share Your Thoughts and Shape the Future!</p>
                        <div>
                            <Link href="/about"><button className="btn btn-primary mr-5">Create Sruvey</button> </Link>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>



        </div>
    );
};

export default Banner;