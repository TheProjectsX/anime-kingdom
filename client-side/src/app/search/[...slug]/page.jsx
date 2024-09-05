import { notFound } from "next/navigation";
import AnimePage from "../routes/AnimePage";

const page = ({ params }) => {
    const { slug } = params;

    const routes = [
        "anime",
        "manga",
        "anime/trending",
        "anime/seasons",
        "anime/seasons",
        "anime/tv-series",
        "anime/tv-series/popular",
        "anime/movies",
        "anime/movies/popular",
        "anime/top",
    ];

    const path = slug.join("/");

    if (!routes.includes(path)) {
        return notFound();
    }

    return (
        <main className="max-width space-y-8 mb-10">
            {path.startsWith("anime") && <AnimePage slug={slug} />}
        </main>
    );
};

export default page;
