"use client";

import { loadServerData } from "@/utils/DataLoader";
import { useEffect, useState } from "react";

export const Pictures = ({ characterId, characterName }) => {
    const [characterPicturesData, setCharacterPicturesData] = useState(
        Array(5).fill(null)
    );

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await loadServerData(
                `/characters/${characterId}/pictures`
            );

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            setCharacterPicturesData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (characterPicturesData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animePicturesData is null, return skeleton
    if (characterPicturesData.every((item) => !item)) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                {characterPicturesData.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-[90%] sm:w-[80%] pb-[114%] skeleton rounded-none"
                    ></div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {characterPicturesData.map((item, idx) => (
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
