"use client";

import { useEffect, useState } from "react";

let animePicturesPrimaryData = Array(5).fill(null);

export const Pictures = ({ characterId, characterName }) => {
    const [animePicturesData, setAnimePicturesData] = useState(
        animePicturesPrimaryData
    );

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await (
                await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/characters/${characterId}/pictures`
                )
            ).json();

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            animePicturesPrimaryData = serverResponse.data ?? [];
            setAnimePicturesData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (animePicturesPrimaryData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animePicturesData is null, return skeleton
    if (animePicturesData.every((item) => !item)) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {animePicturesData.map((item, idx) => (
                <div key={idx} className="w-[90%] sm:w-[80%]">
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.url}
                            alt={characterName}
                            className="w-full shadow-md bg-gray-500 hover:scale-110 transition-[transform] duration-300 cursor-pointer"
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};
