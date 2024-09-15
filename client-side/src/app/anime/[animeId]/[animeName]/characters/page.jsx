"use client";

import { useEffect, useState } from "react";

const page = ({ params }) => {
    const [charactersData, setCharactersData] = useState(Array(5).fill(null));
    let animeCharactersData;

    const { animeId } = params;

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await (
                await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}/characters`
                )
            ).json();

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            animeCharactersData = serverResponse.data ?? [];
            setCharactersData(serverResponse.data ?? []);
        };
        loadData();
    }, []);

    // const animeCharactersData = [
    //     {
    //         id: 213638,
    //         name: "Komari, Chika",
    //         image: "https://cdn.myanimelist.net/images/characters/15/542561.jpg?s=f6757570931335c0601cc63cc325dbd7",
    //         role: "Main",
    //         favorites: 90,
    //         voice_actors: [
    //             {
    //                 id: 64337,
    //                 name: "Terasawa, Momoka",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/79678.jpg?s=f6e13f5df7e0f8c166c78346b0d144be",
    //             },
    //             {
    //                 id: 60520,
    //                 name: "Lea, Morgan",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/70934.jpg?s=0d36a3df52b7bbdf3cf6cf38d495ea24",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213636,
    //         name: "Nukumizu, Kazuhiko",
    //         image: "https://cdn.myanimelist.net/images/characters/9/542556.jpg?s=ec0913248a54bb1735591ee4537bc461",
    //         role: "Main",
    //         favorites: 61,
    //         voice_actors: [
    //             {
    //                 id: 55585,
    //                 name: "Umeda, Shuuichirou",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/79692.jpg?s=b744b30f71e4324223b9ef3887e818e2",
    //             },
    //             {
    //                 id: 59206,
    //                 name: "Thelwell, Kevin D.",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/69905.jpg?s=ac248b825f8a2ad53404dd6e2effc1a0",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213639,
    //         name: "Yakishio, Lemon",
    //         image: "https://cdn.myanimelist.net/images/characters/11/542562.jpg?s=8e508ba08aefaf27fec99e9a968bf36a",
    //         role: "Main",
    //         favorites: 78,
    //         voice_actors: [
    //             {
    //                 id: 35511,
    //                 name: "Wakayama, Shion",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/79679.jpg?s=273318c302a03b00e860e250d555c777",
    //             },
    //             {
    //                 id: 66011,
    //                 name: "Mageto, Bev",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/76005.jpg?s=629a2d2d962fa50e2ccaf08f092e023f",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213637,
    //         name: "Yanami, Anna",
    //         image: "https://cdn.myanimelist.net/images/characters/16/542560.jpg?s=5968a3e87e79412d45a757fc5ab3d4d2",
    //         role: "Main",
    //         favorites: 767,
    //         voice_actors: [
    //             {
    //                 id: 48506,
    //                 name: "Toono, Hikaru",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/79680.jpg?s=6cd4ec5b03230217033a3980ef9f0ad8",
    //             },
    //             {
    //                 id: 60509,
    //                 name: "Mellon, Trisha",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/70272.jpg?s=b03621b8e907cabcdeae6fcb81e3810b",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213644,
    //         name: "Amanatsu, Konami",
    //         image: "https://cdn.myanimelist.net/images/characters/7/556129.jpg?s=c5a2adec4f6d38fd9b57bb738efdaf7f",
    //         role: "Supporting",
    //         favorites: 6,
    //         voice_actors: [
    //             {
    //                 id: 14441,
    //                 name: "Uesaka, Sumire",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/76647.jpg?s=c70ce7b8e2448a993c0d749df1a36bbb",
    //             },
    //             {
    //                 id: 59222,
    //                 name: "Sudberg, Corinne",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/69962.jpg?s=182ddd6fd557ee4328b6c8dd379736aa",
    //             },
    //         ],
    //     },
    //     {
    //         id: 252619,
    //         name: "Asagumo, Chihaya",
    //         image: "https://cdn.myanimelist.net/images/characters/4/556133.jpg?s=6fde68c5eed1e54139571704d08552cb",
    //         role: "Supporting",
    //         favorites: 2,
    //         voice_actors: [
    //             {
    //                 id: 26063,
    //                 name: "Ueda, Reina",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/63535.jpg?s=37e98a391e1ad9f822f6444326a13f21",
    //             },
    //             {
    //                 id: 51273,
    //                 name: "McClain, Meg",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/59270.jpg?s=c6f936cfd3c0507c12d7489355333d0d",
    //             },
    //         ],
    //     },
    //     {
    //         id: 252618,
    //         name: "Ayano, Mitsuki",
    //         image: "https://cdn.myanimelist.net/images/characters/5/556132.jpg?s=362d8c230e5fde845a48f884fecdc54a",
    //         role: "Supporting",
    //         favorites: 0,
    //         voice_actors: [
    //             {
    //                 id: 47439,
    //                 name: "Kobayashi, Chiaki",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/66505.jpg?s=b8e3db933b88d9d18dd0646526d46973",
    //             },
    //             {
    //                 id: 72950,
    //                 name: "Allison, Conner",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/79727.jpg?s=9f7b7fc92dde2c53cc3793d1e59d821d",
    //             },
    //         ],
    //     },
    //     {
    //         id: 255180,
    //         name: "Basori, Tiara",
    //         image: "https://cdn.myanimelist.net/images/characters/6/560801.jpg?s=b7d9db71f0c168ca88300d5b3692926a",
    //         role: "Supporting",
    //         favorites: 15,
    //         voice_actors: [
    //             {
    //                 id: 11404,
    //                 name: "Morohoshi, Sumire",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/76150.jpg?s=88b5a69d4c9837f39542f36d5a4be216",
    //             },
    //         ],
    //     },
    //     {
    //         id: 254054,
    //         name: "Gondou, Asami",
    //         image: "https://cdn.myanimelist.net/images/characters/6/558782.jpg?s=404aa7c61eef601d34114d0367398de8",
    //         role: "Supporting",
    //         favorites: 0,
    //         voice_actors: [
    //             {
    //                 id: 32943,
    //                 name: "Sekine, Akira",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/56597.jpg?s=0867540938a5fcaaa608995800d5e64a",
    //             },
    //             {
    //                 id: 50419,
    //                 name: "Van Sistine, Natalie",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/70171.jpg?s=ff785a10eabeed08824b4c8c141bd805",
    //             },
    //         ],
    //     },
    //     {
    //         id: 252616,
    //         name: "Hakamada, Sousuke",
    //         image: "https://cdn.myanimelist.net/images/characters/7/556130.jpg?s=77544ca87e1fde21298e9d51f626ca1b",
    //         role: "Supporting",
    //         favorites: 1,
    //         voice_actors: [
    //             {
    //                 id: 15743,
    //                 name: "Oosaka, Ryouta",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/57323.jpg?s=ffa4e1dade0e828ca77fef631aa947e2",
    //             },
    //             {
    //                 id: 42373,
    //                 name: "Saab, Alejandro",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/46023.jpg?s=77009de4526f4e1d5e2633f33aed13d2",
    //             },
    //         ],
    //     },
    //     {
    //         id: 252617,
    //         name: "Himemiya, Karen",
    //         image: "https://cdn.myanimelist.net/images/characters/16/556131.jpg?s=7e069b19cef09e111e9e2a166408e8e2",
    //         role: "Supporting",
    //         favorites: 1,
    //         voice_actors: [
    //             {
    //                 id: 36812,
    //                 name: "Waki, Azumi",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/62975.jpg?s=c88912eb30ebff9f97219c5544006ca7",
    //             },
    //             {
    //                 id: 9091,
    //                 name: "Tipton, Alexis",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/30851.jpg?s=c632e948d78d93d34079b32abd22b500",
    //             },
    //         ],
    //     },
    //     {
    //         id: 255179,
    //         name: "Houkobaru, Hibari",
    //         image: "https://cdn.myanimelist.net/images/characters/4/560800.jpg?s=b9f8ef21824cb29e718c8dd7c15521e7",
    //         role: "Supporting",
    //         favorites: 2,
    //         voice_actors: [
    //             {
    //                 id: 28045,
    //                 name: "Nanami, Hiroki",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/77255.jpg?s=145c18ebcc63a541e560f50baad1b3d0",
    //             },
    //         ],
    //     },
    //     {
    //         id: 255450,
    //         name: "Komari, Hina",
    //         image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
    //         role: "Supporting",
    //         favorites: 0,
    //         voice_actors: [
    //             {
    //                 id: 64404,
    //                 name: "Osanai, Reo",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/82068.jpg?s=abe47ed3115987e3ffcdaeb64f41da9d",
    //             },
    //         ],
    //     },
    //     {
    //         id: 255449,
    //         name: "Komari, Susumu",
    //         image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
    //         role: "Supporting",
    //         favorites: 0,
    //         voice_actors: [
    //             {
    //                 id: 65590,
    //                 name: "Tsukishima, Mayumi",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/75165.jpg?s=6cc4929b2f3977e91645fd499bd19d58",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213645,
    //         name: "Konuki, Sayo",
    //         image: "https://cdn.myanimelist.net/images/characters/3/556893.jpg?s=372ec377c4987fb0518cc7d01ae7ae33",
    //         role: "Supporting",
    //         favorites: 13,
    //         voice_actors: [
    //             {
    //                 id: 61,
    //                 name: "Saitou, Chiwa",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/79603.jpg?s=102f06b9af377a674d4aeb2b7ab1f018",
    //             },
    //             {
    //                 id: 74635,
    //                 name: "Marie, Maganda",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/80553.jpg?s=2061c94dc5bfa2b4fe0ba801cbaf3583",
    //             },
    //         ],
    //     },
    //     {
    //         id: 254323,
    //         name: "Lemon's Grandmother",
    //         image: "https://cdn.myanimelist.net/images/characters/13/559417.jpg?s=7aed54a9a1199166c68726a426c00348",
    //         role: "Supporting",
    //         favorites: 0,
    //         voice_actors: [
    //             {
    //                 id: 11833,
    //                 name: "Sawada, Toshiko",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/69251.jpg?s=d12745ce097f841cbb203537b110c43c",
    //             },
    //         ],
    //     },
    //     {
    //         id: 255451,
    //         name: "Nishikawa",
    //         image: "https://cdn.myanimelist.net/images/characters/7/561468.jpg?s=9cbc685e6742d9a523c501b7f7cd324a",
    //         role: "Supporting",
    //         favorites: 0,
    //         voice_actors: [
    //             {
    //                 id: 63790,
    //                 name: "Furuya, Anan",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/73691.jpg?s=0d67f94f2db4022dda82f52781dde1c6",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213641,
    //         name: "Nukumizu, Kaju",
    //         image: "https://cdn.myanimelist.net/images/characters/4/552228.jpg?s=6ccf23a7df325642f261e20dc0cc095e",
    //         role: "Supporting",
    //         favorites: 38,
    //         voice_actors: [
    //             {
    //                 id: 24265,
    //                 name: "Tanaka, Minami",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/54179.jpg?s=f39aa780c6721a6b211e7cb6c9322c0a",
    //             },
    //             {
    //                 id: 71106,
    //                 name: "Flatley, Monica",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/78771.jpg?s=90fceba1c91aad789d3fd7cd7958cc63",
    //             },
    //         ],
    //     },
    //     {
    //         id: 253400,
    //         name: "Shikiya, Yumeko",
    //         image: "https://cdn.myanimelist.net/images/characters/9/557519.jpg?s=062aa1e1cc740c4401b58feab9ef9281",
    //         role: "Supporting",
    //         favorites: 42,
    //         voice_actors: [
    //             {
    //                 id: 11030,
    //                 name: "Anzai, Chika",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/64698.jpg?s=19c2627bc20c2844b31641764b06bbf6",
    //             },
    //             {
    //                 id: 51274,
    //                 name: "Roberts, Brianna",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/59271.jpg?s=60bbd79ae4f66a7784451d1d08d15908",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213643,
    //         name: "Tamaki, Shintarou",
    //         image: "https://cdn.myanimelist.net/images/characters/16/552230.jpg?s=eac2132b23129856fbd86ce7a1ce9a5e",
    //         role: "Supporting",
    //         favorites: 4,
    //         voice_actors: [
    //             {
    //                 id: 26705,
    //                 name: "Kobayashi, Yuusuke",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/53729.jpg?s=3594f7198c4e68af86120e18ab6b6a87",
    //             },
    //             {
    //                 id: 44242,
    //                 name: "Gallardo, Ethan",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/2/47706.jpg?s=8ea102638e617696299e02684b5c3b5e",
    //             },
    //         ],
    //     },
    //     {
    //         id: 213642,
    //         name: "Tsukinoki, Koto",
    //         image: "https://cdn.myanimelist.net/images/characters/13/552229.jpg?s=0770fbdb1e7666bc9069b33a997f7f5b",
    //         role: "Supporting",
    //         favorites: 6,
    //         voice_actors: [
    //             {
    //                 id: 17215,
    //                 name: "Tanezaki, Atsumi",
    //                 language: "Japanese",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/3/77190.jpg?s=ed33c5d429051864f3af3fe2e64eb970",
    //             },
    //             {
    //                 id: 74379,
    //                 name: "Norton, Madeleine",
    //                 language: "English",
    //                 image: "https://cdn.myanimelist.net/images/voiceactors/1/80422.jpg?s=443ad5ed3a33a8eaa404be86161749b2",
    //             },
    //         ],
    //     },
    // ];

    if (charactersData.every((item) => !item)) {
        return (
            <div className="space-y-3">
                {charactersData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white flex justify-between items-start shadow-sm"
                    >
                        {/* Character Skeleton */}
                        <div className="flex gap-3 items-start flex-grow">
                            <div className="w-[58px] h-[90px] skeleton rounded-none"></div>
                            <div className="py-2.5">
                                <p className="h-5 w-24 mb-1.5 skeleton rounded-none"></p>
                                <p className="h-4 w-20 skeleton rounded-none"></p>
                            </div>
                        </div>

                        {/* VA Skeleton */}
                        <div className="flex flex-row-reverse gap-3 items-start flex-grow">
                            <div className="w-[58px] h-[90px] skeleton rounded-none"></div>
                            <div className="py-2.5 text-right">
                                <p className="h-5 w-24 mb-1.5 skeleton rounded-none"></p>
                                <p className="h-4 w-20 skeleton rounded-none"></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {charactersData.map((item) => (
                <div
                    key={item.id}
                    className="bg-white flex justify-between items-start shadow-sm"
                >
                    {/* Character */}
                    <div className="flex gap-3 items-start hover:cursor-pointer group flex-grow">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-[58px] h-[90px] bg-slate-200"
                        />
                        <div className="py-2.5">
                            <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                {item.role}
                            </p>
                            <p className="text-slate-400 text-xs font-medium">
                                {item.favorites} Favorites
                            </p>
                        </div>
                    </div>

                    {/* Voice Actors */}
                    <div className="space-y-2 flex-grow">
                        {item.voice_actors.map((va) => (
                            <div
                                key={va.id}
                                className="flex flex-row-reverse gap-3 items-start text-right w-full hover:cursor-pointer group"
                            >
                                <img
                                    src={va.image}
                                    alt={va.name}
                                    className="w-[58px] h-[90px] bg-slate-200"
                                />
                                <div className="py-2.5">
                                    <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                        {va.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                        {va.language}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default page;
