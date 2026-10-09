import Image from 'next/image';
import HeroImage from "@/assets/bazar-hero.png"
import Link from 'next/link';


const HeroSection = () => {

    const date = new Date().toLocaleDateString("bn-bd", {
        dateStyle: "full",
    })

    return (
        <div className="grid grid-cols-3 gap-5 bg-white border border-gray-200 rounded-2xl p-10 items-center">
            <div className="col-span-2">
                <span className="bg-[#e2f1e7] text-[#05893E] text-sm font-semibold rounded-full py-2 px-5">{date}</span>
                <h1 className="text-[#1D271F] font-bold text-2xl md:text-4xl py-4">আজকের বাজারের দাম এক নজরে</h1>
                <p className="text-[#1D271F] pb-5">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <Link href="/#allproduct"><button className="btn bg-[#05893e] rounded-xl text-white font-semibold text-lg py-7 px-5">সব পণ্য দেখুন</button></Link>
            </div>
            <div className="col-span-1 justify-center">
                <Image src={HeroImage} className="mx-auto" alt="image" width={300} height={300} />
            </div>
        </div>
    );
};

export default HeroSection;