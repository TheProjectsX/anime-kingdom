import { Tooltip } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { Pictures } from "./Pictures";
import { redirect } from "next/navigation";
import { formatDate } from "@/utils/HelperFunctions";
import PageTitle from "@/components/common/PageTitle";
import { loadServerData } from "@/utils/DataLoader";

const page = async ({ params }) => {
    const { slugs } = params;

    let path = slugs.at(2);
    if (![undefined, "voices", "pictures"].includes(path?.toLowerCase())) {
        path = "/";
    } else if (path === undefined) {
        path = "/";
    }

    // const animeStaffData = {
    //     id: 48506,
    //     name: "Hikaru Toono",
    //     image: "https://cdn.myanimelist.net/images/voiceactors/1/79680.jpg",
    //     nicknames: ["\u3072\u304b\u308b", "\u9060\u91ce", "Hikaru Tono"],
    //     favorites: 131,
    //     birthday: "1996-03-05T00:00:00+00:00",
    //     about: "Birthplace: Tokyo, Japan\nBlood Type: O\nSpecial Skills: dancing, nutrition management\nHobbies: stage appreciation, piano, reading\n\nTwitter: @hikaru_tono\nInstagram: @hikaru_tono\nProfile: Hibiki Cast",
    //     anime: [
    //         {
    //             id: 40550,
    //             position: "add Theme Song Performance (ED)",
    //             title: "Assault Lily: Bouquet",
    //             image: "https://cdn.myanimelist.net/images/anime/1024/108413.jpg?s=8e87eacd906451d5f058d7ddb056f578",
    //             large_image:
    //                 "https://cdn.myanimelist.net/images/anime/1024/108413l.jpg?s=8e87eacd906451d5f058d7ddb056f578",
    //         },
    //         {
    //             id: 57524,
    //             position: "add Theme Song Performance (ED1) Airing",
    //             title: "Make Heroine ga Oosugiru!",
    //             image: "https://cdn.myanimelist.net/images/anime/1332/143513.jpg?s=dbfb80a6daee44523f46a0999672c560",
    //             large_image:
    //                 "https://cdn.myanimelist.net/images/anime/1332/143513l.jpg?s=dbfb80a6daee44523f46a0999672c560",
    //         },
    //     ],
    //     manga: [],
    //     voices: [
    //         {
    //             id: 204718,
    //             role: "Main",
    //             title: 'Fuguushoku "Kanteishi" ga Jitsu wa Saikyou Datta',
    //             name: "Yuri",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/5/561046.jpg?s=cfbe8388251931472bc780dfefbc4147",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1441/143724.jpg?s=6ca7decf9635cb951ed74a41420bf125",
    //         },
    //         {
    //             id: 213637,
    //             role: "Main",
    //             title: "Make Heroine ga Oosugiru!",
    //             name: "Yanami, Anna",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/16/542560.jpg?s=10b8d67e1c1e660c35319f58d57ca7ee",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1332/143513.jpg?s=dbfb80a6daee44523f46a0999672c560",
    //         },
    //         {
    //             id: 247953,
    //             role: "Supporting",
    //             title: "Rinkai!",
    //             name: "Tamano, Momoka",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/8/547623.jpg?s=099f32e0060346f07c004eee11cfab02",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1387/141515.jpg?s=d13a8a408afc8eaabd9bb2997b5308fd",
    //         },
    //         {
    //             id: 204419,
    //             role: "Main",
    //             title: "One Room, Hiatari Futsuu, Tenshi-tsuki.",
    //             name: "Towa",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/7/523873.jpg?s=c65505d455bc10bfeebdd2cb88c376f4",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1833/141321.jpg?s=1257b43615e50371da421283dbfb8995",
    //         },
    //         {
    //             id: 233211,
    //             role: "Supporting",
    //             title: "Hametsu no Oukoku",
    //             name: "Yuki",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/11/518695.jpg?s=5beac3fb81c715d4f621077750422f92",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1610/138189.jpg?s=130d9567adc2b07335379e5388d89289",
    //         },
    //         {
    //             id: 190815,
    //             role: "Supporting",
    //             title: "Uma Musume: Pretty Derby Season 3",
    //             name: "Matikane Tannhauser",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/8/428639.jpg?s=0e2a1fc0da55b222b45426dfb1683430",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1475/138948.jpg?s=7ea1756d27a74fa65e1a0c2814eecf84",
    //         },
    //         {
    //             id: 191362,
    //             role: "Supporting",
    //             title: "Cardfight!! Vanguard: will+Dress Season 3",
    //             name: "Seto, Tomari",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/429905.jpg?s=d53642989a20da398a835650c862fe0d",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1739/136945.jpg?s=4928b4293de431667d5056a0e1807b96",
    //         },
    //         {
    //             id: 189207,
    //             role: "Supporting",
    //             title: "SSSS.Dynazenon Movie",
    //             name: "Kaneishi",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/12/425687.jpg?s=9d3f00d40509fb4cebd49f1a7eabf23e",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1515/131848.jpg?s=1d1d1acbc56cb46e061a3b44900c35cb",
    //         },
    //         {
    //             id: 191362,
    //             role: "Supporting",
    //             title: "Cardfight!! Vanguard: will+Dress Season 2",
    //             name: "Seto, Tomari",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/429905.jpg?s=d53642989a20da398a835650c862fe0d",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1259/131669.jpg?s=fe5d5ceabe7975714cb8b84671462f9f",
    //         },
    //         {
    //             id: 246921,
    //             role: "Supporting",
    //             title: "Ijiranaide, Nagatoro-san 2nd Attack",
    //             name: "Rabi-chan",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/546082.jpg?s=00673ef89f7f53c81fe9f2ce353aff5b",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1902/129579.jpg?s=a0b4c103ef081ce554f0919e9d4a0eef",
    //         },
    //         {
    //             id: 221747,
    //             role: "Supporting",
    //             title: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Yakusai-hen",
    //             name: "Knox, Asta",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/496902.jpg?s=b7aec26dfa53b462f992edfef080c34d",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1476/128693.jpg?s=9cba18a40e798afd9398a8f4b4d8e415",
    //         },
    //         {
    //             id: 219560,
    //             role: "Supporting",
    //             title: "Fumetsu no Anata e Season 2",
    //             name: "Ushio",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/492143.jpg?s=a7860bb9055da2bd2698c6b5814a1bea",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1271/127700.jpg?s=e7b862428ab46d23bf591f1d60dbf707",
    //         },
    //         {
    //             id: 190815,
    //             role: "Supporting",
    //             title: "Umayuru",
    //             name: "Matikane Tannhauser",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/8/428639.jpg?s=0e2a1fc0da55b222b45426dfb1683430",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1530/132472.jpg?s=6f92d7af3320010bdd67ad9148853afb",
    //         },
    //         {
    //             id: 217174,
    //             role: "Supporting",
    //             title: "Warau Arsnotoria Sun!",
    //             name: "Midrasim",
    //             image: "https://cdn.myanimelist.net/images/questionmark_23.gif",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1823/124696.jpg?s=8437fa989d5f1f0e2ba77b10f68e7c3c",
    //         },
    //         {
    //             id: 191362,
    //             role: "Supporting",
    //             title: "Cardfight!! Vanguard: will+Dress",
    //             name: "Seto, Tomari",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/429905.jpg?s=d53642989a20da398a835650c862fe0d",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1299/126131.jpg?s=b400b05b2c9eb8ad640020f72bc30c0f",
    //         },
    //         {
    //             id: 204702,
    //             role: "Supporting",
    //             title: "Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita",
    //             name: "Sura",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/7/461555.jpg?s=4ace2529b38c5fc012dc1a9660db12da",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1436/124788.jpg?s=89210fdc3beca6eceee028d865cd45b0",
    //         },
    //         {
    //             id: 214632,
    //             role: "Supporting",
    //             title: "Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita",
    //             name: "Mito",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/9/482725.jpg?s=892ea40e6bdffd3445c1651b5ccc95b7",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1436/124788.jpg?s=89210fdc3beca6eceee028d865cd45b0",
    //         },
    //         {
    //             id: 227213,
    //             role: "Supporting",
    //             title: "Karakai Jouzu no Takagi-san Movie",
    //             name: "Misae",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/7/507274.jpg?s=7b426a90fb977e184c7be98dcdeb8b1e",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1376/123398.jpg?s=511996d911e379c0ed93e82a19913f22",
    //         },
    //         {
    //             id: 207306,
    //             role: "Supporting",
    //             title: "Kunoichi Tsubaki no Mune no Uchi",
    //             name: "Suzuran",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/12/468087.jpg?s=5f04390490a7ca89c65c118090116174",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1724/121343.jpg?s=0132a9206a0b5d922bfbd0e56c5a6960",
    //         },
    //         {
    //             id: 203797,
    //             role: "Supporting",
    //             title: "Fantasy Bishoujo Juniku Ojisan to",
    //             name: "Sateina",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/3/459165.jpg?s=67eda864b840e9aec979033122989e2a",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1430/120065.jpg?s=59b8321ab221b34fc63414f7e5c83af1",
    //         },
    //         {
    //             id: 227213,
    //             role: "Supporting",
    //             title: "Karakai Jouzu no Takagi-san 3",
    //             name: "Misae",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/7/507274.jpg?s=7b426a90fb977e184c7be98dcdeb8b1e",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1861/120361.jpg?s=c9ca6f4cb55769b5cbbfc5a522d20493",
    //         },
    //         {
    //             id: 236767,
    //             role: "Supporting",
    //             title: "Shuumatsu no Harem",
    //             name: "Mannen, Mimi",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/11/526867.jpg?s=3fff495db9da0f436e6508e4a1e5c6ec",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1491/117296.jpg?s=ffbc35235f3bf5832ab294d5c00a4cf8",
    //         },
    //         {
    //             id: 204953,
    //             role: "Main",
    //             title: "The Missing 8",
    //             name: "Poppy",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/467229.jpg?s=a21c23d358205a72314b757ad2be94fd",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1526/139694.jpg?s=d554c06d44cc417ca42010518296c698",
    //         },
    //         {
    //             id: 191362,
    //             role: "Supporting",
    //             title: "Cardfight!! Vanguard: overDress Season 2",
    //             name: "Seto, Tomari",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/429905.jpg?s=d53642989a20da398a835650c862fe0d",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1263/117945.jpg?s=3403d0c5eeea82871b19bbb099ff69ae",
    //         },
    //         {
    //             id: 174585,
    //             role: "Main",
    //             title: "Assault Lily: Fruits",
    //             name: "Wang, Yujia",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/12/458392.jpg?s=12dc91a9150caf478cc3faf81532360f",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1444/116888.jpg?s=8da59258eca622bb8158a24c3028acdc",
    //         },
    //         {
    //             id: 197204,
    //             role: "Supporting",
    //             title: "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
    //             name: "Eno",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/4/443018.jpg?s=f7a5d5069815c480ad00c6d11f9c04fc",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1888/133089.jpg?s=adbdc5bf004be5319229b9eb7bebd0b7",
    //         },
    //         {
    //             id: 191362,
    //             role: "Supporting",
    //             title: "Cardfight!! Vanguard: overDress",
    //             name: "Seto, Tomari",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/13/429905.jpg?s=d53642989a20da398a835650c862fe0d",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1520/113748.jpg?s=104688a1e19cde9191c57e26f2d0663b",
    //         },
    //         {
    //             id: 189207,
    //             role: "Supporting",
    //             title: "SSSS.Dynazenon",
    //             name: "Kaneishi",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/12/425687.jpg?s=9d3f00d40509fb4cebd49f1a7eabf23e",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1880/113766.jpg?s=6b645023a8c8ea762bdd4691686a7edd",
    //         },
    //         {
    //             id: 176247,
    //             role: "Main",
    //             title: "Show by Rock!! Stars!!",
    //             name: "Howan",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/2/399675.jpg?s=a703fe31108592332db99c34a8752426",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1713/106712.jpg?s=d7723147bed209743cbf01934254d951",
    //         },
    //         {
    //             id: 190815,
    //             role: "Supporting",
    //             title: "Uma Musume: Pretty Derby Season 2",
    //             name: "Matikane Tannhauser",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/8/428639.jpg?s=0e2a1fc0da55b222b45426dfb1683430",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1447/114282.jpg?s=661aceab2a764881ac75f70dd08f5ca8",
    //         },
    //         {
    //             id: 174585,
    //             role: "Main",
    //             title: "Assault Lily: Bouquet",
    //             name: "Wang, Yujia",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/12/458392.jpg?s=12dc91a9150caf478cc3faf81532360f",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1024/108413.jpg?s=8e87eacd906451d5f058d7ddb056f578",
    //         },
    //         {
    //             id: 185075,
    //             role: "Supporting",
    //             title: "BanG Dream! 3rd Season",
    //             name: "Nono, Yoshiko",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/3/415615.jpg?s=e474fa662b9889f27c7c3618ba57d06b",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1985/104767.jpg?s=f28304983e5a3ed4863c2d90959246d3",
    //         },
    //         {
    //             id: 176247,
    //             role: "Main",
    //             title: "Show By Rock!! Mashumairesh!!",
    //             name: "Howan",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/2/399675.jpg?s=a703fe31108592332db99c34a8752426",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1297/110719.jpg?s=bcf3e3cc4fe3d8dba5733f5667b7c59b",
    //         },
    //         {
    //             id: 39494,
    //             role: "Main",
    //             title: "Cardfight!! Vanguard: Shinemon-hen",
    //             name: "Tokura, Misaki",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/6/289040.jpg?s=6d34e3ba45bd8f21ba0c3f517dffbdfb",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1197/113438.jpg?s=b5662da5ab2342f3c61c786852e44712",
    //         },
    //         {
    //             id: 227213,
    //             role: "Supporting",
    //             title: "Karakai Jouzu no Takagi-san 2",
    //             name: "Misae",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/7/507274.jpg?s=7b426a90fb977e184c7be98dcdeb8b1e",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1393/107033.jpg?s=d10e6d925cd25d40e14b0548e0a6a13c",
    //         },
    //         {
    //             id: 184474,
    //             role: "Main",
    //             title: "Shoujo\u2606Conto All Starlight",
    //             name: "Yumeoji, Shiori",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/8/414303.jpg?s=897a8012bf7e6d5d4b78c336fa69e1ba",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1776/102092.jpg?s=3fba1b50ee364d6d905fb94ee5a11b50",
    //         },
    //         {
    //             id: 169011,
    //             role: "Supporting",
    //             title: "Kemono Friends 2",
    //             name: "Red Panda",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/3/375280.jpg?s=147fb93629ccf487726cb117b065c188",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1015/100471.jpg?s=b66c8333e42b1d907b390eee501f3f1e",
    //         },
    //         {
    //             id: 165074,
    //             role: "Main",
    //             title: "Bermuda Triangle: Colorful Pastrale",
    //             name: "Serena",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/2/378325.jpg?s=dd0d26267162d32b52c170e30d0578e1",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1449/93947.jpg?s=e1df3ec2fa5fe4f5088d6f2870f890d8",
    //         },
    //         {
    //             id: 185075,
    //             role: "Supporting",
    //             title: "BanG Dream! 2nd Season",
    //             name: "Nono, Yoshiko",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/3/415615.jpg?s=e474fa662b9889f27c7c3618ba57d06b",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1967/108632.jpg?s=d873509913299ef3c028e8ca8887bed4",
    //         },
    //         {
    //             id: 168449,
    //             role: "Supporting",
    //             title: "Tonari no Kyuuketsuki-san",
    //             name: "Aoki, Asahi",
    //             image: "https://cdn.myanimelist.net/r/84x124/images/characters/6/445548.jpg?s=3596434887487c160af8e1f7bb2a0b81",
    //             anime_image:
    //                 "https://cdn.myanimelist.net/images/anime/1851/96154.jpg?s=d097fb73647ef106342191be528dbd78",
    //         },
    //     ],
    // };

    const serverResponse = await loadServerData(`/staffs/${slugs[0]}`);

    if (!serverResponse.success) {
        console.log("404 not found");
        // Do something
    }

    const animeStaffData = serverResponse.data ?? {};

    if (slugs.length === 1) {
        redirect(
            `/staffs/${animeStaffData.id}/${animeStaffData.name
                ?.replace(/[^a-zA-Z0-9\s]/g, "")
                .replace(/\s+/g, "-")}`
        );
    }

    const baseUrl = `/staffs/${animeStaffData.id}/${animeStaffData.name
        ?.replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "-")}`;

    return (
        <>
            <PageTitle>{animeStaffData.name} - AniDom</PageTitle>
            <main className="max-width mb-10">
                <header className="flex gap-4 pt-5 pb-3">
                    <div className="flex-shrink-0 w-52">
                        <img
                            src={animeStaffData.image}
                            alt={animeStaffData.name}
                            className="w-full h-[295px]"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <article className="flex-grow mb-2.5 w-full">
                            <header className="mb-4 flex justify-between items-center">
                                <div className="">
                                    <h1 className="text-3xl font-bold font-suse text-gray-600">
                                        {animeStaffData.name}
                                    </h1>
                                    {animeStaffData.nicknames.length > 0 && (
                                        <p className="text-sm font-medium text-gray-500">
                                            {animeStaffData.nicknames.join(
                                                ", "
                                            )}
                                        </p>
                                    )}
                                </div>
                                <p>
                                    Favorites:{" "}
                                    <span className="font-semibold text-gray-600">
                                        {animeStaffData.favorites}
                                    </span>
                                </p>
                            </header>
                            <p className="text-gray-600 text-sm flex-grow whitespace-pre-wrap">
                                Birth: {formatDate(animeStaffData.birthday)}
                            </p>
                            <p className="text-gray-600 text-sm flex-grow whitespace-pre-wrap">
                                {animeStaffData.about ??
                                    "No biography available"}
                            </p>
                        </article>
                        <div className="px-4 w-full flex justify-evenly text-sm text-gray-500 bg-white">
                            <Link
                                href={baseUrl}
                                className="p-2 hover:text-[dodgerBlue]"
                            >
                                Overview
                            </Link>
                            <Link
                                href={`${baseUrl}/voices`}
                                className="p-2 hover:text-[dodgerBlue]"
                            >
                                Voices
                            </Link>
                            <Link
                                href={`${baseUrl}/pictures`}
                                className="p-2 hover:text-[dodgerBlue]"
                            >
                                Pictures
                            </Link>
                        </div>
                    </div>
                </header>
                {path === "/" && (
                    <div className="w-full bg-white p-4 rounded-lg space-y-6">
                        <section>
                            <h4 className="font-semibold text-2xl text-gray-600 mb-3">
                                Anime:
                            </h4>
                            {animeStaffData.anime.length === 0 ? (
                                <div className="text-xl font-semibold text-gray-400">
                                    No Items to Show
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-4 px-3">
                                    {animeStaffData.anime.map((item, idx) => (
                                        <Tooltip
                                            content={
                                                <p>
                                                    Position:{" "}
                                                    {item.position ?? "Unknown"}
                                                </p>
                                            }
                                            key={idx}
                                            placement="right"
                                        >
                                            <Link
                                                href={`/anime/${item.id}`}
                                                className="block max-w-48 group"
                                            >
                                                <img
                                                    src={item.large_image}
                                                    alt={item.title}
                                                    className="w-full mb-2 rounded-md shadow-lg"
                                                />
                                                <h3 className="font-semibold text-gray-500 group-hover:text-green-400">
                                                    {item.title}
                                                </h3>
                                            </Link>
                                        </Tooltip>
                                    ))}
                                </div>
                            )}
                        </section>
                        <section>
                            <h4 className="font-semibold text-xl text-gray-600 mb-3">
                                Manga:
                            </h4>
                            {animeStaffData.manga.length === 0 ? (
                                <div className="text-xl font-semibold text-gray-400">
                                    No Items to Show
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-4 px-3">
                                    {animeStaffData.manga.map((item, idx) => (
                                        <Tooltip
                                            content={
                                                <p>
                                                    Position:{" "}
                                                    {item.position ?? "Unknown"}
                                                </p>
                                            }
                                            key={idx}
                                            placement="right"
                                        >
                                            <Link
                                                href={`/anime/${item.id}`}
                                                className="block max-w-48 group"
                                            >
                                                <img
                                                    src={item.large_image}
                                                    alt={item.title}
                                                    className="w-full mb-2 rounded-md shadow-lg"
                                                />
                                                <h3 className="font-semibold text-gray-500 group-hover:text-green-400">
                                                    {item.title}
                                                </h3>
                                            </Link>
                                        </Tooltip>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                )}

                {path === "voices" &&
                    (animeStaffData.voices.length === 0 ? (
                        <div className="text-xl font-semibold text-gray-400">
                            No Items to Show
                        </div>
                    ) : (
                        <section className="w-full bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-2xl text-gray-600 mb-3">
                                Voiced Characters:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                                {animeStaffData.voices.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/characters/${item.id}`}
                                        className="hover:cursor-pointer group"
                                    >
                                        <div className="relative mb-2 w-full rounded-md overflow-hidden">
                                            <img
                                                src={item.anime_image}
                                                alt={item.name}
                                                className="w-full bg-slate-600"
                                            />
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-16 absolute top-0 right-0 shadow-lg"
                                            />
                                        </div>
                                        <div className="px-2">
                                            <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                {item.name}{" "}
                                                <span className="text-sm pl-1.5 font-normal">
                                                    ({item.role})
                                                </span>
                                            </h3>
                                            <p className="text-gray-600 text-xs mb-0.5 font-medium">
                                                {item.title}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}

                {path === "pictures" && (
                    <section className="w-full bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-2xl text-gray-600 mb-4">
                            Pictures:
                        </h4>
                        <Pictures
                            staffId={animeStaffData.id}
                            staffName={animeStaffData.name}
                        />
                    </section>
                )}
            </main>
        </>
    );
};

export default page;
