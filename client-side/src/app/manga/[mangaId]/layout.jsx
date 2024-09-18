import MangaInfoLayout from "./components/MangaInfoLayout";

export default async function RootLayout({ children, params }) {
    const { mangaId } = params;
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}`
    // );
    // const serverData = await res.json();

    // if (!serverData.success) {
    //     console.log("Not Found");
    //     // Do something
    // }

    // const animeBaseData = serverData.data ?? {};
    const mangaBaseData = {
        id: 138481,
        title: "Make Heroine ga Oosugiru!",
        title_english: "Too Many Losing Heroines!",
        title_japanese:
            "\u8ca0\u3051\u30d2\u30ed\u30a4\u30f3\u304c\u591a\u3059\u304e\u308b\uff01",
        titles: [
            { type: "Default", title: "Make Heroine ga Oosugiru!" },
            { type: "Synonym", title: "Makeine" },
            { type: "Synonym", title: "Ore wa Hyottoshite" },
            {
                type: "Synonym",
                title: "Saishuuwa de Make Heroine no Yokoni Iru Pottode no Mob Chara nano Darou ka",
            },
            {
                type: "Japanese",
                title: "\u8ca0\u3051\u30d2\u30ed\u30a4\u30f3\u304c\u591a\u3059\u304e\u308b\uff01",
            },
            { type: "English", title: "Too Many Losing Heroines!" },
        ],
        image: "https://cdn.myanimelist.net/images/manga/2/248592.jpg",
        image_large: "https://cdn.myanimelist.net/images/manga/2/248592l.jpg",
        banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/135276-aLYflFYJKcVL.jpg",
        chapters: null,
        volumes: null,
        type: "Light Novel",
        status: "Publishing",
        synopsis:
            "Plain, boring, and friendless Kazuhiko Nukumizu has witnessed something completely baffling: popular girl Anna Yanami was friend-zoned by her childhood friend and crush! In fact, all the popular girls around him are getting similarly rejected by the boys they like. Without realizing it, Kazuhiko becomes entangled in the relationship drama where all the leading heroines are losing out on love! Can he keep their spirits up and help them find happiness? (Source: Seven Seas Entertainment)",
        background:
            "Make Heroine ga Oosugiru! won the Gagaga Award at the 15th Shogakukan Light Novel Award in 2021 under the title Ore wa Hyottoshite, Saishuuwa de Make Heroine no Yokoni Iru Pottode no Mob Chara nano Darou ka (\u4ffa\u306f\u3072\u3087\u3063\u3068\u3057\u3066\u3001\u6700\u7d42\u8a71\u3067\u8ca0\u3051\u30d2\u30ed\u30a4\u30f3\u306e\u6a2a\u306b\u3044\u308b\u30dd\u30c3\u3068\u51fa\u306e\u30e2\u30d6\u30ad\u30e3\u30e9\u306a\u306e\u3060\u308d\u3046\u304b). The series has been published in English as Too Many Losing Heroines! by Seven Seas Entertainment under the Airship imprint since August 13, 2024.",
        published: {
            from: "2021-07-21T00:00:00+00:00",
            to: null,
            prop: {
                from: { day: 21, month: 7, year: 2021 },
                to: { day: null, month: null, year: null },
            },
            string: "Jul 21, 2021 to ?",
        },
        score: 8,
        scored_by: 503,
        mal_rank: 748,
        popularity: 6986,
        members: 2870,
        favorites: 81,
        statistics: {
            reading: 1090,
            completed: 42,
            on_hold: 95,
            dropped: 31,
            plan_to_read: 1616,
            total: 2874,
            scores: [
                { score: 1, votes: 5, percentage: 1 },
                { score: 2, votes: 1, percentage: 0.2 },
                { score: 3, votes: 2, percentage: 0.4 },
                { score: 4, votes: 4, percentage: 0.8 },
                { score: 5, votes: 10, percentage: 2 },
                { score: 6, votes: 26, percentage: 5.1 },
                { score: 7, votes: 80, percentage: 15.8 },
                { score: 8, votes: 133, percentage: 26.3 },
                { score: 9, votes: 124, percentage: 24.6 },
                { score: 10, votes: 120, percentage: 23.8 },
            ],
        },
        authors: [
            { id: 13095, type: "people", name: "Imigi, Muru" },
            { id: 54967, type: "people", name: "Amamori, Takibi" },
        ],
        genres: [
            { mal_id: 4, type: "manga", name: "Comedy" },
            { mal_id: 22, type: "manga", name: "Romance" },
        ],
        themes: [{ mal_id: 23, type: "manga", name: "School" }],
        related: [
            {
                relation: "Adaptation",
                entry: [
                    {
                        mal_id: 57524,
                        type: "anime",
                        name: "Make Heroine ga Oosugiru!",
                        url: "https://myanimelist.net/anime/57524/Make_Heroine_ga_Oosugiru",
                    },
                ],
            },
            {
                relation: "Alternative Version",
                entry: [
                    {
                        mal_id: 146732,
                        type: "manga",
                        name: "Make Heroine ga Oosugiru! @comic",
                        url: "https://myanimelist.net/manga/146732/Make_Heroine_ga_Oosugiru_comic",
                    },
                ],
            },
        ],
        external: [
            {
                name: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Too_Many_Losing_Heroines!",
            },
            {
                name: "Wikipedia",
                url: "https://ja.wikipedia.org/wiki/%E8%B2%A0%E3%81%91%E3%83%92%E3%83%AD%E3%82%A4%E3%83%B3%E3%81%8C%E5%A4%9A%E3%81%99%E3%81%8E%E3%82%8B!",
            },
        ],
    };

    return (
        <MangaInfoLayout mangaId={mangaId} mangaBaseData={mangaBaseData}>
            {children}
        </MangaInfoLayout>
    );
}
