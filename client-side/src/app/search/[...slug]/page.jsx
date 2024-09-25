import { notFound } from "next/navigation";
import AnimePage from "../routes/AnimePage";
import MangaPage from "../routes/MangaPage";
import MangaPageBeta from "../routes/MangaPageBeta";

const page = async ({ params }) => {
    const { slug } = params;
    let filters;

    const routes = [
        "anime",
        "anime/trending",
        "anime/seasons",
        "anime/seasons",
        "anime/tv-series",
        "anime/tv-series/popular",
        "anime/movies",
        "anime/movies/popular",
        "anime/top",
        "anime/seasons",
        "manga",
        "manga/trending",
        "manga/trending/manhwa",
        "manga/trending/light-novel",
        "manga/top",
    ];

    const path = slug.join("/");

    if (!routes.includes(path) && !path.startsWith("anime/seasons")) {
        return notFound();
    }
    if (path.startsWith("anime")) {
        const response = await (
            await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/anime/filters`)
        ).json();

        filters = response.data ?? [];
    } else if (path.startsWith("manga")) {
        const response = await (
            await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/manga/filters`)
        ).json();

        filters = response.data ?? [];
    }

    return (
        <main className="max-width space-y-8 mb-10">
            {path.startsWith("anime") && (
                <AnimePage path={path} slug={slug} filters={filters} />
            )}
            {path.startsWith("manga") && (
                <MangaPageBeta path={path} slug={slug} filters={filters} />
            )}
        </main>
    );
};

export default page;
