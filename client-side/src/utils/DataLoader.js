const loadAnimeData = async (trade, paramsPayload, extraPath = "") => {
    console.log("🚀 ~ loadAnimeData ~ extraPath:", extraPath);
    console.log("🚀 ~ loadAnimeData ~ paramsPayload:", paramsPayload);
    console.log("🚀 ~ loadAnimeData ~ tread:", trade);
    const tradePaths = {
        "filter-anime": "/anime/filter",
        "top-anime": "/top/anime",
        "seasonal-anime": "/seasons",
    };
    const path = `${tradePaths[trade] ?? "/anime/filter"}${
        typeof extraPath === "string" && extraPath !== "" ? `/${extraPath}` : ""
    }`;

    const searchParams = new URLSearchParams(paramsPayload);

    const response = await (
        await fetch(
            `${
                process.env.NEXT_PUBLIC_SERVER_URL
            }/${path}?${searchParams.toString()}`
        )
    ).json();

    return response;
};

export { loadAnimeData };
