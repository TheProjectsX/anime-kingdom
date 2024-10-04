"use client";

import { loadServerData } from "@/utils/DataLoaderBeta";
import { TextInput, Tooltip } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { IoSearch } from "react-icons/io5";

const page = () => {
    const [targetAnime, setTargetAnime] = useState({
        target_01: null,
        target_02: null,
    });
    const [searchResult, setSearchResult] = useState({
        target_01: null,
        target_02: null,
    });
    const [compareResult, setCompareResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (value, target) => {
        const serverResult = await loadServerData("/anime/search", {
            query: value,
            limit: 6,
        });
        if (!serverResult.success) {
            console.log(serverResult);
            // do something
            return;
        }

        if (target === 1) {
            setSearchResult((prev) => ({
                ...prev,
                target_01: serverResult.data,
            }));
        } else if (target === 2) {
            setSearchResult((prev) => ({
                ...prev,
                target_02: serverResult.data,
            }));
        }
    };

    const handleCompareArtists = async () => {
        const serverResult = await loadServerData("/tools/compare-va", {
            anime: `${targetAnime.target_01?.id},${targetAnime.target_02?.id}`,
            language: "japanese",
        });

        if (!serverResult.success) {
            console.log(serverResult);
            // do something
            return;
        }

        setCompareResult(serverResult.data);
    };

    return (
        <main className="max-width mb-10 py-5 space-y-8">
            <header>
                <h2 className="text-3xl text-center font-suse font-semibold">
                    Compare voice Artists!
                </h2>
            </header>

            {/* Select Anime */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Target Anime 1 */}
                <div className="min-w-32 flex-grow flex flex-col gap-2 relative">
                    <label className="flex flex-col gap-1 w-auto">
                        <span className="text-sm font-semibold text-gray-600 ml-2">
                            Anime 1:
                        </span>
                        <TextInput
                            type="text"
                            name="query"
                            icon={IoSearch}
                            placeholder="Type name and press Enter..."
                            title="Search anime by name"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    if (e.target.value === "") {
                                        setSearchResult((prev) => ({
                                            ...prev,
                                            target_01: null,
                                        }));
                                    } else {
                                        setSearchResult((prev) => ({
                                            ...prev,
                                            target_01: e.target.value,
                                        }));
                                        handleSearch(e.target.value, 1);
                                    }
                                }
                            }}
                        />
                    </label>
                    {/* Search Result */}
                    {searchResult?.target_01 &&
                        (typeof searchResult?.target_01 === "string" ? (
                            <div className="absolute top-[4.2rem] left-0 right-0 p-2 rounded-lg bg-white shadow-lg border text-sm font-semibold flex items-center justify-center gap-3">
                                Searching for {searchResult?.target_01}{" "}
                                <span className="loading loading-sm"></span>
                            </div>
                        ) : (
                            <div className="absolute top-[4.2rem] left-0 right-0 p-2 rounded-lg bg-white shadow-lg border space-y-2 h-60 overflow-y-auto scrollbar-thin flex-gro">
                                {searchResult.target_01?.map((item, idx) => (
                                    <article
                                        key={idx}
                                        className="flex gap-2 items-center hover:items-start group hover:cursor-pointer"
                                        onClick={() => {
                                            setTargetAnime((prev) => ({
                                                ...prev,
                                                target_01: item,
                                            }));
                                            setSearchResult((prev) => ({
                                                ...prev,
                                                target_01: null,
                                            }));
                                        }}
                                    >
                                        <div className="size-16 group-hover:w-16 group-hover:h-auto overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={
                                                    item.title_english ??
                                                    item.title
                                                }
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="group-hover:hidden">
                                            <h4 className="font-semibold mb-1">
                                                {item.title_english ??
                                                    item.title}
                                            </h4>
                                            <p className="text-sm text-gray-700">
                                                {item.type} - {item.year}
                                            </p>
                                        </div>
                                        <div className="hidden group-hover:block">
                                            <h4 className="font-semibold mb-1">
                                                {item.title_english ??
                                                    item.title}{" "}
                                                <span className="font-normal text-sm">
                                                    ({item.type})
                                                </span>
                                            </h4>
                                            <p className="text-sm text-gray-700">
                                                Aired: {item.aired.string}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                Score: {item.score}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                Status: {item.status}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ))}
                    {targetAnime.target_01 && (
                        <article className="flex-grow flex gap-2 items-start group p-4 rounded-lg shadow-lg">
                            <div className="w-16 group-hover:w-16 group-hover:h-auto overflow-hidden flex-shrink-0">
                                <img
                                    src={targetAnime.target_01.image}
                                    alt={
                                        targetAnime.target_01.title_english ??
                                        targetAnime.target_01.title
                                    }
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">
                                    {targetAnime.target_01.title_english ??
                                        targetAnime.target_01.title}{" "}
                                    <span className="font-normal text-sm">
                                        ({targetAnime.target_01.type})
                                    </span>
                                </h4>
                                <p className="text-sm text-gray-700">
                                    Aired: {targetAnime.target_01.aired.string}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Score: {targetAnime.target_01.score}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Status: {targetAnime.target_01.status}
                                </p>
                            </div>
                        </article>
                    )}
                </div>

                {/* Target Anime 2 */}
                <div className="min-w-32 flex-grow flex flex-col gap-2 relative">
                    <label className="flex flex-col gap-1 w-auto">
                        <span className="text-sm font-semibold text-gray-600 ml-2">
                            Anime 2:
                        </span>
                        <TextInput
                            type="text"
                            name="query"
                            icon={IoSearch}
                            placeholder="Type name and press Enter..."
                            title="Search anime by name"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    if (e.target.value === "") {
                                        setSearchResult((prev) => ({
                                            ...prev,
                                            target_02: null,
                                        }));
                                    } else {
                                        setSearchResult((prev) => ({
                                            ...prev,
                                            target_02: e.target.value,
                                        }));
                                        handleSearch(e.target.value, 2);
                                    }
                                }
                            }}
                        />
                    </label>
                    {/* Search Result */}
                    {searchResult?.target_02 &&
                        (typeof searchResult?.target_02 === "string" ? (
                            <div className="absolute top-[4.2rem] left-0 right-0 p-2 rounded-lg bg-white shadow-lg border text-sm font-semibold flex items-center justify-center gap-3">
                                Searching for {searchResult?.target_02}{" "}
                                <span className="loading loading-sm"></span>
                            </div>
                        ) : (
                            <div className="absolute top-[4.2rem] left-0 right-0 p-2 rounded-lg bg-white shadow-lg border space-y-2 h-60 overflow-y-auto scrollbar-thin">
                                {searchResult.target_02.map((item, idx) => (
                                    <article
                                        key={idx}
                                        className="flex gap-2 items-center hover:items-start group hover:cursor-pointer"
                                        onClick={() => {
                                            setTargetAnime((prev) => ({
                                                ...prev,
                                                target_02: item,
                                            }));
                                            setSearchResult((prev) => ({
                                                ...prev,
                                                target_02: null,
                                            }));
                                        }}
                                    >
                                        <div className="size-16 group-hover:w-16 group-hover:h-auto overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={
                                                    item.title_english ??
                                                    item.title
                                                }
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="group-hover:hidden">
                                            <h4 className="font-semibold mb-1">
                                                {item.title_english ??
                                                    item.title}
                                            </h4>
                                            <p className="text-sm text-gray-700">
                                                {item.type} - {item.year}
                                            </p>
                                        </div>
                                        <div className="hidden group-hover:block">
                                            <h4 className="font-semibold mb-1">
                                                {item.title_english ??
                                                    item.title}{" "}
                                                <span className="font-normal text-sm">
                                                    ({item.type})
                                                </span>
                                            </h4>
                                            <p className="text-sm text-gray-700">
                                                Aired: {item.aired.string}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                Score: {item.score}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                Status: {item.status}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ))}
                    {targetAnime.target_02 && (
                        <article className="flex-grow flex gap-2 items-start group p-4 rounded-lg shadow-lg">
                            <div className="w-16 group-hover:w-16 group-hover:h-auto overflow-hidden flex-shrink-0">
                                <img
                                    src={targetAnime.target_02.image}
                                    alt={
                                        targetAnime.target_02.title_english ??
                                        targetAnime.target_02.title
                                    }
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">
                                    {targetAnime.target_02.title_english ??
                                        targetAnime.target_02.title}{" "}
                                    <span className="font-normal text-sm">
                                        ({targetAnime.target_02.type})
                                    </span>
                                </h4>
                                <p className="text-sm text-gray-700">
                                    Aired: {targetAnime.target_02.aired.string}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Score: {targetAnime.target_02.score}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Status: {targetAnime.target_02.status}
                                </p>
                            </div>
                        </article>
                    )}
                </div>
            </section>
            {targetAnime.target_01 && targetAnime.target_02 && (
                <div className="flex justify-center">
                    <button
                        className="btn btn-info btn-wide"
                        onClick={handleCompareArtists}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="loading"></span>
                        ) : (
                            "Compare Artists!"
                        )}
                    </button>
                </div>
            )}

            {/* Body! */}

            {/* Common Voice Artists */}
            {compareResult?.commonVoiceArtists && (
                <section>
                    <h3 className="text-2xl font-semibold font-suse underline underline-offset-4 mb-3">
                        Common Voice Artists:
                    </h3>

                    <div className="space-y-2 mb-5">
                        {compareResult.commonVoiceArtists.map((va) => (
                            <Fragment key={va.id}>
                                {/* For Small Devices */}
                                <div className="bg-white flex justify-between items-start shadow-sm md:hidden">
                                    {/* Voice Actors */}
                                    <Link
                                        href={`/characters/${va.id}`}
                                        className="flex gap-3 items-start hover:cursor-pointer group flex-grow"
                                    >
                                        <img
                                            src={va.image}
                                            alt={va.name}
                                            className="w-[58px] h-[90px] bg-slate-200"
                                        />
                                        <div className="py-2.5">
                                            <h4 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                {va.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                {va.language}
                                            </p>
                                        </div>
                                    </Link>

                                    {/* Characters */}
                                    <div className="space-y-4 flex-grow flex flex-col items-end">
                                        {va.characters
                                            .flat()
                                            .map((character) => (
                                                <Tooltip
                                                    key={character.id}
                                                    placement="right"
                                                    content={
                                                        targetAnime.target_01
                                                            .id ==
                                                        character.animeId
                                                            ? targetAnime
                                                                  .target_01
                                                                  .title_english ??
                                                              targetAnime
                                                                  .target_01
                                                                  .title
                                                            : targetAnime
                                                                  .target_02
                                                                  .title_english ??
                                                              targetAnime
                                                                  .target_02
                                                                  .title
                                                    }
                                                >
                                                    <Link
                                                        href={`/staffs/${character.id}`}
                                                        className="flex flex-row-reverse gap-3 items-start text-right w-full hover:cursor-pointer group"
                                                    >
                                                        <img
                                                            src={
                                                                character.image
                                                            }
                                                            alt={character.name}
                                                            className="w-[58px] h-[90px] bg-slate-200"
                                                        />
                                                        <div className="py-2.5">
                                                            <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                                {character.name}
                                                            </h3>
                                                            <p className="text-slate-400 text-xs font-medium">
                                                                {
                                                                    character.favorites
                                                                }{" "}
                                                                Favorites
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </Tooltip>
                                            ))}
                                    </div>
                                </div>

                                {/* For Medium to on-ward Devices */}
                                <div className="bg-white justify-between items-end shadow-sm hidden md:flex">
                                    {/* Character group 01 */}
                                    <div className="space-y-4 flex-grow flex flex-col [&_>div:first-of-type]:w-full">
                                        {va.characters[0].map((character) => (
                                            <Tooltip
                                                key={character.id}
                                                placement="left"
                                                content={
                                                    <p className="max-w-60">
                                                        {" "}
                                                        {targetAnime.target_01
                                                            .id ==
                                                        character.animeId
                                                            ? targetAnime
                                                                  .target_01
                                                                  .title_english ??
                                                              targetAnime
                                                                  .target_01
                                                                  .title
                                                            : targetAnime
                                                                  .target_02
                                                                  .title_english ??
                                                              targetAnime
                                                                  .target_02
                                                                  .title}
                                                    </p>
                                                }
                                            >
                                                <Link
                                                    href={`/staffs/${character.id}`}
                                                    className="flex gap-3 items-start w-full hover:cursor-pointer group"
                                                >
                                                    <img
                                                        src={character.image}
                                                        alt={character.name}
                                                        className="w-[58px] h-[90px] bg-slate-200"
                                                    />
                                                    <div className="py-2.5">
                                                        <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                            {character.name}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                            {character.language}
                                                        </p>
                                                        <p className="text-slate-400 text-xs font-medium">
                                                            {
                                                                character.favorites
                                                            }{" "}
                                                            Favorites
                                                        </p>
                                                    </div>
                                                </Link>
                                            </Tooltip>
                                        ))}
                                    </div>
                                    {/* Voice Actors */}
                                    <Link
                                        href={`/characters/${va.id}`}
                                        className="flex flex-col gap-1 items-center hover:cursor-pointer group flex-grow"
                                    >
                                        <img
                                            src={va.image}
                                            alt={va.name}
                                            className="w-[70px] ah-[90px] bg-slate-200"
                                        />
                                        <div className="py-2.5 text-center">
                                            <h4 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                {va.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                {va.language}
                                            </p>
                                        </div>
                                    </Link>

                                    {/* Character group 02 */}
                                    <div className="space-y-4 flex-grow flex flex-col  [&_>div:first-of-type]:w-full">
                                        {va.characters[1].map((character) => (
                                            <Tooltip
                                                key={character.id}
                                                placement="right"
                                                content={
                                                    <p className="max-w-60">
                                                        {" "}
                                                        {targetAnime.target_01
                                                            .id ==
                                                        character.animeId
                                                            ? targetAnime
                                                                  .target_01
                                                                  .title_english ??
                                                              targetAnime
                                                                  .target_01
                                                                  .title
                                                            : targetAnime
                                                                  .target_02
                                                                  .title_english ??
                                                              targetAnime
                                                                  .target_02
                                                                  .title}
                                                    </p>
                                                }
                                            >
                                                <Link
                                                    href={`/staffs/${character.id}`}
                                                    className="flex flex-row-reverse gap-3 items-start text-right w-full hover:cursor-pointer group"
                                                >
                                                    <img
                                                        src={character.image}
                                                        alt={character.name}
                                                        className="w-[58px] h-[90px] bg-slate-200"
                                                    />
                                                    <div className="py-2.5">
                                                        <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                            {character.name}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                            {character.language}
                                                        </p>
                                                        <p className="text-slate-400 text-xs font-medium">
                                                            {
                                                                character.favorites
                                                            }{" "}
                                                            Favorites
                                                        </p>
                                                    </div>
                                                </Link>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </section>
            )}

            {/* Uncommon Voice Artists */}
            {compareResult?.unCommonVoiceArtists && (
                <section>
                    <h3 className="text-2xl font-semibold font-suse underline underline-offset-4 mb-3">
                        UnCommon Voice Artists:
                    </h3>
                    {compareResult.unCommonVoiceArtists.map((group, idx) => (
                        <section key={idx}>
                            <h3 className="mb-2">
                                <span className="text-xl text-black">
                                    Anime:
                                </span>{" "}
                                <Link
                                    href={`/anime/${group[0].characters[0].animeId}`}
                                    className="text-base text-gray-600 hover:underline underline-offset-2"
                                >
                                    {targetAnime.target_01.id ==
                                    group[0].characters[0].animeId
                                        ? targetAnime.target_01.title_english ??
                                          targetAnime.target_01.title
                                        : targetAnime.target_02.title_english ??
                                          targetAnime.target_02.title}
                                </Link>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                                {group.map((va) => (
                                    <div
                                        key={va.id}
                                        className="bg-white flex justify-between items-start shadow-sm"
                                    >
                                        {/* Voice Actors */}
                                        <Link
                                            href={`/characters/${va.id}`}
                                            className="flex gap-3 items-start hover:cursor-pointer group flex-grow"
                                        >
                                            <img
                                                src={va.image}
                                                alt={va.name}
                                                className="w-[58px] h-[90px] bg-slate-200"
                                            />
                                            <div className="py-2.5">
                                                <h4 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                    {va.name}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                    {va.language}
                                                </p>
                                            </div>
                                        </Link>

                                        {/* Characters */}
                                        <div className="space-y-4 flex-grow flex flex-col items-end">
                                            {va.characters.map((character) => (
                                                <Link
                                                    key={character.id}
                                                    href={`/staffs/${character.id}`}
                                                    className="flex flex-row-reverse gap-3 items-start text-right w-full hover:cursor-pointer group"
                                                >
                                                    <img
                                                        src={character.image}
                                                        alt={character.name}
                                                        className="w-[58px] h-[90px] bg-slate-200"
                                                    />
                                                    <div className="py-2.5">
                                                        <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                            {character.name}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                                            {character.language}
                                                        </p>
                                                        <p className="text-slate-400 text-xs font-medium">
                                                            {
                                                                character.favorites
                                                            }{" "}
                                                            Favorites
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </section>
            )}
        </main>
    );
};

export default page;
