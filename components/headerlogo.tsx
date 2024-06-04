import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex" style={{ marginLeft: '-5vh' }}>
                <Image src="/logo.svg" alt="Logo" width={28} height={28} />
                <p className="font-semibold text-white ml-2.5" style={{ fontSize: '2rem',fontFamily:"monospace" }}>
                    M-Fund
                </p>

            </div>
        </Link>
    );
}
