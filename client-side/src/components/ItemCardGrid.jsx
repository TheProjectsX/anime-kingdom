const ItemCardGrid = ({ item, rank }) => {
    const animeType = {
        tv: "TV Show",
        movie: "Movie",
        ova: "OVA",
        ona: "ONA",
    };

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <article className="flex">
            <div>
                <img src={item.image} alt={item.title_english} />
                <div>
                    <Link>{item.title_english}</Link>
                    <p>
                        {item.studios.map((item) => (
                            <Link
                                href={"#"}
                                className="text-amber-700 dark:text-amber-500 inline-block hover:underline underline-offset-2"
                                key={item.id}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </p>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <div>
                            <p>{item.status}</p>
                            <p>
                                {capitalizeWord(item.season)} {item.year}
                            </p>
                            <p>
                                {animeType[item.type?.toLowerCase()] ??
                                    item.type}{" "}
                                {item.episodes &&
                                    ` - ${item.episodes} Episodes`}
                            </p>
                        </div>
                        <p>{item.score ?? ""}</p>
                    </div>
                    <p>{item.synopsis}</p>
                </div>
                <p className="flex gap-2 flex-wrap">
                    {item.genres.map((item) => (
                        <Link
                            href={"#"}
                            key={item.id}
                            className="badge badge-info text-gray-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                </p>
            </div>
        </article>
    );
};

export default ItemCardGrid;
