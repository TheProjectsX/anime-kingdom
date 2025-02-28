import { loadServerData } from "@/utils/DataLoader";
import MangaInfoLayout from "./components/MangaInfoLayout";
import { notFound } from "next/navigation";

export default async function RootLayout({ children, params }) {
    const { mangaId } = await params;
    const response = await loadServerData(`/manga/${mangaId}`);

    if (!response.success) {
        // console.log("Not Found");
        return notFound();
    }

    const mangaBaseData = response.data ?? {};

    return (
        <MangaInfoLayout mangaId={mangaId} mangaBaseData={mangaBaseData}>
            {children}
        </MangaInfoLayout>
    );
}
