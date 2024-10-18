"use client";

import { loadServerData } from "@/utils/DataLoader";
import { capitalizeWord } from "@/utils/HelperFunctions";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";
import { Helmet } from "react-helmet";
import ReactSelect from "react-select";

const page = ({ params }) => {
    const router = useRouter();
    const [images, setImages] = useState(Array(6).fill(null));
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState([
        {
            type: "sfw",
            categories: [
                "waifu",
                "neko",
                "shinobu",
                "megumin",
                "bully",
                "cuddle",
                "cry",
                "hug",
                "awoo",
                "kiss",
                "lick",
                "pat",
                "smug",
                "bonk",
                "yeet",
                "blush",
                "smile",
                "wave",
                "highfive",
                "handhold",
                "nom",
                "bite",
                "glomp",
                "slap",
                "kill",
                "kick",
                "happy",
                "wink",
                "poke",
                "dance",
                "cringe",
            ],
        },
        { type: "nsfw", categories: ["waifu", "neko", "trap", "blowjob"] },
    ]);

    if (
        !["sfw", "nsfw"].includes(params.type?.toLowerCase()) ||
        ![...filters[0].categories, ...filters[1].categories].includes(
            params.category?.toLowerCase()
        )
    ) {
        notFound();
    }

    function divideArrayIntoFour(arr) {
        const result = [[], [], [], []]; // Create 4 empty sub-arrays
        arr.forEach((item, index) => {
            result[index % 4].push(item); // Distribute items into the 4 sub-arrays
        });
        return result;
    }

    function addToExistingSubArrays(arr, newItems) {
        const copyArr = [...arr];
        copyArr.forEach((subArray, subIndex) => {
            newItems.forEach((item, index) => {
                if (index % 4 === subIndex) {
                    subArray.push(item);
                }
            });
        });

        return copyArr;
    }

    const handleLoadMore = async () => {
        setLoading(true);
        const response = await loadServerData(
            `/tools/waifu/${params.type}/${params.category}`,
            {
                limit: 24,
            }
        );

        if (!response.success) {
            console.log(response);
            // Do something
        }

        setImages(addToExistingSubArrays(images, response.data) ?? []);
        setLoading(false);
    };

    useState(() => {
        const loadData = async () => {
            const response = await loadServerData(
                `/tools/waifu/${params.type}/${params.category}`,
                {
                    limit: 24,
                }
            );

            if (!response.success) {
                console.log(response);
                // Do something
            }

            setImages(divideArrayIntoFour(response.data) ?? []);
            setLoading(false);

            loadServerData(`/tools/waifu/categories`).then((response) => {
                if (response.success) {
                    setFilters(response.data);
                }
            });
        };
        loadData();
    }, []);

    return (
        <>
            <Helmet>
                <title>
                    ({capitalizeWord(params.type)}){" "}
                    {capitalizeWord(params.category)} Images - AniDom
                </title>
            </Helmet>
            <main className="max-width space-y-8 mb-10 pt-10">
                <section className="flex gap-3 justify-between items-end flex-wrap">
                    <h2 className="text-2xl font-suse font-semibold">
                        Waifu Images!
                    </h2>
                    <div className="flex gap-5 flex-wrap">
                        {filters.map((filter) => (
                            <div key={filter.type}>
                                <label className="flex flex-col gap-1 w-36 sm:w-48">
                                    <span className="text-sm font-semibold text-gray-600 ml-2">
                                        {filter.type.toUpperCase()}:
                                    </span>
                                    <ReactSelect
                                        isMulti={false}
                                        name={filter.type}
                                        defaultValue={
                                            params.type === filter.type
                                                ? {
                                                      label: capitalizeWord(
                                                          params.category
                                                      ),
                                                      value: params.category,
                                                  }
                                                : null
                                        }
                                        options={(filter?.categories ?? []).map(
                                            (item) => ({
                                                label: capitalizeWord(item),
                                                value: item,
                                            })
                                        )}
                                        className="basic-multi-select w-full"
                                        classNamePrefix="select"
                                        placeholder="Category..."
                                        onChange={(item) =>
                                            router.push(
                                                `/tools/waifu/${filter.type}/${item.value}`
                                            )
                                        }
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                </section>

                {images.every((item) => item === null) && (
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
                        {images.map((item, idx) => (
                            <div
                                className="skeleton rounded-none w-full h-80"
                                key={idx}
                            ></div>
                        ))}
                    </section>
                )}

                {images.every((item) => item !== null) && (
                    <>
                        <section className="grid items-start grid-cols-2 md:grid-cols-4 min-h-96">
                            {images.map((group, idx) => (
                                <div
                                    className="grid border-r border-black last:border-r-0"
                                    key={idx}
                                >
                                    {group.map((image, idx) => (
                                        <a
                                            href={image}
                                            target="_blank"
                                            key={idx}
                                        >
                                            <img
                                                className="h-auto max-w-full border-b border-black last:border-b-0"
                                                src={image}
                                                alt="Waifu Image"
                                            />
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </section>
                        <div className="flex justify-center">
                            {loading ? (
                                <div className="loading loading-lg"></div>
                            ) : (
                                <button
                                    className="btn btn-primary"
                                    onClick={handleLoadMore}
                                >
                                    Load More
                                </button>
                            )}
                        </div>
                    </>
                )}
            </main>
        </>
    );
};

export default page;
