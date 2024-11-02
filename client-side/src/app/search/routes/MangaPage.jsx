"use client";

import FilterOptions from "@/components/common/FilterOptions";
import ItemCardGrid from "@/components/manga/ItemCardGrid";
import ItemCardList from "@/components/manga/ItemCardList";
import ItemCardSimple from "@/components/manga/ItemCardSimple";
import { loadServerData } from "@/utils/DataLoader";
import { TextInput } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoSearch } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroller";
import ReactSelect from "react-select";

const apiSearchParamsPrimary = {
    query: "",
    genres: "",
    type: "",
    status: "",
    rating: "",
    page: 1,
    limit: 20,
    order_by: "",
    start_date: "",
    end_date: "",
};

// let apiSearchParams = { ...apiSearchParamsPrimary };

const MangaPage = ({ path, slug, filters }) => {
    const [apiSearchParams, setApiSearchParams] = useState({
        ...apiSearchParamsPrimary,
    });
    const searchParams = useSearchParams();

    const [layout, setLayout] = useState("card");
    const [hasMoreData, setHasMoreData] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [mangaData, setMangaData] = useState(Array(6).fill(null));

    const individualPathData = {
        manga: {
            path: "/manga/filter",
            title: "Manga",
            payload: {},
        },
        "manga/trending": {
            path: "/manga/filter",
            title: "Trending Manga",
            payload: {
                order_by: "popularity",
                status: "publishing",
                type: "manga",
            },
        },
        "manga/trending/manhwa": {
            path: "/manga/filter",
            title: "Trending Manhwa",
            payload: {
                order_by: "popularity",
                status: "publishing",
                type: "manhwa",
            },
        },
        "manga/trending/light-novel": {
            path: "/manga/filter",
            title: "Trending Light Novels",
            payload: {
                order_by: "popularity",
                status: "publishing",
                type: "lightnovel",
            },
        },

        "manga/top": {
            path: "/top/manga",
            title: "Top Manga",
            payload: {},
        },
    };

    const fetchData = async (params) => {
        setHasMoreData(false);
        const response = await loadServerData(
            individualPathData[path]?.path ?? "/manga/filter",
            params ?? apiSearchParams
        );
        // console.log(response);
        if (response.success) {
            setMangaData(response.data ?? []);
            if (response.pagination?.has_next_page) {
                setHasMoreData(true);
            }
        }
    };

    filters["query"] = searchParams.get("query") ?? "";

    // Update the Items when filter changes
    const updateFilteredItems = (filters = {}) => {
        const params = { ...apiSearchParams, ...filters, page: 1 };
        setApiSearchParams(params);
        // apiSearchParams = { ...apiSearchParams, ...filters, page: 1 };
        fetchData(params);
    };

    const loadMoreData = async () => {
        setHasMoreData(false);

        apiSearchParams["page"] = currentPage + 1;
        setMangaData([...mangaData, ...Array(6).fill(null)]);

        setHasMoreData(false);
        const response = await loadServerData(
            individualPathData[path]?.path ?? "/manga/filter",
            apiSearchParams
        );
        // console.log(response);
        if (response.success) {
            setMangaData((prevMangaData) => [
                ...prevMangaData.slice(0, -6),
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

    return (
        <>
            <Helmet>
                <title>
                    {individualPathData[path]?.title ?? "Search for Manga"} -
                    AniDom
                </title>
            </Helmet>
            <section className="my-10">
                <h4 className="ont-bold font-suse text-xl sm:text-2xl md:text-3xl text-gray-500">
                    {individualPathData[path]?.title ?? "Search for Manga"}
                </h4>
                <FilterOptions
                    filters={filters}
                    onChange={updateFilteredItems}
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

                {/* Card Layout */}
                {layout === "card" && (
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={1}
                        hasMore={hasMoreData}
                        loadMore={loadMoreData}
                        threshold={0}
                    >
                        <div className="lg:pl-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-center flex-wrap">
                            {mangaData.map((item, idx) => (
                                <ItemCardSimple
                                    mangaData={item}
                                    key={idx}
                                    rank={path === "manga/top" ? idx + 1 : null}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                )}

                {/* Grid Layout */}
                {layout === "grid" && (
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={1}
                        hasMore={hasMoreData}
                        loadMore={loadMoreData}
                        threshold={0}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {mangaData.map((item, idx) => (
                                <ItemCardGrid
                                    mangaData={item}
                                    key={idx}
                                    rank={path === "manga/top" ? idx + 1 : null}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                )}

                {/* List Layout */}
                {layout === "list" && (
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={1}
                        hasMore={hasMoreData}
                        loadMore={loadMoreData}
                        threshold={0}
                    >
                        <div className="space-y-5">
                            {mangaData.map((item, idx) => (
                                <ItemCardList
                                    mangaData={item}
                                    key={idx}
                                    rank={path === "manga/top" ? idx + 1 : null}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                )}
            </section>
        </>
    );
};

export default MangaPage;
