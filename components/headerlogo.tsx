import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex" >
                <Image src="/logo.svg" alt="Logo" width={50} height={50} 
                style={{ fontWeight: 'bolder' }} 
                />
                <p className="font-semibold text-[#ffffff] ml-2.5  text-3xl" >
                    M-Finance
                </p>

            </div>
        </Link>
    );
}
