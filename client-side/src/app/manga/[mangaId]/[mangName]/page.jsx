"use client";

import MangaDataContext from "@/context/MangaDataContext";
import { capitalizeWord } from "@/utils/HelperFunctions";
import Link from "next/link";
import { useContext } from "react";

const page = ({ params }) => {
    const context = useContext(MangaDataContext);
    const { mangaBaseData } = context;

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
                        `Scored By: ${mangaBaseData.scored_by} members`
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
                <p className="font-semibold text-xl text-gray-600 mb-3">
                    Background
                </p>
                <p className="text-gray-600">
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
                                key={idx}
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
                    {" "}
                    <HeaderCard
                        header={"Score"}
                        info={`#${mangaBaseData.score}`}
                        infoTitle={`Scored By: ${mangaBaseData.scored_by} members`}
                    />
                    <HeaderCard
                        header={"Rank"}
                        info={`#${mangaBaseData.mal_rank}`}
                    />
                    <HeaderCard
                        header={"Popularity"}
                        info={`#${mangaBaseData.popularity}`}
                    />
                    <HeaderCard
                        header={"Favorites"}
                        info={`#${mangaBaseData.favorites}`}
                    />
                </div>
            </section>

            <section>
                <p className="font-semibold text-xl text-gray-600 mb-4">
                    Manga Statistics
                </p>
                <div className="p-5 rounded-lg bg-white">
                    <div className="flex gap-2 items-center text-center *:flex-grow">
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Reading
                            </h4>
                            <p className="text-lg font-semibold">
                                {mangaBaseData.statistics.reading}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Completed
                            </h4>
                            <p className="text-lg font-semibold">
                                {mangaBaseData.statistics.completed}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                On Hold
                            </h4>
                            <p className="text-lg font-semibold">
                                {mangaBaseData.statistics.on_hold}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Dropped
                            </h4>
                            <p className="text-lg font-semibold">
                                {mangaBaseData.statistics.dropped}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-1 font-semibold text-gray-600">
                                Plan to Read
                            </h4>
                            <p className="text-lg font-semibold">
                                {mangaBaseData.statistics.plan_to_read}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
