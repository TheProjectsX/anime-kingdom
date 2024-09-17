let animeVideoData = null;

const page = async ({ params }) => {
    const { animeId } = params;

    if (!animeVideoData) {
        const serverResponse = await (
            await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}/videos`
            )
        ).json();

        if (!serverResponse.success) {
            console.log("Not Found");
            // Do something
        }

        animeVideoData = serverResponse.data ?? {};
    }

    return (
        <div className="space-y-8">
            <div>
                <h4 className="text-3xl font-semibold font-suse text-gray-600 mb-3">
                    Trailers:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {animeVideoData.promo?.length === 0 ? (
                        <h5 className="font-semibold italic text-xl text-gray-600">
                            No Items to Show
                        </h5>
                    ) : (
                        animeVideoData.promo?.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative w-full pb-[56.25%] h-0"
                            >
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={item.embed_url}
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div>
                <h4 className="text-3xl font-semibold font-suse text-gray-600 mb-3">
                    Music Videos:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {animeVideoData.music_video?.length === 0 ? (
                        <h5 className="font-semibold italic text-xl text-gray-600">
                            No Items to Show
                        </h5>
                    ) : (
                        animeVideoData.music_video?.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative w-full pb-[56.25%] h-0"
                            >
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={item.embed_url}
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div>
                <h4 className="text-3xl font-semibold font-suse text-gray-600 mb-3">
                    Episodes:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {animeVideoData.episodes?.length === 0 ? (
                        <h5 className="font-semibold italic text-xl text-gray-600">
                            No Items to Show
                        </h5>
                    ) : (
                        animeVideoData.episodes?.map((item, idx) => (
                            <div key={idx} className="w-full relative">
                                <img
                                    src={item.images.image}
                                    alt="Image"
                                    className="w-full"
                                />
                                <div className="absolute w-full bottom-0 bg-black/30 text-white p-3 text-sm">
                                    <p className="font-semibold">
                                        {item.episode}
                                    </p>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;
