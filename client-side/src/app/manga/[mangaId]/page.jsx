"use client";

import MangaDataContext from "@/context/MangaDataContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

const page = ({ params }) => {
    const context = useContext(MangaDataContext);
    const { mangaBaseData } = context;

    const { mangaId } = params;
    return redirect(
        `/manga/${mangaId}/${
            mangaBaseData.title_english
                ?.replace(/[^a-zA-Z0-9\s]/g, "")
                .replace(/\s+/g, "-") ??
            mangaBaseData.title
                ?.replace(/[^a-zA-Z0-9\s]/g, "")
                .replace(/\s+/g, "-")
        }`
    );
};

export default page;
