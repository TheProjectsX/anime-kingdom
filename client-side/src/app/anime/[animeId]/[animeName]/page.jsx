"use client";

import AnimeDataContext from "@/context/AnimeDataContext";
import Link from "next/link";
import { useContext } from "react";

const page = ({ params }) => {
    const context = useContext(AnimeDataContext);
    const { animeBaseData } = context;

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const HeaderCard = ({ header, info, infoTitle }) => {
        return (
            <div className="bg-white p-4 w-[150px] rounded-lg text-center">
                <h5 className="text-2xl font-semibold mb-2 font-suse">
                    {header}
                </h5>
                <p
                    className="text-xl font-medium text-gray-500"
                    title={
                        infoTitle &&
                        `Scored By: ${animeBaseData.scored_by} members`
                    }
                >
                    {info}
                </p>
            </div>
        );
    };
    return (
        <div className="space-y-8">
            <section>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Relations
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {animeBaseData.related?.map((item, idx) =>
                        item.entry?.map((ent) => (
                            <Link
                                key={ent.mal_id}
                                href={`/${ent.type.replace(" ", "-")}/${
                                    ent.mal_id
                                }`}
                                className="bg-white p-4 rounded-lg shadow-md group"
                            >
                                <p className="text-sm font-semibold text-[dodgerBlue] mb-3 group-hover:text-gray-500">
                                    {item.relation}
                                </p>
                                <h4 className="font-suse font-semibold text-gray-500 mb-2 group-hover:text-[dodgerBlue]">
                                    {ent.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {capitalizeWord(ent.type)}
                                </p>
                            </Link>
                        ))
                    )}
                </div>
            </section>

            <section>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Anime Rating Info
                </p>
                <div className="flex justify-evenly flex-wrap gap-4">
                    {" "}
                    <HeaderCard
                        header={"Score"}
                        info={`#${animeBaseData.score}`}
                        infoTitle={`Scored By: ${animeBaseData.scored_by} members`}
                    />
                    <HeaderCard
                        header={"Rank"}
                        info={`#${animeBaseData.mal_rank}`}
                    />
                    <HeaderCard
                        header={"Popularity"}
                        info={`#${animeBaseData.popularity}`}
                    />
                    <HeaderCard
                        header={"Favorites"}
                        info={`#${animeBaseData.favorites}`}
                    />
                    {/* <HeaderCard
                        header={"Members"}
                        info={`#${animeBaseData.members}`}
                    /> */}
                </div>
            </section>

            <section>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Anime Rating Info
                </p>
                <div className="p-5 rounded-lg bg-white">
                    <div className="flex gap-2 items-center text-center *:flex-grow">
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Watching
                            </h4>
                            <p className="text-lg font-semibold">
                                {animeBaseData.statistics.watching}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Completed
                            </h4>
                            <p className="text-lg font-semibold">
                                {animeBaseData.statistics.completed}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                On Hold
                            </h4>
                            <p className="text-lg font-semibold">
                                {animeBaseData.statistics.on_hold}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Dropped
                            </h4>
                            <p className="text-lg font-semibold">
                                {animeBaseData.statistics.dropped}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Watch list
                            </h4>
                            <p className="text-lg font-semibold">
                                {animeBaseData.statistics.plan_to_watch}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Trailer
                </p>
                <p align="center">
                    <iframe
                        width="560"
                        height="315"
                        src={animeBaseData.trailer?.embed}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </p>
            </section>
        </div>
    );
};

export default page;
