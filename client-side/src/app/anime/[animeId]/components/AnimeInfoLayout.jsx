"use client";

import { Fragment } from "react";
import AnimeDataContext from "@/context/AnimeDataContext";
import Link from "next/link";

const AnimeInfoLayout = ({ animeId, animeBaseData, children }) => {
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

    const baseUrl = `/anime/${animeId}/${
        animeBaseData.title_english
            ?.replace(/[^a-zA-Z\s]/g, "")
            .replace(/\s+/g, "-") ??
        animeBaseData.title?.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, "-")
    }`;

    return (
        <AnimeDataContext.Provider value={{ animeBaseData }}>
            <main className="max-width !px-0 mb-10">
                {animeBaseData.banner && (
                    <div className="">
                        <img
                            src={animeBaseData.banner}
                            alt={
                                animeBaseData.title_english ??
                                animeBaseData.title
                            }
                            className="w-full"
                        />
                    </div>
                )}

                <div className="space-y-8">
                    <header className="flex gap-4 bg-white p-5 pb-3">
                        <div
                            className={`flex-shrink-0 w-52 ${
                                animeBaseData.banner ? "-mt-20" : ""
                            }`}
                        >
                            <img
                                src={animeBaseData.image_large}
                                alt={
                                    animeBaseData.title_english ??
                                    animeBaseData.title
                                }
                                className="w-full h-[295px] mb-2"
                            />
                            <div className="w-full skeleton rounded-none p-2 text-center">
                                Here may be some items
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <article className="flex-grow mb-2.5">
                                <h1 className="text-2xl font-semibold font-suse mb-4 text-gray-600">
                                    {animeBaseData.title_english ??
                                        animeBaseData.title}
                                </h1>
                                <p className="text-gray-600 flex-grow">
                                    {animeBaseData.synopsis
                                        .slice(0, 290)
                                        .trim()}
                                    ...{" "}
                                    <span
                                        className="text-xs cursor-pointer hover:underline underline-offset-2"
                                        onClick={(e) =>
                                            (e.target.parentElement.innerHTML =
                                                animeBaseData.synopsis)
                                        }
                                    >
                                        read more
                                    </span>
                                </p>
                            </article>

                            <div className="px-4 w-full flex justify-evenly text-sm text-gray-500">
                                <Link
                                    href={baseUrl}
                                    className="px-2 py-1 hover:text-[dodgerBlue]"
                                >
                                    Overview
                                </Link>
                                <Link
                                    href={`${baseUrl}/characters`}
                                    className="px-2 py-1 hover:text-[dodgerBlue]"
                                >
                                    Characters
                                </Link>
                                <Link
                                    href={`${baseUrl}/staffs`}
                                    className="px-2 py-1 hover:text-[dodgerBlue]"
                                >
                                    Staffs
                                </Link>
                                <Link
                                    href={`${baseUrl}/reviews`}
                                    className="px-2 py-1 hover:text-[dodgerBlue]"
                                >
                                    Review
                                </Link>

                                <Link
                                    href={`${baseUrl}/videos`}
                                    className="px-2 py-1 hover:text-[dodgerBlue]"
                                >
                                    Videos
                                </Link>
                                <Link
                                    href={`${baseUrl}/pictures`}
                                    className="px-2 py-1 hover:text-[dodgerBlue]"
                                >
                                    Pictures
                                </Link>
                            </div>
                        </div>
                    </header>

                    {/* The main Information */}
                    <div className="px-5 flex gap-4">
                        <aside className="bg-white w-52 h-fit px-4 py-3 space-y-2.5 flex-shrink-0">
                            <InfoItems
                                heading={"Type"}
                                info={
                                    animeType[
                                        animeBaseData.type?.toLowerCase()
                                    ] ?? animeBaseData.type
                                }
                            />
                            <InfoItems
                                heading={"Episodes"}
                                info={animeBaseData.episodes}
                            />
                            <InfoItems
                                heading={"Duration"}
                                info={
                                    animeBaseData.type?.toLowerCase() ===
                                    "movie"
                                        ? `${animeBaseData.duration[0]} hour(s), ${animeBaseData.duration[1]} mins`
                                        : `${animeBaseData.duration ?? 0} mins`
                                }
                            />
                            <InfoItems
                                heading={"Status"}
                                info={animeBaseData.status}
                            />
                            <InfoItems
                                heading={"Season"}
                                info={`${capitalizeWord(
                                    animeBaseData.season
                                )} ${animeBaseData.year}`}
                            />
                            <InfoItems
                                heading={"Start Date"}
                                info={formatDate(animeBaseData.aired?.from)}
                            />
                            <InfoItems
                                heading={"End Date"}
                                info={formatDate(animeBaseData.aired?.to)}
                            />

                            {animeBaseData.titles.map((item, idx) => (
                                <InfoItems
                                    key={idx}
                                    heading={item.type}
                                    info={item.title}
                                />
                            ))}

                            <InfoItems
                                heading={"Score"}
                                info={animeBaseData.score}
                            />
                            <InfoItems
                                heading={"Scored By"}
                                info={animeBaseData.scored_by}
                            />
                            <InfoItems
                                heading={"Rank (MAL)"}
                                info={`#${animeBaseData.mal_rank}`}
                            />
                            <InfoItems
                                heading={"Rating"}
                                info={animeBaseData.rating}
                            />
                            <InfoItems
                                heading={"Source"}
                                info={animeBaseData.source}
                            />
                            <InfoItems
                                heading={"Genres"}
                                info={animeBaseData.genres.map((item, idx) => (
                                    <Fragment key={idx}>
                                        {item.name}
                                        <br />
                                    </Fragment>
                                ))}
                            />
                            <InfoItems
                                heading={"Themes"}
                                info={animeBaseData.themes.map((item, idx) => (
                                    <Fragment key={idx}>
                                        {item.name}
                                        <br />
                                    </Fragment>
                                ))}
                            />
                            <InfoItems
                                heading={"Studios"}
                                info={animeBaseData.studios.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/studio/${item.mal_id}`}
                                        className="hover:underline underline-offset-2"
                                    >
                                        {item.name}
                                        <br />
                                    </Link>
                                ))}
                            />
                            <InfoItems
                                heading={"Producers"}
                                info={animeBaseData.producers.map(
                                    (item, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/studio/${item.mal_id}`}
                                            className="hover:underline underline-offset-2"
                                        >
                                            {item.name}
                                            <br />
                                        </Link>
                                    )
                                )}
                            />

                            <div className="divider !mt-0"></div>

                            <InfoItems
                                className="!mt-0"
                                heading={"Streaming"}
                                info={animeBaseData.streaming.map(
                                    (item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.url}
                                            className="hover:underline underline-offset-2"
                                        >
                                            {item.name}
                                            <br />
                                        </a>
                                    )
                                )}
                            />

                            <InfoItems
                                heading={"External"}
                                info={animeBaseData.external.map(
                                    (item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.url}
                                            className="hover:underline underline-offset-2"
                                        >
                                            {item.name}
                                            <br />
                                        </a>
                                    )
                                )}
                            />
                        </aside>
                        <section className="flex-grow">{children}</section>
                    </div>
                </div>
            </main>
        </AnimeDataContext.Provider>
    );
};

export default AnimeInfoLayout;
