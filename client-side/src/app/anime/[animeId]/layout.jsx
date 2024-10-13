import { loadServerData } from "@/utils/DataLoader";
import AnimeInfoLayout from "./components/AnimeInfoLayout";

export default async function RootLayout({ children, params }) {
    const { animeId } = params;
    const response = await loadServerData(`/anime/${animeId}`);

    if (!response.success) {
        console.log("Not Found");
        // Do something
    }

    const animeBaseData = response.data ?? {};

    return (
        <AnimeInfoLayout animeId={animeId} animeBaseData={animeBaseData}>
            {children}
        </AnimeInfoLayout>
    );
}
