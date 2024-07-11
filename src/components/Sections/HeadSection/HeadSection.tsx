import Font from "@/components/General/Typography/Font/Font";
import Heading from "@/components/General/Typography/Heading/Heading";
import Text from "@/components/General/Typography/Text/Text";
import Button from "@/components/Form/Button/Button";
import Image from "@/components/General/Image/Image";
import './HeadSection.scss';

function HeadSection() {
    return (
        <Image
            type="background"
            src="https://s3-alpha-sig.figma.com/img/4d58/d7f0/5205809f3a89f4261f915140e97786b8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0MvJdq10Gb3iuoY97uu7fof7pWJ3JKBlyfw3Znc~~ONXCXhUPoZ383sdhls31Oaynn8~aCEIXxX7dCB2Bkr0BPAfv6g8inJEQg6IDo3ztKnjIzKKqj-YOjlwOINqv7ics~Lymi-24MybUjBWGFzFcKj3pQFFpF6BG9EnLvCE1OpDTFWNee-kr9l3OF3YT28d22dWwq6F9TEbELlAARxG7A42r-PLM7UYWQE5nBBFHSr9OSG97x693aUF7X3MXVsBUwp2gT-sd~eg61oyqHSPlMOI-PNQoJ6ZvWcmlRAMQhjJd8j2X4zlhOj3znZVUex8d8fJCbpPA8TBOhm69QB-w__"
            alt=""
            className="head-section"
        >

            <Font>
                <div className="centered">
                    <div className="desc">
                        <Heading option="h1">Test assignment for front-end developer</Heading>
                        <Text>
                            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                        </Text>
                    </div>
                    <Button href="#post">Sign up</Button>
                </div>
            </Font>
        </Image>
    );
}

export default HeadSection;