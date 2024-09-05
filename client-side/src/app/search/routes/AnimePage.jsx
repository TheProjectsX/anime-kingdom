"use client";

import ItemCardSimple from "@/components/ItemCardSimple";
import { useEffect, useState } from "react";

const AnimePage = ({ slug }) => {
    const limit = 20;
    const [animeData, setAnimeData] = useState(Array(limit).fill(null));

    useEffect(() => {
        fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/filter?limit=${limit}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    if (animeData[0] === null) {
                        setAnimeData(data.data ?? []);
                    }
                }
            });
    }, []);

    return (
        <section className="my-10">
            <div className="lg:pl-3 flex lg:grid lg:grid-cols-5 gap-4 justify-center flex-wrap">
                {animeData.map((item, idx) => (
                    <ItemCardSimple item={item} key={idx} />
                ))}
            </div>
        </section>
    );
};

export default AnimePage;
