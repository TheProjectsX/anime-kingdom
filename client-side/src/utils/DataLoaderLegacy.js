const loadAnimeData = async (trade, paramsPayload, extraPath = "") => {
    const tradePaths = {
        "filter-anime": "/anime/filter",
        "top-anime": "/top/anime",
        "seasonal-anime": "/seasons",
        "filter-manga": "/manga/filter",
    };
    const path = `${tradePaths[trade] ?? "/anime/filter"}${
        typeof extraPath === "string" && extraPath !== "" ? `/${extraPath}` : ""
    }`;

    const searchParams = new URLSearchParams(paramsPayload);

    const response = await (
        await fetch(
            `${
                process.env.NEXT_PUBLIC_SERVER_URL
            }${path}?${searchParams.toString()}`
        )
    ).json();

    return response;
};

export { loadAnimeData };
