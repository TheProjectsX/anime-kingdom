"use client";

import MangaDataContext from "@/context/MangaDataContext";
import Link from "next/link";
import { formatDate, nameToUrl } from "@/utils/HelperFunctions";
import { Helmet } from "react-helmet";
import { usePathname } from "next/navigation";

const MangaInfoLayout = ({ mangaId, mangaBaseData, children }) => {
    const pathname = usePathname();

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

    const baseUrl = `/manga/${mangaId}/${nameToUrl(
        mangaBaseData.title_english ?? mangaBaseData.title
    )}`;

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
            label: "Review",
            href: "/reviews",
        },
        {
            label: "Pictures",
            href: "/pictures",
        },
    ];

    return (
        <MangaDataContext.Provider value={{ mangaBaseData: mangaBaseData }}>
            <Helmet>
                <title>
                    {mangaBaseData.title_english ?? mangaBaseData.title} -
                    AniDom
                </title>
            </Helmet>
            <main className="max-width !px-0 mb-10">
                <div
                    className={`bg-slate-200 ${
                        !mangaBaseData.banner ? "min-h-32" : ""
                    }`}
                >
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
                    {/* <header className="flex gap-4 bg-white p-5 pb-3">
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
                    </header> */}

                    <div className="bg-white">
                        <header className="flex gap-4 p-5 pb-0 sm:pb-3">
                            <div
                                className={`flex-shrink-0 w-28 sm:w-52 sm:h-[295px] -mt-20`}
                            >
                                <img
                                    src={mangaBaseData.image_large}
                                    alt={
                                        mangaBaseData.title_english ??
                                        mangaBaseData.title
                                    }
                                    className="w-full h-full mb-2"
                                />
                            </div>
                            <div className="sm:hidden">
                                <p className="font-semibold text-gray-800 mb-0.5">
                                    #{mangaBaseData.mal_rank}{" "}
                                    <span className="font-normal text-xs">
                                        (MAL)
                                    </span>
                                </p>
                                <p className="text-sm font-semibold text-gray-500">
                                    {mangaBaseData.status}
                                </p>
                                <p className="text-sm font-semibold text-gray-500">
                                    {mangaBaseData.type}
                                </p>
                            </div>
                            <div className="flex-col flex-grow hidden sm:flex">
                                <article className="flex-grow mb-2.5">
                                    <h1 className="text-lg sm:text-2xl font-semibold font-suse mb-4 text-gray-600">
                                        {mangaBaseData.title_english ??
                                            mangaBaseData.title}
                                    </h1>
                                    {mangaBaseData.synopsis ? (
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
                                    ) : (
                                        <p className="text-gray-600 flex-grow italic">
                                            No Synopsis available
                                        </p>
                                    )}
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
                            {mangaBaseData.title_english ?? mangaBaseData.title}
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
                                info={mangaBaseData.type}
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
                                        <Link
                                            key={idx}
                                            href={`/staffs/${item.mal_id}`}
                                            className="hover:underline underline-offset-2"
                                        >
                                            {item.name}
                                            <br className="hidden sm:block" />
                                        </Link>
                                    )
                                )}
                            />
                            <InfoItems
                                heading={"Genres"}
                                info={mangaBaseData.genres?.map((item, idx) => (
                                    <span key={idx}>
                                        {item.name}
                                        <br className="hidden sm:block" />
                                    </span>
                                ))}
                            />
                            <InfoItems
                                heading={"Themes"}
                                info={mangaBaseData.themes?.map((item, idx) => (
                                    <span key={idx}>
                                        {item.name}
                                        <br className="hidden sm:block" />
                                    </span>
                                ))}
                            />

                            <div className="divider !mt-0"></div>

                            <InfoItems
                                heading={"External"}
                                info={mangaBaseData.external.map(
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
                        {/* <aside className="bg-white w-52 h-fit px-4 py-3 space-y-2.5 flex-shrink-0">
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
                                            <br className="hidden sm:block"/>
                                        </Fragment>
                                    )
                                )}
                            />
                            <InfoItems
                                heading={"Genres"}
                                info={mangaBaseData.genres?.map((item, idx) => (
                                    <Fragment key={idx}>
                                        {item.name}
                                        <br className="hidden sm:block"/>
                                    </Fragment>
                                ))}
                            />
                            <InfoItems
                                heading={"Themes"}
                                info={mangaBaseData.themes?.map((item, idx) => (
                                    <Fragment key={idx}>
                                        {item.name}
                                        <br className="hidden sm:block"/>
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
                                            <br className="hidden sm:block"/>
                                        </Fragment>
                                    )
                                )}
                            />
                        </aside> */}

                        <section className="flex-grow">{children}</section>
                    </div>
                </div>
            </main>
        </MangaDataContext.Provider>
    );
};

export default MangaInfoLayout;
