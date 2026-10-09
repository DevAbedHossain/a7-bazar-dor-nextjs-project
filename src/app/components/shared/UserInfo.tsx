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
                    <div className="flex gap-2 items-center">
                        <Link className="flex gap-2 items-center" href="/profile">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                                    <img alt="Tailwind-CSS-Avatar-component" src={session?.user.image ?? undefined} />
                                </div>
                            </div>
                            <span className="pr-2">{session?.user.name}</span>
                        </Link>
                        <button onClick={hangleSignOut} className="btn bg-red-500 hover:bg-red-600 text-white rounded-lg text-[16px] font-medium">↩︎ সাইন আউট</button>
                    </div>
                </> : <>
                    <Link href="/signin"><button className="rounded-lg text-[16px] font-medium bg-transparent btn border-transparent hover:border hover:bg-gray-200">সাইন ইন</button></Link>
                    <Link href="/signup"><button className="btn bg-[#05893e] hover:bg-[#046d32] text-white rounded-lg text-[16px] font-medium">সাইন আপ</button></Link>
                </>
            }
        </div>
    );
};

export default UserInfo;