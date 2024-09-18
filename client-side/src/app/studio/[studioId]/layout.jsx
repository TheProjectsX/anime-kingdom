import StudioInfoLayout from "./components/StudioInfoLayout";

const layout = async ({ children, params }) => {
    const { studioId } = params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/studio/${studioId}`
    );
    const serverData = await res.json();

    if (!serverData.success) {
        console.log("Not Found");
        // Do something
    }

    const studioBaseData = serverData.data ?? {};

    return (
        <StudioInfoLayout studioId={studioId} studioBaseData={studioBaseData}>
            {children}
        </StudioInfoLayout>
    );
};

export default layout;
