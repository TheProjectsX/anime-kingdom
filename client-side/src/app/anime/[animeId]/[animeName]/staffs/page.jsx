const page = async ({ params }) => {
    const { animeId } = params;

    const serverResponse = await (
        await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}/staffs`
        )
    ).json();

    if (!serverResponse.success) {
        console.log("Not Found");
    }

    // const animeVideoData = serverResponse.get("data", {});
    const animeStaffsData = [
        {
            id: 76650,
            name: "Inoue, Megumi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Producer"],
        },
        {
            id: 67169,
            name: "Jinguuji, Manabu",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Producer"],
        },
        {
            id: 76651,
            name: "Kikuchi, Yuuichirou",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Producer"],
        },
        {
            id: 65001,
            name: "Nagamine, Rieko",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Producer"],
        },
        {
            id: 63456,
            name: "Oowada, Tomoyuki",
            image: "https://cdn.myanimelist.net/images/voiceactors/3/73389.jpg?s=16c566bb8c5bb2d61f14f38a5cb0858d",
            positions: ["Producer"],
        },
        {
            id: 76655,
            name: "Miyagawa, Taichi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Assistant Producer"],
        },
        {
            id: 72822,
            name: "Kitamura, Shoutarou",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/81896.jpg?s=5d11ce87a2ee471b9f103c1b7d1b4cd2",
            positions: ["Director", "Episode Director", "Storyboard"],
        },
        {
            id: 53431,
            name: "Yoshida, Kouhei",
            image: "https://cdn.myanimelist.net/images/voiceactors/3/73065.jpg?s=8cc58b80ea40790255a5b2799cbec430",
            positions: ["Sound Director"],
        },
        {
            id: 77752,
            name: "Amagaeru",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Episode Director"],
        },
        {
            id: 47974,
            name: "Kouno, Ayako",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/81676.jpg?s=0d7fbb8aea71b042161dd207e6ee24a0",
            positions: ["Episode Director"],
        },
        {
            id: 77780,
            name: "Shimizu, Yuudai",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Episode Director"],
        },
        {
            id: 61241,
            name: "Tobita, Tsuyoshi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Episode Director"],
        },
        {
            id: 77937,
            name: "Tomari, Kouki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Episode Director", "Storyboard"],
        },
        {
            id: 76834,
            name: "Watanabe, Yuki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Episode Director", "Storyboard"],
        },
        {
            id: 71872,
            name: "Yukihiro, Komao",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Episode Director"],
        },
        {
            id: 19175,
            name: "Yokotani, Masahiro",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Script", "Series Composition"],
        },
        {
            id: 60356,
            name: "Nakanishi, Motoki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Storyboard"],
        },
        {
            id: 14217,
            name: "Obara, Masakazu",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Storyboard"],
        },
        {
            id: 10140,
            name: "Oikawa, Kei",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Storyboard"],
        },
        {
            id: 39348,
            name: "Ushijima, Shinichirou",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/53291.jpg?s=46960f0054ab28dbfc4c89d6732fe89c",
            positions: ["Storyboard"],
        },
        {
            id: 66348,
            name: "Botchi Boromaru",
            image: "https://cdn.myanimelist.net/images/voiceactors/2/75892.jpg?s=1e4e119e4dbdd8743d55b746472cc0f1",
            positions: [
                "Theme Song Lyrics",
                "Theme Song Composition",
                "Theme Song Arrangement",
                "Theme Song Performance",
            ],
        },
        {
            id: 77439,
            name: "Isogai, Simon",
            image: "https://cdn.myanimelist.net/images/voiceactors/3/81753.jpg?s=ce90c8476330e60d19ed02aaf170d440",
            positions: ["Theme Song Lyrics", "Theme Song Composition"],
        },
        {
            id: 76654,
            name: "Kamata, Masato",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Theme Song Composition"],
        },
        {
            id: 75292,
            name: "Mossa",
            image: "https://cdn.myanimelist.net/images/voiceactors/3/80834.jpg?s=ff43faeabe98b6e2e4eacac792b79eaf",
            positions: ["Theme Song Performance"],
        },
        {
            id: 67008,
            name: "Murata, Yuuichi",
            image: "https://cdn.myanimelist.net/images/voiceactors/2/76327.jpg?s=0ff4d969fcaa66e5462a5c2946b0e292",
            positions: ["Theme Song Arrangement"],
        },
        {
            id: 64337,
            name: "Terasawa, Momoka",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/79678.jpg?s=f6e13f5df7e0f8c166c78346b0d144be",
            positions: ["Theme Song Performance"],
        },
        {
            id: 48506,
            name: "Toono, Hikaru",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/79680.jpg?s=6cd4ec5b03230217033a3980ef9f0ad8",
            positions: ["Theme Song Performance"],
        },
        {
            id: 35511,
            name: "Wakayama, Shion",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/79679.jpg?s=273318c302a03b00e860e250d555c777",
            positions: ["Theme Song Performance"],
        },
        {
            id: 5287,
            name: "YUI",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/19067.jpg?s=57e2ca81aebbc1b9233716fc70ea05b6",
            positions: ["Theme Song Lyrics", "Theme Song Composition"],
        },
        {
            id: 11388,
            name: "hitomi",
            image: "https://cdn.myanimelist.net/images/voiceactors/2/81754.jpg?s=39c3cbd4a7dc733915218b933a806ada",
            positions: ["Theme Song Lyrics"],
        },
        {
            id: 54967,
            name: "Amamori, Takibi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Original Creator"],
        },
        {
            id: 76649,
            name: "Atsuchi, Sumio",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Planning"],
        },
        {
            id: 10295,
            name: "Gouda, Hiroaki",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/62432.jpg?s=cf09f12884cd4d8343a9063278860ad4",
            positions: ["Animation Director", "Key Animation"],
        },
        {
            id: 72825,
            name: "Harashima, Mirai",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Key Animation"],
        },
        {
            id: 48510,
            name: "Hariba, Yuuko",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 58908,
            name: "Hasegawa, Takuya",
            image: "https://cdn.myanimelist.net/images/voiceactors/2/72646.jpg?s=71ef33aa182c6213ca8743ac2f08c3e7",
            positions: ["Sound Effects"],
        },
        {
            id: 63637,
            name: "Hashimoto, Kyouka",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Associate Producer"],
        },
        {
            id: 42005,
            name: "Hatakeyama, Yuuki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Art Director"],
        },
        {
            id: 63638,
            name: "Higashi, Mao",
            image: "https://cdn.myanimelist.net/images/voiceactors/3/73522.jpg?s=78375e6c86b3879e87221f4977d7649f",
            positions: ["Associate Producer"],
        },
        {
            id: 61898,
            name: "Hirayoshi, Mikiya",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Background Art"],
        },
        {
            id: 37597,
            name: "Hirose, Kiyoshi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Editing"],
        },
        {
            id: 13095,
            name: "Imigi, Muru",
            image: "https://cdn.myanimelist.net/images/voiceactors/2/54447.jpg?s=d4d9baa314708231dbdc71ba94ddc55f",
            positions: ["Original Character Design"],
        },
        {
            id: 38891,
            name: "Ishikawa, Tomomi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 14031,
            name: "Iwakami, Atsuhiro",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/29425.jpg?s=73e16490c97fd63059f2eb3ffdd82f72",
            positions: ["Planning"],
        },
        {
            id: 55584,
            name: "Iwasaki, Reina",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 28577,
            name: "Kawakami, Tetsuya",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: [
                "Chief Animation Director",
                "Animation Director",
                "Character Design",
            ],
        },
        {
            id: 76652,
            name: "Kidou, Takayuki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 71348,
            name: "Kikuchi, Takayuki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Key Animation"],
        },
        {
            id: 78137,
            name: "Kisanuki, Maya",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Assistant Animation Director"],
        },
        {
            id: 62466,
            name: "Komine, Hikari",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 72823,
            name: "Miura, Takumitsu",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Key Animation", "Animation Director"],
        },
        {
            id: 51763,
            name: "Miyawaki, Youhei",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Director of Photography"],
        },
        {
            id: 77438,
            name: "Mogi, Shinichi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 72826,
            name: "Murakami, Ayaka",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Color Design"],
        },
        {
            id: 64915,
            name: "Nagai, Kouji",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/74477.jpg?s=083cfefccc8a8a187dedbae11c48a4d6",
            positions: ["Planning"],
        },
        {
            id: 39941,
            name: "Nii, Manabu",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 76616,
            name: "Ootsuka, Norikazu",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Planning"],
        },
        {
            id: 19283,
            name: "Roberts, Aaron",
            image: "https://cdn.myanimelist.net/images/voiceactors/2/42965.jpg?s=2419dbadc45b8cf0fe17e22c7b524d4e",
            positions: ["ADR Director"],
        },
        {
            id: 51521,
            name: "Saitou, Yuu",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Character Design"],
        },
        {
            id: 76835,
            name: "Saitou, Junichi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 63645,
            name: "Satou, Maki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Planning"],
        },
        {
            id: 72939,
            name: "Shigekuni, Hiroko",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 77782,
            name: "Shouki, Kouji",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 77781,
            name: "Suruki, Saori",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 64439,
            name: "Suzuki, Risa",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 72824,
            name: "Takeda, Akane",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Key Animation", "Animation Director"],
        },
        {
            id: 32081,
            name: "Takiyama, Masaaki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 76653,
            name: "Tamura, Ayumi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Director of Photography"],
        },
        {
            id: 63463,
            name: "Tasaki, Katsuya",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/74618.jpg?s=3ca1be1dc85e821493323c22a182c86d",
            positions: ["Planning"],
        },
        {
            id: 55752,
            name: "Torii, Takafumi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Key Animation"],
        },
        {
            id: 51639,
            name: "Usa, Yoshiki",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Planning"],
        },
        {
            id: 53734,
            name: "Utatane, Kana",
            image: "https://cdn.myanimelist.net/images/voiceactors/2/65759.jpg?s=140f088776670a139bfc98c46e401982",
            positions: ["Music"],
        },
        {
            id: 47104,
            name: "Yakou, Hiroshi",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 77753,
            name: "Yamazaki, Kouhei",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 65760,
            name: "Yamazaki, Souta",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Key Animation"],
        },
        {
            id: 55656,
            name: "Yoshida, Wakako",
            image: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
            positions: ["Animation Director"],
        },
        {
            id: 60458,
            name: "Yu, Kay",
            image: "https://cdn.myanimelist.net/images/voiceactors/1/68762.jpg?s=57d8ee814d28272d5e79566100c7577a",
            positions: ["Key Animation"],
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {animeStaffsData.map((item) => (
                <div
                    key={item.key}
                    className="bg-white flex gap-3 items-start hover:cursor-pointer group shadow-sm"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-[58px] h-[90px] bg-slate-600"
                    />
                    <div className="py-2.5">
                        <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-0.5 font-medium">
                            {item.positions.join(", ")}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default page;
