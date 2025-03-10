"use client";

import AnimeDataContext from "@/context/AnimeDataContext";
import { nameToUrl } from "@/utils/HelperFunctions";
import { redirect } from "next/navigation";
import { useContext } from "react";

const page = async ({ params }) => {
    const context = useContext(AnimeDataContext);
    const { animeBaseData } = context;

    const { animeId } = await params;
    return redirect(
        `/anime/${animeId}/${nameToUrl(
            animeBaseData.title_english ?? animeBaseData.title
        )}`
    );
};

export default page;
