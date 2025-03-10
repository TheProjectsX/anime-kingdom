"use client";

// Miku Loader!
import MikuDancingGif from "@/assets/miku-dancing.gif";

import { loadServerData } from "@/utils/DataLoader";
import Countdown from "react-countdown";
import { Carousel } from "flowbite-react";
import { nameToUrl, formatNumber } from "@/utils/HelperFunctions";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";

const AnimeScheduleCarousel = () => {
    const [animeScheduleData, setAnimeScheduleData] = useState(null);

    // Load anime schedule data
    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await loadServerData(
                "/anime/schedule/24h",
                {
                    timestamp: Date.now(),
                },
                {
                    method: "GET",
                    cache: "no-store",
                }
            );

            setAnimeScheduleData(serverResponse.data ?? []);
        };

        loadData();
    }, []);

    if (!animeScheduleData) {
        return (
            <div className="h-80 flex flex-col items-center justify-center text-center gap-3">
                <img
                    src={MikuDancingGif.src}
                    alt="Miku Dancing GIF"
                    className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                />
                <p className="mt-4 text-lg font-ubuntu font-medium bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent animate-bounce drop-shadow-md">
                    "Watch me dance while the Anime Magic loads..."
                </p>
            </div>
        );
    }

    return (
        <>
            {animeScheduleData?.length > 0 && (
                <Carousel
                    className="h-[25rem] sm:h-96"
                    indicators={false}
                    slideInterval={4000}
                    pauseOnHover
                >
                    {animeScheduleData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-700 text-white h-full"
                        >
                            <article className="max-w-2xl mx-auto flex justify-between items-center flex-col-reverse sm:flex-row h-full">
                                <div className="p-6 max-w-80 text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Countdown
                                            date={new Date(
                                                item.next?.timestamp * 1000
                                            ).toString()}
                                            renderer={({
                                                hours,
                                                minutes,
                                                seconds,
                                                completed,
                                            }) => {
                                                return (
                                                    <time className="text-lg">
                                                        <span className="underline underline-offset-2 mr-0.5">
                                                            {completed
                                                                ? "00"
                                                                : formatNumber(
                                                                      hours
                                                                  )}
                                                        </span>
                                                        h{" "}
                                                        <span className="underline underline-offset-2 mr-0.5">
                                                            {" "}
                                                            {completed
                                                                ? "00"
                                                                : formatNumber(
                                                                      minutes
                                                                  )}
                                                        </span>
                                                        m{" "}
                                                        <span className="underline underline-offset-2 mr-0.5">
                                                            {completed
                                                                ? "00"
                                                                : formatNumber(
                                                                      seconds
                                                                  )}
                                                        </span>
                                                        s
                                                    </time>
                                                );
                                            }}
                                        />
                                        <p>
                                            (EP{" "}
                                            <span className="font-semibold">
                                                {item.next?.episode}
                                            </span>
                                            )
                                        </p>
                                    </div>
                                    <h3 className="text-xl font-semibold font-suse mb-1 hidden sm:block">
                                        {item.title}
                                    </h3>
                                    <h3 className="text-base font-semibold font-suse mb-1 sm:hidden">
                                        {item.title.length > 28
                                            ? `${item.title.slice(0, 28)}...`
                                            : item.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 text-sm">
                                        {item.source} -{" "}
                                        {item.genres
                                            .slice(0, 3)
                                            .map((genre) => genre.name)
                                            .join(", ")}
                                    </p>
                                    <p className="mb-5 hidden sm:block">
                                        {item.synopsis.length > 125
                                            ? `${item.synopsis.slice(
                                                  0,
                                                  125
                                              )}...`
                                            : item.synopsis}
                                    </p>
                                    <Link
                                        href={`/anime/${
                                            item.id ?? item.mal_id
                                        }/${nameToUrl(
                                            item.title_english ?? item.title
                                        )}`}
                                        className="btn btn-info btn-sm"
                                    >
                                        Checkout <MdArrowOutward />
                                    </Link>
                                </div>
                                <div className="max-w-32 pt-2 sm:pt-0 sm:max-w-60">
                                    <img
                                        src={item.image_large ?? item.image}
                                        alt={item.title}
                                    />
                                </div>
                            </article>
                        </div>
                    ))}
                </Carousel>
            )}
        </>
    );
};

export default AnimeScheduleCarousel;
