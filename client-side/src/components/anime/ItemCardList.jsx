import { capitalizeWord, nameToUrl } from "@/utils/HelperFunctions";
import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardList = ({ animeData, rank }) => {
    const animeType = {
        tv: "TV Series",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    if (animeData === null) {
        return (
            <article className="bg-white p-3 flex gap-5 rounded-sm">
                <div className="w-16 h-20 skeleton bg-slate-300"></div>
                <p className="h-5 w-52 mt-3 skeleton bg-slate-300"></p>
            </article>
        );
    }

    return (
        <article className="flex items-center gap-3">
            {rank && (
                <p className="text-2xl font-semibold font-suse text-gray-500 w-16 text-center">
                    <span className="text-base">#</span>
                    {rank}
                </p>
            )}
            <div className="bg-white p-3 rounded-sm flex items-center gap-5 flex-grow">
                <Link
                    href={`/anime/${
                        animeData.id ?? animeData.mal_id
                    }/${nameToUrl(animeData.title_english ?? animeData.title)}`}
                    className="flex-shrink-0"
                >
                    <img
                        src={animeData.image}
                        alt={animeData.title_english ?? animeData.title}
                        className="w-14 h-20 hover:scale-[3.5] transition-[transform] duration-500"
                    />
                </Link>
                <div className="flex flex-grow flex-col gap-3 md:gap-0 md:flex-row">
                    <div className="flex-grow">
                        <Link
                            href={`/anime/${
                                animeData.id ?? animeData.mal_id
                            }/${nameToUrl(
                                animeData.title_english ?? animeData.title
                            )}`}
                            className="text-gray-600 font-semibold font-suse mb-2.5 inline-block hover:text-green-500 transition-colors"
                        >
                            {animeData.title_english ?? animeData.title}
                        </Link>
                        <p className="flex gap-2 flex-wrap">
                            {animeData.genres?.map((item) => (
                                <Link
                                    href={"#"}
                                    key={item.id}
                                    className="badge badge-info text-gray-100"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </p>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap *:mr-3">
                        <div className="md:w-32 flex gap-2.5 md:gap-0 md:flex-col items-end md:items-start">
                            <p className="font-semibold font-suse text-gray-500">
                                {animeData.score ?? (
                                    <span className="italic text-sm">
                                        Unknown
                                    </span>
                                )}
                            </p>
                            <p className="text-sm font-semibold text-gray-400">
                                {animeData.scored_by ?? (
                                    <span className="italic">Unknown</span>
                                )}{" "}
                                users
                            </p>
                        </div>
                        <div className="md:w-32 flex gap-2.5 md:gap-0 md:flex-col items-end md:items-start">
                            <p className="font-semibold font-suse text-gray-500">
                                {animeType[animeData.type?.toLowerCase()] ??
                                    animeData.type}
                            </p>
                            <p className="text-sm font-semibold text-gray-400">
                                {!animeData.duration
                                    ? "Unknown"
                                    : animeData.type?.toLowerCase() === "movie"
                                    ? `${animeData.duration[0]} hour(s), ${animeData.duration[1]} mins`
                                    : animeData.episodes
                                    ? `${animeData.episodes} episodes`
                                    : `${animeData.duration ?? 0} mins`}
                            </p>
                        </div>
                        <Tooltip
                            content={
                                <p>
                                    {animeData.aired?.string?.includes("to") &&
                                        "from "}
                                    {animeData.aired?.string}
                                </p>
                            }
                            placement="right"
                            className={`${
                                animeData.aired?.string ? "" : "hidden"
                            }`}
                        >
                            <div className="md:w-32 flex gap-2.5 md:gap-0 md:flex-col items-end md:items-start">
                                <p className="font-semibold font-suse text-gray-500">
                                    {capitalizeWord(animeData.season)}{" "}
                                    {animeData.year}
                                </p>
                                <p className="text-sm font-semibold text-gray-400">
                                    {animeData.status}
                                </p>
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ItemCardList;
