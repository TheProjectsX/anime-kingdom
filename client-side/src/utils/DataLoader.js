const loadServerData = async (
    path = "/anime/filter",
    paramsPayload = {},
    options = {}
) => {
    const searchParams = new URLSearchParams(paramsPayload);

    let response;
    try {
        response = await (
            await fetch(
                `${
                    process.env.NEXT_PUBLIC_SERVER_URL
                }${path}?${searchParams.toString()}`,
                options
            )
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
