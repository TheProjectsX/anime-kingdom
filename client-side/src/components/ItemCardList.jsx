import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardList = ({ item, rank }) => {
    const animeType = {
        tv: "TV Show",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    if (item === null) {
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
                <Link href={"#"} className="flex-shrink-0">
                    <img
                        src={item.image}
                        alt={item.title_english ?? item.title}
                        className="w-14 h-20 hover:scale-[3.5] transition-[transform] duration-500"
                    />
                </Link>
                <div className="flex flex-grow flex-col gap-3 md:gap-0 md:flex-row">
                    <div className="flex-grow">
                        <Link
                            href={"#"}
                            className="text-gray-600 font-semibold font-suse mb-2.5 inline-block hover:text-green-500 transition-colors"
                        >
                            {item.title_english ?? item.title}
                        </Link>
                        <p className="flex gap-2 flex-wrap">
                            {item.genres?.map((item) => (
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
                                {item.score}
                            </p>
                            <p className="text-sm font-semibold text-gray-400">
                                {item.scored_by} users
                            </p>
                        </div>
                        <div className="md:w-32 flex gap-2.5 md:gap-0 md:flex-col items-end md:items-start">
                            <p className="font-semibold font-suse text-gray-500">
                                {animeType[item.type?.toLowerCase()] ??
                                    item.type}
                            </p>
                            <p className="text-sm font-semibold text-gray-400">
                                {item.type?.toLowerCase() === "movie"
                                    ? `${item.duration[0]} hour(s), ${item.duration[1]} mins`
                                    : item.episodes
                                    ? `${item.episodes} episodes`
                                    : `${item.duration ?? 0} mins`}
                            </p>
                        </div>
                        <Tooltip
                            content={
                                <p>
                                    {item.aired?.string?.includes("to") &&
                                        "from "}
                                    {item.aired?.string}
                                </p>
                            }
                            placement="right"
                            className={`${item.aired?.string ? "" : "hidden"}`}
                        >
                            <div className="md:w-32 flex gap-2.5 md:gap-0 md:flex-col items-end md:items-start">
                                <p className="font-semibold font-suse text-gray-500">
                                    {capitalizeWord(item.season)} {item.year}
                                </p>
                                <p className="text-sm font-semibold text-gray-400">
                                    {item.status}
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
