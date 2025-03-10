import { nameToUrl } from "@/utils/HelperFunctions";
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

    const tooltipContent = (
        <div className="px-2 py-1.5 max-w-80">
            <div className="flex gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Tooltip
                        content={
                            <span>
                                {mangaData.published?.string?.includes("to") &&
                                    "from "}
                                {mangaData.published?.string}
                            </span>
                        }
                        placement="right"
                        className={`${
                            mangaData.published?.string ? "" : "hidden"
                        } w-max`}
                        style="dark"
                    >
                        <p className="font-medium text-lg mb-1 cursor-pointer">
                            {mangaData.status}
                        </p>
                    </Tooltip>

                    <p className="text-sm">({mangaData.type})</p>
                </div>

                <p className="font-semibold font-suse text-orange-500 text-base">
                    {mangaData.score ?? ""}
                </p>
            </div>

            <div className="mb-2 flex gap-2">
                Authors:{" "}
                <p className="flex flex-wrap gap-2">
                    {mangaData.authors?.slice(0, 2).map((item) => (
                        <Link
                            href={`/staffs/${item.id}/${nameToUrl(item.name)}`}
                            className="text-amber-500 inline-block hover:underline underline-offset-2"
                            key={item.id}
                        >
                            {item.name}
                        </Link>
                    ))}
                </p>
            </div>
            {(mangaData.volumes || mangaData.chapters) && (
                <div className="text-zinc-800 text-sm font-medium mb-3 flex">
                    {mangaData.volumes && `${mangaData.volumes} Volumes`}
                    {mangaData.chapters &&
                        ` - ${mangaData.chapters} Chapters`}{" "}
                </div>
            )}
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
    );

    const mangaDetailsPath = `/manga/${mangaData.id}/${nameToUrl(
        mangaData.title_english ?? mangaData.title
    )}`;

    return (
        <article className="[&_>div:first-of-type]:w-full">
            <Tooltip
                className="hidden sm:block"
                style="light"
                content={tooltipContent}
                placement="right"
            >
                <Link href={mangaDetailsPath} className="block relative group">
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
                    <h3 className="text-sm md:text-base font-medium text-gray-600 font-ubuntu group-hover:text-sky-500 truncate-text">
                        {mangaData.title_english ?? mangaData.title}
                    </h3>
                </Link>
            </Tooltip>
        </article>
    );
};

export default ItemCardSimple;
