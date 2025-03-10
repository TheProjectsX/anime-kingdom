"use client";

import MangaDataContext from "@/context/MangaDataContext";
import { capitalizeWord } from "@/utils/HelperFunctions";
import Link from "next/link";
import { useContext } from "react";

const page = () => {
    const context = useContext(MangaDataContext);
    const { mangaBaseData } = context;

    const HeaderCard = ({ header, rating, infoTitle }) => {
        if (!rating) return <></>;

        return (
            <div className="bg-white p-4 w-[130px] sm:w-[150px] rounded-lg text-center">
                <h5 className="text-xl sm:text-2xl font-semibold mb-2 font-suse">
                    {header}
                </h5>
                <p
                    className="text-lg sm:text-xl font-medium text-gray-500"
                    title={
                        infoTitle &&
                        `Scored By: ${mangaBaseData.scored_by} members`
                    }
                >
                    #{rating.toString().padStart(2, "0")}
                </p>
            </div>
        );
    };

    return (
        <div className="space-y-8">
            <section className="sm:hidden">
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Description
                </p>
                <p className="text-gray-600 flex-grow bg-white p-2 rounded-lg">
                    {mangaBaseData.synopsis}
                </p>
            </section>

            <section>
                <p className="font-semibold text-xl text-gray-600 mb-3">
                    Background
                </p>
                <p className="text-gray-600 flex-grow bg-white p-2 rounded-lg">
                    {mangaBaseData.background ?? (
                        <span className="italic font-semibold text-gray-600">
                            No Info Available
                        </span>
                    )}
                </p>
            </section>

            <section>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Relations
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {mangaBaseData.related?.map((item, idx) =>
                        item.entry?.map((ent) => (
                            <Link
                                key={ent.id}
                                href={`/${ent.type.replace(" ", "-")}/${
                                    ent.id
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
                    Manga Rating Info
                </p>
                <div className="flex justify-evenly flex-wrap gap-4">
                    <HeaderCard
                        header={"Score"}
                        rating={mangaBaseData.score}
                        infoTitle={`Scored By: ${mangaBaseData.scored_by} members`}
                    />
                    <HeaderCard
                        header={"Rank"}
                        rating={mangaBaseData.mal_rank}
                    />
                    <HeaderCard
                        header={"Popularity"}
                        rating={mangaBaseData.popularity}
                    />
                    <HeaderCard
                        header={"Favorites"}
                        rating={mangaBaseData.favorites}
                    />
                </div>
            </section>

            <section>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Manga Statistics
                </p>
                <div className="p-5 rounded-lg bg-white">
                    <div className="flex gap-2 flex-wrap items-center text-center *:flex-grow">
                        {mangaBaseData.statistics.reading != null && (
                            <div>
                                <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                    Reading
                                </h4>
                                <p className="text-lg font-semibold">
                                    {mangaBaseData.statistics.reading}
                                </p>
                            </div>
                        )}
                        {mangaBaseData.statistics.completed != null && (
                            <div>
                                <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                    Completed
                                </h4>
                                <p className="text-lg font-semibold">
                                    {mangaBaseData.statistics.completed}
                                </p>
                            </div>
                        )}
                        {mangaBaseData.statistics.on_hold != null && (
                            <div>
                                <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                    On Hold
                                </h4>
                                <p className="text-lg font-semibold">
                                    {mangaBaseData.statistics.on_hold}
                                </p>
                            </div>
                        )}
                        {mangaBaseData.statistics.dropped != null && (
                            <div>
                                <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                    Dropped
                                </h4>
                                <p className="text-lg font-semibold">
                                    {mangaBaseData.statistics.dropped}
                                </p>
                            </div>
                        )}
                        {mangaBaseData.statistics.plan_to_read != null && (
                            <div>
                                <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                    Plan to Read
                                </h4>
                                <p className="text-lg font-semibold">
                                    {mangaBaseData.statistics.plan_to_read}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
