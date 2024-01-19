import Image from 'next/image';


const Team = () => {
    return (
        <div>
            <h1>Meet the team</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de</p>
            <div className="grid grid-cols-4">
                <div className='border'>
                    <Image alt="" src={''} width={10} height={10}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
                <div className='border'>
                    <Image alt="" src={''} width={10} height={10}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
                <div className='border'>
                    <Image alt="" src={''} width={10} height={10}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
                <div className='border'>
                    <Image alt="" src={''} width={10} height={10}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
            </div>
        </div>
    );
};

export default Team;