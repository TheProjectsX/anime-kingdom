"use client";

import MangaDataContext from "@/context/MangaDataContext";
import { useContext, useEffect, useState } from "react";

let mangaPicturesPrimaryData = Array(5).fill(null);

const page = ({ params }) => {
    const context = useContext(MangaDataContext);
    const { mangaBaseData } = context;

    const [mangaPicturesData, setMangaPicturesData] = useState(
        mangaPicturesPrimaryData
    );

    const { mangaId } = params;

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await (
                await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/manga/${mangaId}/pictures`
                )
            ).json();

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            mangaPicturesPrimaryData = serverResponse.data ?? [];
            setMangaPicturesData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (mangaPicturesPrimaryData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animePicturesData is null, return skeleton
    if (mangaPicturesData.every((item) => !item)) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {mangaPicturesData.map((item, idx) => (
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
            {mangaPicturesData.map((item, idx) => (
                <div key={idx} className="w-[90%] sm:w-[80%]">
                    <a
                        href={item.large_image_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.large_image_url}
                            alt={
                                mangaBaseData.title_english ??
                                mangaBaseData.title
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
