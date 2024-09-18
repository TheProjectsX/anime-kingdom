import React from "react";
import StudioInfoLayout from "./components/StudioInfoLayout";

const layout = ({ children, params }) => {
    const { studioId } = params;

    const studioBaseData = {
        id: 17,
        title: "Aniplex",
        titles: ["Aniplex", "アニプレックス"],
        image: "https://cdn.myanimelist.net/s/common/company_logos/ba2241ea-7f83-45b6-9360-1f1d4de0d65a_600x600_i?s=369f1423117062ab3c7f4c7a90b2005a",
        about: 'Aniplex is a diversified entertainment company operating worldwide with focus on the planning and production of anime video and music content, its distribution in theaters and broadcast syndication as well as their respective physical and digital products, development of related game apps and merchandise such as figurines and apparel, stage production of musicals and live events, and operating the digital store "Aniplex Online" which provides hand-picked items for sale.\nAniplex\' fully-owned subsidiaries include the anime production A-1 Pictures, mobile game app developer Quatro A, and Aniplex of America which leads the animation business outside of Japan.\n\n(Source: Official Website)',
        favorites: 3389,
        count: 624,
        external: [
            { name: "aniplex.co.jp", url: "http://www.aniplex.co.jp/" },
            {
                name: "aniplex.co.jp",
                url: "https://www.aniplex.co.jp/eng/index.html",
            },
            { name: "YouTube", url: "https://www.youtube.com/c/aniplex" },
            {
                name: "tiktok.com",
                url: "https://www.tiktok.com/@aniplex_official",
            },
            { name: "Instagram", url: "https://www.instagram.com/aniplex_jp/" },
            {
                name: "themoviedb.org",
                url: "https://www.themoviedb.org/video/channel/UC14QT5j2nQI8lKBCGtrrBQA",
            },
            { name: "YouTube", url: "https://www.youtube.com/c/AniplexUSA" },
            { name: "cluster.mu", url: "https://cluster.mu/u/Aniplex" },
            {
                name: "online.aniplex.co.jp",
                url: "https://online.aniplex.co.jp/",
            },
        ],
    };

    return (
        <StudioInfoLayout studioId={studioId} studioBaseData={studioBaseData}>
            {children}
        </StudioInfoLayout>
    );
};

export default layout;
