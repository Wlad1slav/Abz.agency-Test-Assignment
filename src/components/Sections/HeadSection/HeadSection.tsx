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
            src="/page-head-section.webp"
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