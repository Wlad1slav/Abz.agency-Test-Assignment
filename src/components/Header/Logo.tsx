import Image from "@/components/General/Image/Image";
import Link from "next/link";

function Logo() {
    return (
        <Link href='/' style={{height: "26px"}}>
            <Image type="thumbnail" width="104px" height="26" src="/logo.svg" alt="logo" />
        </Link>
    )
}

export default Logo;