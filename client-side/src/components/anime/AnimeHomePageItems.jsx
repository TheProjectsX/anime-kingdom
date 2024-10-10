"use client";

import ItemCardGrid from "@/components/anime/ItemCardGrid";
import ItemCardList from "@/components/anime/ItemCardList";
import ItemCardSimple from "@/components/anime/ItemCardSimple";
import Link from "next/link";
import { useEffect, useState } from "react";

import { TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { Helmet } from "react-helmet";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let cachedHomepageData = [
    [
        {
            heading: "Trending Now",
            path: "/search/anime/trending",
            data: Array(6).fill(null),
        },
        {
            heading: "Popular this Season",
            data: Array(6).fill(null),
        },
        {
            heading: "Upcoming",
            data: Array(6).fill(null),
        },
        {
            heading: "Popular TV Series",
            path: "/search/anime/tv-series/popular",
            data: Array(6).fill(null),
        },
        {
            heading: "Popular Movies",
            path: "/search/anime/movies/popular",
            data: Array(6).fill(null),
        },
    ],
    Array(6).fill(null),
];

const AnimeHomePageItems = ({ animeScheduleData: anv = [], home = false }) => {
    const animeScheduleData = [
        {
            id: 50250,
            title: "Chiikawa",
            image: "https://u.livechart.me/anime/10860/poster_image/3cee686848dae173ee32df3e4885c919.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/10860/poster_image/3cee686848dae173ee32df3e4885c919.webp/large.jpg",
            synopsis:
                "What’s a chiikawa? No one’s really sure, but everyone can see they’re small, they’re cute, and they’re always having a fun time!\n[Source: HIDIVE]",
            startDate: null,
            nextEpisode: 1728600000,
            episode: 210,
            studios: ["Doga Kobo"],
            tags: ["Comedy"],
            source: "Digital Manga",
        },
        {
            id: 1960,
            title: "Sore Ike! Anpanman",
            image: "https://u.livechart.me/anime/11428/poster_image/118830ab359a6d600bde01ba6a78c2de.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11428/poster_image/118830ab359a6d600bde01ba6a78c2de.webp/large.jpg",
            synopsis:
                "One night, a Star of Life falls down the chimney of a bakery nestled deep in the forest, causing the dough in the oven to come to life. The dough becomes Anpanman, a superhero made of anpan (a sweet roll with bean jam filling). Together with his friends, Anpanman fights his rival Baikinman and helps the malnourished.\n[Source: Anime News Network]",
            startDate: null,
            nextEpisode: 1728611700,
            episode: 1679,
            studios: ["TMS Entertainment"],
            tags: ["Comedy", "Fantasy"],
            source: "Picture Book",
        },
        {
            id: 42295,
            title: "The Supernatural Sweet Shop",
            image: "https://u.livechart.me/anime/10038/poster_image/9601c3ccced44360788e800e3ede0cf1.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/10038/poster_image/9601c3ccced44360788e800e3ede0cf1.webp/large.jpg",
            synopsis:
                "The novel series' story centers on the mysterious candy and snack shop Zenitendou, which only lucky people can find. The shop's proprietor is a woman named Beniko, and she can recommend the perfect candy for each person's troubles. However, things might not turn out as hoped if people eat or use the confections incorrectly. Whether Beniko's sweets bring fortune or misfortune is up to the people who receive them.\n[Source: Anime News Network]",
            startDate: null,
            nextEpisode: 1728639600,
            episode: 135,
            studios: ["Toei Animation", "Kanaban Graphics"],
            tags: ["Comedy", "Mystery"],
            source: "Children's Book",
        },
        {
            id: 53876,
            title: "Pokémon Horizons: The Series",
            image: "https://u.livechart.me/anime/11732/poster_image/0406f4e410e1a7426aa6d18a12091591.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11732/poster_image/0406f4e410e1a7426aa6d18a12091591.webp/large.jpg",
            synopsis:
                "※ NOTE: Premiered with two episodes back-to-back\nFollow Liko and Roy as they unravel the mysteries that surround them and encounter Friede, Captain Pikachu, Amethio, and others during their exciting adventures!\n[Source: The Official Pokémon YouTube channel]",
            startDate: null,
            nextEpisode: 1728640500,
            episode: 68,
            studios: ["OLM"],
            tags: ["Action", "Adventure", "Comedy", "Fantasy"],
            source: "Game",
        },
        {
            id: 57562,
            title: "Hyakusho Kizoku-the farmer's days 2nd Season",
            image: "https://u.livechart.me/anime/12462/poster_image/b0748e355d35a0cd4aa5f8800982b470.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12462/poster_image/b0748e355d35a0cd4aa5f8800982b470.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: 1728046440,
            nextEpisode: 1728651240,
            episode: 2,
            studios: ["Pie in the sky"],
            tags: ["Autobiographical", "Comedy", "Slice of Life"],
            source: "Manga",
        },
        {
            id: 53802,
            title: "2.5 Dimensional Seduction",
            image: "https://u.livechart.me/anime/11718/poster_image/e6438e7af20446ef709c042978b70fe1.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11718/poster_image/e6438e7af20446ef709c042978b70fe1.webp/large.jpg",
            synopsis:
                "“I have no interest in real girls!” So claims Okumura, the president of the school’s manga club. He’s your typical otaku, obsessed with a sexy (fictional) 2D manga character known as Liliel. Then the new school year starts, and a (real!) 3D girl named Lilysa whose passion is cosplay joins the club. Lilysa convinces Okumura to become her photographer–and guess who her favorite manga character is? Not only that, but Lilysa is into modeling the fetishy stuff! The boundaries between 2D and 3D start to blur as this hot-blooded romantic comedy unfolds.\n[Source: Seven Seas Entertainment]",
            startDate: null,
            nextEpisode: 1728653400,
            episode: 15,
            studios: ["J.C.STAFF"],
            tags: ["Comedy", "Ecchi", "Harem", "Otaku Culture", "School"],
            source: "Manga",
        },
        {
            id: 57360,
            title: "Magilumiere Magical Girls Inc.",
            image: "https://u.livechart.me/anime/12422/poster_image/1d9249bac8345cbab4d4255a76fccef7.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12422/poster_image/1d9249bac8345cbab4d4255a76fccef7.webp/large.jpg",
            synopsis:
                "There’s never a dull day at the office when you’re a magical girl!\nAre you looking for something new? Something challenging? Something very highly paid? Exterminating monsters is an exciting, fast-paced field that will get you out from behind a desk and into the action. With over 500 magical girl companies now in operation, you’re sure to find a position—and a uniform—that fits. Start your career as a magical girl today!\nKana Sakuragi is an excellent candidate for the job. Any job! She’s motivated and organized, and has a fantastic memory. So why has she interviewed at over 15 companies without receiving a single offer? She’s trying to keep a positive attitude, but it seems like her bad luck is only getting worse when a monster crashes her latest interview. As havoc ensues, she finds herself helping the magical girl who comes to their rescue and ends up with more than just her life in return. Meet the newest magical girl at Magilumiere Magical Girls Inc.!\n[Source: VIZ]",
            startDate: 1728050700,
            nextEpisode: 1728655200,
            episode: 2,
            studios: ["MOE", "J.C.STAFF"],
            tags: [
                "Action",
                "Adult Cast",
                "Comedy",
                "Fantasy",
                "Mahou Shoujo",
                "Workplace",
            ],
            source: "Manga",
        },
        {
            id: 56894,
            title: "Dragon Ball DAIMA",
            image: "https://u.livechart.me/anime/12371/poster_image/be5f825b836e01297b6e1ccfd2fc3294.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12371/poster_image/be5f825b836e01297b6e1ccfd2fc3294.webp/large.jpg",
            synopsis:
                "Due to a conspiracy, Goku and his friends are turned small.\nIn order to fix things, they'll head off to a new world!\nIt's a grand adventure with intense action in an unknown and mysterious world.\nSince Goku has to make up for his petite size, he uses his Nyoibo (Power Pole) to right, something not seen in a long time.\n[Source: comment from Akira Toriyama]",
            startDate: 1728657600,
            nextEpisode: 1728657600,
            episode: 1,
            studios: ["Studio TBA"],
            tags: [
                "Action",
                "Adventure",
                "Comedy",
                "Martial Arts",
                "Super Power",
            ],
            source: "Manga",
        },
        {
            id: 55994,
            title: "Sword Art Online Alternative: Gun Gale Online II",
            image: "https://u.livechart.me/anime/12265/poster_image/20398d50e2d9afcbac06fd43276d450a.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12265/poster_image/20398d50e2d9afcbac06fd43276d450a.webp/large.jpg",
            synopsis:
                "LLENN, M, Fukaziroh, and Pitohui form the strongest team, LPFM for short, and enter a new battle royale death match tournament that was annouced out of the blue.\nLPFM is eyed as the top favorite candidate team to win, but the team will have to endure several rigorous ordeals to get there: a playing field that sinks into the ocean with the passage of time, an unknown area hidden in the middle of the map, and an anonymous team conspiracy.\nIn addition to all of this, all players will have to follow some shocking special rules if they want to play the game and win…\n[Source: Aniplex USA]",
            startDate: 1728054000,
            nextEpisode: 1728658800,
            episode: 2,
            studios: ["A-1 Pictures"],
            tags: ["Action", "Fantasy", "Military", "Sci-Fi", "Video Game"],
            source: "Light Novel",
        },
        {
            id: 58302,
            title: "THE iDOLM@STER SHINY COLORS 2nd season",
            image: "https://u.livechart.me/anime/12547/poster_image/c4b7c7e2fa1f7f216aca96cf0b634676.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12547/poster_image/c4b7c7e2fa1f7f216aca96cf0b634676.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: 1728058980,
            nextEpisode: 1728663780,
            episode: 2,
            studios: ["Polygon Pictures"],
            tags: ["Idols (Female)", "Music"],
            source: "Game",
        },
        {
            id: 58173,
            title: "The Stories of Girls Who Couldn't Be Magicians",
            image: "https://u.livechart.me/anime/3832/poster_image/c0611a095d2f27a54a95b1fca2e6e49e.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/3832/poster_image/c0611a095d2f27a54a95b1fca2e6e49e.webp/large.jpg",
            synopsis:
                "At Letran Magic Academy, two unlikely friends share one dream: to become magicians. Kurumi is an average girl who’s a bit naive, while Yuzu is the distinguished daughter of a noble magician family. They need to get into a special magician training class, but they fail the entrance exam! All hope seems lost until mysterious homeroom teacher Minami Suzuki arrives, and their luck takes a sudden turn.\n[Source: Crunchyroll]",
            startDate: 1728060780,
            nextEpisode: 1728665580,
            episode: 2,
            studios: ["J.C.STAFF"],
            tags: ["Drama", "Fantasy", "School"],
            source: "Novel",
        },
        {
            id: 59505,
            title: "Lockdown Zone: Level X",
            image: "https://u.livechart.me/anime/12792/poster_image/974480173ded8bd6dc5c046e8419f106.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12792/poster_image/974480173ded8bd6dc5c046e8419f106.webp/large.jpg",
            synopsis:
                "Ryoka is awakened by flurry of text messages from her mother! Panicked and rushed, Mom is clearly concerned for Ryoka's safety, but she is not too keen on letting her daughter know why. Her reasoning being that nothing could really properly describe what is happening!\nThe world might be ending! And there might be a massive new life-form on the roof of their apartment building!\n[Source: Denpa]",
            startDate: 1725641760,
            nextEpisode: 1728667380,
            episode: 6,
            studios: ["IMAGICA Infos", "Imageworks Studio"],
            tags: ["Horror", "Mystery"],
            source: "Digital Manga",
        },
        {
            id: 57796,
            title: "Tohai - Ura Rate Mahjong Tohai Roku",
            image: "https://u.livechart.me/anime/11378/poster_image/9755dc4bc9fb2ef3f8445cb2aaa0da99.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11378/poster_image/9755dc4bc9fb2ef3f8445cb2aaa0da99.webp/large.jpg",
            synopsis:
                "Money, women, organs. Kei, a high school boy, frequents the underground mahjong parlor teeming with desires, earning him the moniker 'K of Ice' in the underworld due to his cold-hearted strategy and stylish gameplay. Rumors also circulate that he keeps a girl at his home.\n[Source: Press Release]",
            startDate: 1728062580,
            nextEpisode: 1728667380,
            episode: 2,
            studios: ["EAST FISH STUDIO"],
            tags: ["Strategy Game"],
            source: "Manga",
        },
    ];
    const router = useRouter();
    const [layout, setLayout] = useState("card");
    const [homepageData, setHomepageData] = useState(cachedHomepageData.at(0));
    const [topAnimeData, setTopAnimeData] = useState(cachedHomepageData.at(1));

    useEffect(() => {
        if (homepageData[0].data[0] === null) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/anime/home?limit=6`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setHomepageData(data.data ?? []);
                        cachedHomepageData[0] = data.data ?? [];
                    }
                });
        }

        if (topAnimeData[0] === null) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top/anime?limit=10`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setTopAnimeData(data.data ?? []);
                        cachedHomepageData[1] = data.data ?? [];
                    }
                });
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>
                    {home
                        ? "Get Anime, Manga insights! - AniDom"
                        : "Search for Anime! - AniDom"}
                </title>
            </Helmet>

            {/* Homepage Banner Carousel */}
            {/* <Carousel dynamicHeight infiniteLoop className="h-96">
                {animeScheduleData.map((item) => (
                    <div key={item.id} className="bg-slate-700 text-white">
                        <div className="max-w-2xl mx-auto flex justify-between">
                            <div className="p-6 max-w-80 text-left">
                                <h3 className="text-3xl font-semibold font-suse mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {item.source} -{" "}
                                    {item.tags.slice(0, 3).join(", ")}
                                </p>
                                <p>{item.synopsis}</p>
                            </div>
                            <div className="max-w-60 pt-10">
                                <div>
                                    {new Date(item.nextEpisode).toTimeString()}
                                </div>
                                <img
                                    src={item.image_large ?? item.image}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel> */}

            {/* Layout Options */}
            <div className="flex justify-between items-end gap-2 pr-5">
                <label className="flex flex-col gap-1 w-auto">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Search:
                    </span>
                    <TextInput
                        type="text"
                        name="query"
                        icon={IoSearch}
                        placeholder="Type name and press Enter..."
                        title="Search anime by name"
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value !== "") {
                                router.push(
                                    `/search/anime?query=${e.target.value}`
                                );
                            }
                        }}
                    />
                </label>

                <div className="flex gap-2">
                    <button
                        className={`bg-transparent border-none outline-none text-gray-500 hover:text-gray-600 transition-colors ${
                            layout === "card" ? "text-gray-600" : ""
                        }`}
                        onClick={() => setLayout("card")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            viewBox="0 0 17 17"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                        >
                            <path d="M0 0h5v5h-5v-5zM6 5h5v-5h-5v5zM12 0v5h5v-5h-5zM0 11h5v-5h-5v5zM6 11h5v-5h-5v5zM12 11h5v-5h-5v5zM0 17h5v-5h-5v5zM6 17h5v-5h-5v5zM12 17h5v-5h-5v5z" />
                        </svg>
                    </button>

                    <button
                        className={`bg-transparent border-none outline-none text-gray-500 hover:text-gray-600 transition-colors ${
                            layout === "grid" ? "text-gray-600" : ""
                        }`}
                        onClick={() => setLayout("grid")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="3 3 18 18"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                        >
                            <path d="M11,11H3V4A1,1,0,0,1,4,3h7ZM21,4a1,1,0,0,0-1-1H13v8h8ZM4,21h7V13H3v7A1,1,0,0,0,4,21Zm17-1V13H13v8h7A1,1,0,0,0,21,20Z" />
                        </svg>
                    </button>

                    <button
                        className={`bg-transparent border-none outline-none text-gray-500 hover:text-gray-600 transition-colors ${
                            layout === "list" ? "text-gray-600" : ""
                        }`}
                        onClick={() => setLayout("list")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="8 8 16 16"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                        >
                            <path d="M8 12h4v-4h-4v4zM8 18h4v-4h-4v4zM8 24h4v-4h-4v4zM14 8v4h10v-4h-10zM14 18h10v-4h-10v4zM14 24h10v-4h-10v4z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Card View */}
            {layout === "card" && (
                <>
                    {homepageData.map((item, idx) => (
                        <section key={idx}>
                            <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                                <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                    {item.heading}
                                </h2>
                                <Link
                                    href={item.path ?? "#"}
                                    className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    Explore More
                                </Link>
                            </div>
                            <div className="lg:pl-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-center md:[&_article:last-child]:hidden lg:[&_article:last-child]:block">
                                {item.data.map((item, idx) => (
                                    <ItemCardSimple
                                        animeData={item}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                    <section>
                        <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                            <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                Top #10 Anime
                            </h2>
                            <Link
                                href={"/search/anime/top"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="lg:pl-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-evenly flex-wrap">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardSimple
                                    animeData={item}
                                    key={idx}
                                    rank={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* Grid View */}
            {layout === "grid" && (
                <>
                    {homepageData.map((item, idx) => (
                        <section key={idx}>
                            <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                                <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                    {item.heading}
                                </h2>
                                <Link
                                    href={item.path ?? "#"}
                                    className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    Explore More
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {item.data.map((item, idx) => (
                                    <ItemCardGrid animeData={item} key={idx} />
                                ))}
                            </div>
                        </section>
                    ))}
                    <section>
                        <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                            <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                Top #10 Anime
                            </h2>
                            <Link
                                href={"/search/anime/top"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardGrid
                                    animeData={item}
                                    key={idx}
                                    rank={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* List View */}
            {layout === "list" && (
                <>
                    {homepageData.map((item, idx) => (
                        <section key={idx}>
                            <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                                <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                    {item.heading}
                                </h2>
                                <Link
                                    href={item.path ?? "#"}
                                    className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    Explore More
                                </Link>
                            </div>
                            <div className="space-y-5">
                                {item.data.map((item, idx) => (
                                    <ItemCardList animeData={item} key={idx} />
                                ))}
                            </div>
                        </section>
                    ))}

                    <section>
                        <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                            <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                Top #10 Anime
                            </h2>
                            <Link
                                href={"/search/anime/top"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="space-y-5">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardList
                                    animeData={item}
                                    key={idx}
                                    rank={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AnimeHomePageItems;
