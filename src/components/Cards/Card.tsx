import {UserModel} from "@/types/props";
import Image from "@/components/General/Image/Image";
import Text from "@/components/General/Typography/Text/Text";
import Tooltip from "@/components/General/Tooltip/Tooltip";
import Link from "next/link";

function Card({name, photo, position, phone, email}: UserModel) {
    return (
        <div className="card">
            <Image
                type="thumbnail"
                width="70px"
                height="70px"
                src={photo}
                alt={name}
            />
            <div className="bio">
                <Text type="ellipsis">{name}</Text>
                <div className="contact">
                    <Text type="ellipsis">{position}</Text>
                    <Tooltip text={email}>
                        <Text type="ellipsis">
                            <Link href={`mailto:${email}`}>
                                {email}
                            </Link>
                        </Text>
                    </Tooltip>
                    <Text type="ellipsis">{phone}</Text>
                </div>
            </div>
        </div>
    )
}
export default Card;