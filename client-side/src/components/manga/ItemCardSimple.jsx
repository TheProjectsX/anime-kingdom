import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardSimple = ({ mangaData, rank }) => {
    if (mangaData === null) {
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
                                {mangaData.title_english ?? mangaData.title}
                            </h4>
                            <p className="font-semibold font-suse text-orange-500">
                                {mangaData.score ?? ""}
                            </p>
                        </div>

                        <Tooltip
                            content={
                                <span>
                                    {mangaData.published?.string?.includes(
                                        "to"
                                    ) && "from "}
                                    {mangaData.published?.string}
                                </span>
                            }
                            placement="right"
                            className={`${
                                mangaData.published?.string ? "" : "hidden"
                            } w-max`}
                            style="light"
                        >
                            <p className="text-base font-medium text-slate-500 dark:text-slate-200 mb-1">
                                {mangaData.status}
                            </p>
                        </Tooltip>
                        <div className="mb-2 flex gap-2">
                            Authors:{" "}
                            <p className="flex flex-wrap gap-2">
                                {mangaData.authors?.map((item) => (
                                    <Link
                                        href={`/staffs/${item.id}`}
                                        className="text-amber-700 dark:text-amber-500 inline-block hover:underline underline-offset-2"
                                        key={item.id}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </p>
                        </div>
                        <div className="text-zinc-800 dark:text-zinc-300 text-sm font-medium mb-3 flex">
                            {mangaData.type}{" "}
                            {mangaData.volumes &&
                                ` - ${mangaData.volumes} Volumes`}
                            {mangaData.chapters &&
                                ` - ${mangaData.chapters} Chapters`}{" "}
                        </div>
                        <p className="flex gap-2 flex-wrap">
                            {mangaData.genres?.map((item) => (
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
                    href={`/manga/${
                        mangaData.id ?? mangaData.mal_id
                    }/${nameToUrl(mangaData.title_english ?? mangaData.title)}`}
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
                            src={mangaData.image}
                            alt={mangaData.title_english ?? mangaData.title}
                            className="absolute top-0 left-0 w-full h-full rounded-lg bg-pink-400"
                        />
                    </div>
                    <h3
                        // href={`/anime/${item.id}`}
                        className="text-sm md:text-base font-semibold text-gray-500 font-suse group-hover:text-sky-500 truncate-text"
                    >
                        {mangaData.title_english ?? mangaData.title}
                    </h3>
                </Link>
            </Tooltip>
        </article>
    );
};

export default ItemCardSimple;
