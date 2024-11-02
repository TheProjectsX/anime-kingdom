// Style
import "./globals.css";

// Components
import PageNavbar from "@/components/common/PageNavbar";
import PageFooter from "@/components/common/PageFooter";
import NextTopLoader from "nextjs-toploader";

// React Toastify
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <head>
                <title>Get Anime, Manga insights! - AniDom</title>
            </head>
            <body className="font-ubuntu bg-slate-100">
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
                <NextTopLoader showSpinner={false} />
                <PageNavbar />
                <div className="min-h-[700px]"> {children}</div>
                <PageFooter />
            </body>
        </html>
    );
}
