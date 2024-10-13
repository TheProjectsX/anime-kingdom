import AnimeHomePageItems from "@/components/anime/AnimeHomePageItems";
import { loadServerData } from "@/utils/DataLoader";

export default async function Home() {
    const animeScheduleData = await loadServerData(
        "/anime/schedule/24h",
        {
            timestamp: Date.now(),
        },
        {
            method: "GET",
            cache: "no-store",
        }
    );

    return (
        <main className="max-width space-y-8 mb-10 pt-5">
            <AnimeHomePageItems
                animeScheduleData={animeScheduleData.data ?? []}
                home
            />
        </main>
    );
}
