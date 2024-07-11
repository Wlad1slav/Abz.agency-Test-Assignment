import HeadSection from "@/components/Sections/HeadSection/HeadSection";
import GetRequestSection from "@/components/Sections/GetRequestSection/GetRequestSection";
import PostRequestSection from "@/components/Sections/PostRequestSection/PostRequestSection";

export async function generateMetadata() {
    const title = 'Abz.agency Test Assigment';
    const metaDesc = 'Test assigment for the agency Abz, which was performed by Vladyslav Fokin.'

    return {
        metadataBase: new URL('https://test-assignment-abz.netlify.app'),
        title: title,
        description: metaDesc,
        openGraph: {
            title: title,
            description: metaDesc,
            images: '/page-head-section.webp',
        },
    };
}

export default function HomePage() {
    return (
        <main>
            <HeadSection />
            <div className="get-request-section" id="get">
                <GetRequestSection />
            </div>
            <div className="post-request-section" id="post">
                <PostRequestSection />
            </div>
        </main>
    );
}