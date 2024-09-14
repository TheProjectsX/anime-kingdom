const page = async ({ params }) => {
    const { animeId } = params;

    const serverResponse = await (
        await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}/videos`
        )
    ).json();

    if (!serverResponse.success) {
        console.log("Not Found");
    }

    // const animeVideoData = serverResponse.get("data", {});
    const animeVideoData = {
        promo: [
            {
                title: "PV 2",
                url: "https://www.youtube.com/watch?v=uytJ6_KTCZI",
                embed_url:
                    "https://www.youtube.com/embed/uytJ6_KTCZI?enablejsapi=1&wmode=opaque&autoplay=1",
                images: {
                    image: "https://img.youtube.com/vi/uytJ6_KTCZI/default.jpg",
                    small: "https://img.youtube.com/vi/uytJ6_KTCZI/sddefault.jpg",
                    medium: "https://img.youtube.com/vi/uytJ6_KTCZI/mqdefault.jpg",
                    large: "https://img.youtube.com/vi/uytJ6_KTCZI/hqdefault.jpg",
                    maximum:
                        "https://img.youtube.com/vi/uytJ6_KTCZI/maxresdefault.jpg",
                },
            },
            {
                title: "PV 1",
                url: "https://www.youtube.com/watch?v=4hNkfpYhFZc",
                embed_url:
                    "https://www.youtube.com/embed/4hNkfpYhFZc?enablejsapi=1&wmode=opaque&autoplay=1",
                images: {
                    image: "https://img.youtube.com/vi/4hNkfpYhFZc/default.jpg",
                    small: "https://img.youtube.com/vi/4hNkfpYhFZc/sddefault.jpg",
                    medium: "https://img.youtube.com/vi/4hNkfpYhFZc/mqdefault.jpg",
                    large: "https://img.youtube.com/vi/4hNkfpYhFZc/hqdefault.jpg",
                    maximum:
                        "https://img.youtube.com/vi/4hNkfpYhFZc/maxresdefault.jpg",
                },
            },
            {
                title: "Announcement",
                url: "https://www.youtube.com/watch?v=xPJaoemjeTY",
                embed_url:
                    "https://www.youtube.com/embed/xPJaoemjeTY?enablejsapi=1&wmode=opaque&autoplay=1",
                images: {
                    image: "https://img.youtube.com/vi/xPJaoemjeTY/default.jpg",
                    small: "https://img.youtube.com/vi/xPJaoemjeTY/sddefault.jpg",
                    medium: "https://img.youtube.com/vi/xPJaoemjeTY/mqdefault.jpg",
                    large: "https://img.youtube.com/vi/xPJaoemjeTY/hqdefault.jpg",
                    maximum:
                        "https://img.youtube.com/vi/xPJaoemjeTY/maxresdefault.jpg",
                },
            },
        ],
        episodes: [
            {
                title: "Losing the Battle before It Is Ever Fought",
                episode: "Episode 3",
                images: {
                    image: "https://img1.ak.crunchyroll.com/i/spire1-tmb/fd69813de8561ef8fa51ea2899f6bcf61722095763_large.jpg",
                },
            },
            {
                title: "The Promised Failure for You",
                episode: "Episode 2",
                images: {
                    image: "https://img1.ak.crunchyroll.com/i/spire4-tmb/76225a8b58ae4fe72fdb052b83c59fa11721489974_large.jpg",
                },
            },
            {
                title: "Professional Childhood Friend Yanami Anna's Style of Losing",
                episode: "Episode 1",
                images: {
                    image: "https://img1.ak.crunchyroll.com/i/spire4-tmb/ab0f8a610587215a5cd9ea6249980f9c1720884504_large.jpg",
                },
            },
        ],
        music_video: [],
    };

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
