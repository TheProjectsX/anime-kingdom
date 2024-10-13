import { loadServerData } from "@/utils/DataLoader";
import MangaInfoLayout from "./components/MangaInfoLayout";

export default async function RootLayout({ children, params }) {
    const { mangaId } = params;
    const response = await loadServerData(`/manga/${mangaId}`);

    if (!response.success) {
        console.log("Not Found");
        // Do something
    }

    const mangaBaseData = response.data ?? {};

    return (
        <MangaInfoLayout mangaId={mangaId} mangaBaseData={mangaBaseData}>
            {children}
        </MangaInfoLayout>
    );
}
