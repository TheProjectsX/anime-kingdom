"use client";

import ItemCardSimple from "@/components/anime/ItemCardSimpleBak";
import { loadServerData } from "@/utils/DataLoader";
import { use, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

let studioAnimeBaseData = Array(6).fill(null);

const page = ({ params }) => {
    const { studioId } = use(params);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [studioAnimeData, setStudioAnimeData] = useState(studioAnimeBaseData);
    const [currentPage, setCurrentPage] = useState(1);

    // Function to Fetch data from server and save in state
    const fetchData = async () => {
        const response = await loadServerData(`/studio/${studioId}/anime`, {
            page: currentPage,
        });

        if (response.success) {
            setStudioAnimeData(response.data ?? []);
            studioAnimeBaseData = response.data ?? [];
        }
        if (!response.pagination?.has_next_page) {
            setHasMoreData(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const loadMoreData = async (e) => {
        setHasMoreData(false);
        const nextPage = currentPage + 1;
        setStudioAnimeData([...studioAnimeData, ...Array(6).fill(null)]);

        setCurrentPage((pre) => pre + 1);
        const response = await loadServerData(`/studio/${studioId}/anime`, {
            page: nextPage,
        });

        if (response.success) {
            setStudioAnimeData((prevAnimeData) => [
                ...prevAnimeData.slice(0, -6),
                ...(response.data ?? []),
            ]);
            studioAnimeBaseData = response.data ?? [];

            if (response.pagination?.has_next_page) {
                setHasMoreData(true);
            }
        }
    };

    return (
        <div>
            <InfiniteScroll
                initialLoad={false}
                pageStart={1}
                hasMore={hasMoreData}
                loadMore={loadMoreData}
                threshold={0}
            >
                <div className="lg:pl-3  grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-center">
                    {studioAnimeData.map((item, idx) => (
                        <ItemCardSimple animeData={item} key={idx} />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default page;
