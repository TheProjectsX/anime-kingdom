"use client";

import { useEffect, useState } from "react";

let animeStaffsPrimaryData = Array(5).fill(null);

const page = ({ params }) => {
    const [animeStaffsData, setAnimeStaffsData] = useState(
        animeStaffsPrimaryData
    );
    const { animeId } = params;

    useEffect(() => {
        const loadData = async () => {
            const serverResponse = await (
                await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}/staffs`
                )
            ).json();

            if (!serverResponse.success) {
                console.log("Not Found");
                // Do Something
            }

            animeStaffsPrimaryData = serverResponse.data ?? [];
            setAnimeStaffsData(serverResponse.data ?? []);
        };

        // Load data only if the data is not already loaded
        if (animeStaffsPrimaryData.every((item) => !item)) {
            loadData();
        }
    }, []);

    // If every animeStaffsData is null, return skeleton
    if (animeStaffsData.every((item) => !item)) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {animeStaffsData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white flex gap-3 items-start shadow-sm"
                    >
                        <div className="w-[58px] h-[90px] skeleton rounded-none"></div>
                        <div className="py-2.5">
                            <p className="h-5 w-24 mb-1.5 skeleton rounded-none"></p>
                            <p className="h-4 w-20 skeleton rounded-none"></p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {animeStaffsData.map((item) => (
                <div
                    key={item.id}
                    className="bg-white flex gap-3 items-start hover:cursor-pointer group shadow-sm"
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
                            {item.positions.join(", ")}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default page;
