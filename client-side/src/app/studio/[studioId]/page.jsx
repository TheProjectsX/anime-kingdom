"use client";

import StudioDataContext from "@/context/StudioDataContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

const page = ({ params }) => {
    const context = useContext(StudioDataContext);
    const { studioBaseData } = context;

    const { studioId } = params;
    return redirect(
        `/studio/${studioId}/${studioBaseData.title
            ?.replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s+/g, "-")}`
    );
};

export default page;
