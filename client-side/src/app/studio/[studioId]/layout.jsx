import { loadServerData } from "@/utils/DataLoader";
import StudioInfoLayout from "./components/StudioInfoLayout";
import { notFound } from "next/navigation";

const layout = async ({ children, params }) => {
    const { studioId } = await params;

    const response = await loadServerData(`/studio/${studioId}`);

    if (!response.success) {
        // console.log("Not Found");
        return notFound();
    }

    const studioBaseData = response.data ?? {};

    return (
        <StudioInfoLayout studioId={studioId} studioBaseData={studioBaseData}>
            {children}
        </StudioInfoLayout>
    );
};

export default layout;
