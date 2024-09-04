"use client";

import ItemCardGrid from "@/components/ItemCardGrid";
import ItemCardList from "@/components/ItemCardList";
import ItemCardSimple from "@/components/ItemCardSimple";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [layout, setLayout] = useState("card");
    const [homepageData, setHomepageData] = useState([
        {
            heading: "Trending Now",
            data: [null, null, null, null, null, null],
        },
        {
            heading: "Popular this Season",
            data: [null, null, null, null, null, null],
        },
        {
            heading: "Upcoming",
            data: [null, null, null, null, null, null],
        },
        {
            heading: "Popular TV Series",
            data: [null, null, null, null, null, null],
        },
        {
            heading: "Popular Movies",
            data: [null, null, null, null, null, null],
        },
    ]);
    const [topAnimeData, setTopAnimeData] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]);

    const data = {
        success: true,
        data: [
            {
                heading: "Trending Now",
                path: "/anime/trending",
                data: [
                    {
                        id: 21,
                        title: "One Piece",
                        title_english: "One Piece",
                        title_japanese: "ONE PIECE",
                        synopsis:
                            "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.\n\nThe late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.\n\nAs he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.\n\n[Written by MAL Rewrite]",
                        episodes: null,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "1999-10-20T00:00:00+00:00",
                            to: null,
                            string: "Oct 20, 1999 to ?",
                        },
                        mal_rank: 54,
                        year: 1999,
                        season: "fall",
                        score: 8.72,
                        scored_by: 1373657,
                        studios: [
                            { id: 18, type: "anime", name: "Toei Animation" },
                        ],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 235,
                        title: "Meitantei Conan",
                        title_english: "Case Closed",
                        title_japanese: "\u540d\u63a2\u5075\u30b3\u30ca\u30f3",
                        synopsis:
                            "Shinichi Kudou, a high school student of astounding talent in detective work, is well known for having solved several challenging cases. One day, when Shinichi spots two suspicious men and decides to follow them, he inadvertently becomes witness to a disturbing illegal activity. Unfortunately, he is caught in the act, so the men dose him with an experimental drug formulated by their criminal organization, leaving him to his death. However, to his own astonishment, Shinichi lives to see another day, but now in the body of a seven-year-old child.\n\nPerfectly preserving his original intelligence, he hides his real identity from everyone, including his childhood friend Ran Mouri and her father, private detective Kogorou Mouri. To this end, he takes on the alias of Conan Edogawa, inspired by the mystery writers Arthur Conan Doyle and Ranpo Edogawa.\n\nShinichi, as Conan, starts secretly solving the senior Mouri's cases from behind the scenes with his still exceptional sleuthing skills, while covertly investigating the organization responsible for his current state, hoping to reverse the drug's effects someday.\n\n[Written by MAL Rewrite]",
                        episodes: null,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "1996-01-08T00:00:00+00:00",
                            to: null,
                            string: "Jan 8, 1996 to ?",
                        },
                        mal_rank: 428,
                        year: 1996,
                        season: "winter",
                        score: 8.17,
                        scored_by: 162010,
                        studios: [
                            {
                                id: 73,
                                type: "anime",
                                name: "TMS Entertainment",
                            },
                        ],
                        genres: [
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 4, type: "anime", name: "Comedy" },
                            { id: 7, type: "anime", name: "Mystery" },
                        ],
                        themes: [{ id: 39, type: "anime", name: "Detective" }],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 53580,
                        title: "Tensei shitara Slime Datta Ken 3rd Season",
                        title_english:
                            "That Time I Got Reincarnated as a Slime Season 3",
                        title_japanese:
                            "\u8ee2\u751f\u3057\u305f\u3089\u30b9\u30e9\u30a4\u30e0\u3060\u3063\u305f\u4ef6 \u7b2c3\u671f",
                        synopsis:
                            "Rimuru Tempest is victorious following his climactic showdown with Demon Lord Clayman. With Diablo's aid, the war with the Falmuth Kingdom ends decisively in Rimuru's favor. Fueled by increased migration and the integration of Jura Forest, the nation of Tempest undergoes rapid growth.\n\nRimuru's victory shifts the balance of power, giving rise to a renewed period of peace\u2014but whether that peace will last is another matter. Yuuki Kagurazaka and Kazalim are conspiring with the Harlequin Alliance to bring about Rimuru's downfall. Furthermore, the Western Holy Church continues its intolerant crusade against Rimuru and his non-human subordinates. Both allies and enemies engage in a battle of wits, carefully advancing their agendas without shattering the delicate status quo. But once the first domino inevitably falls, the race to supremacy begins.\n\n[Written by MAL Rewrite]",
                        episodes: 24,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/1211/143476.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-04-05T00:00:00+00:00",
                            to: null,
                            string: "Apr 5, 2024 to ?",
                        },
                        mal_rank: 975,
                        year: 2024,
                        season: "spring",
                        score: 7.81,
                        scored_by: 59102,
                        studios: [{ id: 441, type: "anime", name: "8bit" }],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 4, type: "anime", name: "Comedy" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [
                            { id: 62, type: "anime", name: "Isekai" },
                            { id: 72, type: "anime", name: "Reincarnation" },
                        ],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 55791,
                        title: '"Oshi no Ko" 2nd Season',
                        title_english: "[Oshi No Ko] Season 2",
                        title_japanese:
                            "\u3010\u63a8\u3057\u306e\u5b50\u3011\u7b2c2\u671f",
                        synopsis:
                            "With the help of producer Masaya Kaburagi, Aquamarine \"Aqua\" Hoshino and Kana Arima have landed the roles of Touki and Tsurugi in Lala Lai Theatrical Company's stage adaptation of the popular manga series Tokyo Blade. Co-starring with them is Aqua's girlfriend, Akane Kurokawa, who plays Touki's fianc\u00e9e, Princess Saya. Due to the fanbase preferring Tsurugi as Touki's love interest, Saya has made fewer and fewer appearances in the manga, making it difficult for Akane to fully immerse herself in the role. Her struggles are compounded by differences between the play's script and the original work\u2014differences that also greatly frustrate Tokyo Blade's author, Abiko Samejima.\n\nAqua, however, is more concerned with his personal goals than he is with the play. He has only one objective in mind: to grow closer to director Toshirou Kindaichi and find out what he knows about Aqua's mother, Ai.\n\n[Written by MAL Rewrite]",
                        episodes: 13,
                        duration: 25,
                        image: "https://cdn.myanimelist.net/images/anime/1006/143302.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-03T00:00:00+00:00",
                            to: null,
                            string: "Jul 3, 2024 to ?",
                        },
                        mal_rank: 117,
                        year: 2024,
                        season: "summer",
                        score: 8.54,
                        scored_by: 42327,
                        studios: [{ id: 95, type: "anime", name: "Doga Kobo" }],
                        genres: [
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 37, type: "anime", name: "Supernatural" },
                        ],
                        themes: [
                            { id: 72, type: "anime", name: "Reincarnation" },
                            { id: 75, type: "anime", name: "Showbiz" },
                        ],
                        demographics: [
                            { id: 42, type: "anime", name: "Seinen" },
                        ],
                    },
                    {
                        id: 54789,
                        title: "Boku no Hero Academia 7th Season",
                        title_english: "My Hero Academia Season 7",
                        title_japanese:
                            "\u50d5\u306e\u30d2\u30fc\u30ed\u30fc\u30a2\u30ab\u30c7\u30df\u30a2 \u7b2c7\u671f",
                        synopsis:
                            "Following an all-out battle with the Paranormal Liberation Front, it is difficult for the people of Japan to continue placing faith in their heroes. To combat the combined power of Tomura Shigaraki and All For One, All Might calls for his ally from the West\u2014the strongest woman on the planet, Star and Stripe.\n\nHowever, All For One decides to intercept Star and her fleet to get his hands on her overpowered quirk before she can enter Japanese airspace. Although Endeavor, Hawks, and Best Jeanist are headed to the rendezvous point, Star makes a gamble in the present to save her comrades.\n\n[Written by MAL Rewrite]",
                        episodes: 21,
                        duration: 23,
                        image: "https://cdn.myanimelist.net/images/anime/1529/140306.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-05-04T00:00:00+00:00",
                            to: null,
                            string: "May 4, 2024 to ?",
                        },
                        mal_rank: 811,
                        year: 2024,
                        season: "spring",
                        score: 7.89,
                        scored_by: 41431,
                        studios: [{ id: 4, type: "anime", name: "Bones" }],
                        genres: [{ id: 1, type: "anime", name: "Action" }],
                        themes: [
                            { id: 23, type: "anime", name: "School" },
                            { id: 31, type: "anime", name: "Super Power" },
                        ],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 54744,
                        title: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
                        title_english:
                            "Alya Sometimes Hides Her Feelings in Russian",
                        title_japanese:
                            "\u6642\u3005\u30dc\u30bd\u30c3\u3068\u30ed\u30b7\u30a2\u8a9e\u3067\u30c7\u30ec\u308b\u96a3\u306e\u30a2\u30fc\u30ea\u30e3\u3055\u3093",
                        synopsis:
                            "Seirei Academy is a prestigious school attended by the very best students in Japan. Alisa Mikhailovna \"Alya\" Kujou, the half-Russian and half-Japanese treasurer of the school's student council, is known for her intelligence, stunning looks, and rigid personality. Contrasting her near-flawless persona, Alya's unmotivated classmate Masachika Kuze slacks off during lessons and seems to show no interest in her.\n\nInitially irritated, Alya gradually becomes more intrigued by Masachika and starts expressing her affection for him in Russian. However, she is oblivious to his secret\u2014he understands the language fluently! Due to a childhood friend who was temporarily staying in Japan, Masachika has been studying Russian in hopes of reuniting with her.\n\nAs the two spend more time together, the playful and eccentric relationship between them quickly deepens. In the meantime, both must learn to navigate their new growing feelings for one another.\n\n[Written by MAL Rewrite]",
                        episodes: 12,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/1825/142258.jpg",
                        type: "TV",
                        source: "Light novel",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-03T00:00:00+00:00",
                            to: null,
                            string: "Jul 3, 2024 to ?",
                        },
                        mal_rank: 759,
                        year: 2024,
                        season: "summer",
                        score: 7.91,
                        scored_by: 52526,
                        studios: [{ id: 95, type: "anime", name: "Doga Kobo" }],
                        genres: [
                            { id: 4, type: "anime", name: "Comedy" },
                            { id: 22, type: "anime", name: "Romance" },
                        ],
                        themes: [{ id: 23, type: "anime", name: "School" }],
                        demographics: [],
                    },
                ],
            },
            {
                heading: "Popular This Season",
                path: "/anime/seasons/now",
                data: [
                    {
                        id: 55791,
                        title: '"Oshi no Ko" 2nd Season',
                        title_english: "[Oshi No Ko] Season 2",
                        title_japanese:
                            "\u3010\u63a8\u3057\u306e\u5b50\u3011\u7b2c2\u671f",
                        synopsis:
                            "With the help of producer Masaya Kaburagi, Aquamarine \"Aqua\" Hoshino and Kana Arima have landed the roles of Touki and Tsurugi in Lala Lai Theatrical Company's stage adaptation of the popular manga series Tokyo Blade. Co-starring with them is Aqua's girlfriend, Akane Kurokawa, who plays Touki's fianc\u00e9e, Princess Saya. Due to the fanbase preferring Tsurugi as Touki's love interest, Saya has made fewer and fewer appearances in the manga, making it difficult for Akane to fully immerse herself in the role. Her struggles are compounded by differences between the play's script and the original work\u2014differences that also greatly frustrate Tokyo Blade's author, Abiko Samejima.\n\nAqua, however, is more concerned with his personal goals than he is with the play. He has only one objective in mind: to grow closer to director Toshirou Kindaichi and find out what he knows about Aqua's mother, Ai.\n\n[Written by MAL Rewrite]",
                        episodes: 13,
                        duration: 25,
                        image: "https://cdn.myanimelist.net/images/anime/1006/143302l.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-03T00:00:00+00:00",
                            to: null,
                            string: "Jul 3, 2024 to ?",
                        },
                        mal_rank: 117,
                        year: 2024,
                        season: "summer",
                        score: 8.54,
                        scored_by: 42327,
                        studios: [{ id: 95, type: "anime", name: "Doga Kobo" }],
                        genres: [
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 37, type: "anime", name: "Supernatural" },
                        ],
                        themes: [
                            { id: 72, type: "anime", name: "Reincarnation" },
                            { id: 75, type: "anime", name: "Showbiz" },
                        ],
                        demographics: [
                            { id: 42, type: "anime", name: "Seinen" },
                        ],
                    },
                    {
                        id: 54744,
                        title: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
                        title_english:
                            "Alya Sometimes Hides Her Feelings in Russian",
                        title_japanese:
                            "\u6642\u3005\u30dc\u30bd\u30c3\u3068\u30ed\u30b7\u30a2\u8a9e\u3067\u30c7\u30ec\u308b\u96a3\u306e\u30a2\u30fc\u30ea\u30e3\u3055\u3093",
                        synopsis:
                            "Seirei Academy is a prestigious school attended by the very best students in Japan. Alisa Mikhailovna \"Alya\" Kujou, the half-Russian and half-Japanese treasurer of the school's student council, is known for her intelligence, stunning looks, and rigid personality. Contrasting her near-flawless persona, Alya's unmotivated classmate Masachika Kuze slacks off during lessons and seems to show no interest in her.\n\nInitially irritated, Alya gradually becomes more intrigued by Masachika and starts expressing her affection for him in Russian. However, she is oblivious to his secret\u2014he understands the language fluently! Due to a childhood friend who was temporarily staying in Japan, Masachika has been studying Russian in hopes of reuniting with her.\n\nAs the two spend more time together, the playful and eccentric relationship between them quickly deepens. In the meantime, both must learn to navigate their new growing feelings for one another.\n\n[Written by MAL Rewrite]",
                        episodes: 12,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/1825/142258l.jpg",
                        type: "TV",
                        source: "Light novel",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-03T00:00:00+00:00",
                            to: null,
                            string: "Jul 3, 2024 to ?",
                        },
                        mal_rank: 759,
                        year: 2024,
                        season: "summer",
                        score: 7.91,
                        scored_by: 52526,
                        studios: [{ id: 95, type: "anime", name: "Doga Kobo" }],
                        genres: [
                            { id: 4, type: "anime", name: "Comedy" },
                            { id: 22, type: "anime", name: "Romance" },
                        ],
                        themes: [{ id: 23, type: "anime", name: "School" }],
                        demographics: [],
                    },
                    {
                        id: 52635,
                        title: "Kami no Tou: Ouji no Kikan",
                        title_english: "Tower of God: Return of the Prince",
                        title_japanese:
                            "\u795e\u4e4b\u5854 -Tower of God- \u738b\u5b50\u306e\u5e30\u9084",
                        synopsis:
                            'On the 20th floor of the Tower, the "Regulars" who have been permitted to enter have to undertake arduous and extremely expensive tests to rank up. Most abandon hope and choose to stay where they are\u2014but not Ja Wangnan.\n\nWangnan is determined to reach the top and become the king of the Tower. However, he is weak and has repeatedly failed the exam, with debt collectors tailing him. In desperation, he attempts the exam one more time, only to encounter a mysterious and powerful individual: Jyu Viole Grace, a member of the crime syndicate FUG.\n\nCursing his rotten luck, Wangnan has no choice but to form alliances with strong people, including Viole\u2014who still refuses to be part of any team. Amid a dire situation, Wangnan must find a way to change Viole\'s mind to finally advance past the 20th floor, or he will never get a chance to build his legacy.\n\n[Written by MAL Rewrite]',
                        episodes: null,
                        duration: 23,
                        image: "https://cdn.myanimelist.net/images/anime/1107/143536l.jpg",
                        type: "TV",
                        source: "Web manga",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-07T00:00:00+00:00",
                            to: null,
                            string: "Jul 7, 2024 to ?",
                        },
                        mal_rank: 3446,
                        year: 2024,
                        season: "summer",
                        score: 7.16,
                        scored_by: 24418,
                        studios: [
                            {
                                id: 229,
                                type: "anime",
                                name: "The Answer Studio",
                            },
                        ],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 10, type: "anime", name: "Fantasy" },
                            { id: 7, type: "anime", name: "Mystery" },
                        ],
                        themes: [],
                        demographics: [],
                    },
                    {
                        id: 58426,
                        title: "Shikanoko Nokonoko Koshitantan",
                        title_english: "My Deer Friend Nokotan",
                        title_japanese:
                            "\u3057\u304b\u306e\u3053\u306e\u3053\u306e\u3053\u3053\u3057\u305f\u3093\u305f\u3093",
                        synopsis:
                            "Torako Koshi is the epitome of perfection. With her peerless beauty, top-notch grades, and position as student council president, her popularity in school is unrivaled. However, she harbors a dark secret\u2014she was a delinquent back in middle school\u2014and this is something she conceals to the best of her abilities.\n\nUnfortunately, when she meets the mysterious deer girl Noko Shikanoko, Torako's hidden shame is constantly on the precipice of being exposed due to Shikanoko's rather weird antics. To maintain the reputation she worked so hard for, Torako must go along with Shikanoko's whims, even going so far as to become president of the newly established Deer Club. All her efforts will be rewarded if she can prevent the menacing doe from accidentally blurting out damaging details about her personal history that will undoubtedly unleash Torako's greatest nightmare.\n\n[Written by MAL Rewrite]",
                        episodes: 12,
                        duration: 23,
                        image: "https://cdn.myanimelist.net/images/anime/1084/144617l.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-07T00:00:00+00:00",
                            to: null,
                            string: "Jul 7, 2024 to ?",
                        },
                        mal_rank: 2310,
                        year: 2024,
                        season: "summer",
                        score: 7.39,
                        scored_by: 37256,
                        studios: [
                            { id: 858, type: "anime", name: "Wit Studio" },
                        ],
                        genres: [{ id: 4, type: "anime", name: "Comedy" }],
                        themes: [
                            { id: 57, type: "anime", name: "Gag Humor" },
                            { id: 23, type: "anime", name: "School" },
                        ],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 58059,
                        title: "Tsue to Tsurugi no Wistoria",
                        title_english: "Wistoria: Wand and Sword",
                        title_japanese:
                            "\u6756\u3068\u5263\u306e\u30a6\u30a3\u30b9\u30c8\u30ea\u30a2",
                        synopsis:
                            "Will Serfort dreams of keeping his promise to a childhood friend by becoming a Magia Vander, one of the mighty magicians who sit atop the Wizard's Tower. However, he is unable to cast even the simplest of spells, leaving him to fight dungeon monsters to earn credits at Regarden Magical Academy. As if that weren't enough, he finds himself putting his sword skills to the test against a bullying professor!\n\n(Source: Kodansha USA)",
                        episodes: 12,
                        duration: 23,
                        image: "https://cdn.myanimelist.net/images/anime/1281/144104l.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-07T00:00:00+00:00",
                            to: null,
                            string: "Jul 7, 2024 to ?",
                        },
                        mal_rank: 964,
                        year: 2024,
                        season: "summer",
                        score: 7.82,
                        scored_by: 28700,
                        studios: [
                            { id: 60, type: "anime", name: "Actas" },
                            {
                                id: 1258,
                                type: "anime",
                                name: "Bandai Namco Pictures",
                            },
                        ],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [{ id: 23, type: "anime", name: "School" }],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 57524,
                        title: "Make Heroine ga Oosugiru!",
                        title_english: "Makeine: Too Many Losing Heroines!",
                        title_japanese:
                            "\u8ca0\u3051\u30d2\u30ed\u30a4\u30f3\u304c\u591a\u3059\u304e\u308b\uff01",
                        synopsis:
                            'Despite not understanding much about fleeting teen romance, first-year high school student Kazuhiko Nukumizu still wonders how he would react if his life were to be turned into a love story. Regardless, as a self-proclaimed "background character," Nukumizu is satisfied continuing his life as an introvert with a negligible social life. However, he suddenly finds himself too close to the spotlight when he witnesses his popular classmate Anna Yanami be rejected by her childhood friend in the middle of a family restaurant. \n\nWhile Nukumizu wishes he could just forget what he saw and move on, Anna ends up forcefully confiding herself in Nukumizu, lamenting her status as a childhood friend fated to have her beloved stolen. As he becomes dragged into Anna\'s situation, Nukumizu soon gets caught up in the relationship drama of two more girls: Lemon Yakishio, an outgoing member of the track and field club; and Chika Komari, a shy member of the literature club. Now thrust out of his comfort zone, Nukumizu finds himself a major character in the lives of too many losing heroines. \n\n[Written by MAL Rewrite]',
                        episodes: 12,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/1332/143513l.jpg",
                        type: "TV",
                        source: "Light novel",
                        status: "Currently Airing",
                        aired: {
                            from: "2024-07-14T00:00:00+00:00",
                            to: null,
                            string: "Jul 14, 2024 to ?",
                        },
                        mal_rank: 240,
                        year: 2024,
                        season: "summer",
                        score: 8.33,
                        scored_by: 24655,
                        studios: [
                            { id: 56, type: "anime", name: "A-1 Pictures" },
                        ],
                        genres: [
                            { id: 4, type: "anime", name: "Comedy" },
                            { id: 22, type: "anime", name: "Romance" },
                        ],
                        themes: [{ id: 23, type: "anime", name: "School" }],
                        demographics: [],
                    },
                ],
            },
            {
                heading: "Upcoming",
                path: "/anime/seasons/2024/fall",
                data: [
                    {
                        id: 54857,
                        title: "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
                        title_english:
                            "Re:ZERO -Starting Life in Another World- Season 3",
                        title_japanese:
                            "Re:\u30bc\u30ed\u304b\u3089\u59cb\u3081\u308b\u7570\u4e16\u754c\u751f\u6d3b",
                        synopsis:
                            "Third season of Re:Zero kara Hajimeru Isekai Seikatsu.",
                        episodes: 16,
                        duration: null,
                        image: "https://cdn.myanimelist.net/images/anime/1706/144725l.jpg",
                        type: "TV",
                        source: "Light novel",
                        status: "Not yet aired",
                        aired: {
                            from: "2024-10-02T00:00:00+00:00",
                            to: null,
                            string: "Oct 2, 2024 to ?",
                        },
                        mal_rank: null,
                        year: 2024,
                        season: "fall",
                        score: null,
                        scored_by: null,
                        studios: [
                            { id: 314, type: "anime", name: "White Fox" },
                        ],
                        genres: [
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 10, type: "anime", name: "Fantasy" },
                            { id: 41, type: "anime", name: "Suspense" },
                        ],
                        themes: [
                            { id: 62, type: "anime", name: "Isekai" },
                            { id: 40, type: "anime", name: "Psychological" },
                            { id: 78, type: "anime", name: "Time Travel" },
                        ],
                        demographics: [],
                    },
                    {
                        id: 40333,
                        title: "Uzumaki",
                        title_english: "Uzumaki: Spiral into Horror",
                        title_japanese: "\u3046\u305a\u307e\u304d",
                        synopsis:
                            "In the town of Kurouzu-cho, Kirie Goshima lives a fairly normal life with her family. As she walks to the train station one day to meet her boyfriend, Shuuichi Saito, she sees his father staring at a snail shell in an alley. Thinking nothing of it, she mentions the incident to Shuuichi, who says that his father has been acting weird lately. Shuuichi reveals his rising desire to leave the town with Kirie, saying that the town is infected with spirals.\n\nBut his father's obsession with the shape soon proves deadly, beginning a chain of horrific and unexplainable events that causes the residents of Kurouzu-cho to spiral into madness.\n\n[Written by MAL Rewrite]",
                        episodes: 4,
                        duration: null,
                        image: "https://cdn.myanimelist.net/images/anime/1432/105265l.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Not yet aired",
                        aired: {
                            from: "2024-09-28T00:00:00+00:00",
                            to: null,
                            string: "Sep 28, 2024 to ?",
                        },
                        mal_rank: null,
                        year: 2024,
                        season: "fall",
                        score: null,
                        scored_by: null,
                        studios: [{ id: 1967, type: "anime", name: "Drive" }],
                        genres: [
                            { id: 5, type: "anime", name: "Avant Garde" },
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 14, type: "anime", name: "Horror" },
                            { id: 37, type: "anime", name: "Supernatural" },
                            { id: 41, type: "anime", name: "Suspense" },
                        ],
                        themes: [
                            { id: 40, type: "anime", name: "Psychological" },
                        ],
                        demographics: [
                            { id: 42, type: "anime", name: "Seinen" },
                        ],
                    },
                    {
                        id: 54865,
                        title: "Blue Lock vs. U-20 Japan",
                        title_english: "Blue Lock Season 2",
                        title_japanese:
                            "\u30d6\u30eb\u30fc\u30ed\u30c3\u30af VS. U-20 JAPAN",
                        synopsis: "Second season of Blue Lock.",
                        episodes: 14,
                        duration: null,
                        image: "https://cdn.myanimelist.net/images/anime/1584/144860l.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Not yet aired",
                        aired: {
                            from: "2024-10-05T00:00:00+00:00",
                            to: null,
                            string: "Oct 5, 2024 to ?",
                        },
                        mal_rank: null,
                        year: 2024,
                        season: "fall",
                        score: null,
                        scored_by: null,
                        studios: [{ id: 441, type: "anime", name: "8bit" }],
                        genres: [{ id: 30, type: "anime", name: "Sports" }],
                        themes: [
                            { id: 77, type: "anime", name: "Team Sports" },
                        ],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 50306,
                        title: "Seirei Gensouki 2",
                        title_english:
                            "Seirei Gensouki: Spirit Chronicles Season 2",
                        title_japanese: "\u7cbe\u970a\u5e7b\u60f3\u8a182",
                        synopsis: "Second season of Seirei Gensouki.",
                        episodes: null,
                        duration: null,
                        image: "https://cdn.myanimelist.net/images/anime/1087/144583l.jpg",
                        type: "TV",
                        source: "Light novel",
                        status: "Not yet aired",
                        aired: {
                            from: "2024-10-01T00:00:00+00:00",
                            to: null,
                            string: "Oct 2024 to ?",
                        },
                        mal_rank: null,
                        year: 2024,
                        season: "fall",
                        score: null,
                        scored_by: null,
                        studios: [
                            {
                                id: 73,
                                type: "anime",
                                name: "TMS Entertainment",
                            },
                        ],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 10, type: "anime", name: "Fantasy" },
                            { id: 22, type: "anime", name: "Romance" },
                        ],
                        themes: [
                            { id: 35, type: "anime", name: "Harem" },
                            { id: 62, type: "anime", name: "Isekai" },
                            { id: 72, type: "anime", name: "Reincarnation" },
                        ],
                        demographics: [],
                    },
                    {
                        id: 57334,
                        title: "Dandadan",
                        title_english: "Dandadan",
                        title_japanese: "\u30c0\u30f3\u30c0\u30c0\u30f3",
                        synopsis:
                            "After being aggressively rejected, Momo Ayase finds herself sulking when she stumbles across a boy being bullied. Saved by her rash kindness, the alien-obsessed boy attempts to speak to her about extraterrestrial interests he believes they share. Rejecting his claims, Ayase proclaimed that she instead is a believer in ghosts, starting an argument between the two over which is real.\n\nIn a bet to determine who is correct, the two decide to separately visit locations associated with both the extraterrestrial and the supernatural\u2014Ayase visiting the former and the boy visiting the latter. When the two reach their respective places, it turns out that neither was wrong and that both aliens and ghosts do exist.\n\nThis marks the beginning of Ayase and the boy's adventure, as they attempt to fix the surreal, supernatural, and extraterrestrial elements around them to return to a normal life.\n\n[Written by MAL Rewrite]",
                        episodes: null,
                        duration: null,
                        image: "https://cdn.myanimelist.net/images/anime/1584/143719l.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Not yet aired",
                        aired: {
                            from: "2024-10-04T00:00:00+00:00",
                            to: null,
                            string: "Oct 4, 2024 to ?",
                        },
                        mal_rank: null,
                        year: 2024,
                        season: "fall",
                        score: null,
                        scored_by: null,
                        studios: [
                            { id: 1591, type: "anime", name: "Science SARU" },
                        ],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 4, type: "anime", name: "Comedy" },
                            { id: 37, type: "anime", name: "Supernatural" },
                        ],
                        themes: [],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 52995,
                        title: "Arifureta Shokugyou de Sekai Saikyou Season 3",
                        title_english:
                            "Arifureta: From Commonplace to World's Strongest Season 3",
                        title_japanese:
                            "\u3042\u308a\u3075\u308c\u305f\u8077\u696d\u3067\u4e16\u754c\u6700\u5f37 season 3",
                        synopsis:
                            "Third season of Arifureta Shokugyou de Sekai Saikyou.",
                        episodes: 16,
                        duration: null,
                        image: "https://cdn.myanimelist.net/images/anime/1594/142236l.jpg",
                        type: "TV",
                        source: "Light novel",
                        status: "Not yet aired",
                        aired: {
                            from: "2024-10-14T00:00:00+00:00",
                            to: null,
                            string: "Oct 14, 2024 to ?",
                        },
                        mal_rank: null,
                        year: 2024,
                        season: "fall",
                        score: null,
                        scored_by: null,
                        studios: [{ id: 163, type: "anime", name: "asread." }],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [
                            { id: 35, type: "anime", name: "Harem" },
                            { id: 62, type: "anime", name: "Isekai" },
                        ],
                        demographics: [],
                    },
                ],
            },
            {
                heading: "Popular TV Series",
                path: "/anime/tv-series/popular",
                data: [
                    {
                        id: 16498,
                        title: "Shingeki no Kyojin",
                        title_english: "Attack on Titan",
                        title_japanese: "\u9032\u6483\u306e\u5de8\u4eba",
                        synopsis:
                            "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.\n\n[Written by MAL Rewrite]",
                        episodes: 25,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Finished Airing",
                        aired: {
                            from: "2013-04-07T00:00:00+00:00",
                            to: "2013-09-29T00:00:00+00:00",
                            string: "Apr 7, 2013 to Sep 29, 2013",
                        },
                        mal_rank: 109,
                        year: 2013,
                        season: "spring",
                        score: 8.55,
                        scored_by: 2843561,
                        studios: [
                            { id: 858, type: "anime", name: "Wit Studio" },
                        ],
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
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 1535,
                        title: "Death Note",
                        title_english: "Death Note",
                        title_japanese: "\u30c7\u30b9\u30ce\u30fc\u30c8",
                        synopsis:
                            "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.\n\nFor his own amusement, Ryuk drops his Death Note into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.\n\nAware of the terrifying godlike power that has fallen into his hands, Light\u2014under the alias Kira\u2014follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.\n\n[Written by MAL Rewrite]",
                        episodes: 37,
                        duration: 23,
                        image: "https://cdn.myanimelist.net/images/anime/1079/138100.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Finished Airing",
                        aired: {
                            from: "2006-10-04T00:00:00+00:00",
                            to: "2007-06-27T00:00:00+00:00",
                            string: "Oct 4, 2006 to Jun 27, 2007",
                        },
                        mal_rank: 84,
                        year: 2006,
                        season: "fall",
                        score: 8.62,
                        scored_by: 2790359,
                        studios: [{ id: 11, type: "anime", name: "Madhouse" }],
                        genres: [
                            { id: 37, type: "anime", name: "Supernatural" },
                            { id: 41, type: "anime", name: "Suspense" },
                        ],
                        themes: [
                            { id: 40, type: "anime", name: "Psychological" },
                        ],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 5114,
                        title: "Fullmetal Alchemist: Brotherhood",
                        title_english: "Fullmetal Alchemist: Brotherhood",
                        title_japanese:
                            "\u92fc\u306e\u932c\u91d1\u8853\u5e2b FULLMETAL ALCHEMIST",
                        synopsis:
                            "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone\u2014a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
                        episodes: 64,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Finished Airing",
                        aired: {
                            from: "2009-04-05T00:00:00+00:00",
                            to: "2010-07-04T00:00:00+00:00",
                            string: "Apr 5, 2009 to Jul 4, 2010",
                        },
                        mal_rank: 2,
                        year: 2009,
                        season: "spring",
                        score: 9.09,
                        scored_by: 2152602,
                        studios: [{ id: 4, type: "anime", name: "Bones" }],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [{ id: 38, type: "anime", name: "Military" }],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 30276,
                        title: "One Punch Man",
                        title_english: "One Punch Man",
                        title_japanese: "\u30ef\u30f3\u30d1\u30f3\u30de\u30f3",
                        synopsis:
                            "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem\u2014he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nOne day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama's disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.\n\n[Written by MAL Rewrite]",
                        episodes: 12,
                        duration: 24,
                        image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
                        type: "TV",
                        source: "Web manga",
                        status: "Finished Airing",
                        aired: {
                            from: "2015-10-05T00:00:00+00:00",
                            to: "2015-12-21T00:00:00+00:00",
                            string: "Oct 5, 2015 to Dec 21, 2015",
                        },
                        mal_rank: 141,
                        year: 2015,
                        season: "fall",
                        score: 8.49,
                        scored_by: 2270538,
                        studios: [{ id: 11, type: "anime", name: "Madhouse" }],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 4, type: "anime", name: "Comedy" },
                        ],
                        themes: [
                            { id: 50, type: "anime", name: "Adult Cast" },
                            { id: 20, type: "anime", name: "Parody" },
                            { id: 31, type: "anime", name: "Super Power" },
                        ],
                        demographics: [
                            { id: 42, type: "anime", name: "Seinen" },
                        ],
                    },
                    {
                        id: 11757,
                        title: "Sword Art Online",
                        title_english: "Sword Art Online",
                        title_japanese:
                            "\u30bd\u30fc\u30c9\u30a2\u30fc\u30c8\u30fb\u30aa\u30f3\u30e9\u30a4\u30f3",
                        synopsis:
                            "Ever since the release of the innovative NerveGear, gamers from all around the globe have been given the opportunity to experience a completely immersive virtual reality. Sword Art Online (SAO), one of the most recent games on the console, offers a gateway into the wondrous world of Aincrad, a vivid, medieval landscape where users can do anything within the limits of imagination. With the release of this worldwide sensation, gaming has never felt more lifelike.\n\nHowever, the idyllic fantasy rapidly becomes a brutal nightmare when SAO's creator traps thousands of players inside the game. The \"log-out\" function has been removed, with the only method of escape involving beating all of Aincrad's one hundred increasingly difficult levels. Adding to the struggle, any in-game death becomes permanent, ending the player's life in the real world.\n\nWhile Kazuto \"Kirito\" Kirigaya was fortunate enough to be a beta-tester for the game, he quickly finds that despite his advantages, he cannot overcome SAO's challenges alone. Teaming up with Asuna Yuuki and other talented players, Kirito makes an effort to face the seemingly insurmountable trials head-on. But with difficult bosses and threatening dark cults impeding his progress, Kirito finds that such tasks are much easier said than done.\n\n[Written by MAL Rewrite]",
                        episodes: 25,
                        duration: 23,
                        image: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
                        type: "TV",
                        source: "Light novel",
                        status: "Finished Airing",
                        aired: {
                            from: "2012-07-08T00:00:00+00:00",
                            to: "2012-12-23T00:00:00+00:00",
                            string: "Jul 8, 2012 to Dec 23, 2012",
                        },
                        mal_rank: 3193,
                        year: 2012,
                        season: "summer",
                        score: 7.21,
                        scored_by: 2173507,
                        studios: [
                            { id: 56, type: "anime", name: "A-1 Pictures" },
                        ],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 10, type: "anime", name: "Fantasy" },
                            { id: 22, type: "anime", name: "Romance" },
                        ],
                        themes: [
                            { id: 64, type: "anime", name: "Love Polygon" },
                            { id: 79, type: "anime", name: "Video Game" },
                        ],
                        demographics: [],
                    },
                    {
                        id: 38000,
                        title: "Kimetsu no Yaiba",
                        title_english: "Demon Slayer: Kimetsu no Yaiba",
                        title_japanese: "\u9b3c\u6ec5\u306e\u5203",
                        synopsis:
                            "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.\n\nWhen he finally arrives back home the next day, he is met with a horrifying sight\u2014his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.\n\n[Written by MAL Rewrite]",
                        episodes: 26,
                        duration: 23,
                        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
                        type: "TV",
                        source: "Manga",
                        status: "Finished Airing",
                        aired: {
                            from: "2019-04-06T00:00:00+00:00",
                            to: "2019-09-28T00:00:00+00:00",
                            string: "Apr 6, 2019 to Sep 28, 2019",
                        },
                        mal_rank: 152,
                        year: 2019,
                        season: "spring",
                        score: 8.46,
                        scored_by: 2145457,
                        studios: [{ id: 43, type: "anime", name: "ufotable" }],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 46, type: "anime", name: "Award Winning" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [{ id: 13, type: "anime", name: "Historical" }],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                ],
            },
            {
                heading: "Popular Movies",
                path: "/anime/movies/popular",
                data: [
                    {
                        id: 32281,
                        title: "Kimi no Na wa.",
                        title_english: "Your Name.",
                        title_japanese: "\u541b\u306e\u540d\u306f\u3002",
                        synopsis:
                            "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo\u2014a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.\n\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo\u2014but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.\n\nKimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.\n\n[Written by MAL Rewrite]",
                        episodes: 1,
                        duration: [1, 46],
                        image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
                        type: "Movie",
                        source: "Original",
                        status: "Finished Airing",
                        aired: {
                            from: "2016-08-26T00:00:00+00:00",
                            to: null,
                            string: "Aug 26, 2016",
                        },
                        mal_rank: 28,
                        year: 2016,
                        season: null,
                        score: 8.83,
                        scored_by: 1935454,
                        studios: [
                            {
                                id: 291,
                                type: "anime",
                                name: "CoMix Wave Films",
                            },
                        ],
                        genres: [
                            { id: 46, type: "anime", name: "Award Winning" },
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 37, type: "anime", name: "Supernatural" },
                        ],
                        themes: [
                            { id: 74, type: "anime", name: "Romantic Subtext" },
                        ],
                        demographics: [],
                    },
                    {
                        id: 28851,
                        title: "Koe no Katachi",
                        title_english: "A Silent Voice",
                        title_japanese: "\u8072\u306e\u5f62",
                        synopsis:
                            "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.\n\nNow in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.\n\nKoe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.\n \n[Written by MAL Rewrite]",
                        episodes: 1,
                        duration: [2, 10],
                        image: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
                        type: "Movie",
                        source: "Manga",
                        status: "Finished Airing",
                        aired: {
                            from: "2016-09-17T00:00:00+00:00",
                            to: null,
                            string: "Sep 17, 2016",
                        },
                        mal_rank: 18,
                        year: 2016,
                        season: null,
                        score: 8.93,
                        scored_by: 1647740,
                        studios: [
                            { id: 2, type: "anime", name: "Kyoto Animation" },
                        ],
                        genres: [
                            { id: 46, type: "anime", name: "Award Winning" },
                            { id: 8, type: "anime", name: "Drama" },
                        ],
                        themes: [
                            { id: 74, type: "anime", name: "Romantic Subtext" },
                        ],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 199,
                        title: "Sen to Chihiro no Kamikakushi",
                        title_english: "Spirited Away",
                        title_japanese:
                            "\u5343\u3068\u5343\u5c0b\u306e\u795e\u96a0\u3057",
                        synopsis:
                            "Stubborn, spoiled, and na\u00efve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start\u2014Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.\n\nVivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.\n\n[Written by MAL Rewrite]",
                        episodes: 1,
                        duration: [2, 4],
                        image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
                        type: "Movie",
                        source: "Original",
                        status: "Finished Airing",
                        aired: {
                            from: "2001-07-20T00:00:00+00:00",
                            to: null,
                            string: "Jul 20, 2001",
                        },
                        mal_rank: 40,
                        year: 2001,
                        season: null,
                        score: 8.77,
                        scored_by: 1321781,
                        studios: [
                            { id: 21, type: "anime", name: "Studio Ghibli" },
                        ],
                        genres: [
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 46, type: "anime", name: "Award Winning" },
                            { id: 37, type: "anime", name: "Supernatural" },
                        ],
                        themes: [{ id: 6, type: "anime", name: "Mythology" }],
                        demographics: [],
                    },
                    {
                        id: 40456,
                        title: "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
                        title_english:
                            "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
                        title_japanese:
                            "\u5287\u5834\u7248 \u9b3c\u6ec5\u306e\u5203 \u7121\u9650\u5217\u8eca\u7de8",
                        synopsis:
                            "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the Flame Pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand.\n\nUnbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. As things begin to spiral out of control, Tanjirou's resolve and commitment to duty are put to the test.\n\n[Written by MAL Rewrite]",
                        episodes: 1,
                        duration: [1, 56],
                        image: "https://cdn.myanimelist.net/images/anime/1704/106947.jpg",
                        type: "Movie",
                        source: "Manga",
                        status: "Finished Airing",
                        aired: {
                            from: "2020-10-16T00:00:00+00:00",
                            to: null,
                            string: "Oct 16, 2020",
                        },
                        mal_rank: 102,
                        year: 2020,
                        season: null,
                        score: 8.57,
                        scored_by: 1056474,
                        studios: [{ id: 43, type: "anime", name: "ufotable" }],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [{ id: 13, type: "anime", name: "Historical" }],
                        demographics: [
                            { id: 27, type: "anime", name: "Shounen" },
                        ],
                    },
                    {
                        id: 431,
                        title: "Howl no Ugoku Shiro",
                        title_english: "Howl's Moving Castle",
                        title_japanese:
                            "\u30cf\u30a6\u30eb\u306e\u52d5\u304f\u57ce",
                        synopsis:
                            "That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer\u2014or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop. \n\nHowever, Sophie's simple life takes a turn for the exciting when she is ensnared in a disturbing situation, and the mysterious wizard appears to rescue her. Unfortunately, this encounter, brief as it may be, spurs the vain and vengeful Witch of the Waste\u2014in a fit of jealousy caused by a past discord with Howl\u2014to put a curse on the maiden, turning her into an old woman.\n\nIn an endeavor to return to normal, Sophie must accompany Howl and a myriad of eccentric companions\u2014ranging from a powerful fire demon to a hopping scarecrow\u2014in his living castle, on a dangerous adventure as a raging war tears their kingdom apart.\n\n[Written by MAL Rewrite]",
                        episodes: 1,
                        duration: [1, 59],
                        image: "https://cdn.myanimelist.net/images/anime/1470/138723.jpg",
                        type: "Movie",
                        source: "Novel",
                        status: "Finished Airing",
                        aired: {
                            from: "2004-11-20T00:00:00+00:00",
                            to: null,
                            string: "Nov 20, 2004",
                        },
                        mal_rank: 68,
                        year: 2004,
                        season: null,
                        score: 8.67,
                        scored_by: 946174,
                        studios: [
                            { id: 21, type: "anime", name: "Studio Ghibli" },
                        ],
                        genres: [
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 46, type: "anime", name: "Award Winning" },
                            { id: 8, type: "anime", name: "Drama" },
                            { id: 10, type: "anime", name: "Fantasy" },
                            { id: 22, type: "anime", name: "Romance" },
                        ],
                        themes: [],
                        demographics: [],
                    },
                    {
                        id: 164,
                        title: "Mononoke Hime",
                        title_english: "Princess Mononoke",
                        title_japanese: "\u3082\u306e\u306e\u3051\u59eb",
                        synopsis:
                            "When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans. As the opposing forces of nature and mankind begin to clash in a desperate struggle for survival, Ashitaka attempts to seek harmony between the two, all the while battling the latent demon inside of him. Princess Mononoke is a tale depicting the connection of technology and nature, while showing the path to harmony that could be achieved by mutual acceptance.\n\n[Written by MAL Rewrite]",
                        episodes: 1,
                        duration: [2, 13],
                        image: "https://cdn.myanimelist.net/images/anime/7/75919.jpg",
                        type: "Movie",
                        source: "Original",
                        status: "Finished Airing",
                        aired: {
                            from: "1997-07-12T00:00:00+00:00",
                            to: null,
                            string: "Jul 12, 1997",
                        },
                        mal_rank: 70,
                        year: 1997,
                        season: null,
                        score: 8.66,
                        scored_by: 826768,
                        studios: [
                            { id: 21, type: "anime", name: "Studio Ghibli" },
                        ],
                        genres: [
                            { id: 1, type: "anime", name: "Action" },
                            { id: 2, type: "anime", name: "Adventure" },
                            { id: 46, type: "anime", name: "Award Winning" },
                            { id: 10, type: "anime", name: "Fantasy" },
                        ],
                        themes: [],
                        demographics: [],
                    },
                ],
            },
        ],
    };

    const topAnime = {
        success: true,
        pagination: {
            has_next_page: true,
            pages_count: 2769,
            total_count: 27682,
            current_count: 10,
        },
        data: [
            {
                id: 52991,
                title: "Sousou no Frieren",
                title_english: "Frieren: Beyond Journey's End",
                title_japanese:
                    "\u846c\u9001\u306e\u30d5\u30ea\u30fc\u30ec\u30f3",
                synopsis:
                    "During their decade-long quest to defeat the Demon King, the members of the hero's party\u2014Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren\u2014forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n\nHowever, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her \"usual\" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n\nAs the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n\n[Written by MAL Rewrite]",
                episodes: 28,
                duration: 24,
                image: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
                type: "TV",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2023-09-29T00:00:00+00:00",
                    to: "2024-03-22T00:00:00+00:00",
                    string: "Sep 29, 2023 to Mar 22, 2024",
                },
                mal_rank: 1,
                year: 2023,
                score: 9.33,
                scored_by: 493220,
                studios: [{ id: 11, type: "anime", name: "Madhouse" }],
                genres: [
                    { id: 2, type: "anime", name: "Adventure" },
                    { id: 8, type: "anime", name: "Drama" },
                    { id: 10, type: "anime", name: "Fantasy" },
                ],
                themes: [],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
            {
                id: 5114,
                title: "Fullmetal Alchemist: Brotherhood",
                title_english: "Fullmetal Alchemist: Brotherhood",
                title_japanese:
                    "\u92fc\u306e\u932c\u91d1\u8853\u5e2b FULLMETAL ALCHEMIST",
                synopsis:
                    "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone\u2014a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
                episodes: 64,
                duration: 24,
                image: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
                type: "TV",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2009-04-05T00:00:00+00:00",
                    to: "2010-07-04T00:00:00+00:00",
                    string: "Apr 5, 2009 to Jul 4, 2010",
                },
                mal_rank: 2,
                year: 2009,
                score: 9.09,
                scored_by: 2152602,
                studios: [{ id: 4, type: "anime", name: "Bones" }],
                genres: [
                    { id: 1, type: "anime", name: "Action" },
                    { id: 2, type: "anime", name: "Adventure" },
                    { id: 8, type: "anime", name: "Drama" },
                    { id: 10, type: "anime", name: "Fantasy" },
                ],
                themes: [{ id: 38, type: "anime", name: "Military" }],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
            {
                id: 9253,
                title: "Steins;Gate",
                title_english: "Steins;Gate",
                title_japanese: "STEINS;GATE",
                synopsis:
                    'Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Okabe founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n\nHowever, when Okabe attends a conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Okabe dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.\n\nDue to the novel discovery, Okabe and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, Okabe fights a battle to not only save his loved ones but also to preserve his degrading sanity.\n\n[Written by MAL Rewrite]',
                episodes: 24,
                duration: 24,
                image: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
                type: "TV",
                source: "Visual novel",
                status: "Finished Airing",
                aired: {
                    from: "2011-04-06T00:00:00+00:00",
                    to: "2011-09-14T00:00:00+00:00",
                    string: "Apr 6, 2011 to Sep 14, 2011",
                },
                mal_rank: 3,
                year: 2011,
                score: 9.07,
                scored_by: 1420951,
                studios: [{ id: 314, type: "anime", name: "White Fox" }],
                genres: [
                    { id: 8, type: "anime", name: "Drama" },
                    { id: 24, type: "anime", name: "Sci-Fi" },
                    { id: 41, type: "anime", name: "Suspense" },
                ],
                themes: [
                    { id: 40, type: "anime", name: "Psychological" },
                    { id: 78, type: "anime", name: "Time Travel" },
                ],
                demographics: [],
            },
            {
                id: 28977,
                title: "Gintama\u00b0",
                title_english: "Gintama Season 4",
                title_japanese: "\u9280\u9b42\u00b0",
                synopsis:
                    "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]",
                episodes: 51,
                duration: 24,
                image: "https://cdn.myanimelist.net/images/anime/3/72078l.jpg",
                type: "TV",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2015-04-08T00:00:00+00:00",
                    to: "2016-03-30T00:00:00+00:00",
                    string: "Apr 8, 2015 to Mar 30, 2016",
                },
                mal_rank: 4,
                year: 2015,
                score: 9.06,
                scored_by: 255413,
                studios: [
                    { id: 1258, type: "anime", name: "Bandai Namco Pictures" },
                ],
                genres: [
                    { id: 1, type: "anime", name: "Action" },
                    { id: 4, type: "anime", name: "Comedy" },
                    { id: 24, type: "anime", name: "Sci-Fi" },
                ],
                themes: [
                    { id: 57, type: "anime", name: "Gag Humor" },
                    { id: 13, type: "anime", name: "Historical" },
                    { id: 20, type: "anime", name: "Parody" },
                    { id: 21, type: "anime", name: "Samurai" },
                ],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
            {
                id: 38524,
                title: "Shingeki no Kyojin Season 3 Part 2",
                title_english: "Attack on Titan Season 3 Part 2",
                title_japanese: "\u9032\u6483\u306e\u5de8\u4eba Season3 Part.2",
                synopsis:
                    "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again.\n\nReturning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. \n\nShingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive\u2014through countless sacrifices\u2014to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.\n\n[Written by MAL Rewrite]",
                episodes: 10,
                duration: 23,
                image: "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg",
                type: "TV",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2019-04-29T00:00:00+00:00",
                    to: "2019-07-01T00:00:00+00:00",
                    string: "Apr 29, 2019 to Jul 1, 2019",
                },
                mal_rank: 5,
                year: 2019,
                score: 9.05,
                scored_by: 1623908,
                studios: [{ id: 858, type: "anime", name: "Wit Studio" }],
                genres: [
                    { id: 1, type: "anime", name: "Action" },
                    { id: 8, type: "anime", name: "Drama" },
                    { id: 41, type: "anime", name: "Suspense" },
                ],
                themes: [
                    { id: 58, type: "anime", name: "Gore" },
                    { id: 38, type: "anime", name: "Military" },
                    { id: 76, type: "anime", name: "Survival" },
                ],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
            {
                id: 39486,
                title: "Gintama: The Final",
                title_english: "Gintama: The Very Final",
                title_japanese: "\u9280\u9b42 THE FINAL",
                synopsis:
                    "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu\u2014who continue to press on in search of immortality\u2014Gintoki returns to Edo.\n\nLater, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo\u2014and the rest of the world\u2014hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures.\n\n[Written by MAL Rewrite]",
                episodes: 1,
                duration: [1, 44],
                image: "https://cdn.myanimelist.net/images/anime/1245/116760l.jpg",
                type: "Movie",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2021-01-08T00:00:00+00:00",
                    to: null,
                    string: "Jan 8, 2021",
                },
                mal_rank: 6,
                year: 2021,
                score: 9.04,
                scored_by: 74846,
                studios: [
                    { id: 1258, type: "anime", name: "Bandai Namco Pictures" },
                ],
                genres: [
                    { id: 1, type: "anime", name: "Action" },
                    { id: 4, type: "anime", name: "Comedy" },
                    { id: 8, type: "anime", name: "Drama" },
                    { id: 24, type: "anime", name: "Sci-Fi" },
                ],
                themes: [
                    { id: 57, type: "anime", name: "Gag Humor" },
                    { id: 13, type: "anime", name: "Historical" },
                    { id: 20, type: "anime", name: "Parody" },
                    { id: 21, type: "anime", name: "Samurai" },
                ],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
            {
                id: 9969,
                title: "Gintama'",
                title_english: "Gintama Season 2",
                title_japanese: "\u9280\u9b42'",
                synopsis:
                    "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.\n\nBewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it.\n\nWith even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo.\n\n[Written by MAL Rewrite]",
                episodes: 51,
                duration: 24,
                image: "https://cdn.myanimelist.net/images/anime/4/50361l.jpg",
                type: "TV",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2011-04-04T00:00:00+00:00",
                    to: "2012-03-26T00:00:00+00:00",
                    string: "Apr 4, 2011 to Mar 26, 2012",
                },
                mal_rank: 7,
                year: 2011,
                score: 9.03,
                scored_by: 241142,
                studios: [{ id: 14, type: "anime", name: "Sunrise" }],
                genres: [
                    { id: 1, type: "anime", name: "Action" },
                    { id: 4, type: "anime", name: "Comedy" },
                    { id: 24, type: "anime", name: "Sci-Fi" },
                ],
                themes: [
                    { id: 57, type: "anime", name: "Gag Humor" },
                    { id: 13, type: "anime", name: "Historical" },
                    { id: 20, type: "anime", name: "Parody" },
                    { id: 21, type: "anime", name: "Samurai" },
                ],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
            {
                id: 11061,
                title: "Hunter x Hunter (2011)",
                title_english: "Hunter x Hunter",
                title_japanese:
                    "HUNTER\u00d7HUNTER\uff08\u30cf\u30f3\u30bf\u30fc\u00d7\u30cf\u30f3\u30bf\u30fc\uff09",
                synopsis:
                    "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination\u2014a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]",
                episodes: 148,
                duration: 23,
                image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
                type: "TV",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2011-10-02T00:00:00+00:00",
                    to: "2014-09-24T00:00:00+00:00",
                    string: "Oct 2, 2011 to Sep 24, 2014",
                },
                mal_rank: 8,
                year: 2011,
                score: 9.03,
                scored_by: 1800910,
                studios: [{ id: 11, type: "anime", name: "Madhouse" }],
                genres: [
                    { id: 1, type: "anime", name: "Action" },
                    { id: 2, type: "anime", name: "Adventure" },
                    { id: 10, type: "anime", name: "Fantasy" },
                ],
                themes: [],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
            {
                id: 57864,
                title: "Monogatari Series: Off & Monster Season",
                title_english: "Monogatari Series: Off & Monster Season",
                title_japanese:
                    "\u3008\u7269\u8a9e\u3009\u30b7\u30ea\u30fc\u30ba \u30aa\u30d5&\u30e2\u30f3\u30b9\u30bf\u30fc\u30b7\u30fc\u30ba\u30f3",
                synopsis:
                    "Koyomi Araragi spent his last year of high school helping girls in his town resolve various supernatural afflictions. But now Araragi has departed for university, leaving his friends to fend for themselves against new problems and curses that plague them. Yotsugi Ononoki, once a human corpse and now a living doll, takes residence in Araragi's home, keeping watch over his sister Tsukihi, a girl harboring a mystical secret of her own. As part of her duties, Yotsugi fills Araragi's vacated role as occult expert, assisting others in town with their issues.\n\nOne of these girls, middle school student Nadeko Sengoku, slowly recovers from her own recent brushes with the paranormal. She avoids returning to school, instead spending time alone in her room and pursuing her dream of becoming a professional manga artist. In order to speed up Nadeko's quest for mastery of her craft, Yotsugi convinces her to create four copies of herself, each representing a distinct aspect of Nadeko's personality. However, the clones refuse to help Nadeko, instead escaping into the town and creating a chaotic mess. Now forced to grapple with her own fractured sense of identity, Nadeko sets out to capture them and resolve her inner conflict.\n\n[Written by MAL Rewrite]",
                episodes: null,
                duration: 25,
                image: "https://cdn.myanimelist.net/images/anime/1741/140952l.jpg",
                type: "ONA",
                source: "Light novel",
                status: "Currently Airing",
                aired: {
                    from: "2024-07-06T00:00:00+00:00",
                    to: null,
                    string: "Jul 6, 2024 to ?",
                },
                mal_rank: 11,
                year: 2024,
                score: 9.02,
                scored_by: 9755,
                studios: [{ id: 44, type: "anime", name: "Shaft" }],
                genres: [
                    { id: 4, type: "anime", name: "Comedy" },
                    { id: 7, type: "anime", name: "Mystery" },
                    { id: 37, type: "anime", name: "Supernatural" },
                ],
                themes: [{ id: 32, type: "anime", name: "Vampire" }],
                demographics: [],
            },
            {
                id: 15417,
                title: "Gintama': Enchousen",
                title_english: "Gintama: Enchousen",
                title_japanese: "\u9280\u9b42' \u5ef6\u9577\u6226",
                synopsis:
                    "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character?\n\nIn addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls.\n\n[Written by MAL Rewrite]",
                episodes: 13,
                duration: 24,
                image: "https://cdn.myanimelist.net/images/anime/1452/123686l.jpg",
                type: "TV",
                source: "Manga",
                status: "Finished Airing",
                aired: {
                    from: "2012-10-04T00:00:00+00:00",
                    to: "2013-03-28T00:00:00+00:00",
                    string: "Oct 4, 2012 to Mar 28, 2013",
                },
                mal_rank: 10,
                year: 2012,
                score: 9.02,
                scored_by: 167938,
                studios: [{ id: 14, type: "anime", name: "Sunrise" }],
                genres: [
                    { id: 1, type: "anime", name: "Action" },
                    { id: 4, type: "anime", name: "Comedy" },
                    { id: 24, type: "anime", name: "Sci-Fi" },
                ],
                themes: [
                    { id: 57, type: "anime", name: "Gag Humor" },
                    { id: 13, type: "anime", name: "Historical" },
                    { id: 20, type: "anime", name: "Parody" },
                    { id: 21, type: "anime", name: "Samurai" },
                ],
                demographics: [{ id: 27, type: "anime", name: "Shounen" }],
            },
        ],
    };

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/anime/home?limit=6`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    if (homepageData[0].data[0] === null) {
                        setHomepageData(data.data ?? []);
                    }
                }
            });

        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top/anime?limit=10`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    if (topAnimeData[0] === null) {
                        setTopAnimeData(data.data ?? []);
                    }
                }
            });
    }, []);

    return (
        <main className="max-width space-y-8 mb-10">
            {/* Layout Options */}
            <div className="flex justify-end gap-2 pt-5 pr-5">
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
                            <div className="lg:pl-3 flex lg:grid lg:grid-cols-5 gap-4 justify-center flex-wrap lg:[&_article:last-child]:hidden">
                                {item.data.map((item, idx) => (
                                    <ItemCardSimple item={item} key={idx} />
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
                                href={"#"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="flex lg:grid lg:grid-cols-5 gap-4 justify-evenly flex-wrap">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardSimple
                                    item={item}
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
                                    <ItemCardGrid item={item} key={idx} />
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
                                href={"#"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardGrid
                                    item={item}
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
                                    <ItemCardList item={item} key={idx} />
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
                                href={"#"}
                                className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Explore Further
                            </Link>
                        </div>
                        <div className="space-y-5">
                            {topAnimeData.map((item, idx) => (
                                <ItemCardList
                                    item={item}
                                    key={idx}
                                    rank={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}
