import AnimeHomePageItems from "@/components/anime/AnimeHomePageItems";
import { loadServerData } from "@/utils/DataLoader";

export default async function Home() {
    return (
        <main className="max-width space-y-8 mb-10 pt-5">
            <AnimeHomePageItems home />
        </main>
    );
}
