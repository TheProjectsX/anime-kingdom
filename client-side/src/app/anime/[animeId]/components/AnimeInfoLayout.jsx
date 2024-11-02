"use client";

import { Fragment } from "react";
import AnimeDataContext from "@/context/AnimeDataContext";
import Link from "next/link";
import { capitalizeWord, formatDate } from "@/utils/HelperFunctions";
import { Helmet } from "react-helmet";
import { usePathname } from "next/navigation";

const AnimeInfoLayout = ({ animeId, animeBaseData, children }) => {
    const pathname = usePathname();
    const animeType = {
        tv: "TV Series",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    const InfoItems = ({ heading, info, className = "" }) => {
        return (
            <div className={className}>
                <h3 className="font-semibold text-gray-600 mb-0.5 font-suse text-nowrap sm:text-wrap">
                    {heading}
                </h3>
                <p className="text-sm text-gray-600 text-nowrap sm:text-wrap flex sm:flex-col gap-1.5">
                    {info}
                </p>
            </div>
        );
    };

    const baseUrl = `/anime/${animeId}/${
        animeBaseData.title_english
            ?.replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s+/g, "-") ??
        animeBaseData.title?.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "-")
    }`;

    const subNavLinks = [
        {
            label: "Overview",
            href: "",
        },
        {
            label: "Characters",
            href: "/characters",
        },
        {
            label: "Staffs",
            href: "/staffs",
        },
        {
            label: "Review",
            href: "/reviews",
        },
        {
            label: "Videos",
            href: "/videos",
        },
        {
            label: "Pictures",
            href: "/pictures",
        },
    ];

    return (
        <AnimeDataContext.Provider value={{ animeBaseData }}>
            <Helmet>
                <title>
                    {animeBaseData.title_english ?? animeBaseData.title} -
                    AniDom
                </title>
            </Helmet>
            <main className="max-width !px-0 mb-10">
                <div className={`bg-slate-200 min-h-16 sm:min-h-32`}>
                    {animeBaseData.banner && (
                        <img
                            src={animeBaseData.banner}
                            alt={
                                animeBaseData.title_english ??
                                animeBaseData.title
                            }
                            className="w-full"
                        />
                    )}
                </div>

                <div className="space-y-8">
                    <div className="bg-white">
                        <header className="flex gap-4 p-5 pb-0 sm:pb-3">
                            <div
                                className={`flex-shrink-0 w-28 sm:w-52 sm:h-[295px] -mt-20`}
                            >
                                <img
                                    src={animeBaseData.image_large}
                                    alt={
                                        animeBaseData.title_english ??
                                        animeBaseData.title
                                    }
                                    className="w-full h-full mb-2"
                                />
                            </div>
                            <div className="sm:hidden">
                                <p className="font-semibold text-gray-800 mb-0.5">
                                    #{animeBaseData.mal_rank}{" "}
                                    <span className="font-normal text-xs">
                                        (MAL)
                                    </span>
                                </p>
                                <p className="text-sm font-semibold text-gray-500">
                                    {animeBaseData.status}
                                </p>
                                <p className="text-sm font-semibold text-gray-500">
                                    {animeType[
                                        animeBaseData.type?.toLowerCase()
                                    ] ?? animeBaseData.type}
                                </p>
                            </div>
                            <div className="flex-col flex-grow hidden sm:flex">
                                <article className="flex-grow mb-2.5">
                                    <h1 className="text-lg sm:text-2xl font-semibold font-suse mb-4 text-gray-600">
                                        {animeBaseData.title_english ??
                                            animeBaseData.title}
                                    </h1>
                                    <p className="text-gray-600 flex-grow ">
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

                                <div className="px-4 w-full justify-evenly text-sm text-gray-500 [&_.active]:text-black [&_.active]:font-medium hidden sm:flex">
                                    {subNavLinks.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={`${baseUrl}${item.href}`}
                                            className={`px-2 py-1 hover:text-[dodgerBlue] ${
                                                pathname ===
                                                `${baseUrl}${item.href}`
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </header>
                        <h1 className="text-base font-semibold font-suse text-gray-600 px-4 pt-2 sm:hidden">
                            {animeBaseData.title_english ?? animeBaseData.title}
                        </h1>
                        <div className="py-2 px-4 w-full justify-evenly text-sm text-gray-500 [&_.active]:text-black [&_.active]:font-medium flex sm:hidden max-w-80 overflow-auto scrollbar-thin">
                            {subNavLinks.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={`${baseUrl}${item.href}`}
                                    className={`px-2 py-1 hover:text-[dodgerBlue] ${
                                        pathname === `${baseUrl}${item.href}`
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* The main Information */}
                    <div className="px-2 sm:px-5 flex gap-4 flex-col sm:flex-row">
                        <aside className="bg-white flex gap-3.5 sm:gap-2.5 sm:flex-col sm:w-52 h-fit px-4 py-3 flex-shrink-0  *:flex-grow max-w-80 overflow-auto scrollbar-thin">
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
                                    animeBaseData.duration
                                        ? animeBaseData.type?.toLowerCase() ===
                                          "movie"
                                            ? `${animeBaseData.duration[0]} hour(s), ${animeBaseData.duration[1]} mins`
                                            : `${
                                                  animeBaseData.duration ?? 0
                                              } mins`
                                        : "0 mins"
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
                                        <br className="hidden sm:block" />
                                    </Fragment>
                                ))}
                            />
                            <InfoItems
                                heading={"Themes"}
                                info={animeBaseData.themes.map((item, idx) => (
                                    <Fragment key={idx}>
                                        {item.name}
                                        <br className="hidden sm:block" />
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
                                        <br className="hidden sm:block" />
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
                                            <br className="hidden sm:block" />
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
                                            <br className="hidden sm:block" />
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
                                            <br className="hidden sm:block" />
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
