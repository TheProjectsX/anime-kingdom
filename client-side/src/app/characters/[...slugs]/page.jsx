import { Tooltip } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { Pictures } from "./Pictures";
import { redirect } from "next/navigation";
import { Helmet } from "react-helmet";

const page = async ({ params }) => {
    const { slugs } = params;

    let path = slugs.at(2);
    if (![undefined, "voices", "pictures"].includes(path?.toLowerCase())) {
        path = "/";
    } else if (path === undefined) {
        path = "/";
    }

    const serverResponse = await (
        await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/characters/${slugs[0]}`
        )
    ).json();

    if (!serverResponse.success) {
        console.log("404 not found");
        // Do something
    }

    const animeCharacterData = serverResponse.data ?? {};

    if (slugs.length === 1) {
        redirect(
            `/characters/${animeCharacterData.id}/${animeCharacterData.name
                ?.replace(/[^a-zA-Z0-9\s]/g, "")
                .replace(/\s+/g, "-")}`
        );
    }

    const baseUrl = `/characters/${
        animeCharacterData.id
    }/${animeCharacterData.name
        ?.replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "-")}`;
    return (
        <>
            <Helmet>
                <title>{animeCharacterData.name} - AniDom</title>
            </Helmet>
            <main className="max-width mb-10">
                <header className="flex gap-4 pt-5 pb-3">
                    <div className="flex-shrink-0 w-52">
                        <img
                            src={animeCharacterData.image}
                            alt={animeCharacterData.name}
                            className="w-full h-[295px]"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <article className="flex-grow mb-2.5 w-full">
                            <header className="mb-4 flex justify-between items-center">
                                <div className="">
                                    <h1 className="text-3xl font-bold font-suse text-gray-600">
                                        {animeCharacterData.name}
                                    </h1>
                                    {animeCharacterData.nicknames.length >
                                        0 && (
                                        <p className="text-sm font-medium text-gray-500">
                                            {animeCharacterData.nicknames.join(
                                                ", "
                                            )}
                                        </p>
                                    )}
                                </div>
                                <p>
                                    Favorites:{" "}
                                    <span className="font-semibold text-gray-600">
                                        {animeCharacterData.favorites}
                                    </span>
                                </p>
                            </header>
                            <p className="text-gray-600 text-sm flex-grow whitespace-pre-wrap">
                                {animeCharacterData.about ??
                                    "No biography available"}
                            </p>
                        </article>
                        <div className="px-4 w-full flex justify-evenly text-sm text-gray-500 bg-white">
                            <Link
                                href={baseUrl}
                                className="p-2 hover:text-[dodgerBlue]"
                            >
                                Overview
                            </Link>
                            <Link
                                href={`${baseUrl}/voices`}
                                className="p-2 hover:text-[dodgerBlue]"
                            >
                                Voices
                            </Link>
                            <Link
                                href={`${baseUrl}/pictures`}
                                className="p-2 hover:text-[dodgerBlue]"
                            >
                                Pictures
                            </Link>
                        </div>
                    </div>
                </header>
                {path === "/" && (
                    <div className="w-full bg-white p-4 rounded-lg space-y-6">
                        <section>
                            <h4 className="font-semibold text-2xl text-gray-600 mb-3">
                                Anime:
                            </h4>
                            <div className="flex flex-wrap gap-4 px-3">
                                {animeCharacterData.anime.map((item, idx) => (
                                    <Tooltip
                                        content={
                                            <p>
                                                Role: {item.role ?? "Unknown"}
                                            </p>
                                        }
                                        key={idx}
                                        placement="right"
                                    >
                                        <Link
                                            href={`/anime/${item.id}`}
                                            className="block max-w-48 group"
                                        >
                                            <img
                                                src={item.large_image}
                                                alt={
                                                    item.title_english ??
                                                    item.title
                                                }
                                                className="w-full mb-2 rounded-md shadow-lg"
                                            />
                                            <h3 className="font-semibold text-gray-500 group-hover:text-green-400">
                                                {item.title_english ??
                                                    item.title}
                                            </h3>
                                        </Link>
                                    </Tooltip>
                                ))}
                            </div>
                        </section>
                        <section>
                            <h4 className="font-semibold text-xl text-gray-600 mb-3">
                                Manga:
                            </h4>
                            <div className="flex flex-wrap gap-4 px-3">
                                {animeCharacterData.manga.map((item, idx) => (
                                    <Tooltip
                                        content={
                                            <p>
                                                Role: {item.role ?? "Unknown"}
                                            </p>
                                        }
                                        key={idx}
                                        placement="right"
                                    >
                                        <Link
                                            href={`/anime/${item.id}`}
                                            className="block max-w-48 group"
                                        >
                                            <img
                                                src={item.large_image}
                                                alt={
                                                    item.title_english ??
                                                    item.title
                                                }
                                                className="w-full mb-2 rounded-md shadow-lg"
                                            />
                                            <h3 className="font-semibold text-gray-500 group-hover:text-green-400">
                                                {item.title_english ??
                                                    item.title}
                                            </h3>
                                        </Link>
                                    </Tooltip>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {path === "voices" && (
                    <section className="w-full bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-2xl text-gray-600 mb-3">
                            Voice Actors:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {animeCharacterData.voices.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 flex gap-3 items-start hover:cursor-pointer group shadow-sm"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[58px] h-[90px] bg-slate-600"
                                    />
                                    <div className="py-2.5">
                                        <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-0.5 font-medium">
                                            {item.language}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {path === "pictures" && (
                    <section className="w-full bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-2xl text-gray-600 mb-4">
                            Pictures:
                        </h4>
                        <Pictures
                            characterId={animeCharacterData.id}
                            characterName={animeCharacterData.name}
                        />
                    </section>
                )}
            </main>
        </>
    );
};

export default page;
