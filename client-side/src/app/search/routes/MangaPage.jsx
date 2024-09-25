"use client";

import ItemCardSimple from "@/components/anime/ItemCardSimple";
import { useEffect, useState } from "react";
import { loadAnimeData } from "@/utils/DataLoader";
import ItemCardList from "@/components/anime/ItemCardList";
import ItemCardGrid from "@/components/anime/ItemCardGrid";

import InfiniteScroll from "react-infinite-scroller";
import { useSearchParams } from "next/navigation";
import MangaFilterOptions from "@/components/MangaFilterOptions";

const limit = 20;

const apiSearchParamsConst = {
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

const MangaPage = ({ path, slug, filters }) => {
    const searchParams = useSearchParams();

    const [layout, setLayout] = useState("card");
    const [hasMoreData, setHasMoreData] = useState(false);
    const [animeData, setAnimeData] = useState(Array(6).fill(null));
    const [currentPage, setCurrentPage] = useState(1);

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const individualPathDataHandler = {
        get: function (target, prop) {
            if (
                prop in target &&
                target[prop] !== null &&
                typeof target[prop] === "object"
            ) {
                return new Proxy(target[prop], individualPathDataHandler); // Recursively apply proxy for nested objects
            }
            return prop in target ? target[prop] : {}; // Return the property if it exists, otherwise return {}
        },
    };

    const individualPathData = {
        "anime/trending": {
            trade: "filter-anime",
            title: "Trending Anime",
            payload: {
                order_by: "popularity",
                status: "airing",
                type: "",
            },
        },
        "anime/tv-series/popular": {
            trade: "filter-anime",
            title: "Popular TV Series",
            payload: { order_by: "popularity", type: "tv" },
        },
        "anime/movies/popular": {
            trade: "filter-anime",
            title: "Popular Movies",
            payload: { order_by: "popularity", type: "movie" },
        },
        "anime/seasons": {
            trade: "seasonal-anime",
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
            trade: "top-anime",
            title: "Top Anime",
            payload: {},
        },
    };

    const individualPathDataProxy = new Proxy(
        individualPathData,
        individualPathDataHandler
    );

    apiSearchParams = {
        ...apiSearchParams,
        ...(individualPathDataProxy[path]
            ? individualPathDataProxy[path]["payload"]
            : {}),
    };

    const query = searchParams.get("query") ?? "";
    apiSearchParams["query"] = query;
    filters["query"] = query;

    // Function to Fetch data from server and save in state
    const fetchData = async () => {
        setHasMoreData(false);
        const response = await loadAnimeData(
            "filter-manga",
            path.startsWith("anime/seasons")
                ? { filter: apiSearchParams["type"] ?? "" }
                : apiSearchParams,
            individualPathDataProxy[path]["extraPath"] ?? ""
        );
        // console.log(response);
        if (response.success) {
            setAnimeData(response.data ?? []);
        }
        if (response.pagination?.has_next_page) {
            setHasMoreData(true);
        }
    };

    const updateDataOnChange = (primaryUpdatedQuery) => {
        setCurrentPage(1);
        let updatedQuery = primaryUpdatedQuery;

        if (Object.values(updatedQuery).every((value) => value === "")) {
            updatedQuery =
                individualPathDataProxy[path]["payload"] ??
                apiSearchParamsConst;
        } else if (updatedQuery.query !== "") {
            updatedQuery["order_by"] = "";
        }

        apiSearchParams = {
            ...apiSearchParams,
            ...updatedQuery,
            query: primaryUpdatedQuery["query"] ?? "",
            page: 1,
        };

        if (path.startsWith("anime/seasons")) {
            const seasonPath = `${updatedQuery.year}/${updatedQuery.season}`;
            individualPathDataProxy["anime/seasons"]["extraPath"] = seasonPath;
            fetchData();
        } else {
            fetchData();
        }
    };

    const loadMoreData = async () => {
        setHasMoreData(false);

        apiSearchParams["page"] = currentPage + 1;
        console.log(apiSearchParams);
        setAnimeData([...animeData, ...Array(6).fill(null)]);

        const response = await loadAnimeData(
            individualPathDataProxy[path]["trade"],
            path.startsWith("anime/seasons")
                ? {
                      filter: apiSearchParams["type"] ?? "",
                      page: apiSearchParams["page"],
                  }
                : apiSearchParams,
            individualPathDataProxy[path]["extraPath"] ?? ""
        );

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

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(animeData);
    return (
        <section className="my-10">
            <h4 className="mb-5 font-bold font-suse text-3xl text-gray-500">
                {individualPathDataProxy[path]
                    ? individualPathDataProxy[path]["title"]
                    : "Anime"}
            </h4>
            <MangaFilterOptions
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
    );
};

export default MangaPage;
