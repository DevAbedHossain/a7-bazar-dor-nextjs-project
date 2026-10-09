import Image from 'next/image';
import Logo from '@/assets/logo-icon.png';
import Navitems from './Navitems';
import Marquee from './Marquee';
import Link from 'next/link';
import UserInfo from './UserInfo';


const Navbar = () => {

    const date = new Date().toLocaleDateString("bn-bd", {
        dateStyle: "full",
    })

    return (
        <div>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Item */}
                <Link href="/">
                    <div className="flex gap-3 items-center">
                        <div className="bg-[#05893e] rounded p-2 my-3"><Image src={Logo} width={50} height={50} alt="বাজার দর" className="w-7.5 object-contain" /></div>
                        <div className="">
                            <p className="text-[#1D271F] text-xl font-bold">বাজার দর</p>
                            <p className="text-[12px]">{date}</p>
                        </div>
                    </div>
                </Link>

                {/* Right Item */}
                <div className="flex gap-3">
                    <UserInfo />
                </div>
            </div>

            <Navitems />
            <Marquee />

        </div>
    );
};

export default Navbar;