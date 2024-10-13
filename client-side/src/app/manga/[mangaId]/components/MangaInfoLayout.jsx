"use client";

import { Fragment } from "react";
import MangaDataContext from "@/context/MangaDataContext";
import Link from "next/link";
import { capitalizeWord, formatDate } from "@/utils/HelperFunctions";
import { Helmet } from "react-helmet";

const MangaInfoLayout = ({ mangaId, mangaBaseData, children }) => {
    const animeType = {
        tv: "TV Series",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

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

    const baseUrl = `/manga/${mangaId}/${
        mangaBaseData.title_english
            ?.replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s+/g, "-") ??
        mangaBaseData.title?.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "-")
    }`;

    return (
        <MangaDataContext.Provider value={{ mangaBaseData: mangaBaseData }}>
            <Helmet>
                <title>
                    {mangaBaseData.title_english ?? mangaBaseData.title} -
                    AniDom
                </title>
            </Helmet>
            <main className="max-width !px-0 mb-10">
                <div className="bg-slate-200 min-h-32">
                    {mangaBaseData.banner && (
                        <img
                            src={mangaBaseData.banner}
                            alt={
                                mangaBaseData.title_english ??
                                mangaBaseData.title
                            }
                            className="w-full"
                        />
                    )}
                </div>

                <div className="space-y-8">
                    <header className="flex gap-4 bg-white p-5 pb-3">
                        <div
                            className={`flex-shrink-0 w-52 ${
                                mangaBaseData.banner ? "-mt-20" : ""
                            }`}
                        >
                            <img
                                src={mangaBaseData.image_large}
                                alt={
                                    mangaBaseData.title_english ??
                                    mangaBaseData.title
                                }
                                className="w-full h-[295px] mb-2"
                            />
                            {/* <div className="w-full skeleton rounded-none p-2 text-center">
                                Here may be some items
                            </div> */}
                        </div>
                        <div className="flex flex-col">
                            <article className="flex-grow mb-2.5">
                                <h1 className="text-2xl font-semibold font-suse mb-4 text-gray-600">
                                    {mangaBaseData.title_english ??
                                        mangaBaseData.title}
                                </h1>
                                <p className="text-gray-600 flex-grow">
                                    {mangaBaseData.synopsis
                                        .slice(0, 290)
                                        .trim()}
                                    ...{" "}
                                    <span
                                        className="text-xs cursor-pointer hover:underline underline-offset-2"
                                        onClick={(e) =>
                                            (e.target.parentElement.innerHTML =
                                                mangaBaseData.synopsis)
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
                                    href={`${baseUrl}/reviews`}
                                    className="px-2 py-1 hover:text-[dodgerBlue]"
                                >
                                    Review
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
                                        mangaBaseData.type?.toLowerCase()
                                    ] ?? mangaBaseData.type
                                }
                            />
                            <InfoItems
                                heading={"Chapters"}
                                info={mangaBaseData.chapters ?? "Unknown"}
                            />
                            <InfoItems
                                heading={"Volumes"}
                                info={mangaBaseData.volumes ?? "Unknown"}
                            />
                            <InfoItems
                                heading={"Status"}
                                info={mangaBaseData.status}
                            />

                            <InfoItems
                                heading={"Start Date"}
                                info={formatDate(mangaBaseData.published?.from)}
                            />
                            <InfoItems
                                heading={"End Date"}
                                info={formatDate(mangaBaseData.published?.to)}
                            />

                            {mangaBaseData.titles.map((item, idx) => (
                                <InfoItems
                                    key={idx}
                                    heading={item.type}
                                    info={item.title}
                                />
                            ))}

                            <InfoItems
                                heading={"Score"}
                                info={mangaBaseData.score}
                            />
                            <InfoItems
                                heading={"Scored By"}
                                info={mangaBaseData.scored_by}
                            />
                            <InfoItems
                                heading={"Rank (MAL)"}
                                info={`#${mangaBaseData.mal_rank}`}
                            />
                            <InfoItems
                                heading={"Authors"}
                                info={mangaBaseData.authors?.map(
                                    (item, idx) => (
                                        <Fragment key={idx}>
                                            {item.name}
                                            <br />
                                        </Fragment>
                                    )
                                )}
                            />
                            <InfoItems
                                heading={"Genres"}
                                info={mangaBaseData.genres?.map((item, idx) => (
                                    <Fragment key={idx}>
                                        {item.name}
                                        <br />
                                    </Fragment>
                                ))}
                            />
                            <InfoItems
                                heading={"Themes"}
                                info={mangaBaseData.themes?.map((item, idx) => (
                                    <Fragment key={idx}>
                                        {item.name}
                                        <br />
                                    </Fragment>
                                ))}
                            />

                            <div className="divider !mt-0"></div>

                            <InfoItems
                                heading={"External"}
                                info={mangaBaseData.external.map(
                                    (item, idx) => (
                                        <Fragment key={idx}>
                                            {item.name}
                                            <br />
                                        </Fragment>
                                    )
                                )}
                            />
                        </aside>
                        <section className="flex-grow">{children}</section>
                    </div>
                </div>
            </main>
        </MangaDataContext.Provider>
    );
};

export default MangaInfoLayout;
