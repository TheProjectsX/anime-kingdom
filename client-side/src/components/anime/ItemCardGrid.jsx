"use client";

import { capitalizeWord, formatNumber } from "@/utils/HelperFunctions";
import { Tooltip } from "flowbite-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically load Countdown without SSR
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const ItemCardGrid = ({ animeData, rank, schedule = false }) => {
    const animeType = {
        tv: "TV Series",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    if (animeData === null) {
        return (
            <article className="h-[290px] sm:h-[250px] lg:h-[272px] bg-white rounded-md overflow-hidden">
                <div className="w-52 sm:w-44 lg:w-48 h-full skeleton bg-slate-300 rounded-none"></div>
            </article>
        );
    }

    return (
        <article className="flex h-[290px] sm:h-[250px] lg:h-[272px] rounded-md overflow-hidden">
            <div className="w-52 sm:w-44 lg:w-48 flex-shrink-0 relative group">
                {rank && (
                    <p className="bg-amber-500 py-1 px-2 rounded-bl-xl absolute -top-2 right-0 z-10">
                        <span className="text-sm font-suse">#</span>
                        <span className="text-lg font-medium">{rank}</span>
                    </p>
                )}
                <Link href={`/anime/${animeData.id}`}>
                    <img
                        src={animeData.image}
                        alt={animeData.title_english ?? animeData.title}
                        className="w-full h-full"
                    />
                </Link>
                {schedule && (
                    <div className="w-full absolute top-0 bg-slate-700/80 p-2 group-hover:opacity-0 transition-[opacity] duration-300 flex flex-col items-center justify-center text-white text-sm">
                        <Countdown
                            date={new Date(
                                animeData.next?.timestamp * 1000
                            ).toString()}
                            renderer={({
                                days,
                                hours,
                                minutes,
                                seconds,
                                completed,
                            }) => {
                                return (
                                    <time className="text-base">
                                        <span className="underline underline-offset-2 mr-0.5">
                                            {completed
                                                ? "00"
                                                : formatNumber(days)}
                                        </span>
                                        d{" "}
                                        <span className="underline underline-offset-2 mr-0.5">
                                            {completed
                                                ? "00"
                                                : formatNumber(hours)}
                                        </span>
                                        h{" "}
                                        <span className="underline underline-offset-2 mr-0.5">
                                            {" "}
                                            {completed
                                                ? "00"
                                                : formatNumber(minutes)}
                                        </span>
                                        m{" "}
                                        <span className="underline underline-offset-2 mr-0.5">
                                            {completed
                                                ? "00"
                                                : formatNumber(seconds)}
                                        </span>
                                        s
                                    </time>
                                );
                            }}
                        />
                        <p className="text-sm">
                            (Episode{" "}
                            <span className="font-semibold">
                                {animeData.next?.episode}
                            </span>
                            )
                        </p>
                    </div>
                )}
                <div
                    className={`w-full absolute bottom-0 bg-slate-700/80 p-2${
                        schedule
                            ? " group-hover:opacity-0 transition-[opacity] duration-300"
                            : ""
                    }`}
                >
                    <Link
                        href={`/anime/${animeData.id}`}
                        className="text-white hover:text-green-300 transition-colors text-sm font-suse font-semibold"
                        title={animeData.title_english ?? animeData.title}
                    >
                        {(animeData.title_english ?? animeData.title).length >
                        40
                            ? `${(
                                  animeData.title_english ?? animeData.title
                              ).slice(0, 38)}...`
                            : animeData.title_english ?? animeData.title}
                    </Link>
                    {!schedule && (
                        <p className="flex gap-2 flex-wrap">
                            {animeData.studios?.map((item, idx) => (
                                <Link
                                    href={item.id ? `/studios/${item.id}` : ""}
                                    className="text-amber-500 text-sm inline-block hover:underline underline-offset-2 text-semibold"
                                    key={idx}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </p>
                    )}
                </div>
            </div>

            {/* Description Section */}
            <div className="bg-white relative w-full">
                {/* The Overflow Items */}
                <div className="px-3 py-2.5 h-[250px] sm:h-[210px] lg:h-[232px] overflow-y-hidden hover:pr-1 hover:overflow-y-auto scrollbar-thin scrollbar-track-transparent">
                    {/* Header Info */}
                    <div className="flex gap-2 justify-between">
                        {/* Header Info Data */}
                        <div>
                            <p className="text-xs font-semibold text-gray-400">
                                {animeData.status} ({animeData.source})
                            </p>
                            <Tooltip
                                content={
                                    <p>
                                        {animeData.aired?.string?.includes(
                                            "to"
                                        ) && "from "}
                                        {animeData.aired?.string}
                                    </p>
                                }
                                placement="right"
                                className={`${
                                    animeData.aired?.string ? "" : "hidden"
                                }`}
                            >
                                <p className="text-gray-500 font-semibold">
                                    {capitalizeWord(animeData.season)}{" "}
                                    {animeData.year}
                                </p>
                            </Tooltip>
                            <p className="text-xs mb-2 font-semibold">
                                {animeType[animeData.type?.toLowerCase()] ??
                                    animeData.type}{" "}
                                {!animeData.duration
                                    ? "Unknown"
                                    : animeData.type?.toLowerCase() === "movie"
                                    ? `${animeData.duration[0]} hour(s), ${animeData.duration[1]} mins`
                                    : animeData.episodes
                                    ? `${animeData.episodes} episodes`
                                    : `${animeData.duration ?? 0} mins`}{" "}
                            </p>
                        </div>
                        {/* Header Info Score */}
                        <p className="font-semibold font-suse">
                            {animeData.score ?? ""}
                        </p>
                    </div>
                    <p className="text-[13px] text-zinc-500">
                        {animeData.synopsis}
                    </p>
                </div>
                {/* Genres */}
                <div className="flex gap-2 justify-center w-full flex-wrap absolute bottom-0 p-2.5 bg-slate-200">
                    {animeData.genres.slice(0, 2).map((item, idx) => (
                        <Link
                            href={"#"}
                            key={idx}
                            className="badge badge-info text-gray-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ItemCardGrid;
