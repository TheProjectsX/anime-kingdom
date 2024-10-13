import { loadServerData } from "@/utils/DataLoader";
import StudioInfoLayout from "./components/StudioInfoLayout";

const layout = async ({ children, params }) => {
    const { studioId } = params;

    const response = await loadServerData(`/studio/${studioId}`);

    if (!response.success) {
        console.log("Not Found");
        // Do something
    }

    const studioBaseData = response.data ?? {};

    return (
        <StudioInfoLayout studioId={studioId} studioBaseData={studioBaseData}>
            {children}
        </StudioInfoLayout>
    );
};

export default layout;
