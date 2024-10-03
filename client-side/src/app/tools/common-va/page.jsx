"use client";

import { TextInput, Tooltip } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const page = () => {
    const router = useRouter();
    const [targetAnime, setTargetAnime] = useState({
        target_01: {
            id: 42897,
            title: "Horimiya",
            title_english: "Horimiya",
            title_japanese: "\u30db\u30ea\u30df\u30e4",
            image: "https://cdn.myanimelist.net/images/anime/1695/111486l.jpg",
            type: "TV",
            status: "Finished Airing",
            aired: {
                from: "2021-01-10T00:00:00+00:00",
                to: "2021-04-04T00:00:00+00:00",
                string: "Jan 10, 2021 to Apr 4, 2021",
            },
            year: 2021,
            score: 8.2,
            scored_by: 871755,
        },
        target_02: {
            id: 54284,
            title: "VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta",
            title_english:
                "VTuber Legend: How I Went Viral after Forgetting to Turn Off My Stream",
            title_japanese:
                "VTuber\u306a\u3093\u3060\u304c\u914d\u4fe1\u5207\u308a\u5fd8\u308c\u305f\u3089\u4f1d\u8aac\u306b\u306a\u3063\u3066\u305f",
            image: "https://cdn.myanimelist.net/images/anime/1606/144506l.jpg",
            type: "TV",
            status: "Finished Airing",
            aired: {
                from: "2024-07-07T00:00:00+00:00",
                to: "2024-09-22T00:00:00+00:00",
                string: "Jul 7, 2024 to Sep 22, 2024",
            },
            year: 2024,
            score: 7.13,
            scored_by: 15117,
        },
    });
    // const [searchResult, setSearchResult] = useState({
    //     target_01: [{"id": 42897, "title": "Horimiya", "title_english": "Horimiya", "title_japanese": "\u30db\u30ea\u30df\u30e4", "image": "https://cdn.myanimelist.net/images/anime/1695/111486l.jpg", "type": "TV", "status": "Finished Airing", "aired": {"from": "2021-01-10T00:00:00+00:00", "to": "2021-04-04T00:00:00+00:00", "string": "Jan 10, 2021 to Apr 4, 2021"}, "year": 2021, "score": 8.2, "scored_by": 871755}, {"id": 14753, "title": "Hori-san to Miyamura-kun", "title_english": null, "title_japanese": "\u5800\u3055\u3093\u3068\u5bae\u6751\u304f\u3093", "image": "https://cdn.myanimelist.net/images/anime/2/40175l.jpg", "type": "OVA", "status": "Finished Airing", "aired": {"from": "2012-09-26T00:00:00+00:00", "to": "2021-05-25T00:00:00+00:00", "string": "Sep 26, 2012 to May 25, 2021"}, "year": 2012, "score": 7.41, "scored_by": 46680}, {"id": 54856, "title": "Horimiya: Piece", "title_english": "Horimiya: The Missing Pieces", "title_japanese": "\u30db\u30ea\u30df\u30e4 -piece-", "image": "https://cdn.myanimelist.net/images/anime/1007/136277l.jpg", "type": "TV", "status": "Finished Airing", "aired": {"from": "2023-07-01T00:00:00+00:00", "to": "2023-09-23T00:00:00+00:00", "string": "Jul 1, 2023 to Sep 23, 2023"}, "year": 2023, "score": 8.17, "scored_by": 151284}],
    //     target_02: [
    //         {
    //             id: 54284,
    //             title: "VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta",
    //             title_english:
    //                 "VTuber Legend: How I Went Viral after Forgetting to Turn Off My Stream",
    //             title_japanese:
    //                 "VTuber\u306a\u3093\u3060\u304c\u914d\u4fe1\u5207\u308a\u5fd8\u308c\u305f\u3089\u4f1d\u8aac\u306b\u306a\u3063\u3066\u305f",
    //             image: "https://cdn.myanimelist.net/images/anime/1606/144506l.jpg",
    //             type: "TV",
    //             status: "Finished Airing",
    //             aired: {
    //                 from: "2024-07-07T00:00:00+00:00",
    //                 to: "2024-09-22T00:00:00+00:00",
    //                 string: "Jul 7, 2024 to Sep 22, 2024",
    //             },
    //             year: 2024,
    //             score: 7.13,
    //             scored_by: 15117,
    //         },
    //         {
    //             id: 434,
    //             title: "Legend of Lemnear: Kyokuguro no Tsubasa Valkisas",
    //             title_english: "Legend of Lemnear",
    //             title_japanese:
    //                 "Legend of Lemnear \u6975\u9ed2\u306e\u7ffc \u30d0\u30eb\u30ad\u30b5\u30b9",
    //             image: "https://cdn.myanimelist.net/images/anime/8/26903l.jpg",
    //             type: "OVA",
    //             status: "Finished Airing",
    //             aired: {
    //                 from: "1989-07-25T00:00:00+00:00",
    //                 to: null,
    //                 string: "Jul 25, 1989",
    //             },
    //             year: 1989,
    //             score: 5.53,
    //             scored_by: 4088,
    //         },
    //         {
    //             id: 48441,
    //             title: "The Legend of Heroes: Sen no Kiseki - Northern War",
    //             title_english:
    //                 "The Legend of Heroes: Trails of Cold Steel - Northern War",
    //             title_japanese:
    //                 "The Legend of Heroes \u9583\u306e\u8ecc\u8de1 Northern War",
    //             image: "https://cdn.myanimelist.net/images/anime/1894/133297l.jpg",
    //             type: "TV",
    //             status: "Finished Airing",
    //             aired: {
    //                 from: "2023-01-08T00:00:00+00:00",
    //                 to: "2023-03-26T00:00:00+00:00",
    //                 string: "Jan 8, 2023 to Mar 26, 2023",
    //             },
    //             year: 2023,
    //             score: 5.65,
    //             scored_by: 9551,
    //         },
    //         {
    //             id: 49304,
    //             title: "Seiken Densetsu: Legend of Mana - The Teardrop Crystal",
    //             title_english: "Legend of Mana -The Teardrop Crystal-",
    //             title_japanese:
    //                 "\u8056\u5263\u4f1d\u8aac Legend of Mana -The Teardrop Crystal-",
    //             image: "https://cdn.myanimelist.net/images/anime/1637/123397l.jpg",
    //             type: "TV",
    //             status: "Finished Airing",
    //             aired: {
    //                 from: "2022-10-08T00:00:00+00:00",
    //                 to: "2022-12-24T00:00:00+00:00",
    //                 string: "Oct 8, 2022 to Dec 24, 2022",
    //             },
    //             year: 2022,
    //             score: 5.47,
    //             scored_by: 5723,
    //         },
    //         {
    //             id: 429,
    //             title: "Kaleido Star: Legend of Phoenix - Layla Hamilton Monogatari",
    //             title_english:
    //                 "Kaleido Star: Legend of Phoenix - The Layla Hamilton Story",
    //             title_japanese:
    //                 "\u30ab\u30ec\u30a4\u30c9\u30b9\u30bf\u30fc Legend of Phoenix \uff5e\u30ec\u30a4\u30e9\u30fb\u30cf\u30df\u30eb\u30c8\u30f3\u7269\u8a9e\uff5e",
    //             image: "https://cdn.myanimelist.net/images/anime/7/28863l.jpg",
    //             type: "OVA",
    //             status: "Finished Airing",
    //             aired: {
    //                 from: "2005-12-11T00:00:00+00:00",
    //                 to: null,
    //                 string: "Dec 11, 2005",
    //             },
    //             year: 2005,
    //             score: 7.84,
    //             scored_by: 7267,
    //         },
    //         {
    //             id: 1081,
    //             title: "Space Pirate Captain Herlock: Outside Legend - The Endless Odyssey",
    //             title_english: null,
    //             title_japanese:
    //                 "SPACE PIRATE CAPTAIN HERLOCK OUTSIDE LEGEND ~The Endless Odyssey~",
    //             image: "https://cdn.myanimelist.net/images/anime/1543/106174l.jpg",
    //             type: "OVA",
    //             status: "Finished Airing",
    //             aired: {
    //                 from: "2002-12-21T00:00:00+00:00",
    //                 to: "2003-12-21T00:00:00+00:00",
    //                 string: "Dec 21, 2002 to Dec 21, 2003",
    //             },
    //             year: 2002,
    //             score: 7.3,
    //             scored_by: 3072,
    //         },
    //     ],
    // });
    const [searchResult, setSearchResult] = useState({
        target_01: null,
        target_02: null,
    });

    const [compareResult, setCompareResult] = useState({
        commonVoiceArtists: [
            {
                id: 10765,
                name: "Kayano, Ai",
                language: "Japanese",
                image: "https://cdn.myanimelist.net/images/voiceactors/3/60503.jpg?s=272504a79a03c8fa03a0183b3d9da8b4",
                characters: [
                    [
                        {
                            id: 78279,
                            name: "Hori, Yuriko",
                            image: "https://cdn.myanimelist.net/images/characters/14/318266.jpg?s=fb7e6cb0d5567e06e1678f11d37474cb",
                            role: "Supporting",
                            favorites: 34,
                            animeId: "42897",
                        },
                    ],
                    [
                        {
                            id: 250224,
                            name: "Yamatani, Kaeru",
                            image: "https://cdn.myanimelist.net/images/characters/11/551875.jpg?s=a5bb55c445ffb195e667e2583b75606b",
                            role: "Supporting",
                            favorites: 5,
                            anime: "54284",
                        },
                    ],
                ],
            },
            {
                id: 25437,
                name: "Ichimichi, Mao",
                language: "Japanese",
                image: "https://cdn.myanimelist.net/images/voiceactors/3/56420.jpg?s=559b2133453fa345272107acf0fbb7ff",
                characters: [
                    [
                        {
                            id: 66965,
                            name: "Ayasaki, Remi",
                            image: "https://cdn.myanimelist.net/images/characters/8/422261.jpg?s=42a79f715821de79fe3ce60300a4a818",
                            role: "Supporting",
                            favorites: 399,
                            animeId: "42897",
                        },
                    ],
                    [
                        {
                            id: 250223,
                            name: "Sonokaze, Eirai",
                            image: "https://cdn.myanimelist.net/images/characters/8/551874.jpg?s=5fc57e5a917e40778aa7dd4526706e5f",
                            role: "Supporting",
                            favorites: 1,
                            anime: "54284",
                        },
                    ],
                ],
            },
        ],
        unCommonVoiceArtists: [
            [
                {
                    id: 33795,
                    name: "Kondou, Reina",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/69580.jpg?s=22aea9a5a89d9d075d7fb10c7f3ed37d",
                    characters: [
                        {
                            id: 72449,
                            name: "Kouno, Sakura",
                            image: "https://cdn.myanimelist.net/images/characters/6/424146.jpg?s=a368479c494e766c927bb1b98c09ddd5",
                            role: "Supporting",
                            favorites: 342,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 47814,
                    name: "Kozakai, Yurie",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/68023.jpg?s=c2f9d1df645f55359b0706ec01f3c8d9",
                    characters: [
                        {
                            id: 66963,
                            name: "Yoshikawa, Yuki",
                            image: "https://cdn.myanimelist.net/images/characters/9/424143.jpg?s=4bfe7c10353726bcb594b751dbe10152",
                            role: "Supporting",
                            favorites: 1498,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 270,
                    name: "Okamoto, Nobuhiko",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/48785.jpg?s=22fe4347c06c07461a12c6bae5687bfb",
                    characters: [
                        {
                            id: 72447,
                            name: "Sengoku, Kakeru",
                            image: "https://cdn.myanimelist.net/images/characters/13/424149.jpg?s=528834590f54b827bd0fbc2ece81e8cb",
                            role: "Supporting",
                            favorites: 162,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 25167,
                    name: "Senbongi, Sayaka",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/62944.jpg?s=95f4bb96321a77cb1b9475df190cc242",
                    characters: [
                        {
                            id: 72463,
                            name: "Ichijou, Chika",
                            image: "https://cdn.myanimelist.net/images/characters/8/318270.jpg?s=83c857ed7bbb5e44338a221ecc1a4db7",
                            role: "Supporting",
                            favorites: 3,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 141,
                    name: "Yuzuki, Ryouka",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/65970.jpg?s=8c2aa79b4f10ee8f786236b2728b5a3c",
                    characters: [
                        {
                            id: 164028,
                            name: "Yashiro, Kayo",
                            image: "https://cdn.myanimelist.net/images/characters/3/440005.jpg?s=cc62b9d639c103c4aa512dde24c046dc",
                            role: "Supporting",
                            favorites: 3,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 23249,
                    name: "Yamashita, Seiichirou",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/74708.jpg?s=d6ff589699144bfe831cf40976896aaa",
                    characters: [
                        {
                            id: 66961,
                            name: "Ishikawa, Tooru",
                            image: "https://cdn.myanimelist.net/images/characters/6/424144.jpg?s=d756edc3c2489164125817d17f2d1f98",
                            role: "Supporting",
                            favorites: 399,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 591,
                    name: "Tsuda, Kenjirou",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/63379.jpg?s=d67ae5e0053e31921f856e1a2b259c0e",
                    characters: [
                        {
                            id: 66975,
                            name: "Yasuda, Shin",
                            image: "https://cdn.myanimelist.net/images/characters/9/478148.jpg?s=5847c69e0693c87a46bb854b950a5dab",
                            role: "Supporting",
                            favorites: 30,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 21971,
                    name: "Yamashita, Daiki",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/74376.jpg?s=eb24f77b6bd4041ac4f1e798b6d72a78",
                    characters: [
                        {
                            id: 66967,
                            name: "Iura, Shuu",
                            image: "https://cdn.myanimelist.net/images/characters/7/424145.jpg?s=9d889b3be6542ee59dce1e47b650c264",
                            role: "Supporting",
                            favorites: 398,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 212,
                    name: "Ono, Daisuke",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/54593.jpg?s=2cd350a1a5beea92a102bb5309aabae5",
                    characters: [
                        {
                            id: 91371,
                            name: "Hori, Kyousuke",
                            image: "https://cdn.myanimelist.net/images/characters/7/318212.jpg?s=aef7b68ae5fde0a45b62a978d304b290",
                            role: "Supporting",
                            favorites: 1057,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 17215,
                    name: "Tanezaki, Atsumi",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/77190.jpg?s=ed33c5d429051864f3af3fe2e64eb970",
                    characters: [
                        {
                            id: 204727,
                            name: "Yoshikawa, Miki",
                            image: "https://cdn.myanimelist.net/images/characters/2/461648.jpg?s=2178dd787d98a55956d28ec1f4db7d2e",
                            role: "Supporting",
                            favorites: 2,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 86,
                    name: "Fukuyama, Jun",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/60810.jpg?s=e3f5b394ae1e215359052aef53b5d844",
                    characters: [
                        {
                            id: 72453,
                            name: "Yanagi, Akane",
                            image: "https://cdn.myanimelist.net/images/characters/10/424142.jpg?s=019097c85ecbc27341c3774755eec111",
                            role: "Supporting",
                            favorites: 423,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 38359,
                    name: "Yashiro, Taku",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/61056.jpg?s=d4c64df0a1686bf6be7b3c09f14e8782",
                    characters: [
                        {
                            id: 72461,
                            name: "Shindou, Kouichi",
                            image: "https://cdn.myanimelist.net/images/characters/14/318218.jpg?s=bca2d864e9464d803c7f0c1aab33d789",
                            role: "Supporting",
                            favorites: 35,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 92,
                    name: "Ohara, Sayaka",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/54698.jpg?s=a4ac9521fe5a81ed727b2dd1c19245fe",
                    characters: [
                        {
                            id: 196059,
                            name: "Miyamura, Iori",
                            image: "https://cdn.myanimelist.net/images/characters/5/478151.jpg?s=b79e8cb915cccd8f4ea92a8ff052d71b",
                            role: "Supporting",
                            favorites: 6,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 671,
                    name: "Terasaki, Yuka",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/35199.jpg?s=aacfd5ca6c4e50dfaf902f371ed0aff6",
                    characters: [
                        {
                            id: 66969,
                            name: "Hori, Souta",
                            image: "https://cdn.myanimelist.net/images/characters/13/318501.jpg?s=2d7fdf428e2da73f54a134aa06861ecf",
                            role: "Supporting",
                            favorites: 172,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 29667,
                    name: "Ishiya, Haruki",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/63442.jpg?s=de3f497aba5aad63f54fa20b9347d436",
                    characters: [
                        {
                            id: 72457,
                            name: "Mizouchi, Daiki",
                            image: "https://cdn.myanimelist.net/images/characters/5/478150.jpg?s=0a4c9c7a528507c749df907eef2d1b1d",
                            role: "Supporting",
                            favorites: 1,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 1764,
                    name: "Uchiyama, Kouki",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/63405.jpg?s=c6fe650dcb3f7707ec5640d053365a80",
                    characters: [
                        {
                            id: 66173,
                            name: "Miyamura, Izumi",
                            image: "https://cdn.myanimelist.net/images/characters/12/507110.jpg?s=9bc8d3bb3912880ee710a487e2b5a965",
                            role: "Main",
                            favorites: 15958,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 8555,
                    name: "Kanemoto, Hisako",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/53110.jpg?s=eec77e045328947f4fe23698bc94463d",
                    characters: [
                        {
                            id: 72467,
                            name: "Iura, Motoko",
                            image: "https://cdn.myanimelist.net/images/characters/3/444401.jpg?s=fcc0981b4e719312d6092335c732b005",
                            role: "Supporting",
                            favorites: 8,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 26543,
                    name: "Asakura, Momo",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/40866.jpg?s=4164752d10f530c97f55ac6868aaf4b8",
                    characters: [
                        {
                            id: 72459,
                            name: "Sawada, Honoka",
                            image: "https://cdn.myanimelist.net/images/characters/5/318276.jpg?s=26366772cde02fb7bf40817eb7753319",
                            role: "Supporting",
                            favorites: 432,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 41328,
                    name: "Koga, Aoi",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/64827.jpg?s=a1c0067bb369818f376af550ed3d4ae4",
                    characters: [
                        {
                            id: 66971,
                            name: "Okuyama, Yuuna",
                            image: "https://cdn.myanimelist.net/images/characters/7/478149.jpg?s=23775b5672966fc3eab0397d967df10e",
                            role: "Supporting",
                            favorites: 2,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 37047,
                    name: "Takada, Yuuki",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/63503.jpg?s=c39506ab40c9f9786eb233da7bc8ccb7",
                    characters: [
                        {
                            id: 195134,
                            name: "Nishi, Takako",
                            image: "https://cdn.myanimelist.net/images/characters/15/438543.jpg?s=07b23f029aacc56f0a20471bc54e6da7",
                            role: "Supporting",
                            favorites: 0,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 37562,
                    name: "Chiba, Shouya",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/74244.jpg?s=f0b2c95a6c588f3dfea5052d19fd620d",
                    characters: [
                        {
                            id: 72465,
                            name: "Tanihara, Makio",
                            image: "https://cdn.myanimelist.net/images/characters/8/336508.jpg?s=687fedae9b3fb06585d584e36376aa72",
                            role: "Supporting",
                            favorites: 6,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 890,
                    name: "Tomatsu, Haruka",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/76640.jpg?s=2bff6e5521910e221a4bb8ef0be0fc3a",
                    characters: [
                        {
                            id: 66171,
                            name: "Hori, Kyouko",
                            image: "https://cdn.myanimelist.net/images/characters/16/318188.jpg?s=b96036b045851e8e00ef1d29bc20d7fe",
                            role: "Main",
                            favorites: 12340,
                            animeId: "42897",
                        },
                    ],
                },
                {
                    id: 8639,
                    name: "Tamaru, Atsushi",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/61306.jpg?s=6b2bd8c1e6379373cb3c8b35ddfc4af2",
                    characters: [
                        {
                            id: 218857,
                            name: "Kamioka",
                            image: "https://cdn.myanimelist.net/images/characters/12/490767.jpg?s=b03be625ea7ddd9fb89ecd8d1b64daad",
                            role: "Supporting",
                            favorites: 1,
                            animeId: "42897",
                        },
                    ],
                },
            ],
            [
                {
                    id: 34,
                    name: "Kobayashi, Yuu",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/54674.jpg?s=bea36a3540ce1bebe27820be99a19232",
                    characters: [
                        {
                            id: 212488,
                            name: "Utsuki, Sei",
                            image: "https://cdn.myanimelist.net/images/characters/3/540605.jpg?s=82a5ae4cce910a958c835a9b3e6c627f",
                            role: "Supporting",
                            favorites: 2,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 11622,
                    name: "Sakura, Ayane",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/67809.jpg?s=f26ea762598706fc58c4b5024ce2c15f",
                    characters: [
                        {
                            id: 212492,
                            name: "Kokorone, Awayuki",
                            image: "https://cdn.myanimelist.net/images/characters/7/555576.jpg?s=9a0e6f3fd4c680ebfda834c145cc2fcb",
                            role: "Main",
                            favorites: 32,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 15903,
                    name: "Ohashi, Ayaka",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/66247.jpg?s=a3c5c84852c4197e9b7aaaa567d56d69",
                    characters: [
                        {
                            id: 244256,
                            name: "Hirune, Nekoma",
                            image: "https://cdn.myanimelist.net/images/characters/10/540606.jpg?s=5a3e65794954f0595e0ce3f6d09a656d",
                            role: "Supporting",
                            favorites: 0,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 11404,
                    name: "Morohoshi, Sumire",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/76150.jpg?s=88b5a69d4c9837f39542f36d5a4be216",
                    characters: [
                        {
                            id: 244255,
                            name: "Kaminari, Shion",
                            image: "https://cdn.myanimelist.net/images/characters/15/540607.jpg?s=eefa0575747fce87d1db6de24ef48f1f",
                            role: "Supporting",
                            favorites: 6,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 36141,
                    name: "Machico",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/73934.jpg?s=2f6dbaad1dbc9ddd76192df77cc8577e",
                    characters: [
                        {
                            id: 235889,
                            name: "Mitsuriya, Hikari",
                            image: "https://cdn.myanimelist.net/images/characters/11/524714.jpg?s=5c9404077a65161a415548f435bb9036",
                            role: "Supporting",
                            favorites: 1,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 17297,
                    name: "Tadokoro, Azusa",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/3/70280.jpg?s=5d43f8faecbf01fabf6a2b9f541e8a10",
                    characters: [
                        {
                            id: 250222,
                            name: "Souma, Alice",
                            image: "https://cdn.myanimelist.net/images/characters/12/551872.jpg?s=ec638b135f8fd169b5899670fb17cecd",
                            role: "Supporting",
                            favorites: 0,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 53810,
                    name: "Mizuno, Saku",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/74533.jpg?s=cb763b3017755b0af158fb7c9f38333d",
                    characters: [
                        {
                            id: 212489,
                            name: "Irodori, Mashiro",
                            image: "https://cdn.myanimelist.net/images/characters/14/524713.jpg?s=718118e9465e8a90a88ec8a64e66b31f",
                            role: "Supporting",
                            favorites: 10,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 51506,
                    name: "Kikuchi, Sayaka",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/1/59750.jpg?s=9d27c81f728f872627eb1d6dd287d896",
                    characters: [
                        {
                            id: 235888,
                            name: "Yanagase, Chami",
                            image: "https://cdn.myanimelist.net/images/characters/2/540608.jpg?s=2c46cfd46999eaf99ca6b63d4ecdd3a0",
                            role: "Supporting",
                            favorites: 2,
                            anime: "54284",
                        },
                    ],
                },
                {
                    id: 7263,
                    name: "Hikasa, Youko",
                    language: "Japanese",
                    image: "https://cdn.myanimelist.net/images/voiceactors/2/73783.jpg?s=72823e783f56ec977f0755dc9e02d134",
                    characters: [
                        {
                            id: 248860,
                            name: "Asagiri, Hareru",
                            image: "https://cdn.myanimelist.net/images/characters/6/549326.jpg?s=ef3a1bc676d8222ef4393d0625cc67ff",
                            role: "Supporting",
                            favorites: 1,
                            anime: "54284",
                        },
                    ],
                },
            ],
        ],
    });

    return (
        <main className="max-width mb-10 py-5 space-y-8">
            <header>
                <h2 className="text-3xl text-center font-suse font-semibold">
                    Compare voice Artists!
                </h2>
            </header>

            {/* Select Anime */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Target Anime 1 */}
                <div className="min-w-32 flex-grow flex flex-col gap-2 relative">
                    <label className="flex flex-col gap-1 w-auto">
                        <span className="text-sm font-semibold text-gray-600 ml-2">
                            Anime 1:
                        </span>
                        <TextInput
                            type="text"
                            name="query"
                            icon={IoSearch}
                            placeholder="Type name and press Enter..."
                            title="Search anime by name"
                            onKeyDown={(e) => {
                                if (
                                    e.key === "Enter" &&
                                    e.target.value !== ""
                                ) {
                                    router.push(
                                        `/search/anime?query=${e.target.value}`
                                    );
                                }
                            }}
                        />
                    </label>
                    {/* Search Result */}
                    {searchResult?.target_01 && (
                        <div className="absolute top-[4.2rem] left-0 right-0 p-2 rounded-lg bg-white shadow-lg border space-y-2 h-60 overflow-y-auto scrollbar-thin flex-gro">
                            {searchResult.target_01.map((item, idx) => (
                                <article
                                    key={idx}
                                    className="flex gap-2 items-center hover:items-start group hover:cursor-pointer"
                                    onClick={() => {
                                        setTargetAnime((prev) => ({
                                            ...prev,
                                            target_01: item,
                                        }));
                                        setSearchResult((prev) => ({
                                            ...prev,
                                            target_01: null,
                                        }));
                                    }}
                                >
                                    <div className="size-16 group-hover:w-16 group-hover:h-auto overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={
                                                item.title_english ?? item.title
                                            }
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="group-hover:hidden">
                                        <h4 className="font-semibold mb-1">
                                            {item.title_english ?? item.title}
                                        </h4>
                                        <p className="text-sm text-gray-700">
                                            {item.type} - {item.year}
                                        </p>
                                    </div>
                                    <div className="hidden group-hover:block">
                                        <h4 className="font-semibold mb-1">
                                            {item.title_english ?? item.title}{" "}
                                            <span className="font-normal text-sm">
                                                ({item.type})
                                            </span>
                                        </h4>
                                        <p className="text-sm text-gray-700">
                                            Aired: {item.aired.string}
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            Score: {item.score}
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            Status: {item.status}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                    {targetAnime.target_01 && (
                        <article className="flex-grow flex gap-2 items-start group p-4 rounded-lg shadow-lg">
                            <div className="w-16 group-hover:w-16 group-hover:h-auto overflow-hidden flex-shrink-0">
                                <img
                                    src={targetAnime.target_01.image}
                                    alt={
                                        targetAnime.target_01.title_english ??
                                        targetAnime.target_01.title
                                    }
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">
                                    {targetAnime.target_01.title_english ??
                                        targetAnime.target_01.title}{" "}
                                    <span className="font-normal text-sm">
                                        ({targetAnime.target_01.type})
                                    </span>
                                </h4>
                                <p className="text-sm text-gray-700">
                                    Aired: {targetAnime.target_01.aired.string}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Score: {targetAnime.target_01.score}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Status: {targetAnime.target_01.status}
                                </p>
                            </div>
                        </article>
                    )}
                </div>

                {/* Target Anime 2 */}
                <div className="min-w-32 flex-grow flex flex-col gap-2 relative">
                    <label className="flex flex-col gap-1 w-auto">
                        <span className="text-sm font-semibold text-gray-600 ml-2">
                            Anime 2:
                        </span>
                        <TextInput
                            type="text"
                            name="query"
                            icon={IoSearch}
                            placeholder="Type name and press Enter..."
                            title="Search anime by name"
                            onKeyDown={(e) => {
                                if (
                                    e.key === "Enter" &&
                                    e.target.value !== ""
                                ) {
                                    router.push(
                                        `/search/anime?query=${e.target.value}`
                                    );
                                }
                            }}
                        />
                    </label>
                    {/* Search Result */}
                    {searchResult?.target_02 && (
                        <div className="absolute top-[4.2rem] left-0 right-0 p-2 rounded-lg bg-white shadow-lg border space-y-2 h-60 overflow-y-auto scrollbar-thin">
                            {searchResult.target_02.map((item, idx) => (
                                <article
                                    key={idx}
                                    className="flex gap-2 items-center hover:items-start group hover:cursor-pointer"
                                    onClick={() => {
                                        setTargetAnime((prev) => ({
                                            ...prev,
                                            target_02: item,
                                        }));
                                        setSearchResult((prev) => ({
                                            ...prev,
                                            target_02: null,
                                        }));
                                    }}
                                >
                                    <div className="size-16 group-hover:w-16 group-hover:h-auto overflow-hidden flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={
                                                item.title_english ?? item.title
                                            }
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="group-hover:hidden">
                                        <h4 className="font-semibold mb-1">
                                            {item.title_english ?? item.title}
                                        </h4>
                                        <p className="text-sm text-gray-700">
                                            {item.type} - {item.year}
                                        </p>
                                    </div>
                                    <div className="hidden group-hover:block">
                                        <h4 className="font-semibold mb-1">
                                            {item.title_english ?? item.title}{" "}
                                            <span className="font-normal text-sm">
                                                ({item.type})
                                            </span>
                                        </h4>
                                        <p className="text-sm text-gray-700">
                                            Aired: {item.aired.string}
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            Score: {item.score}
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            Status: {item.status}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                    {targetAnime.target_02 && (
                        <article className="flex-grow flex gap-2 items-start group p-4 rounded-lg shadow-lg">
                            <div className="w-16 group-hover:w-16 group-hover:h-auto overflow-hidden flex-shrink-0">
                                <img
                                    src={targetAnime.target_02.image}
                                    alt={
                                        targetAnime.target_02.title_english ??
                                        targetAnime.target_02.title
                                    }
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">
                                    {targetAnime.target_02.title_english ??
                                        targetAnime.target_02.title}{" "}
                                    <span className="font-normal text-sm">
                                        ({targetAnime.target_02.type})
                                    </span>
                                </h4>
                                <p className="text-sm text-gray-700">
                                    Aired: {targetAnime.target_02.aired.string}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Score: {targetAnime.target_02.score}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Status: {targetAnime.target_02.status}
                                </p>
                            </div>
                        </article>
                    )}
                </div>
            </section>
            {targetAnime.target_01 && targetAnime.target_02 && (
                <div className="flex justify-center">
                    <button className="btn btn-info btn-wide">
                        Check Matching!
                    </button>
                </div>
            )}

            {/* Body! */}
            <section>
                <h3 className="text-2xl font-semibold font-suse underline underline-offset-4 mb-2">
                    Common Voice Artists:
                </h3>

                <div className="space-y-2 mb-3">
                    {compareResult.commonVoiceArtists.map((va) => (
                        <div
                            key={va.id}
                            className="bg-white flex justify-between items-start shadow-sm"
                        >
                            {/* Voice Actors */}
                            <Link
                                href={`/characters/${va.id}`}
                                className="flex gap-3 items-start hover:cursor-pointer group flex-grow"
                            >
                                <img
                                    src={va.image}
                                    alt={va.name}
                                    className="w-[58px] h-[90px] bg-slate-200"
                                />
                                <div className="py-2.5">
                                    <h4 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                        {va.name}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                        {va.role}
                                    </p>
                                </div>
                            </Link>

                            {/* Characters */}
                            <div className="space-y-4 flex-grow flex flex-col items-end">
                                {va.characters.flat().map((character) => (
                                    <Tooltip
                                        key={character.id}
                                        placement="right"
                                        content={
                                            targetAnime.target_01.id ==
                                            character.animeId
                                                ? targetAnime.target_01
                                                      .title_english ??
                                                  targetAnime.target_01.title
                                                : targetAnime.target_02
                                                      .title_english ??
                                                  targetAnime.target_02.title
                                        }
                                    >
                                        <Link
                                            href={`/staffs/${character.id}`}
                                            className="flex flex-row-reverse gap-3 items-start text-right w-full hover:cursor-pointer group"
                                        >
                                            <img
                                                src={character.image}
                                                alt={character.name}
                                                className="w-[58px] h-[90px] bg-slate-200"
                                            />
                                            <div className="py-2.5">
                                                <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                    {character.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                    {character.language}
                                                </p>
                                                <p className="text-slate-400 text-xs font-medium">
                                                    {character.favorites}{" "}
                                                    Favorites
                                                </p>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-semibold font-suse underline underline-offset-4 mb-2">
                    UnCommon Voice Artists:
                </h3>
                <div className="space-y-2 mb-5">
                    {compareResult.unCommonVoiceArtists.flat().map((va) => (
                        <div
                            key={va.id}
                            className="bg-white flex justify-between items-start shadow-sm"
                        >
                            {/* Voice Actors */}
                            <Link
                                href={`/characters/${va.id}`}
                                className="flex gap-3 items-start hover:cursor-pointer group flex-grow"
                            >
                                <img
                                    src={va.image}
                                    alt={va.name}
                                    className="w-[58px] h-[90px] bg-slate-200"
                                />
                                <div className="py-2.5">
                                    <h4 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                        {va.name}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                        {va.role}
                                    </p>
                                </div>
                            </Link>

                            {/* Characters */}
                            <div className="space-y-4 flex-grow flex flex-col items-end">
                                {va.characters.map((character) => (
                                    <Tooltip
                                        key={character.id}
                                        placement="right"
                                        content={
                                            targetAnime.target_01.id ==
                                            character.animeId
                                                ? targetAnime.target_01
                                                      .title_english ??
                                                  targetAnime.target_01.title
                                                : targetAnime.target_02
                                                      .title_english ??
                                                  targetAnime.target_02.title
                                        }
                                    >
                                        <Link
                                            href={`/staffs/${character.id}`}
                                            className="flex flex-row-reverse gap-3 items-start text-right w-full hover:cursor-pointer group"
                                        >
                                            <img
                                                src={character.image}
                                                alt={character.name}
                                                className="w-[58px] h-[90px] bg-slate-200"
                                            />
                                            <div className="py-2.5">
                                                <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                    {character.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                    {character.language}
                                                </p>
                                                <p className="text-slate-400 text-xs font-medium">
                                                    {character.favorites}{" "}
                                                    Favorites
                                                </p>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default page;
