"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";

const page = ({ params }) => {
    const [animeCharactersData, setAnimeCharactersData] = useState(
        Array(5).fill(null)
    );
    const [voiceLanguages, setVoiceLanguages] = useState([
        "Japanese",
        "English",
        "French",
        "German",
        "Hebrew",
        "Hungarian",
        "Italian",
        "Korean",
        "Mandarin",
        "Portuguese (BR)",
        "Spanish",
    ]);

    const languages = [
        { label: "Japanese", value: "Japanese" },
        { label: "English", value: "English" },
        { label: "French", value: "French" },
        { label: "German", value: "German" },
        { label: "Hebrew", value: "Hebrew" },
        { label: "Hungarian", value: "Hungarian" },
        { label: "Italian", value: "Italian" },
        { label: "Korean", value: "Korean" },
        { label: "Mandarin", value: "Mandarin" },
        { label: "Portuguese (BR)", value: "Portuguese (BR)" },
        { label: "Spanish", value: "Spanish" },
    ];

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

            setAnimeCharactersData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (animeCharactersData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animeCharactersData is null, return skeleton
    if (animeCharactersData.every((item) => !item)) {
        return (
            <div className="space-y-3">
                {animeCharactersData.map((item, idx) => (
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
            <div className="flex justify-end mb-8">
                <label className="flex flex-col gap-1 w-full lg:w-auto">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Voice Languages:
                    </span>
                    <Select
                        defaultValue={languages}
                        isMulti
                        name="voices"
                        options={languages}
                        className="basic-multi-select w-fit min-w-52"
                        classNamePrefix="select"
                        placeholder="Select voice languages"
                        onChange={(value) =>
                            setVoiceLanguages(value.map((item) => item.value))
                        }
                    />
                </label>
            </div>

            {animeCharactersData.map((item) => (
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
                            <p className="text-slate-400 text-xs font-medium">
                                {item.favorites} Favorites
                            </p>
                        </div>
                    </Link>

                    {/* Voice Actors */}
                    <div className="space-y-2 flex-grow">
                        {item.voice_actors
                            .filter((va) =>
                                voiceLanguages.includes(va.language)
                            )
                            .map((va) => (
                                <Link
                                    key={va.id}
                                    href={`/staffs/${va.id}`}
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
                                </Link>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default page;
