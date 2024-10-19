"use client";

import { loadServerData } from "@/utils/DataLoader";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = ({ params }) => {
    const [mangaCharactersData, setMangaCharactersData] = useState(
        Array(5).fill(null)
    );

    const { mangaId } = params;
    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await loadServerData(
                `/manga/${mangaId}/characters`
            );

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            setMangaCharactersData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (mangaCharactersData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animeCharactersData is null, return skeleton
    if (mangaCharactersData.every((item) => !item)) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {mangaCharactersData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white flex gap-3 items-start shadow-sm"
                    >
                        <div className="w-[58px] h-[90px] skeleton rounded-none"></div>
                        <div className="py-2.5">
                            <p className="h-5 w-24 mb-1.5 skeleton rounded-none"></p>
                            <p className="h-4 w-20 skeleton rounded-none"></p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {mangaCharactersData.map((item) => (
                <div
                    key={item.id}
                    className="bg-white flex justify-between items-start shadow-sm"
                >
                    {/* Character */}
                    <Link
                        href={`/characters/${item.id}`}
                        className="flex gap-3 items-start hover:cursor-pointer group flex-grow"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-[58px] h-[90px] bg-slate-200"
                        />
                        <div className="py-2.5">
                            <h4 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                {item.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                {item.role}
                            </p>
                            {item.favorites && (
                                <p className="text-slate-400 text-xs font-medium">
                                    {item.favorites} Favorites
                                </p>
                            )}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default page;
