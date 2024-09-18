"use client";

import { Fragment } from "react";
import Link from "next/link";
import StudioDataContext from "@/context/StudioDataContext";

const StudioInfoLayout = ({ studioId, studioBaseData, children }) => {
    const animeType = {
        tv: "TV Series",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown";

        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();

        return `${day} ${month}, ${year}`;
    };

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const InfoItems = ({ heading, info, className = "" }) => {
        return (
            <div className={className}>
                <h3 className="font-semibold text-gray-600 mb-0.5 font-suse">
                    {heading}
                </h3>
                <p className="text-sm text-gray-600">{info}</p>
            </div>
        );
    };

    const baseUrl = `/studio/${studioId}/${
        studioBaseData.title
            ?.replace(/[^a-zA-Z\s]/g, "")
            .replace(/\s+/g, "-") ??
        studioBaseData.title?.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, "-")
    }`;

    return (
        <StudioDataContext.Provider value={{ studioBaseData: studioBaseData }}>
            <main className="max-width !px-0 mb-10">
                <div className="space-y-8">
                    <header className="flex gap-4 bg-white p-5 pb-3">
                        <div className="flex-shrink-0 w-52">
                            <img
                                src={studioBaseData.image}
                                alt={
                                    studioBaseData.title_english ??
                                    studioBaseData.title
                                }
                                className="w-full h-[295px] mb-2"
                            />
                            <div className="w-full skeleton rounded-none p-2 text-center">
                                Here may be some items
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <article className="flex-grow mb-2.5 w-full">
                                <header className="mb-4 flex justify-between items-end">
                                    <div className="">
                                        <h1 className="text-3xl font-bold font-suse text-gray-600">
                                            {studioBaseData.title}
                                        </h1>
                                        {studioBaseData.titles.length > 0 && (
                                            <p className="text-sm font-medium text-gray-500">
                                                {studioBaseData.titles.join(
                                                    ", "
                                                )}
                                            </p>
                                        )}
                                        <p className="text-sm font-medium text-gray-500">
                                            Anime Count:{" "}
                                            <span className="text-black font-semibold">
                                                {studioBaseData.count}
                                            </span>
                                        </p>
                                    </div>
                                    <p>
                                        Favorites:{" "}
                                        <span className="font-semibold text-gray-600">
                                            {studioBaseData.favorites}
                                        </span>
                                    </p>
                                </header>
                                <p className="text-gray-600 text-sm flex-grow whitespace-pre-wrap">
                                    {studioBaseData.about ??
                                        "No biography available"}
                                </p>
                            </article>

                            <div className="grid grid-cols-1 overflow-x-auto scrollbar scrollbar-thin">
                                <div className="px-4 w-full flex justify-evenly text-sm text-gray-500">
                                    {studioBaseData.external.map(
                                        (item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.url}
                                                target="_blank"
                                                className="px-2 py-1 hover:text-[dodgerBlue]"
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* The main Information */}

                    <section className="flex-grow">{children}</section>
                </div>
            </main>
        </StudioDataContext.Provider>
    );
};

export default StudioInfoLayout;