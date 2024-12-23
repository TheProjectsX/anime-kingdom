"use client";

import { loadServerData } from "@/utils/DataLoader";
import {
    convertSecondsToTime,
    convertToPercentage,
} from "@/utils/HelperFunctions";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const page = () => {
    const [fileUrl, setFileUrl] = useState(false);

    const [searchResults, setSearchResults] = useState(null);

    const [currentVideo, setCurrentVideo] = useState(null);

    const searchAndLoad = async (url, file) => {
        if (url) {
            const response = await loadServerData("/tools/reverse-image", {
                url,
            });
            if (!response.success) {
                // console.log(response);
                toast.error("Something went wrong!");
                return;
                // Do something
            }
            setSearchResults(response);
        } else if (file) {
            const formData = new FormData();
            formData.append("image", file);
            try {
                const response = await (
                    await fetch(
                        `${process.env.NEXT_PUBLIC_SERVER_URL}/tools/reverse-image`,
                        {
                            method: "POST",
                            body: formData,
                        }
                    )
                ).json();

                if (!response.success) {
                    // console.log(response);
                    toast.error("Something went wrong!");
                    // do something
                }

                setSearchResults(response);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleFileDropped = async (file) => {
        const previewUrl = URL.createObjectURL(file);
        setFileUrl(previewUrl);
        await searchAndLoad(null, file);
    };
    const handleUrlPasted = async (url) => {
        setFileUrl(url);
        await searchAndLoad(url);
    };

    return (
        <>
            <Helmet>
                <title>Reverse Search an Image! - AniDom</title>
            </Helmet>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box p-0 rounded-none justify-center">
                    <video
                        src={currentVideo}
                        autoPlay
                        controls
                        className="w-full"
                    ></video>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <main className="max-width space-y-8 mb-10 pt-4 sm:pt-10">
                <header>
                    <h2 className="text-2xl sm:text-3xl text-center font-suse font-semibold">
                        Get anime Info from an Image!
                    </h2>
                </header>

                {/* Show when there is no File or URL Data */}
                {!fileUrl && (
                    <div className="bg-white shadow-xl p-6 sm:px-10 rounded-lg w-fit mx-auto flex flex-col items-center text-center sm:text-left">
                        <h4 className="text-xl sm:text-2xl font-semibold font-suse text-gray-600 mb-6">
                            Drop your Image or Paste Image URL
                        </h4>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="w-full sm:w-[85%] space-y-3 sm:space-y-7"
                        >
                            <div>
                                <TextInput
                                    type="text"
                                    placeholder="Past your image URL or Type and hit Enter"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleUrlPasted(e.target.value);
                                        }
                                    }}
                                    onPaste={(e) =>
                                        handleUrlPasted(
                                            e.clipboardData.getData("text")
                                        )
                                    }
                                />
                            </div>

                            <div className="divider">Or</div>

                            <div className="[&_input]:hidden">
                                <FileUploader
                                    handleChange={handleFileDropped}
                                    name="file"
                                    types={["SVG", "JPG", "PNG", "JPEG", "GIF"]}
                                    classes="w-[85%]"
                                >
                                    <div
                                        htmlFor="dropzone-file"
                                        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative"
                                    >
                                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                            <svg
                                                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">
                                                    Click to upload
                                                </span>{" "}
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                Only Image file Supported
                                            </p>
                                        </div>
                                    </div>
                                </FileUploader>
                            </div>
                        </form>
                    </div>
                )}

                {/* Show when there is File or URL Data */}
                {fileUrl && (
                    <div
                        className="bg-white shadow-xl py-6
             px-10 rounded-lg w-fit mx-auto flex flex-col items-center min-h-96"
                    >
                        <div className="flex flex-wrap justify-center gap-8 items-center pb-3 mb-3 border-b border-dashed w-full ">
                            <div className="flex flex-col items-center gap-2">
                                <h3 className="text-lg font-medium text-center sm:text-left">
                                    {!searchResults
                                        ? "Processing your Image..."
                                        : `Image Processed! (${searchResults.frameCount} Frames)`}
                                </h3>
                                {searchResults && (
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => {
                                            setFileUrl(null);
                                            setSearchResults(null);
                                            setCurrentVideo(null);
                                        }}
                                    >
                                        Try Again!
                                    </button>
                                )}
                            </div>
                            <img src={fileUrl} alt={fileUrl} className="w-44" />
                        </div>

                        {searchResults && (
                            <section className="space-y-4">
                                {searchResults.data.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="shadow-lg p-2.5 rounded-md flex justify-between flex-wrap gap-5 border border-[dodgerBlue] hover:shadow-[dodgerBlue] cursor-pointer"
                                        onClick={() => {
                                            setCurrentVideo(
                                                `${item.video}&size=l`
                                            );
                                            document
                                                .getElementById("my_modal_2")
                                                .showModal();
                                        }}
                                    >
                                        <div className="max-w-96">
                                            <h3 className="mb-2 sm:text-lg font-semibold">
                                                {item.title_english ??
                                                    item.title}
                                            </h3>
                                            <p className="text-black font-semibold">
                                                Episode: {item.episode}
                                            </p>
                                            <p className="text-sm sm:text-base">
                                                <span className="font-semibold">
                                                    Time:
                                                </span>{" "}
                                                {convertSecondsToTime(
                                                    item.from
                                                )}{" "}
                                                -{" "}
                                                {convertSecondsToTime(item.to)}
                                            </p>
                                            <p className="text-sm sm:text-base">
                                                <span className="font-semibold">
                                                    Similarity:
                                                </span>{" "}
                                                {convertToPercentage(
                                                    item.similarity
                                                )}
                                            </p>
                                        </div>
                                        <video
                                            src={item.video}
                                            className="w-48 mx-auto sm:mx-0"
                                        ></video>
                                    </div>
                                ))}
                            </section>
                        )}
                    </div>
                )}
            </main>
        </>
    );
};

export default page;
