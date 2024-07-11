import HeadSection from "@/components/Sections/HeadSection/HeadSection";
import GetRequestSection from "@/components/Sections/GetRequestSection/GetRequestSection";
import PostRequestSection from "@/components/Sections/PostRequestSection/PostRequestSection";

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