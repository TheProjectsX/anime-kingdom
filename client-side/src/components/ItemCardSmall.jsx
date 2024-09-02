import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardSmall = ({ item }) => {
    const item1 = {
        id: 16498,
        title: "Shingeki no Kyojin",
        title_english: "Attack on Titan",
        title_japanese: "\u9032\u6483\u306e\u5de8\u4eba",
        synopsis:
            "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.\n\n[Written by MAL Rewrite]",
        episodes: 25,
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        type: "TV",
        source: "Manga",
        status: "Finished Airing",
        mal_rank: 109,
        year: 2013,
        score: 8.55,
        studios: [{ id: 858, type: "anime", name: "Wit Studio" }],
        genres: [
            { id: 1, type: "anime", name: "Action" },
            { id: 46, type: "anime", name: "Award Winning" },
            { id: 8, type: "anime", name: "Drama" },
            { id: 41, type: "anime", name: "Suspense" },
        ],
        themes: [
            { id: 58, type: "anime", name: "Gore" },
            { id: 38, type: "anime", name: "Military" },
            { id: 76, type: "anime", name: "Survival" },
        ],
        demographics: [{ id: 27, type: "anime", name: "Shounen" }],
    };
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

    return (
        <article className="dark">
            <Tooltip
                style="auto"
                content={
                    <div className="px-3 py-1 max-w-72">
                        <h5 className="text-lg font-medium text-slate-500 dark:text-slate-200 mb-2">
                            {item.status} (
                            <span className="text-base">{item.source}</span>)
                        </h5>
                        <Link
                            href={"#"}
                            className="text-amber-700 dark:text-amber-500 mb-1 inline-block hover:underline underline-offset-2"
                        >
                            {item.studios.map((item) => (
                                <span key={item.id}>{item.name}</span>
                            ))}
                        </Link>
                        <p className="text-zinc-800 dark:text-zinc-300 text-sm font-semibold mb-3">
                            {animeType[item.type?.toLowerCase()] ?? item.type}{" "}
                            {item.episodes && ` - ${item.episodes} Episodes`}
                        </p>
                        <p className="flex gap-2 flex-wrap">
                            {item.genres.map((item) => (
                                <Link
                                    href={"#"}
                                    key={item.id}
                                    className="badge badge-neutral"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </p>
                    </div>
                }
                placement="right"
            >
                <div className="w-52 sm:w-44 lg:w-48">
                    <img
                        src={item.image}
                        alt={item.title_english}
                        className="w-full h-[290px] sm:h-[250px] lg:h-[272px] mb-3 rounded-lg"
                    />
                    <h3
                        className="text-sm font-semibold text-gray-500 font-suse"
                        style={truncateTextStyle}
                    >
                        {/* {item.title_english.length > 48
                ? `${item.title_english.slice(0, 48)}...`
                : item.title_english} */}
                        {item.title_english}
                    </h3>
                </div>
            </Tooltip>
        </article>
    );
};

export default ItemCardSmall;
