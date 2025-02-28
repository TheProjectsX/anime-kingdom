const loadServerData = async (
    path = "/anime/filter",
    paramsPayload = {},
    options = {}
) => {
    const searchParams = new URLSearchParams(paramsPayload);
    const url = `${
        process.env.NEXT_PUBLIC_SERVER_URL
    }${path}?${searchParams.toString()}`;

    let response;
    try {
        response = await (
            await fetch(url, {
                ...options,
                cache: options.cache ?? "force-cache",
            })
        ).json();
    } catch (error) {
        response = {
            success: false,
            data: [],
        };
    }

    return response;
};

export { loadServerData };
