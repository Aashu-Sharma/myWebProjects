import React, {useRef} from "react";
import PopularAnimes from "./InsideHomepage/PopularAnimes"
import TopAiring from "./InsideHomepage/TopAiring";
import TopUpcoming from "./InsideHomepage/TopUpcoming";

function HomePage() {
    const popularAnimesRef = useRef();
    const topAiringRef = useRef();
    const topUpcomingRef = useRef();

    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: -1180, // Adjust the scroll width to match the width of 5 cards
                behavior: "smooth", // Enables smooth scrolling
            }); // Adjust the scroll amount
        }
    };

    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: 1180, // Adjust the scroll width to match the width of 5 cards
                behavior: "smooth",
            }); // Adjust the scroll amount
        }
    };
    
    return (
        <div className="space-y-16">
            {/* Popular Animes Section */}
            <section id = "popular" className="scroll-smooth bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 p-6 rounded-xl shadow-xl">
                <PopularAnimes
                    scRef={popularAnimesRef}
                    scRight={() => scrollRight(popularAnimesRef)}
                    scLeft={() => scrollLeft(popularAnimesRef)}
                />
            </section>

            {/* Top Airing Section */}
            <section id="airing" className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 p-6 rounded-xl shadow-xl">
                <TopAiring
                    scRef={topAiringRef}
                    scRight={() => scrollRight(topAiringRef)}
                    scLeft={() => scrollLeft(topAiringRef)}
                />
            </section>
            {/*Top Upcoming Animes*/}
            <section id="upcoming" className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 p-6 rounded-xl shadow-xl">
                <TopUpcoming
                    scRef={topUpcomingRef}
                    scRight={() => scrollRight(topUpcomingRef)}
                    scLeft={() => scrollLeft(topUpcomingRef)}
                />
            </section>
        </div>
    );
}

export default HomePage;
