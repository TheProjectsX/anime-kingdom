"use client";

import AnimeDataContext from "@/context/AnimeDataContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

const page = ({ params }) => {
    const context = useContext(AnimeDataContext);
    const { animeBaseData } = context;

    const { animeId } = params;
    return redirect(
        `/anime/${animeId}/${
            animeBaseData.title_english
                ?.replace(/[^a-zA-Z\s]/g, "")
                .replace(/\s+/g, "-") ??
            animeBaseData.title
                ?.replace(/[^a-zA-Z\s]/g, "")
                .replace(/\s+/g, "-")
        }`
    );
};

export default page;
