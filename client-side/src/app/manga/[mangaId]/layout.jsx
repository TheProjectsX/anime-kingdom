import MangaInfoLayout from "./components/MangaInfoLayout";

export default async function RootLayout({ children, params }) {
    const { mangaId } = params;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/manga/${mangaId}`
    );
    const serverData = await res.json();

    if (!serverData.success) {
        console.log("Not Found");
        // Do something
    }

    const mangaBaseData = serverData.data ?? {};

    return (
        <MangaInfoLayout mangaId={mangaId} mangaBaseData={mangaBaseData}>
            {children}
        </MangaInfoLayout>
    );
}
