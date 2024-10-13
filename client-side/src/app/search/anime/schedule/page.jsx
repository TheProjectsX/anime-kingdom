"use client";

import { useEffect, useState } from "react";
import ItemCardGrid from "@/components/anime/ItemCardGrid";
import { loadServerData } from "@/utils/DataLoader";
import { Helmet } from "react-helmet";
import ReactSelect from "react-select";

const page = () => {
    const [loading, setLoading] = useState(true);
    const [animeScheduleData, setAnimeScheduleData] = useState(
        Array(6).fill(null)
    );

    const filterOptions = [
        {
            label: "Popularity",
            value: "popularity",
        },
        {
            label: "Title",
            value: "title",
        },
        {
            label: "Countdown",
            value: "countdown",
        },
        {
            label: "Avg Rating",
            value: "anime.avg_rating",
        },
        {
            label: "Publish Date",
            value: "airdate",
        },
    ];

    // Load data from server
    useEffect(() => {
        const loadData = async () => {
            const response = await loadServerData("/anime/schedule", {
                timestamp: Date.now(),
            });
            if (!response.success) {
                console.log(response);
                // do something
            }

            setAnimeScheduleData(response.data ?? []);
            setLoading(false);
        };
        loadData();
    }, []);

    // Load sorted Data
    const loadSortedData = async (sortby) => {
        setLoading(true);
        const response = await loadServerData("/anime/schedule", {
            sortby,
            timestamp: Date.now(),
        });
        if (!response.success) {
            console.log(response);
            // do something
        }

        setAnimeScheduleData(response.data ?? []);
        setLoading(false);
    };

    return (
        <>
            <Helmet>
                <title>Anime Release Schedule - AniDom</title>
            </Helmet>
            <main className="max-width space-y-8 mb-10 my-8">
                <h4 className="mb-5 font-bold font-suse text-3xl text-gray-500">
                    Check Anime Scheduled to Release!
                </h4>

                <div className="flex gap-2.5 items-end">
                    <label className="flex flex-col gap-1 w-48">
                        <span className="text-sm font-semibold text-gray-600 ml-2">
                            Sort By:
                        </span>
                        <ReactSelect
                            isMulti={false}
                            name="season"
                            defaultValue={filterOptions[0]}
                            options={filterOptions}
                            className="basic-multi-select w-full"
                            classNamePrefix="select"
                            placeholder="Any"
                            isClearable={false}
                            isSearchable={false}
                            onChange={(item) => loadSortedData(item.value)}
                        />
                    </label>
                    {loading && (
                        <div className="loading text-[dodgerBlue]"></div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {animeScheduleData.map((item, idx) => (
                        <ItemCardGrid animeData={item} key={idx} schedule />
                    ))}
                </div>
            </main>
        </>
    );
};

export default page;
