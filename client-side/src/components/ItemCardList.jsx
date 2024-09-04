import { Tooltip } from "flowbite-react";
import Link from "next/link";

const ItemCardList = ({ item, rank }) => {
    const item1 = {
        id: 54744,
        title: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
        title_english: "Alya Sometimes Hides Her Feelings in Russian",
        title_japanese: "時々ボソッとロシア語でデレる隣のアーリャさん",
        synopsis:
            "Seirei Academy is a prestigious school attended by the very best students in Japan. Alisa Mikhailovna \"Alya\" Kujou, the half-Russian and half-Japanese treasurer of the school's student council, is known for her intelligence, stunning looks, and rigid personality. Contrasting her near-flawless persona, Alya's unmotivated classmate Masachika Kuze slacks off during lessons and seems to show no interest in her.\n\nInitially irritated, Alya gradually becomes more intrigued by Masachika and starts expressing her affection for him in Russian. However, she is oblivious to his secret—he understands the language fluently! Due to a childhood friend who was temporarily staying in Japan, Masachika has been studying Russian in hopes of reuniting with her.\n\nAs the two spend more time together, the playful and eccentric relationship between them quickly deepens. In the meantime, both must learn to navigate their new growing feelings for one another.\n\n[Written by MAL Rewrite]",
        episodes: 12,
        duration: 24,
        image: "https://cdn.myanimelist.net/images/anime/1825/142258l.jpg",
        type: "TV",
        source: "Light novel",
        status: "Currently Airing",
        mal_rank: 759,
        year: 2024,
        season: "summer",
        score: 7.91,
        scored_by: 52526,
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
            <article className="bg-white p-3 flex gap-5 rounded-sm">
                <div className="w-16 h-20 skeleton"></div>
                <p className="h-5 w-52 mt-3 skeleton"></p>
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
