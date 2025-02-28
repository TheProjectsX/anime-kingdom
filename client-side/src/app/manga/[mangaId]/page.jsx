"use client";

import MangaDataContext from "@/context/MangaDataContext";
import { nameToUrl } from "@/utils/HelperFunctions";
import { redirect } from "next/navigation";
import { use, useContext } from "react";

const page = ({ params }) => {
    const context = useContext(MangaDataContext);
    const { mangaBaseData } = context;

    const { mangaId } = use(params);
    return redirect(
        `/manga/${mangaId}/${nameToUrl(
            mangaBaseData.title_english ?? mangaBaseData.title
        )}`
    );
};

export default page;
