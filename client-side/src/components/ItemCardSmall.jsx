import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardSmall = ({ item, rank }) => {
    const truncateTextStyle = {
        display: "-webkit-box", // Display as a block with flexbox capabilities
        WebkitBoxOrient: "vertical", // Set the box orientation to vertical
        overflow: "hidden", // Hide the overflowing content
        WebkitLineClamp: 2, // Set the number of lines to clamp (2 lines)
        lineClamp: 2, // Standard property for line clamping (if supported)
        textOverflow: "ellipsis", // Add ellipsis at the end
        // maxHeight: "2.50rem", // Limit the height of the container (2 lines)
    };

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

    return (
        <article className="dark">
            <Tooltip
                className="hidden md:block"
                style="auto"
                content={
                    <div className="p-3 max-w-80">
                        <div className="flex gap-3 items-start justify-between">
                            <h4 className="text-lg font-semibold font-suse mb-2">
                                {item.title_english}
                            </h4>
                            <p className="font-semibold font-suse">
                                {item.score ?? ""}
                            </p>
                        </div>
                        <p className="text-base font-medium text-slate-500 dark:text-slate-200 mb-1">
                            {item.status} (
                            <span className="text-sm">{item.source}</span>)
                        </p>
                        <div className="mb-2 flex gap-2">
                            Studio:{" "}
                            <p className="flex flex-wrap gap-2">
                                {item.studios.map((item) => (
                                    <Link
                                        href={"#"}
                                        className="text-amber-700 dark:text-amber-500 inline-block hover:underline underline-offset-2"
                                        key={item.id}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </p>
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-300 text-sm font-medium mb-3">
                            {animeType[item.type?.toLowerCase()] ?? item.type}{" "}
                            {item.episodes && ` - ${item.episodes} Episodes`} -{" "}
                            <Link
                                href={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                {capitalizeWord(item.season)} {item.year}
                            </Link>
                        </p>
                        <p className="flex gap-2 flex-wrap">
                            {item.genres.map((item) => (
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
                <div className="w-52 sm:w-44 lg:w-48 relative">
                    {rank && (
                        <p className="bg-amber-500 py-1 px-2 rounded-full absolute -right-1.5 -top-1.5 sm:-right-3 sm:-top-3">
                            <span className="text-sm font-suse">#</span>
                            <span className="text-lg font-medium">{rank}</span>
                        </p>
                    )}
                    <img
                        src={item.image}
                        alt={item.title_english}
                        className="w-full h-[290px] sm:h-[250px] lg:h-[272px] mb-3 rounded-lg hover:scale-110 transition-[transform] duration-300"
                    />
                    <Link
                        href={"#"}
                        className="text-sm md:text-base font-semibold text-gray-500 font-suse hover:underline underline-offset-4"
                        style={truncateTextStyle}
                    >
                        {item.title_english}
                    </Link>
                </div>
            </Tooltip>
        </article>
    );
};

export default ItemCardSmall;
