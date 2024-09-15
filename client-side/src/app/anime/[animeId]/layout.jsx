import AnimeInfoLayout from "./components/AnimeInfoLayout";

export default async function RootLayout({ children, params }) {
    const { animeId } = params;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/anime/${animeId}`
    );
    const serverData = await res.json();

    console.log(serverData);
    if (!serverData.success) {
        console.log("Not Found");
        // Do something
    }

    const animeBaseData = serverData.data ?? {};

    return (
        <AnimeInfoLayout animeId={animeId} animeBaseData={animeBaseData}>
            {children}
        </AnimeInfoLayout>
    );
}
