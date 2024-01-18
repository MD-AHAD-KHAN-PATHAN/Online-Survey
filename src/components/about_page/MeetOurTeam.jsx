"use client"

import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

// Team members data
const TeamMemData = [
    {
        "name": "Alexandra Chen",
        "title": "Chief Technology Officer (CTO)",
        "img": "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
    },
    {
        "name": "David Reynolds",
        "title": "Lead Software Engineer",
        "img": "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
    },
    {
        "name": "Megan Taylor",
        "title": "UX/UI Design Specialist",
        "img": "https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg"
    },
    {
        "name": "Raj Patel",
        "title": "Data Science Architect",
        "img": "https://img.freepik.com/free-photo/elegant-businessman-office_155003-9641.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais"
    }
];

// Single Member card component
const MemberCard = ({ name, title, img }) => {
    return (
        <div>
            {/* image */}
            <div>
                <img className="h-52 rounded-lg" src={img} alt="" />

            </div>
            {/* details */}
            <div>
                <p className="mt-2">{name}</p>
                <p className="mt-1 text-blue-900 text-sm">{title}</p>
                {/* icons */}
                <div className="flex items-center gap-3 mt-3">
                    <Link href='www.google.com' target="_blank">
                        <FaFacebookF className="text-gray-500" />
                    </Link>
                    <Link href='www.google.com' target="_blank">
                        <CiTwitter className="text-gray-500 text-xl font-semibold" />
                    </Link>
                    <Link href='www.google.com' target="_blank">
                    <FaLinkedinIn className="text-lg text-gray-500" />
                    </Link>
                </div>
            </div>
        </div>
    )
};

// Main Meet our team component
const MeetOurTeam = () => {
    return (
        // add margin top or bottom 
        <div className="w-11/12 mx-auto my-5">
            <div>
                <h1 className="text-3xl mb-3  font-semibold">Meet the team</h1>
                <p className="text-gray-600">Elevate Possibilities, Engineer the Future: webD - Transforming Today <br />for a  Tech-Driven Tomorrow.</p>
                {/* cards */}
                <div className="grid mt-5 md:mt-9 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {TeamMemData.map(item => <MemberCard name={item.name} title={item.title} img={item.img} />)}
                </div>
            </div>

        </div>
    );
};

export default MeetOurTeam;