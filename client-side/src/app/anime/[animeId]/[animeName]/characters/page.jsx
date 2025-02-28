"use client";

import { loadServerData } from "@/utils/DataLoader";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";

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

const sortBy = [
    { label: "Main", value: "main" },
    { label: "Rating", value: "rating" },
    { label: "Name", value: "name" },
];

const page = ({ params }) => {
    const [animeCharactersPrimaryData, setAnimeCharactersPrimaryData] =
        useState(Array(5).fill(null));

    const [animeCharactersData, setAnimeCharactersData] = useState(
        animeCharactersPrimaryData
    );
    const [voiceLanguages, setVoiceLanguages] = useState(languages);

    const { animeId } = use(params);

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await loadServerData(
                `/anime/${animeId}/characters`
            );

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            setAnimeCharactersData(serverResponse.data ?? []);
            setAnimeCharactersPrimaryData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (animeCharactersData.every((item) => !item)) {
            loadData();
        }
    }, []);

    const sortCharacters = (sortby) => {
        if (sortby === "main") {
            setAnimeCharactersData(animeCharactersPrimaryData);
        } else if (sortby === "rating") {
            setAnimeCharactersData((prev) =>
                prev.slice().sort((a, b) => b.favorites - a.favorites)
            );
        } else if (sortby === "name") {
            setAnimeCharactersData((prev) =>
                prev.slice().sort((a, b) => a.name.localeCompare(b.name))
            );
        }
    };

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
                                <p className="h-4 sm:h-5 w-[87px] sm:w-24 mb-1.5 skeleton rounded-none"></p>
                                <p className="h-3 sm:h-4 w-[80px] sm:w-20 skeleton rounded-none"></p>
                            </div>
                        </div>

                        {/* VA Skeleton */}
                        <div className="flex flex-row-reverse gap-3 items-start flex-grow">
                            <div className="w-[58px] h-[90px] skeleton rounded-none"></div>
                            <div className="py-2.5 text-right">
                                <p className="h-4 sm:h-5 w-[87px] sm:w-24 mb-1.5 skeleton rounded-none"></p>
                                <p className="h-3 sm:h-4 w-[80px] sm:w-20 skeleton rounded-none"></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <div className="flex justify-between flex-wrap mb-8 gap-4">
                <label className="flex flex-col gap-1 lg:w-auto">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Voice Languages:
                    </span>
                    <MultiSelect
                        options={languages}
                        value={voiceLanguages}
                        onChange={setVoiceLanguages}
                        className="w-52"
                        hasSelectAll={true}
                    />
                </label>
                <label className="flex flex-col gap-1 lg:w-auto">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Sort By:
                    </span>
                    <Select
                        defaultValue={sortBy[0]}
                        name="sortby"
                        isSearchable={false}
                        options={sortBy}
                        className="basic-multi-select w-fit min-w-52"
                        classNamePrefix="select"
                        placeholder="Select Sorting..."
                        onChange={(selected) => sortCharacters(selected.value)}
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
                            <h4 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600 text-sm sm:text-base">
                                {item.name}
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm mb-0.5 font-medium">
                                {item.role}
                            </p>
                            {item.favorites && (
                                <p className="text-slate-400 text-xs font-medium">
                                    {item.favorites} Favorites
                                </p>
                            )}
                        </div>
                    </Link>

                    {/* Voice Actors */}
                    <div className="space-y-2 flex-grow">
                        {item.voice_actors
                            .filter((va) =>
                                voiceLanguages
                                    .map((item) => item.value)
                                    .includes(va.language)
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
                                        <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600 text-sm sm:text-base">
                                            {va.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm mb-0.5 font-medium">
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
