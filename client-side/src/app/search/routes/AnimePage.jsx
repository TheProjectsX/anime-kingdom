"use client";

import ItemCardSimple from "@/components/anime/ItemCardSimple";
import { useEffect, useState } from "react";
import ItemCardList from "@/components/anime/ItemCardList";
import ItemCardGrid from "@/components/anime/ItemCardGrid";

import InfiniteScroll from "react-infinite-scroller";
import { useSearchParams } from "next/navigation";
import FilterOptions from "@/components/common/FilterOptions";
import { loadServerData } from "@/utils/DataLoaderBeta";
import { capitalizeWord } from "@/utils/HelperFunctions";
import { Helmet } from "react-helmet";

const limit = 20;

const apiSearchParamsPrimary = {
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

// let apiSearchParams = { ...apiSearchParamsPrimary };

const AnimePage = ({ path, slug, filters }) => {
    const [apiSearchParams, setApiSearchParams] = useState({
        ...apiSearchParamsPrimary,
    });

    const searchParams = useSearchParams();

    const [layout, setLayout] = useState("card");
    const [hasMoreData, setHasMoreData] = useState(false);
    const [animeData, setAnimeData] = useState(Array(6).fill(null));
    const [currentPage, setCurrentPage] = useState(1);
    const [individualPathData, setIndividualPathData] = useState({
        "anime/trending": {
            path: "/anime/filter",
            title: "Trending Anime",
            payload: {
                order_by: "popularity",
                status: "airing",
                type: "",
            },
        },
        "anime/tv-series/popular": {
            path: "/anime/filter",
            title: "Popular TV Series",
            payload: { order_by: "popularity", type: "tv" },
        },
        "anime/movies/popular": {
            path: "/anime/filter",
            title: "Popular Movies",
            payload: { order_by: "popularity", type: "movie" },
        },
        "anime/seasons": {
            path: `/anime/seasons/${slug.slice(2).join("/")}`,
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
        },
        "anime/top": {
            path: "/top/anime",
            title: "Top Anime",
            payload: {},
        },
    });

    if (path.startsWith("anime/seasons")) {
        path = "anime/seasons";
    }

    // Function to Fetch data from server and save in state
    const fetchData = async (params, customPath) => {
        setHasMoreData(false);
        const response = await loadServerData(
            customPath ?? individualPathData[path]?.path ?? "/anime/filter",
            params ?? apiSearchParams
        );
        // console.log(response);
        if (response.success) {
            setAnimeData(response.data ?? []);
            if (response.pagination?.has_next_page) {
                setHasMoreData(true);
            }
        }
    };

    filters["query"] = searchParams.get("query") ?? "";

    // Update the Items when filter changes
    const updateFilteredItems = (filters = {}) => {
        console.log("🚀 ~ updateFilteredItems ~ filters:", filters);
        let params;

        if (path.startsWith("anime/seasons")) {
            let customPath;
            if (
                filters.hasOwnProperty("season") ||
                filters.hasOwnProperty("year")
            ) {
                customPath = `/anime/seasons/${
                    filters.year ??
                    individualPathData["anime/seasons"].path.split("/").at(3)
                }/${
                    filters.season ??
                    individualPathData["anime/seasons"].path.split("/").at(4)
                }`;

                setIndividualPathData((prev) => ({
                    ...prev,
                    "anime/seasons": {
                        ...prev["anime/seasons"],
                        path: customPath,
                    },
                }));
            }
            params = { filter: filters.type ?? "" };
            fetchData(params, customPath);
        } else {
            params = { ...apiSearchParams, ...filters, page: 1 };

            setApiSearchParams(params);
            fetchData(params);
        }
    };

    const loadMoreData = async () => {
        setHasMoreData(false);

        apiSearchParams["page"] = currentPage + 1;
        setAnimeData([...animeData, ...Array(6).fill(null)]);

        setHasMoreData(false);
        const response = await loadServerData(
            individualPathData[path]?.path ?? "/anime/filter",
            path.startsWith("anime/seasons")
                ? {
                      filter: apiSearchParams["type"] ?? "",
                      page: apiSearchParams["page"],
                  }
                : apiSearchParams
        );
        // console.log(response);
        if (response.success) {
            setAnimeData((prevAnimeData) => [
                ...prevAnimeData.slice(0, -6),
                ...(response.data ?? []),
            ]);
            setCurrentPage((prev) => prev + 1);

            if (response.pagination?.has_next_page) {
                setHasMoreData(true);
            }
        }
    };

    // Load Data in first time
    useEffect(() => {
        const params = {
            ...apiSearchParams,
            ...(individualPathData[path]?.payload ?? {}),
            query: searchParams.get("query") ?? "",
        };

        // Modify the API search Params according to page
        setApiSearchParams(params);

        fetchData(params);
    }, []);
    // console.log(animeData);
    return (
        <>
            <Helmet>
                <title>
                    {individualPathData[path]?.title ?? "Search for Anime"} -
                    AniDom
                </title>
            </Helmet>
            <section className="my-10">
                <h4 className="mb-5 font-bold font-suse text-3xl text-gray-500">
                    {individualPathData[path]?.title ?? "Search for Anime"}
                </h4>

                <FilterOptions
                    onChange={updateFilteredItems}
                    filters={
                        path.startsWith("anime/seasons")
                            ? {
                                  years: filters.years ?? [],
                                  seasons: filters.seasons ?? [],
                                  type: filters.type ?? [],
                              }
                            : {
                                  genres: filters.genres ?? [],
                                  type: filters.type ?? [],
                                  type: filters.type ?? [],
                              }
                    }
                    preset={{ year: slug.at(2), season: slug.at(3) }}
                    className="mb-5"
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
                        initialLoad={false}
                        pageStart={1}
                        hasMore={hasMoreData}
                        loadMore={loadMoreData}
                        threshold={0}
                    >
                        <div className="lg:pl-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-center flex-wrap">
                            {animeData.map((item, idx) => (
                                <ItemCardSimple
                                    animeData={item}
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
                                animeData={item}
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
                                animeData={item}
                                key={idx}
                                rank={path === "anime/top" ? idx + 1 : null}
                            />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default AnimePage;
