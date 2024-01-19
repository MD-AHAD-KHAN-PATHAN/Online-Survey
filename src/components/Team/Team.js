import Image from 'next/image';
import man from '../../Asset/man1.png'
const React = require('react');
import { FaFacebookF } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
    return (
        <div className='p-10'>
            <h1 className='font-semibold text-2xl py-2'>Meet the team</h1>
            <p className='text-xl font-normal py-2'>In publishing and graphic design, <br /> Lorem ipsum is a placeholder text commonly used to de</p>
            <div className="grid grid-cols-4 pt-4">
                <div>
                    <Image alt="" className='rounded-md' src={man} width={220} height={52}></Image>
                    <h1 className='font-semibold text-xl'>Name : Rock </h1>
                    <p className='text-lg font-medium text-cyan-400'>Project Manager</p>
                    <div className='flex gap-2 text-center'>
                        <p><FaFacebookF></FaFacebookF></p>
                        <p><CiTwitter></CiTwitter></p>
                        <p><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
                <div>
                    <Image alt="" className='rounded-md' src={man} width={220} height={52}></Image>
                    <h1 className='font-semibold text-xl'>Name : Rock </h1>
                    <p className='text-lg font-medium text-cyan-400'>Project Manager</p>
                    <div className='flex gap-2 text-center'>
                        <p><FaFacebookF></FaFacebookF></p>
                        <p><CiTwitter></CiTwitter></p>
                        <p><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
                <div>
                    <Image alt="" className='rounded-md' src={man} width={220} height={52}></Image>
                    <h1 className='font-semibold text-xl'>Name : Rock </h1>
                    <p className='text-lg font-medium text-cyan-400'>Project Manager</p>
                    <div className='flex gap-2' >
                        <p><FaFacebookF></FaFacebookF></p>
                        <p><CiTwitter></CiTwitter></p>
                        <p><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
                <div>
                    <Image alt="" className='rounded-md' src={man} width={220} height={52}></Image>
                    <h1 className='font-semibold text-xl'>Name : Rock </h1>
                    <p className='text-lg font-medium text-cyan-400'>Project Manager</p>
                    <div className='flex gap-2 text-center'>
                        <p><FaFacebookF></FaFacebookF></p>
                        <p><CiTwitter></CiTwitter></p>
                        <p><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;