"use client";

import FilterOptions from "@/components/FilterOptions";
import ItemCardSimple from "@/components/ItemCardSimple";
import { useEffect, useState } from "react";
import { loadAnimeData } from "@/utils/DataLoader";
import ItemCardList from "@/components/ItemCardList";
import ItemCardGrid from "@/components/ItemCardGrid";

import InfiniteScroll from "react-infinite-scroller";

const AnimePage = ({ path, slug, filters }) => {
    const [layout, setLayout] = useState("card");
    const [hasMoreData, setHasMoreData] = useState(true);

    const limit = 20;
    let apiSearchParams = {
        query: "",
        genres: "",
        type: "",
        status: "",
        rating: "",
        page: 1,
        limit: limit,
        order_by: "",
        start_date: "",
        end_date: "",
    };

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    const individualPathData = {
        "anime/trending": {
            tread: "filter-anime",
            title: "Trending Anime",
            payload: {
                order_by: "popularity",
                status: "airing",
            },
        },
        "anime/tv-series/popular": {
            tread: "filter-anime",
            title: "Popular TV Series",
            payload: { order_by: "popularity", type: "tv" },
        },
        "anime/movies/popular": {
            tread: "filter-anime",
            title: "Popular Movies",
            payload: { order_by: "popularity", type: "movie" },
        },
        "anime/seasons": {
            tread: "seasonal-anime",
            title: `${
                slug.slice(2)[0] !== "now"
                    ? `${slug
                          .slice(2)
                          .reverse()
                          .map((word) => capitalizeWord(word))
                          .join(" ")} Anime`
                    : "Anime this Season"
            }`,
            payload: {},
            extraPath: slug.slice(2).join("/"),
        },
        "anime/top": {
            tread: "top-anime",
            title: "Top Anime",
            payload: {},
        },
    };

    if (path.startsWith("anime/seasons")) {
        path = "anime/seasons";
    }

    const [animeData, setAnimeData] = useState(Array(limit).fill(null));
    apiSearchParams = {
        ...apiSearchParams,
        ...individualPathData[path]["payload"],
    };

    // Function to Fetch data from server and save in state
    const fetchData = async () => {
        const response = await loadAnimeData(
            individualPathData[path]["tread"],
            path.startsWith("anime/seasons")
                ? { filter: apiSearchParams["type"] ?? "" }
                : apiSearchParams,
            individualPathData[path]["extraPath"] ?? ""
        );
        if (response.success) {
            setAnimeData(response.data ?? []);
        }
        if (!response.pagination?.has_next_page) {
            setHasMoreData(false);
        }
    };

    const updateDataOnChange = (updatedQuery) => {
        if (Object.values(updatedQuery).every((value) => value === "")) {
            updatedQuery = individualPathData[path]["payload"];
        } else if (updatedQuery.query !== "") {
            updatedQuery["order_by"] = "";
        }
        apiSearchParams = { ...apiSearchParams, ...updatedQuery };

        if (path.startsWith("anime/seasons")) {
            const seasonPath = `${updatedQuery.year}/${updatedQuery.season}`;
            individualPathData["anime/seasons"]["extraPath"] = seasonPath;
            fetchData();
        } else {
            fetchData();
        }
    };

    const loadMoreData = async (page) => {
        setHasMoreData(false);
        apiSearchParams["page"] = page;
        console.log(apiSearchParams["page"]);
        setAnimeData([...animeData, ...Array(6).fill(null)]);

        const response = await loadAnimeData(
            individualPathData[path]["tread"],
            path.startsWith("anime/seasons")
                ? { filter: apiSearchParams["type"] ?? "" }
                : apiSearchParams,
            individualPathData[path]["extraPath"] ?? ""
        );

        if (response.success) {
            setAnimeData((prevAnimeData) => [
                ...prevAnimeData.slice(0, -6),
                ...(response.data ?? []),
            ]);

            if (response.pagination?.has_next_page) {
                setHasMoreData(true);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(animeData);
    return (
        <section className="my-10">
            <h4 className="mb-5 font-bold font-suse text-3xl text-gray-500">
                {individualPathData[path]["title"]}
            </h4>
            <FilterOptions
                onChange={updateDataOnChange}
                options={filters}
                seasonal={path.startsWith("anime/seasons")}
                slug={slug}
            />
            {/* Layout Options */}
            <div className="flex justify-end gap-2 pr-5 mb-6">
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

            {/* Card View */}
            {layout === "card" && (
                <InfiniteScroll
                    pageStart={1}
                    hasMore={hasMoreData}
                    loadMore={loadMoreData}
                    threshold={0}
                    // loader={Array(limit)
                    //     .fill(null)
                    //     .map((item, idx) => (
                    //         <ItemCardSimple item={item} key={idx} />
                    //     ))}
                >
                    <div className="lg:pl-3 flex lg:grid lg:grid-cols-5 gap-5 justify-center flex-wrap">
                        {animeData.map((item, idx) => (
                            <ItemCardSimple
                                item={item}
                                key={idx}
                                rank={path === "anime/top" ? idx + 1 : null}
                            />
                        ))}
                    </div>
                </InfiniteScroll>
            )}

            {/* Grid View */}
            {layout === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {animeData.map((item, idx) => (
                        <ItemCardGrid
                            item={item}
                            key={idx}
                            rank={path === "anime/top" ? idx + 1 : null}
                        />
                    ))}
                </div>
            )}

            {/* List View */}
            {layout === "list" && (
                <div className="space-y-5">
                    {animeData.map((item, idx) => (
                        <ItemCardList
                            item={item}
                            key={idx}
                            rank={path === "anime/top" ? idx + 1 : null}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default AnimePage;
