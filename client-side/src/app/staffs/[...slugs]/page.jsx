import { Tooltip } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { Pictures } from "./Pictures";
import { notFound, redirect } from "next/navigation";
import { formatDate, nameToUrl } from "@/utils/HelperFunctions";
import PageTitle from "@/components/common/PageTitle";
import { loadServerData } from "@/utils/DataLoader";

const page = async ({ params }) => {
    const { slugs } = params;

    let path = slugs.at(2);
    if (![undefined, "voices", "pictures"].includes(path?.toLowerCase())) {
        path = "/";
    } else if (path === undefined) {
        path = "/";
    }

    const serverResponse = await loadServerData(`/staffs/${slugs[0]}`);

    if (!serverResponse.success) {
        // console.log("404 not found");
        return notFound();
        // Do something
    }

    const animeStaffData = serverResponse.data ?? {};

    if (slugs.length === 1) {
        redirect(
            `/staffs/${animeStaffData.id}/${nameToUrl(animeStaffData.name)}`
        );
    }

    const baseUrl = `/staffs/${animeStaffData.id}/${nameToUrl(
        animeStaffData.name
    )}`;

    return (
        <>
            <PageTitle>{animeStaffData.name} - AniDom</PageTitle>
            <main className="max-width mb-10">
                <header className="flex gap-4 pt-5 pb-3">
                    <div className="flex-shrink-0 w-52">
                        <img
                            src={animeStaffData.image}
                            alt={animeStaffData.name}
                            className="w-full h-[295px]"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <article className="flex-grow mb-2.5 w-full">
                            <header className="mb-4 flex justify-between items-center">
                                <div className="">
                                    <h1 className="text-3xl font-bold font-suse text-gray-600">
                                        {animeStaffData.name}
                                    </h1>
                                    {animeStaffData.nicknames.length > 0 && (
                                        <p className="text-sm font-medium text-gray-500">
                                            {animeStaffData.nicknames.join(
                                                ", "
                                            )}
                                        </p>
                                    )}
                                </div>
                                <p>
                                    Favorites:{" "}
                                    <span className="font-semibold text-gray-600">
                                        {animeStaffData.favorites}
                                    </span>
                                </p>
                            </header>
                            <p className="text-gray-600 text-sm flex-grow whitespace-pre-wrap">
                                Birth: {formatDate(animeStaffData.birthday)}
                            </p>
                            <p className="text-gray-600 text-sm flex-grow whitespace-pre-wrap">
                                {animeStaffData.about ??
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
                            {animeStaffData.anime.length === 0 ? (
                                <div className="text-xl font-semibold text-gray-400">
                                    No Items to Show
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-4 px-3">
                                    {animeStaffData.anime.map((item, idx) => (
                                        <Tooltip
                                            content={
                                                <p>
                                                    Position:{" "}
                                                    {item.position ?? "Unknown"}
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
                                                    alt={item.title}
                                                    className="w-full mb-2 rounded-md shadow-lg"
                                                />
                                                <h3 className="font-semibold text-gray-500 group-hover:text-green-400">
                                                    {item.title}
                                                </h3>
                                            </Link>
                                        </Tooltip>
                                    ))}
                                </div>
                            )}
                        </section>
                        <section>
                            <h4 className="font-semibold text-xl text-gray-600 mb-3">
                                Manga:
                            </h4>
                            {animeStaffData.manga.length === 0 ? (
                                <div className="text-xl font-semibold text-gray-400">
                                    No Items to Show
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-4 px-3">
                                    {animeStaffData.manga.map((item, idx) => (
                                        <Tooltip
                                            content={
                                                <p>
                                                    Position:{" "}
                                                    {item.position ?? "Unknown"}
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
                                                    alt={item.title}
                                                    className="w-full mb-2 rounded-md shadow-lg"
                                                />
                                                <h3 className="font-semibold text-gray-500 group-hover:text-green-400">
                                                    {item.title}
                                                </h3>
                                            </Link>
                                        </Tooltip>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                )}

                {path === "voices" &&
                    (animeStaffData.voices.length === 0 ? (
                        <div className="text-xl font-semibold text-gray-400">
                            No Items to Show
                        </div>
                    ) : (
                        <section className="w-full bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-2xl text-gray-600 mb-3">
                                Voiced Characters:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                                {animeStaffData.voices.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/characters/${item.id}`}
                                        className="hover:cursor-pointer group"
                                    >
                                        <div className="relative mb-2 w-full rounded-md overflow-hidden">
                                            <img
                                                src={item.anime_image}
                                                alt={item.name}
                                                className="w-full bg-slate-600"
                                            />
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-16 absolute top-0 right-0 shadow-lg"
                                            />
                                        </div>
                                        <div className="px-2">
                                            <h3 className="font-semibold font-suse text-gray-700 mb-1.5 underline-offset-4 group-hover:underline group-hover:text-blue-600">
                                                {item.name}{" "}
                                                <span className="text-sm pl-1.5 font-normal">
                                                    ({item.role})
                                                </span>
                                            </h3>
                                            <p className="text-gray-600 text-xs mb-0.5 font-medium">
                                                {item.title}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}

                {path === "pictures" && (
                    <section className="w-full bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-2xl text-gray-600 mb-4">
                            Pictures:
                        </h4>
                        <Pictures
                            staffId={animeStaffData.id}
                            staffName={animeStaffData.name}
                        />
                    </section>
                )}
            </main>
        </>
    );
};

export default page;
