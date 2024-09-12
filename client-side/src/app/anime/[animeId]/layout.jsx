"use client";

export default function RootLayout({ children, params }) {
    const { animeId } = params;
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}`
    // );
    // const serverData = await res.json();
    // if (!serverData.success) {
    //     console.log("Not Found");
    //     // Do something
    // }

    // const animeBaseData = serverData.get("data", {})
    const animeBaseData = {
        id: 57524,
        title: "Make Heroine ga Oosugiru!",
        title_english: "Makeine: Too Many Losing Heroines!",
        title_japanese: "負けヒロインが多すぎる！",
        image: "https://cdn.myanimelist.net/images/anime/1332/143513.jpg",
        image_large:
            "https://cdn.myanimelist.net/images/anime/1332/143513l.jpg",
        banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/171457-VBH6gmvCKHwV.jpg",
        trailer: {
            youtube_id: "uytJ6_KTCZI",
            video: "https://www.youtube.com/watch?v=uytJ6_KTCZI",
            embed: "https://www.youtube.com/embed/uytJ6_KTCZI?enablejsapi=1&wmode=opaque&autoplay=1",
            image: "https://img.youtube.com/vi/uytJ6_KTCZI/mqdefault.jpg",
            image_large:
                "https://img.youtube.com/vi/uytJ6_KTCZI/maxresdefault.jpg",
        },
        synopsis:
            'Despite not understanding much about fleeting teen romance, first-year high school student Kazuhiko Nukumizu still wonders how he would react if his life were to be turned into a love story. Regardless, as a self-proclaimed "background character," Nukumizu is satisfied continuing his life as an introvert with a negligible social life. However, he suddenly finds himself too close to the spotlight when he witnesses his popular classmate Anna Yanami be rejected by her childhood friend in the middle of a family restaurant. \n\nWhile Nukumizu wishes he could just forget what he saw and move on, Anna ends up forcefully confiding herself in Nukumizu, lamenting her status as a childhood friend fated to have her beloved stolen. As he becomes dragged into Anna\'s situation, Nukumizu soon gets caught up in the relationship drama of two more girls: Lemon Yakishio, an outgoing member of the track and field club; and Chika Komari, a shy member of the literature club. Now thrust out of his comfort zone, Nukumizu finds himself a major character in the lives of too many losing heroines. \n\n[Written by MAL Rewrite]',
        type: "TV",
        source: "Light novel",
        episodes: 12,
        duration: 24,
        status: "Currently Airing",
        aired: {
            from: "2024-07-14T00:00:00+00:00",
            to: null,
            prop: {
                from: {
                    day: 14,
                    month: 7,
                    year: 2024,
                },
                to: {
                    day: null,
                    month: null,
                    year: null,
                },
            },
            string: "Jul 14, 2024 to ?",
        },
        rating: "PG-13 - Teens 13 or older",
        score: 8.34,
        scored_by: 26871,
        mal_rank: 236,
        season: "summer",
        year: 2024,
        producers: [
            {
                mal_id: 17,
                type: "anime",
                name: "Aniplex",
            },
            {
                mal_id: 76,
                type: "anime",
                name: "Yomiuri Telecasting",
            },
            {
                mal_id: 1211,
                type: "anime",
                name: "Tokyo MX",
            },
            {
                mal_id: 1261,
                type: "anime",
                name: "Good Smile Company",
            },
            {
                mal_id: 1416,
                type: "anime",
                name: "BS11",
            },
            {
                mal_id: 1554,
                type: "anime",
                name: "Contents Seed",
            },
            {
                mal_id: 2640,
                type: "anime",
                name: "INSPION Edge",
            },
            {
                mal_id: 2976,
                type: "anime",
                name: "JR Tokai Agency",
            },
        ],
        studios: [
            {
                mal_id: 56,
                type: "anime",
                name: "A-1 Pictures",
            },
        ],
        genres: [
            {
                mal_id: 4,
                type: "anime",
                name: "Comedy",
            },
            {
                mal_id: 22,
                type: "anime",
                name: "Romance",
            },
        ],
        themes: [
            {
                mal_id: 23,
                type: "anime",
                name: "School",
            },
        ],
        related: [
            {
                relation: "Adaptation",
                entry: [
                    {
                        mal_id: 138481,
                        type: "manga",
                        name: "Make Heroine ga Oosugiru!",
                        url: "https://myanimelist.net/manga/138481/Make_Heroine_ga_Oosugiru",
                    },
                ],
            },
        ],
        streaming: [
            {
                name: "Crunchyroll",
                url: "https://www.crunchyroll.com/series/GJ0H7QGXE/",
            },
            {
                name: "Aniplus Asia",
                url: "https://www.aniplus-asia.com/",
            },
            {
                name: "Bahamut Anime Crazy",
                url: "https://ani.gamer.com.tw/",
            },
        ],
        external: [
            {
                name: "Official Site",
                url: "https://makeine-anime.com/",
            },
            {
                name: "@makeine_anime",
                url: "https://twitter.com/makeine_anime",
            },
            {
                name: "AniDB",
                url: "https://anidb.net/perl-bin/animedb.pl?show=anime&aid=18317",
            },
            {
                name: "ANN",
                url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=31056",
            },
            {
                name: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Too_Many_Losing_Heroines!#Anime",
            },
            {
                name: "Wikipedia",
                url: "https://ja.wikipedia.org/wiki/%E8%B2%A0%E3%81%91%E3%83%92%E3%83%AD%E3%82%A4%E3%83%B3%E3%81%8C%E5%A4%9A%E3%81%99%E3%81%8E%E3%82%8B!#%E3%83%86%E3%83%AC%E3%83%93%E3%82%A2%E3%83%8B%E3%83%A1",
            },
            {
                name: "Syoboi",
                url: "https://cal.syoboi.jp/tid/7121",
            },
        ],
    };

    return (
        <main className="max-width !px-0 mb-10">
            <div className="">
                <img
                    src={animeBaseData.banner}
                    alt={animeBaseData.title_english ?? animeBaseData.title}
                    className="w-full"
                />
            </div>

            <div className="space-y-8">
                <header className="flex gap-4 bg-white p-5 pb-3">
                    <div className="flex-shrink-0 w-52 -mt-20">
                        <img
                            src={animeBaseData.image_large}
                            alt={
                                animeBaseData.title_english ??
                                animeBaseData.title
                            }
                            className="w-full h-[295px] mb-2"
                        />
                        <div className="w-full skeleton rounded-none p-2 text-center">
                            Here may be some items
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <article className="flex-grow">
                            <h1 className="text-2xl font-semibold font-suse mb-4 text-gray-600">
                                {animeBaseData.title_english ??
                                    animeBaseData.title}
                            </h1>
                            <p className="text-gray-600 flex-grow">
                                {animeBaseData.synopsis.slice(0, 290).trim()}...{" "}
                                <span
                                    className="text-xs cursor-pointer hover:underline underline-offset-2"
                                    onClick={(e) =>
                                        (e.target.parentElement.innerHTML =
                                            animeBaseData.synopsis)
                                    }
                                >
                                    read more
                                </span>
                            </p>
                        </article>

                        <div className="w-full skeleton rounded-none p-2 text-center">
                            Here may be some Route items
                        </div>
                    </div>
                </header>

                {/* The main Information */}
                <div className="flex gap-4">
                    <aside className="skeleton w-52 h-80 rounded-none text-center p-4">
                        The Common Items
                    </aside>
                    <div className="flex-grow skeleton rounded-none text-center p-4">
                        The Info Items
                    </div>
                </div>
            </div>
        </main>
    );
}
