"use client";

import NotFoundImage from "@/assets/not-found.png";
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="max-width py-8 sm:min-h-96 flex justify-center items-center flex-col text-center">
            <img
                src={NotFoundImage.src}
                alt="404 Not Found"
                className="w-full mb-3"
            />

            <h2 className="text-xl sm:text-2xl font-suse mb-4 font-semibold ">
                Oops! Lost in Another World!
            </h2>

            <p className="text-gray-600 max-w-md mx-auto mb-5">
                Looks like you've been isekai’d to a page that doesn't exist.
                Let’s get you back to the real world!
            </p>

            <Link href={"/"} className="btn btn-info">
                Take me back to reality!
            </Link>
        </main>
    );
};

export default NotFound;
