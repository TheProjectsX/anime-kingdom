import { notFound } from "next/navigation";
import AnimePage from "../routes/AnimePage";
import MangaPage from "../routes/MangaPage";
import AnimeHomePageItems from "@/components/anime/AnimeHomePageItems";
import MangaHomePageItems from "@/components/manga/MangaHomePageItems";
import { loadServerData } from "@/utils/DataLoader";

const page = async ({ params, searchParams }) => {
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
        const response = await loadServerData(`/anime/filters`);

        filters = response.data ?? [];
    } else if (path.startsWith("manga")) {
        const response = await loadServerData(`/manga/filters`);

        filters = response.data ?? [];
    }

    return (
        <main className="max-width space-y-8 my-10">
            {/* Open the Anime Home Page if the route is /search/anime and no searchParams exists */}
            {path === "anime" && !searchParams.query && <AnimeHomePageItems />}

            {/* Vice versa of the above logic */}
            {path.startsWith("anime") &&
                (path !== "anime" || searchParams.query) && (
                    <AnimePage path={path} slug={slug} filters={filters} />
                )}

            {/* Copy version of Anime logic */}
            {path === "manga" && !searchParams.query && <MangaHomePageItems />}

            {path.startsWith("manga") &&
                (path !== "manga" || searchParams.query) && (
                    <MangaPage path={path} slug={slug} filters={filters} />
                )}
        </main>
    );
};

export default page;
