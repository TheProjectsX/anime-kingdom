"use client";

import FilterOptions from "@/components/FilterOptions";
import ItemCardSimple from "@/components/ItemCardSimple";
import { useEffect, useState } from "react";

const AnimePage = ({ path, filters }) => {
    const limit = 20;
    let apiSearchParams = {
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

    const [animeData, setAnimeData] = useState(Array(limit).fill(null));
    if (path === "anime/tv-series/popular") {
        apiSearchParams["order_by"] = "popularity";
        apiSearchParams["type"] = "tv";
    }

    const fetchData = async () => {
        const searchParams = new URLSearchParams(apiSearchParams);

        const response = await (
            await fetch(
                `${
                    process.env.NEXT_PUBLIC_SERVER_URL
                }/anime/filter?${searchParams.toString()}`
            )
        ).json();
        if (response.success) {
            setAnimeData(response.data ?? []);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="my-10">
            <FilterOptions
                onChange={(data) => {
                    apiSearchParams = { ...apiSearchParams, ...data };
                    fetchData();
                }}
            />
            <div className="lg:pl-3 flex lg:grid lg:grid-cols-5 gap-5 justify-center flex-wrap">
                {animeData.map((item, idx) => (
                    <ItemCardSimple item={item} key={idx} />
                ))}
            </div>
        </section>
    );
};

export default AnimePage;
