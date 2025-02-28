"use client";

import { loadServerData } from "@/utils/DataLoader";
import { formatDate } from "@/utils/HelperFunctions";
import { Avatar, Tooltip } from "flowbite-react";
import React, { use, useEffect, useState } from "react";

const page = ({ params }) => {
    const [animeReviewData, setAnimeReviewData] = useState(Array(5).fill(null));

    const { animeId } = use(params);

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await loadServerData(
                `/anime/${animeId}/reviews`
            );

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            setAnimeReviewData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (animeReviewData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animeReviewData is null, return skeleton
    if (animeReviewData.every((item) => !item)) {
        return (
            <div>
                <h4 className="text-3xl font-semibold font-suse text-gray-600 mb-3">
                    Reviews:
                </h4>

                {/* Review Cards Wrapper */}
                <div className="space-y-5">
                    {animeReviewData.map((item, idx) => (
                        <article
                            key={idx}
                            className="bg-white rounded-md p-3 shadow-md"
                        >
                            {/* Header */}
                            <header className="flex items-center gap-3 border-b-2 pb-2 mb-2">
                                <div className="w-8 h-8 skeleton rounded-full"></div>
                                <p className="h-5 w-20 skeleton rounded-none"></p>
                            </header>

                            {/* Review Body */}
                            <div>
                                <p className="h-28 w-full skeleton rounded-none"></p>
                                <div className="divider my-2"></div>
                                <div className="h-8 w-[70%] skeleton rounded-none"></div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <h4 className="text-3xl font-semibold font-suse text-gray-600 mb-3">
                Reviews:
            </h4>

            {/* Review Cards Wrapper */}
            <div className="space-y-5">
                {animeReviewData.map((item) => (
                    <article
                        key={item.id}
                        className="bg-white rounded-md p-3 shadow-md"
                    >
                        {/* Header Items - User name, image, review tags */}
                        <header className="justify-between border-b-2 pb-2 mb-2 hidden sm:flex">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        rounded
                                        size="sm"
                                        img={item.user?.image}
                                        alt={item.user?.username}
                                    />
                                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                                        {item.user?.username}
                                    </cite>
                                </div>
                                <div className="divider divider-horizontal m-0"></div>
                                <div className="space-x-2">
                                    {item.tags?.map((tag, idx) => (
                                        <span
                                            className="badge badge-accent p-2.5"
                                            key={idx}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>{formatDate(item.date)}</div>
                        </header>
                        <header className="border-b-2 pb-2 mb-2 sm:hidden">
                            <div className="flex items-center justify-between gap-3 mb-2.5">
                                <div className="flex items-center gap-2">
                                    <Avatar
                                        rounded
                                        size="sm"
                                        img={item.user?.image}
                                        alt={item.user?.username}
                                    />
                                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                                        {item.user?.username}
                                    </cite>
                                </div>
                                <div className="text-sm">
                                    {formatDate(item.date)}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {item.tags?.slice(0, 2).map((tag, idx) => (
                                    <span
                                        className="badge badge-sm badge-accent p-2.5"
                                        key={idx}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </header>

                        {/* Review Body */}
                        <div>
                            <p className="">
                                <span className="text-sm text-slate-600 review-text whitespace-pre-line">
                                    {item.review.length > 625
                                        ? `${item.review.slice(0, 625)}...`
                                        : item.review}
                                </span>
                                <span
                                    className="px-4 text-blue-600 cursor-pointer text-sm hover:underline underline-offset-2"
                                    onClick={(e) => {
                                        if (
                                            e.target.innerText === "Read More"
                                        ) {
                                            e.target.parentElement.querySelector(
                                                ".review-text"
                                            ).innerText = item.review;
                                            e.target.innerText = "Read Less";
                                        } else {
                                            e.target.parentElement.querySelector(
                                                ".review-text"
                                            ).innerText = `${item.review.slice(
                                                0,
                                                625
                                            )}...`;
                                            e.target.innerText = "Read More";
                                        }
                                    }}
                                >
                                    Read More
                                </span>
                            </p>
                            <div className="divider my-2"></div>

                            <div className="flex flex-wrap gap-2 items-end">
                                <p className="font-semibold text-gray-800 pr-2 text-lg">
                                    Reactions:
                                </p>

                                <p className="text-sm flex gap-1">
                                    <span>All:</span>
                                    <span className="badge badge-sm sm:badge-md badge-info">
                                        {item.reactions.overall}
                                    </span>
                                </p>
                                <p className="text-sm flex gap-1">
                                    <span>Nice:</span>
                                    <span className="badge badge-sm sm:badge-md badge-accent">
                                        {item.reactions.nice}
                                    </span>
                                </p>
                                <p className="text-sm flex gap-1">
                                    <span>Loved:</span>
                                    <span className="badge badge-sm sm:badge-md badge-secondary">
                                        {item.reactions.love_it}
                                    </span>
                                </p>
                                <p className="text-sm flex gap-1">
                                    <span>Funny:</span>
                                    <span className="badge badge-sm sm:badge-md badge-primary">
                                        {item.reactions.funny}
                                    </span>
                                </p>

                                <Tooltip
                                    content={
                                        <div className="p-1">
                                            <p>Funny: {item.reactions.funny}</p>
                                            <p>
                                                Confusing:{" "}
                                                {item.reactions.confusing}
                                            </p>
                                            <p>
                                                Informative:{" "}
                                                {item.reactions.informative}
                                            </p>
                                            <p>
                                                Well Written:{" "}
                                                {item.reactions.well_written}
                                            </p>
                                            <p>
                                                Creative:{" "}
                                                {item.reactions.creative}
                                            </p>
                                        </div>
                                    }
                                    placement="right"
                                >
                                    <p className="cursor-pointer pl-2 text-sm underline underline-offset-2">
                                        + More
                                    </p>
                                </Tooltip>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default page;
