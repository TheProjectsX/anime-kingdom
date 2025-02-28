"use client";

import StudioDataContext from "@/context/StudioDataContext";
import { nameToUrl } from "@/utils/HelperFunctions";
import { redirect } from "next/navigation";
import { useContext } from "react";

const page = ({ params }) => {
    const context = useContext(StudioDataContext);
    const { studioBaseData } = context;

    const { studioId } = params;
    return redirect(`/studio/${studioId}/${nameToUrl(studioBaseData.title)}`);
};

export default page;
