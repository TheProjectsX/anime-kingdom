"use client";

import AnimeDataContext from "@/context/AnimeDataContext";
import { loadServerData } from "@/utils/DataLoader";
import { use, useContext, useEffect, useState } from "react";

const page = ({ params }) => {
    const { animeId } = use(params);
    const context = useContext(AnimeDataContext);
    const { animeBaseData } = context;

    const [animePicturesData, setAnimePicturesData] = useState(
        Array(5).fill(null)
    );

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await loadServerData(
                `/anime/${animeId}/pictures`
            );

            if (!serverResponse.success) {
                console.log("Not Found");
            }

            setAnimePicturesData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (animePicturesData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animePicturesData is null, return skeleton
    if (animePicturesData.every((item) => !item)) {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                {animePicturesData.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-[90%] sm:w-[80%] pb-[114%] skeleton rounded-none"
                    ></div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
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
