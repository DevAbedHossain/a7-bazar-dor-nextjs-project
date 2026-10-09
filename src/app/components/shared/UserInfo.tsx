"use client"

import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { toast } from 'react-toastify';


const UserInfo = () => {

    const { data: session } = useSession();

    const hangleSignOut = () => {
        signOut();
        toast.success("সফলভাবে সাইন আউট হয়েছে।")
    }

    return (
        <div>
            {
                session?.user ? <>
                    <span className="pr-2">{session?.user.name}</span>
                    <button onClick={hangleSignOut} className="btn bg-red-500 hover:bg-red-600 text-white rounded-lg text-[16px] font-medium">↩︎ সাইন আউট</button>
                </> : <>
                    <Link href="/signin"><button className="rounded-lg text-[16px] font-medium bg-transparent btn border-transparent hover:border hover:bg-gray-200">সাইন ইন</button></Link>
                    <Link href="/signup"><button className="btn bg-[#05893e] hover:bg-[#046d32] text-white rounded-lg text-[16px] font-medium">সাইন আপ</button></Link>
                </>
            }
        </div>
    );
};

export default UserInfo;