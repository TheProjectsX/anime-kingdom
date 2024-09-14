"use client";

import AnimeDataContext from "@/context/AnimeDataContext";
import { useContext } from "react";

const page = ({ params }) => {
    const context = useContext(AnimeDataContext);
    const { animeBaseData } = context;

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
            <header>
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
            </header>

            <div>
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
            </div>

            <div>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Trailer
                </p>
                <p align="center">
                    {/* <iframe
                            width="560"
                            height="315"
                            src={
                                animeBaseData.trailer?.embed
                            }
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe> */}
                </p>
            </div>
        </div>
    );
};

export default page;
