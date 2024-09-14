"use client";

import AnimeDataContext from "@/context/AnimeDataContext";
import { useContext } from "react";
import { MdDownload } from "react-icons/md";

const page = () => {
    const context = useContext(AnimeDataContext);
    const { animeBaseData } = context;

    const animePicturesData = [
        {
            url: "https://cdn.myanimelist.net/images/anime/1859/140358.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1859/140358t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1859/140358l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1204/142102.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1204/142102t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1204/142102l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1904/142675.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1904/142675t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1904/142675l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1359/142920.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1359/142920t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1359/142920l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1215/143237.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1215/143237t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1215/143237l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1239/143497.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1239/143497t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1239/143497l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1332/143513.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1332/143513t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1332/143513l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1875/144628.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1875/144628t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1875/144628l.jpg",
        },
        {
            url: "https://cdn.myanimelist.net/images/anime/1705/145056.jpg",
            small_image_url:
                "https://cdn.myanimelist.net/images/anime/1705/145056t.jpg",
            large_image_url:
                "https://cdn.myanimelist.net/images/anime/1705/145056l.jpg",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {animePicturesData.map((item, idx) => (
                <div key={idx} className="w-[90%] sm:w-[80%]">
                    <a
                        href={item.large_image_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.large_image_url}
                            alt={
                                animeBaseData.title_english ??
                                animeBaseData.title
                            }
                            className="w-full shadow-md bg-gray-500 hover:scale-110 transition-[transform] duration-300 cursor-pointer"
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default page;
