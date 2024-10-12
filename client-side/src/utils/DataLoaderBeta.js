const loadServerData = async (
    path = "/anime/filter",
    paramsPayload = {},
    options = {}
) => {
    const searchParams = new URLSearchParams(paramsPayload);

    const response = await (
        await fetch(
            `${
                process.env.NEXT_PUBLIC_SERVER_URL
            }${path}?${searchParams.toString()}`,
            options
        )
    ).json();

    return response;
};

export { loadServerData };
