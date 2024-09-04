import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardGrid = ({ item, rank }) => {
    const item1 = {
        id: 54744,
        title: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
        title_english: "Alya Sometimes Hides Her Feelings in Russian",
        title_japanese: "時々ボソッとロシア語でデレる隣のアーリャさん",
        synopsis:
            "Seirei Academy is a prestigious school attended by the very best students in Japan. Alisa Mikhailovna \"Alya\" Kujou, the half-Russian and half-Japanese treasurer of the school's student council, is known for her intelligence, stunning looks, and rigid personality. Contrasting her near-flawless persona, Alya's unmotivated classmate Masachika Kuze slacks off during lessons and seems to show no interest in her.\n\nInitially irritated, Alya gradually becomes more intrigued by Masachika and starts expressing her affection for him in Russian. However, she is oblivious to his secret—he understands the language fluently! Due to a childhood friend who was temporarily staying in Japan, Masachika has been studying Russian in hopes of reuniting with her.\n\nAs the two spend more time together, the playful and eccentric relationship between them quickly deepens. In the meantime, both must learn to navigate their new growing feelings for one another.\n\n[Written by MAL Rewrite]",
        episodes: 12,
        image: "https://cdn.myanimelist.net/images/anime/1825/142258l.jpg",
        type: "TV",
        source: "Light novel",
        status: "Currently Airing",
        mal_rank: 759,
        year: 2024,
        season: "summer",
        score: 7.91,
        studios: [
            {
                id: 95,
                type: "anime",
                name: "Doga Kobo",
            },
        ],
        genres: [
            {
                id: 4,
                type: "anime",
                name: "Comedy",
            },
            {
                id: 22,
                type: "anime",
                name: "Romance",
            },
        ],
        themes: [
            {
                id: 23,
                type: "anime",
                name: "School",
            },
        ],
        demographics: [],
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

    if (item === null) {
        return (
            <article className="h-[290px] sm:h-[250px] lg:h-[272px] bg-white rounded-md overflow-hidden">
                <div className="w-52 sm:w-44 lg:w-48 h-full skeleton rounded-none"></div>
            </article>
        );
    }

    return (
        <article className="flex h-[290px] sm:h-[250px] lg:h-[272px] rounded-md overflow-hidden">
            <div className="w-52 sm:w-44 lg:w-48 flex-shrink-0 relative">
                {rank && (
                    <p className="bg-amber-500 py-1 px-2 rounded-bl-xl absolute -top-2 right-0 z-10">
                        <span className="text-sm font-suse">#</span>
                        <span className="text-lg font-medium">{rank}</span>
                    </p>
                )}
                <Link href={"#"}>
                    <img
                        src={item.image}
                        alt={item.title_english ?? item.title}
                        className="w-full h-full"
                    />
                </Link>
                <div className="w-full absolute bottom-0 bg-slate-700/80 p-2">
                    <Link
                        href={"#"}
                        className="text-white hover:text-green-300 transition-colors text-sm font-suse font-semibold"
                    >
                        {item.title_english ?? item.title}
                    </Link>
                    <p className="flex gap-2 flex-wrap">
                        {item.studios?.map((item) => (
                            <Link
                                href={"#"}
                                className="text-amber-500 text-sm inline-block hover:underline underline-offset-2 text-semibold"
                                key={item.id}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </p>
                </div>
            </div>

            {/* Description Section */}
            <div className="bg-white relative w-full">
                {/* The Overflow Items */}
                <div className="px-3 py-2.5 h-[250px] sm:h-[210px] lg:h-[232px] overflow-y-hidden hover:pr-1 hover:overflow-y-auto scrollbar-thin scrollbar-track-transparent">
                    {/* Header Info */}
                    <div className="flex gap-2 justify-between">
                        {/* Header Info Data */}
                        <div>
                            <p className="text-xs font-semibold text-gray-400">
                                {item.status} ({item.source})
                            </p>
                            <Tooltip
                                content={
                                    <p>
                                        {item.aired?.string?.includes("to") &&
                                            "from "}
                                        {item.aired?.string}
                                    </p>
                                }
                                placement="right"
                                className={`${
                                    item.aired?.string ? "" : "hidden"
                                }`}
                            >
                                <p className="text-gray-500 font-semibold">
                                    {capitalizeWord(item.season)} {item.year}
                                </p>
                            </Tooltip>
                            <p className="text-xs mb-2 font-semibold">
                                {animeType[item.type?.toLowerCase()] ??
                                    item.type}{" "}
                                {item.type?.toLowerCase() === "movie"
                                    ? `${item.duration[0]} hour(s), ${item.duration[1]} mins`
                                    : item.episodes
                                    ? `${item.episodes} episodes`
                                    : `${item.duration ?? 0} mins`}{" "}
                            </p>
                        </div>
                        {/* Header Info Score */}
                        <p className="font-semibold font-suse">
                            {item.score ?? ""}
                        </p>
                    </div>
                    <p className="text-[13px] text-zinc-500">{item.synopsis}</p>
                </div>
                {/* Genres */}
                <div className="flex gap-2 justify-center w-full flex-wrap absolute bottom-0 p-2.5 bg-slate-100">
                    {item.genres.slice(0, 2).map((item) => (
                        <Link
                            href={"#"}
                            key={item.id}
                            className="badge badge-info text-gray-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ItemCardGrid;
