import { capitalizeWord } from "@/utils/HelperFunctions";
import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardSimple = ({ animeData, rank }) => {
    const animeType = {
        tv: "TV Series",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    if (animeData === null) {
        return (
            <article>
                <div className="skeleton bg-slate-300 w-full pb-[141.5%] mb-3"></div>
                <p className="skeleton bg-slate-300 h-5 w-[90%]"></p>
            </article>
        );
    }

    return (
        <article className="dark [&_>div:first-of-type]:w-full">
            <Tooltip
                className="hidden sm:block"
                style="auto"
                content={
                    <div className="p-3 max-w-80">
                        <div className="flex gap-3 items-start justify-between">
                            <h4 className="text-lg font-semibold font-suse mb-2">
                                {animeData.title_english ?? animeData.title}
                            </h4>
                            <p className="font-semibold font-suse text-orange-500">
                                {animeData.score ?? ""}
                            </p>
                        </div>
                        <p className="text-base font-medium text-slate-500 dark:text-slate-200 mb-1">
                            {animeData.status} (
                            <span className="text-sm">{animeData.source}</span>)
                        </p>
                        <div className="mb-2 flex gap-2">
                            Studio:{" "}
                            <p className="flex flex-wrap gap-2">
                                {animeData.studios?.map((item) => (
                                    <Link
                                        href={`/studio/${item.id}`}
                                        className="text-amber-700 dark:text-amber-500 inline-block hover:underline underline-offset-2"
                                        key={item.id}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </p>
                        </div>
                        <div className="text-zinc-800 dark:text-zinc-300 text-sm font-medium mb-3 flex">
                            {animeType[animeData.type?.toLowerCase()] ??
                                animeData.type}{" "}
                            {animeData.type?.toLowerCase() === "movie"
                                ? animeData.duration &&
                                  ` - ${animeData.duration[0]} hour(s) ${animeData.duration[1]} mins`
                                : animeData.episodes &&
                                  ` - ${animeData.episodes} Episodes`}{" "}
                            <span>&nbsp;-&nbsp;</span>
                            <Tooltip
                                content={
                                    <span>
                                        {animeData.aired?.string?.includes(
                                            "to"
                                        ) && "from "}
                                        {animeData.aired?.string}
                                    </span>
                                }
                                placement="right"
                                className={`${
                                    animeData.aired?.string ? "" : "hidden"
                                } w-max`}
                                style="light"
                            >
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-2"
                                >
                                    {capitalizeWord(animeData.season)}{" "}
                                    {animeData.year}
                                </Link>
                            </Tooltip>
                        </div>
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
                }
                placement="right"
            >
                <Link
                    href={`/anime/${
                        animeData.id ?? animeData.mal_id
                    }/${nameToUrl(animeData.title_english ?? animeData.title)}`}
                    className="block relative group"
                >
                    {rank && (
                        <p className="bg-amber-500 py-1 px-2 rounded-full absolute -right-1.5 -top-1.5 sm:-right-3 sm:-top-3 z-10">
                            <span className="text-sm font-suse">#</span>
                            <span className="text-lg font-medium">{rank}</span>
                        </p>
                    )}
                    <div className="relative w-full pb-[141.5%] overflow-hidden mb-2 ">
                        <img
                            src={animeData.image}
                            alt={animeData.title_english ?? animeData.title}
                            className="absolute top-0 left-0 w-full h-full rounded-lg bg-pink-400"
                        />
                    </div>
                    <h3
                        // href={`/anime/${item.id}`}
                        className="text-sm md:text-base font-semibold text-gray-500 font-suse group-hover:text-sky-500 truncate-text"
                    >
                        {animeData.title_english ?? animeData.title}
                    </h3>
                </Link>
            </Tooltip>
        </article>
    );
};

export default ItemCardSimple;
