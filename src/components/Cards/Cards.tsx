import {CardProps, CardsProps} from "@/types/props";
import Image from "@/components/General/Image/Image";
import Text from "@/components/General/Typography/Text/Text";
import './Cards.scss';

function Card({title, content, imgUrl}: CardProps) {
    return (
        <div className="card">
            <Image
                type="thumbnail"
                width="70px"
                height="70px"
                src={imgUrl}
                alt={title}
            />
            <Text type="ellipsis">{title}</Text>
            <div className="content">
                { content.map(row => <Text type="ellipsis">{row}</Text>) }
            </div>
        </div>
    )
}

function Cards({cards}: CardsProps) {
    return (
        <div className="cards">
            { cards.map(card => <Card {...card} />) }
        </div>
    )
}

export default Cards;