"use client";

import ItemCardSimple from "@/components/manga/ItemCardSimple";
import { loadServerData } from "@/utils/DataLoaderBeta";
import { TextInput } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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

let apiSearchParams = { ...apiSearchParamsPrimary };

const MangaPage = ({ path, slug, filters }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

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

    // Modify the API search Params according to page
    apiSearchParams = {
        ...apiSearchParams,
        ...(individualPathData[path]?.payload ?? {}),
        query: searchParams.get("query") ?? "",
    };
    filters["query"] = searchParams.get("query") ?? "";

    useEffect(() => {
        fetchData();
    }, []);

    // Update the Items when filter changes
    const updateFilteredItems = (filters = {}) => {
        apiSearchParams = { ...apiSearchParams, ...filters, page: 1 };
        fetchData(apiSearchParams);
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

    return (
        <section className="my-10">
            <form
                className="flex gap-2 items-center justify-evenly flex-wrap mb-10"
                // ref={formRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    onStatusChange();
                }}
            >
                <label className="flex flex-col gap-1 w-full lg:w-auto">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Search:
                    </span>
                    <TextInput
                        type="text"
                        name="query"
                        icon={IoSearch}
                        placeholder="Type name and press Enter..."
                        defaultValue={filters?.query ?? ""}
                        title="Search anime by name"
                        className="w-full"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                const params = new URLSearchParams();
                                params.set("query", e.target.value);
                                router.push(`${pathname}?${params.toString()}`);

                                updateFilteredItems({ query: e.target.value });
                            }
                        }}
                    />
                </label>

                <label className="flex flex-col gap-1 w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Genres:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="genres"
                        options={filters?.genres ?? []}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        onChange={(item) =>
                            updateFilteredItems({ genres: item?.value ?? "" })
                        }
                    />
                </label>

                <label className="flex flex-col gap-1 min-w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Type:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="type"
                        options={filters?.type ?? []}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        isSearchable={false}
                        onChange={(item) =>
                            updateFilteredItems({ type: item?.value ?? "" })
                        }
                    />
                </label>

                <label className="flex flex-col gap-1 min-w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Status:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="status"
                        options={filters?.status ?? []}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        isSearchable={false}
                        onChange={(item) =>
                            updateFilteredItems({ status: item?.value ?? "" })
                        }
                    />
                </label>
            </form>

            <InfiniteScroll
                initialLoad={false}
                pageStart={1}
                hasMore={hasMoreData}
                loadMore={loadMoreData}
                threshold={0}
            >
                <div className="lg:pl-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-center flex-wrap">
                    {mangaData.map((item, idx) => (
                        <ItemCardSimple
                            mangaData={item}
                            key={idx}
                            rank={path === "manga/top" ? idx + 1 : null}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </section>
    );
};

export default MangaPage;
