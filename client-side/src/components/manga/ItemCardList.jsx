import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardList = ({ mangaData, rank }) => {
    const animeType = {
        tv: "TV Series",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    if (mangaData === null) {
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
                <Link href={`/anime/${mangaData.id}`} className="flex-shrink-0">
                    <img
                        src={mangaData.image}
                        alt={mangaData.title_english ?? mangaData.title}
                        className="w-14 h-20 hover:scale-[3.5] transition-[transform] duration-500"
                    />
                </Link>
                <div className="flex flex-grow flex-col items-center gap-3 md:gap-0 md:flex-row">
                    <div className="flex-grow">
                        <Link
                            href={`/anime/${mangaData.id}`}
                            className="text-gray-600 font-semibold font-suse mb-2.5 inline-block hover:text-green-500 transition-colors"
                        >
                            {mangaData.title_english ?? mangaData.title}
                        </Link>
                        <p className="flex gap-2 flex-wrap">
                            {mangaData.genres?.slice(0, 3).map((item) => (
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
                                {mangaData.score}
                            </p>
                            <p className="text-sm font-semibold text-gray-400">
                                {mangaData.scored_by} users
                            </p>
                        </div>
                        <div className="md:w-32 flex gap-2.5 md:gap-0 md:flex-col items-end md:items-start">
                            <p className="font-semibold font-suse text-gray-500">
                                {animeType[mangaData.type?.toLowerCase()] ??
                                    mangaData.type}
                            </p>
                            <p className="text-sm font-semibold text-gray-400">
                                {mangaData.volumes && `${mangaData.volumes} V`}
                                {mangaData.chapters &&
                                    ` - ${mangaData.chapters} C`}{" "}
                            </p>
                        </div>
                        <div className="md:w-32 flex gap-2.5 md:gap-0 md:flex-col items-end md:items-start">
                            <p className="font-semibold font-suse text-gray-500">
                                {mangaData.status}
                            </p>
                            <p className="text-sm font-semibold text-gray-400">
                                {mangaData.published?.string ?? "Unknown"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ItemCardList;
