const loadAnimeData = async (tread, paramsPayload, extraPath = "") => {
    const treadPaths = {
        "filter-anime": "/anime/filter",
        "top-anime": "/top/anime",
        "seasonal-anime": "/seasons",
    };
    const path = `${treadPaths[tread]}${
        extraPath !== "" ? `/${extraPath}` : ""
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
