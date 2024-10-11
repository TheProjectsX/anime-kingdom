"use client";

import ItemCardGrid from "@/components/anime/ItemCardGrid";
import ItemCardList from "@/components/anime/ItemCardList";
import ItemCardSimple from "@/components/anime/ItemCardSimple";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Carousel, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { Helmet } from "react-helmet";
// import Countdown from "react-countdown";

import dynamic from "next/dynamic";
import { formatNumber } from "@/utils/HelperFunctions";

// Dynamically load Countdown without SSR
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

let cachedHomepageData = [
    [
        {
            heading: "Trending Now",
            path: "/search/anime/trending",
            data: Array(6).fill(null),
        },
        {
            heading: "Popular this Season",
            data: Array(6).fill(null),
        },
        {
            heading: "Upcoming",
            data: Array(6).fill(null),
        },
        {
            heading: "Popular TV Series",
            path: "/search/anime/tv-series/popular",
            data: Array(6).fill(null),
        },
        {
            heading: "Popular Movies",
            path: "/search/anime/movies/popular",
            data: Array(6).fill(null),
        },
    ],
    Array(6).fill(null),
];

const AnimeHomePageItems = ({ animeScheduleData: anv = [], home = false }) => {
    const animeScheduleData = [
        {
            id: 58302,
            title: "THE iDOLM@STER SHINY COLORS 2nd season",
            image: "https://u.livechart.me/anime/12547/poster_image/c4b7c7e2fa1f7f216aca96cf0b634676.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12547/poster_image/c4b7c7e2fa1f7f216aca96cf0b634676.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: 1728058980,
            nextEpisode: 1728663780,
            episode: 2,
            studios: ["Polygon Pictures"],
            tags: ["Idols (Female)", "Music"],
            source: "Game",
        },
        {
            id: 58173,
            title: "The Stories of Girls Who Couldn't Be Magicians",
            image: "https://u.livechart.me/anime/3832/poster_image/c0611a095d2f27a54a95b1fca2e6e49e.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/3832/poster_image/c0611a095d2f27a54a95b1fca2e6e49e.webp/large.jpg",
            synopsis:
                "At Letran Magic Academy, two unlikely friends share one dream: to become magicians. Kurumi is an average girl who’s a bit naive, while Yuzu is the distinguished daughter of a noble magician family. They need to get into a special magician training class, but they fail the entrance exam! All hope seems lost until mysterious homeroom teacher Minami Suzuki arrives, and their luck takes a sudden turn.\n[Source: Crunchyroll]",
            startDate: 1728060780,
            nextEpisode: 1728665580,
            episode: 2,
            studios: ["J.C.STAFF"],
            tags: ["Drama", "Fantasy", "School"],
            source: "Novel",
        },
        {
            id: 59505,
            title: "Lockdown Zone: Level X",
            image: "https://u.livechart.me/anime/12792/poster_image/974480173ded8bd6dc5c046e8419f106.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12792/poster_image/974480173ded8bd6dc5c046e8419f106.webp/large.jpg",
            synopsis:
                "Ryoka is awakened by flurry of text messages from her mother! Panicked and rushed, Mom is clearly concerned for Ryoka's safety, but she is not too keen on letting her daughter know why. Her reasoning being that nothing could really properly describe what is happening!\nThe world might be ending! And there might be a massive new life-form on the roof of their apartment building!\n[Source: Denpa]",
            startDate: 1725641760,
            nextEpisode: 1728667380,
            episode: 6,
            studios: ["IMAGICA Infos", "Imageworks Studio"],
            tags: ["Horror", "Mystery"],
            source: "Digital Manga",
        },
        {
            id: 57796,
            title: "Tohai - Ura Rate Mahjong Tohai Roku",
            image: "https://u.livechart.me/anime/11378/poster_image/9755dc4bc9fb2ef3f8445cb2aaa0da99.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11378/poster_image/9755dc4bc9fb2ef3f8445cb2aaa0da99.webp/large.jpg",
            synopsis:
                "Money, women, organs. Kei, a high school boy, frequents the underground mahjong parlor teeming with desires, earning him the moniker 'K of Ice' in the underworld due to his cold-hearted strategy and stylish gameplay. Rumors also circulate that he keeps a girl at his home.\n[Source: Press Release]",
            startDate: 1728062580,
            nextEpisode: 1728667380,
            episode: 2,
            studios: ["EAST FISH STUDIO"],
            tags: ["Strategy Game"],
            source: "Manga",
        },
        {
            id: 32353,
            title: "Bono Bono",
            image: "https://u.livechart.me/anime/1966/poster_image/d16566d5a5802d8d1fa288ff0740bb26.png/small.jpg",
            image_large:
                "https://u.livechart.me/anime/1966/poster_image/d16566d5a5802d8d1fa288ff0740bb26.png/large.jpg",
            synopsis:
                "Bonobono is a simple, good-hearted sea otter who lives near a large forest. Every day he has small adventures with his two best friends, Shimarisu the mischievous squirrel and Araiguma the short-tempered raccoon.\n[Source: Anime News Network]",
            startDate: null,
            nextEpisode: 1728678120,
            episode: 431,
            studios: ["Eiken"],
            tags: ["Anthropomorphic", "Comedy", "Slice of Life"],
            source: "4-koma Manga",
        },
        {
            id: 58944,
            title: "JOCHUM",
            image: "https://u.livechart.me/anime/12637/poster_image/1d980ef814fdeace24ad62a20fafe12d.jpg/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12637/poster_image/1d980ef814fdeace24ad62a20fafe12d.jpg/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: null,
            nextEpisode: 1728680400,
            episode: 14,
            studios: ["FANWORKS"],
            tags: ["Anthropomorphic"],
            source: "Original",
        },
        {
            id: null,
            title: "Kumarba Season 2",
            image: "https://u.livechart.me/anime/12710/poster_image/7b16f61e198b7e9bd3a56606b61fe8b8.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12710/poster_image/7b16f61e198b7e9bd3a56606b61fe8b8.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: 1728079200,
            nextEpisode: 1728684000,
            episode: 2,
            studios: ["Creative House Pocket"],
            tags: ["Tags TBD"],
            source: "Character Line",
        },
        {
            id: 57538,
            title: "Saikyoh Picture Book～The Ultimate Battles～",
            image: "https://u.livechart.me/anime/12493/poster_image/3d17ebbb5bedbbed4251eccdbb471348.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12493/poster_image/3d17ebbb5bedbbed4251eccdbb471348.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: null,
            nextEpisode: 1728684000,
            episode: 41,
            studios: ["OLM Digital"],
            tags: ["Action"],
            source: "Book",
        },
        {
            id: 59485,
            title: "SHIBUYA♡HACHI Part 2",
            image: "https://u.livechart.me/anime/12852/poster_image/87027ab2991e24d71195b646f6ee2838.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12852/poster_image/87027ab2991e24d71195b646f6ee2838.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: 1728079200,
            nextEpisode: 1728684000,
            episode: 2,
            studios: ["Nippon Animation"],
            tags: ["Comedy"],
            source: "Other",
        },
        {
            id: 50418,
            title: "Ninjala",
            image: "https://u.livechart.me/anime/10885/poster_image/f317ecf5a83bcae3074dca0aaeb64989.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/10885/poster_image/f317ecf5a83bcae3074dca0aaeb64989.webp/large.jpg",
            synopsis:
                "Researchers at the World Ninja Association (WNA) have at long last developed Ninja-Gum, a mysterious substance that draws out the power of the Shinobi. Main characters like Berecca, Burton, and other WNA Academy students take on action-packed Ninja-Gum battles in a tournament designed to find the strongest Shinobi. However, conspiracies involving Ninja-Gum and unknown beings take place behind the scenes.\n[Source: GungHo Online Entertainment]",
            startDate: null,
            nextEpisode: 1728685800,
            episode: 139,
            studios: ["OLM"],
            tags: ["Action"],
            source: "Game",
        },
        {
            id: 18941,
            title: "Shimajiro: A Wonderful Adventure",
            image: "https://u.livechart.me/anime/10106/poster_image/d4d678d65a5ebadc682b0e19f0fbd0ed.jpg/small.jpg",
            image_large:
                "https://u.livechart.me/anime/10106/poster_image/d4d678d65a5ebadc682b0e19f0fbd0ed.jpg/large.jpg",
            synopsis:
                "Fourth season of the Shimajirou children's television series.",
            startDate: null,
            nextEpisode: 1728689400,
            episode: 638,
            studios: ["The Answer Studio"],
            tags: ["Adventure", "Comedy", "Fantasy", "Magic"],
            source: "Other",
        },
        {
            id: 58631,
            title: "Butt Detective (2024)",
            image: "https://u.livechart.me/anime/12617/poster_image/59bc11d259740a2ba0b4fb8c1b577740.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12617/poster_image/59bc11d259740a2ba0b4fb8c1b577740.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: null,
            nextEpisode: 1728691200,
            episode: 10,
            studios: ["Toei Animation"],
            tags: ["Comedy", "Fantasy", "Mystery"],
            source: "Picture Book",
        },
        {
            id: 59175,
            title: "Tonbo! Season 2",
            image: "https://u.livechart.me/anime/12720/poster_image/47dfefaa072bbb8c991cc6a310c0bbda.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12720/poster_image/47dfefaa072bbb8c991cc6a310c0bbda.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: 1728090000,
            nextEpisode: 1728694800,
            episode: 2,
            studios: ["OLM"],
            tags: ["Golf", "Sports"],
            source: "Manga",
        },
        {
            id: 966,
            title: "Shin Chan",
            image: "https://u.livechart.me/anime/1608/poster_image/46d811d4395ac79cd2965be24a726839.jpg/small.jpg",
            image_large:
                "https://u.livechart.me/anime/1608/poster_image/46d811d4395ac79cd2965be24a726839.jpg/large.jpg",
            synopsis:
                'Shinnosuke Nohara is 5 years old and goes to kindergarten. He loves beautiful ladies and stirs things up by always going at his own pace. This kindergartner certainly knows how to shake things up, but that\'s Shinchan, the most popular kid in Japan.\nHe goes wild everyday with his unique friends (?) in the Kasukabe Defense Organization and his little sister, Himawari, who at the age of 0, already has an eye for hotties! His mom, dad, and teachers often find themselves caught up in the chaos that Shinchan effortlessly creates!\nHis special moves include "butt alien" and "butt dance"! He\'s in perfect form! It\'s been on the air for more than 25 years and is still going strong! Take a look!\n[Source: Shin-Ei Animation]',
            startDate: null,
            nextEpisode: 1728718200,
            episode: 1254,
            studios: ["Shin-Ei Animation"],
            tags: ["Comedy", "Ecchi", "School", "Slice of Life"],
            source: "Manga",
        },
        {
            id: 8687,
            title: "Doraemon (2005)",
            image: "https://u.livechart.me/anime/1480/poster_image/52ea5dd32b4fe2a892dc6b269583bcc5.jpg/small.jpg",
            image_large:
                "https://u.livechart.me/anime/1480/poster_image/52ea5dd32b4fe2a892dc6b269583bcc5.jpg/large.jpg",
            synopsis:
                "Robotic cat Doraemon is sent back in time from the 22nd century to protect 10-year-old Noby, a lazy and uncoordinated boy who is destined to have a tragic future. When Doraemon arrives and tells the boy about the misfortune that awaits him, Noby commits to changing his ways in an attempt to improve the future for himself and his descendants -- including great-great-grandson Soby, who was the one who sent the robot back in time to help. Doraemon is able to create secret gadgets from a pocket on his stomach to help with the situation, but they usually cause more bad than good because of Noby's propensity to misuse them.",
            startDate: null,
            nextEpisode: 1728720000,
            episode: 748,
            studios: ["Shin-Ei Animation"],
            tags: ["Anthropomorphic", "Comedy", "Sci-Fi"],
            source: "Manga",
        },
        {
            id: 235,
            title: "Case Closed (Detective Conan)",
            image: "https://u.livechart.me/anime/319/poster_image/d2f5cdf3efe83314b23bd1bbaf299ec0.jpg/small.jpg",
            image_large:
                "https://u.livechart.me/anime/319/poster_image/d2f5cdf3efe83314b23bd1bbaf299ec0.jpg/large.jpg",
            synopsis:
                "Shinichi Kudo is a high school detective. One day, suspicious men in black forcefully give him a strange poison and his body shrank to the time of when he was in the first grade! Hiding his identity, he made a new name for himself: Conan Edogawa. Conan now lives with his childhood friend Ran Mori and her detective father in hopes of hunting down the Black Organization while being involved in cases. He faces numerous difficult cases and goes against a notorious thief but keeps on solving mysteries to find the one and only truth!\n[Source: TMS Entertainment]",
            startDate: null,
            nextEpisode: 1728723600,
            episode: 1138,
            studios: ["TMS Entertainment"],
            tags: ["Adventure", "Comedy", "Detective", "Mystery"],
            source: "Manga",
        },
        {
            id: 58137,
            title: "Kagaku × Bouken Survival!",
            image: "https://u.livechart.me/anime/12533/poster_image/413c57e4622255be5cd71fd62c68f5ae.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12533/poster_image/413c57e4622255be5cd71fd62c68f5ae.webp/large.jpg",
            synopsis: "No synopsis has been added to this title.",
            startDate: 1728120300,
            nextEpisode: 1728725100,
            episode: 2,
            studios: ["Gallop"],
            tags: ["Adventure"],
            source: "Manga",
        },
        {
            id: 56784,
            title: "BLEACH: Thousand-Year Blood War - The Conflict -",
            image: "https://u.livechart.me/anime/11468/poster_image/4cffb9acf21c686c2c366613e0030709.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11468/poster_image/4cffb9acf21c686c2c366613e0030709.webp/large.jpg",
            synopsis:
                "※ NOTE: Part 3 of BLEACH: Thousand-Year Blood War.\nNo synopsis has been added to this title.",
            startDate: 1728136800,
            nextEpisode: 1728741600,
            episode: 2,
            studios: ["PIERROT FILMS"],
            tags: ["Action", "Adventure", "Supernatural", "Super Power"],
            source: "Manga",
        },
        {
            id: 56400,
            title: "Demon Lord, Retry! R",
            image: "https://u.livechart.me/anime/12306/poster_image/ffec66e8077db244668bfd69e7cd047e.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12306/poster_image/ffec66e8077db244668bfd69e7cd047e.webp/large.jpg",
            synopsis:
                "Akira Oono finds himself in the world of Infinity Game as the last boss and his favorite character, the Demon Lord Hakuto Kunai. After meeting Aku, Luna, and other friends along the way, the Demon Lord begins a new journey to find a spell that can take him back to the real world. The story of the Demon Lord continues in this next chapter!\n[Source: Crunchyroll]",
            startDate: 1727532000,
            nextEpisode: 1728741600,
            episode: 3,
            studios: ["GEKKOU"],
            tags: ["Action", "Adventure", "Fantasy", "Isekai"],
            source: "Manga",
        },
        {
            id: 54865,
            title: "BLUE LOCK VS. U-20 JAPAN",
            image: "https://u.livechart.me/anime/11911/poster_image/2ae923485cc7a5a6e2962a1c70065f50.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11911/poster_image/2ae923485cc7a5a6e2962a1c70065f50.webp/large.jpg",
            synopsis:
                "BLUE LOCK follows the dreams of 300 high school students who aim to lead the Japanese Men's National Team to the next World Cup championship as their ace striker! To become the best, they join the BLUE LOCK project, a high-risk training program where anyone eliminated is forever barred from joining the Japanese National Team. Pitting the best-rising players in Japan against each other, only the most confident and skilled will emerge from this program!\nThirty-five participants survived the grueling selection process and now they face their greatest challenge yet in this ego-driven frenzy, the U-20 Japan National Team! Can they meet this challenge and prove the value of the BLUE LOCK player improvement project?\nThe hottest battle in history is about to begin, where rising egoists will have the chance to leave their mark on the world of soccer!\n[Source: Bandai Namco Filmworks]",
            startDate: 1728140400,
            nextEpisode: 1728743400,
            episode: 2,
            studios: ["eightbit"],
            tags: ["Soccer", "Sports", "Team Sports"],
            source: "Manga",
        },
        {
            id: 52215,
            title: "Orb: On the Movements of the Earth",
            image: "https://u.livechart.me/anime/11295/poster_image/ac68b43ffcd74af0e7c49d809e2adf94.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11295/poster_image/ac68b43ffcd74af0e7c49d809e2adf94.webp/large.jpg",
            synopsis:
                "In fifteenth-century Europe, heretics are being burned at the stake. Rafal, a brilliant young man, is expected to enter university at an early age and study the era’s most important field, theology. But Rafal values Reason above all else, which leads him both to the shocking conclusion that the Earth orbits the Sun, and into the hands of the Inquisition!\nA decade later, two members of the Watch Guild, the dour young Oczy and the cynical Gras, find a hidden stone chest that details the secrets of the universe Rafal left behind. Dare they try to change their own stars by selling the heretical texts, or would that only lead to the stake and the fire?\n[Source: Seven Seas Entertainment]",
            startDate: 1728139500,
            nextEpisode: 1728744300,
            episode: 3,
            studios: ["MADHOUSE"],
            tags: ["Drama", "Historical"],
            source: "Manga",
        },
        {
            id: 54853,
            title: "DEMON LORD 2099",
            image: "https://u.livechart.me/anime/11907/poster_image/b01d9fa7c44eb3d2c5eaf1be13d73973.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/11907/poster_image/b01d9fa7c44eb3d2c5eaf1be13d73973.webp/large.jpg",
            synopsis:
                "Five centuries ago, Demon Lord Veltol reigned over an immortal nation. Now, the time has come for him to awaken once again. The year is 2099, and civilization has reached peak evolution, leading to a high-tech landscape with towering skyscrapers—nothing like he’s conquered before. Veltol may be a relic of the past, but make no mistake, this new world will be his for the taking!\n[Source: Crunchyroll]",
            startDate: 1728745200,
            nextEpisode: 1728745200,
            episode: 1,
            studios: ["J.C.STAFF"],
            tags: ["Action", "Fantasy", "Sci-Fi"],
            source: "Light Novel",
        },
        {
            id: 58516,
            title: "Blue Exorcist -Beyond the Snow Saga-",
            image: "https://u.livechart.me/anime/12608/poster_image/ec3e79d2e9290a041fcb555a318b8824.webp/small.jpg",
            image_large:
                "https://u.livechart.me/anime/12608/poster_image/ec3e79d2e9290a041fcb555a318b8824.webp/large.jpg",
            synopsis:
                "Brothers Rin and Yukio head to Lake Towada in Aomori to search for Shura, who had suddenly disappeared.\nThere, they find Shura’s birthplace – the place where Shiro became her guardian. As their search continues, Rin and Yukio discover the fate that awaits Shura.\nMeanwhile, Lightning, one of the Arch Knights, arrives at the Japan Branch of the Knights of the True Cross and begins his investigation into the Illuminati.\nLightning deduces that everything began on the “Blue Night,” as he gradually steps into the dark side of the Knights of the True Cross….\n[Source: Aniplex USA]",
            startDate: 1728142200,
            nextEpisode: 1728747000,
            episode: 2,
            studios: ["studio VOLN"],
            tags: ["Action", "Fantasy", "Mythology", "Supernatural"],
            source: "Manga",
        },
    ];

    const router = useRouter();
    const [layout, setLayout] = useState("card");
    const [homepageData, setHomepageData] = useState(cachedHomepageData.at(0));
    const [topAnimeData, setTopAnimeData] = useState(cachedHomepageData.at(1));

    useEffect(() => {
        if (homepageData[0].data[0] === null) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/anime/home?limit=6`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setHomepageData(data.data ?? []);
                        cachedHomepageData[0] = data.data ?? [];
                    }
                });
        }

        if (topAnimeData[0] === null) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top/anime?limit=10`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setTopAnimeData(data.data ?? []);
                        cachedHomepageData[1] = data.data ?? [];
                    }
                });
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>
                    {home
                        ? "Get Anime, Manga insights! - AniDom"
                        : "Search for Anime! - AniDom"}
                </title>
            </Helmet>

            {/* Homepage Banner Carousel */}
            <Carousel
                className="h-96"
                indicators={false}
                slideInterval={4500}
                pauseOnHover
            >
                {animeScheduleData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-slate-700 text-white h-full"
                    >
                        <article className="max-w-2xl mx-auto flex justify-between items-center h-full">
                            <div className="p-6 max-w-80 text-left">
                                <div className="flex items-center gap-2 mb-2">
                                    <Countdown
                                        date={new Date(
                                            item.nextEpisode * 1000
                                        ).toString()}
                                        renderer={({
                                            hours,
                                            minutes,
                                            seconds,
                                            completed,
                                        }) => {
                                            return (
                                                <time className="text-lg">
                                                    <span className="underline underline-offset-2 mr-0.5">
                                                        {completed
                                                            ? "00"
                                                            : formatNumber(
                                                                  hours
                                                              )}
                                                    </span>
                                                    h{" "}
                                                    <span className="underline underline-offset-2 mr-0.5">
                                                        {" "}
                                                        {completed
                                                            ? "00"
                                                            : formatNumber(
                                                                  minutes
                                                              )}
                                                    </span>
                                                    m{" "}
                                                    <span className="underline underline-offset-2 mr-0.5">
                                                        {completed
                                                            ? "00"
                                                            : formatNumber(
                                                                  seconds
                                                              )}
                                                    </span>
                                                    s
                                                </time>
                                            );
                                        }}
                                    />
                                    <p>
                                        (EP{" "}
                                        <span className="font-semibold">
                                            {item.episode}
                                        </span>
                                        )
                                    </p>
                                </div>
                                <h3 className="text-xl font-semibold font-suse mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    {item.source} -{" "}
                                    {item.tags.slice(0, 3).join(", ")}
                                </p>
                                <p className="mb-5">
                                    {item.synopsis.length > 125
                                        ? `${item.synopsis.slice(0, 125)}...`
                                        : item.synopsis}
                                </p>
                                <Link
                                    href={`/anime/${item.id}`}
                                    className="btn btn-info btn-sm"
                                >
                                    Checkout
                                </Link>
                            </div>
                            <div className="max-w-60">
                                <img
                                    src={item.image_large ?? item.image}
                                    alt={item.title}
                                />
                            </div>
                        </article>
                    </div>
                ))}
            </Carousel>

            {/* Layout Options */}
            <div className="flex justify-between items-end gap-2 pr-5">
                <label className="flex flex-col gap-1 w-auto">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Search:
                    </span>
                    <TextInput
                        type="text"
                        name="query"
                        icon={IoSearch}
                        placeholder="Type name and press Enter..."
                        title="Search anime by name"
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value !== "") {
                                router.push(
                                    `/search/anime?query=${e.target.value}`
                                );
                            }
                        }}
                    />
                </label>

                <div className="flex gap-2">
                    <button
                        className={`bg-transparent border-none outline-none text-gray-500 hover:text-gray-600 transition-colors ${
                            layout === "card" ? "text-gray-600" : ""
                        }`}
                        onClick={() => setLayout("card")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            viewBox="0 0 17 17"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                        >
                            <path d="M0 0h5v5h-5v-5zM6 5h5v-5h-5v5zM12 0v5h5v-5h-5zM0 11h5v-5h-5v5zM6 11h5v-5h-5v5zM12 11h5v-5h-5v5zM0 17h5v-5h-5v5zM6 17h5v-5h-5v5zM12 17h5v-5h-5v5z" />
                        </svg>
                    </button>

                    <button
                        className={`bg-transparent border-none outline-none text-gray-500 hover:text-gray-600 transition-colors ${
                            layout === "grid" ? "text-gray-600" : ""
                        }`}
                        onClick={() => setLayout("grid")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="3 3 18 18"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                        >
                            <path d="M11,11H3V4A1,1,0,0,1,4,3h7ZM21,4a1,1,0,0,0-1-1H13v8h8ZM4,21h7V13H3v7A1,1,0,0,0,4,21Zm17-1V13H13v8h7A1,1,0,0,0,21,20Z" />
                        </svg>
                    </button>

                    <button
                        className={`bg-transparent border-none outline-none text-gray-500 hover:text-gray-600 transition-colors ${
                            layout === "list" ? "text-gray-600" : ""
                        }`}
                        onClick={() => setLayout("list")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="8 8 16 16"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                        >
                            <path d="M8 12h4v-4h-4v4zM8 18h4v-4h-4v4zM8 24h4v-4h-4v4zM14 8v4h10v-4h-10zM14 18h10v-4h-10v4zM14 24h10v-4h-10v4z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Card View */}
            {layout === "card" && (
                <>
                    {homepageData.map((item, idx) => (
                        <section key={idx}>
                            <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                                <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                    {item.heading}
                                </h2>
                                <Link
                                    href={item.path ?? "#"}
                                    className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    Explore More
                                </Link>
                            </div>
                            <div className="lg:pl-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-center md:[&_article:last-child]:hidden lg:[&_article:last-child]:block">
                                {item.data.map((item, idx) => (
                                    <ItemCardSimple
                                        animeData={item}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                    <section>
                        <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                            <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                Top #10 Anime
                            </h2>
                            <Link
                                href={"/search/anime/top"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="lg:pl-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-evenly flex-wrap">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardSimple
                                    animeData={item}
                                    key={idx}
                                    rank={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* Grid View */}
            {layout === "grid" && (
                <>
                    {homepageData.map((item, idx) => (
                        <section key={idx}>
                            <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                                <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                    {item.heading}
                                </h2>
                                <Link
                                    href={item.path ?? "#"}
                                    className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    Explore More
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {item.data.map((item, idx) => (
                                    <ItemCardGrid animeData={item} key={idx} />
                                ))}
                            </div>
                        </section>
                    ))}
                    <section>
                        <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                            <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                Top #10 Anime
                            </h2>
                            <Link
                                href={"/search/anime/top"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardGrid
                                    animeData={item}
                                    key={idx}
                                    rank={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* List View */}
            {layout === "list" && (
                <>
                    {homepageData.map((item, idx) => (
                        <section key={idx}>
                            <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                                <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                    {item.heading}
                                </h2>
                                <Link
                                    href={item.path ?? "#"}
                                    className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    Explore More
                                </Link>
                            </div>
                            <div className="space-y-5">
                                {item.data.map((item, idx) => (
                                    <ItemCardList animeData={item} key={idx} />
                                ))}
                            </div>
                        </section>
                    ))}

                    <section>
                        <div className="mb-4 flex justify-between items-end flex-wrap gap-2">
                            <h2 className="text-base sm:text-xl text-center md:text-left font-suse uppercase font-semibold">
                                Top #10 Anime
                            </h2>
                            <Link
                                href={"/search/anime/top"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="space-y-5">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardList
                                    animeData={item}
                                    key={idx}
                                    rank={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AnimeHomePageItems;
