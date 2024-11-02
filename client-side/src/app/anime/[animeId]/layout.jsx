import { loadServerData } from "@/utils/DataLoader";
import AnimeInfoLayout from "./components/AnimeInfoLayout";
import { notFound } from "next/navigation";

export default async function RootLayout({ children, params }) {
    const { animeId } = params;
    const response = await loadServerData(`/anime/${animeId}`);

    if (!response.success) {
        return notFound();
    }

    const animeBaseData = response.data ?? {};

    return (
        <AnimeInfoLayout animeId={animeId} animeBaseData={animeBaseData}>
            {children}
        </AnimeInfoLayout>
    );
}
