"use client";

import ItemCardGrid from "@/components/anime/ItemCardGrid";
import ItemCardList from "@/components/anime/ItemCardList";
// import ItemCardSimple from "@/components/anime/ItemCardSimpleBak";
import Link from "next/link";
import { useEffect, useState } from "react";

import { TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { Helmet } from "react-helmet";
import {
    getCurrentAnimeSeason,
    getNextAnimeSeason,
} from "@/utils/HelperFunctions";

import { loadServerData } from "@/utils/DataLoader";
import AnimeScheduleCarousel from "./AnimeScheduleCarousel";
import ItemCardSimple from "./ItemCardSimple";

let cachedHomepageData = [
    [
        {
            heading: "Trending Now",
            path: "/search/anime/trending",
            data: Array(6).fill(null),
        },
        {
            heading: "Popular this Season",
            path: `/search/anime/seasons/${getCurrentAnimeSeason(
                "{year}/{season}"
            )}`,
            data: Array(6).fill(null),
        },
        {
            heading: "Upcoming",
            path: `/search/anime/seasons/${getNextAnimeSeason(
                "{year}/{season}"
            )}`,
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

const AnimeHomePageItems = ({ home = false }) => {
    const router = useRouter();
    const [layout, setLayout] = useState("card");
    const [homepageData, setHomepageData] = useState(cachedHomepageData.at(0));
    const [topAnimeData, setTopAnimeData] = useState(cachedHomepageData.at(1));

    useEffect(() => {
        if (homepageData[0].data[0] === null) {
            loadServerData(`/anime/home`, { limit: 6 }).then((data) => {
                if (data.success) {
                    setHomepageData(data.data ?? []);
                    cachedHomepageData[0] = data.data ?? [];
                }
            });
        }

        if (topAnimeData[0] === null) {
            loadServerData(`/top/anime`, { limit: 10 }).then((data) => {
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
            {home && <AnimeScheduleCarousel />}

            {!home && (
                <h4 className="font-bold font-suse text-xl sm:text-2xl md:text-3xl text-gray-500">
                    Search for Anime
                </h4>
            )}

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

            {/* Upper Contents */}
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

                    {layout === "card" && (
                        <div className="lg:pl-3 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-5 justify-center sm:[&_article:last-child]:hidden lg:[&_article:last-child]:block">
                            {item.data.map((item, idx) => (
                                <ItemCardSimple animeData={item} key={idx} />
                            ))}
                        </div>
                    )}

                    {layout === "grid" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {item.data.map((item, idx) => (
                                <ItemCardGrid animeData={item} key={idx} />
                            ))}
                        </div>
                    )}

                    {layout === "list" && (
                        <div className="space-y-5">
                            {item.data.map((item, idx) => (
                                <ItemCardList animeData={item} key={idx} />
                            ))}
                        </div>
                    )}
                </section>
            ))}

            {/* Top Anime */}
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

                {layout === "card" && (
                    <div className="lg:pl-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-evenly flex-wrap">
                        {topAnimeData.map((item, idx) => (
                            <ItemCardSimple
                                animeData={item}
                                key={idx}
                                rank={idx + 1}
                            />
                        ))}
                    </div>
                )}

                {layout === "grid" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {topAnimeData.map((item, idx) => (
                            <ItemCardGrid
                                animeData={item}
                                key={idx}
                                rank={idx + 1}
                            />
                        ))}
                    </div>
                )}

                {layout === "list" && (
                    <div className="space-y-5">
                        {topAnimeData.map((item, idx) => (
                            <ItemCardList
                                animeData={item}
                                key={idx}
                                rank={idx + 1}
                            />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default AnimeHomePageItems;
