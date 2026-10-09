"use client"

import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';


const UserInfo = () => {

    const { data: session } = useSession();

    const hangleSignOut = () => {
        signOut();
        redirect("/")
        toast.success("সফলভাবে সাইন আউট হয়েছে।")
    }

    return (
        <div>
            {
                session?.user ? <>
                    <div className="dropdown dropdown-end">
                        <div className="flex gap-3 items-center cursor-pointer" tabIndex={0} role="button">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                                    <img alt="Tailwind-CSS-Avatar-component" src={session?.user.image ?? undefined} />
                                </div>
                            </div>
                            <span className="pr-2">{session?.user.name} ⏷</span>
                        </div>

                        <div tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box border border-gray-200 z-50 w-80 mt-4 p-5 shadow-sm">
                            <div className="flex flex-col">
                                <span className="pr-2">{session?.user.name}</span>
                                <span className="pr-2">{session?.user.email}</span>
                                <Link className="flex items-center hover:bg-gray-200 p-3 my-4 rounded-2xl" href="/profile">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                                            <img alt="Tailwind-CSS-Avatar-component" src={session?.user.image ?? undefined} />
                                        </div>
                                    </div>
                                    <span className="pl-4 text-lg ">{session?.user.name}</span>
                                </Link>
                                <button onClick={hangleSignOut} className="btn bg-red-500 hover:bg-red-600 text-white rounded-lg text-[16px] font-medium">↩︎ সাইন আউট</button>
                            </div>
                        </div>
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