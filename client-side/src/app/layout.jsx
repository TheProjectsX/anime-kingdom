// Style
import "./globals.css";

// Components
import PageNavbar from "@/components/common/PageNavbar";
import PageFooter from "@/components/common/PageFooter";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <head>
                <title>Get Anime, Manga insights! - AniDom</title>
            </head>
            <body className="font-ubuntu bg-slate-100">
                <NextTopLoader />
                <PageNavbar />
                <div className="min-h-[700px]"> {children}</div>
                <PageFooter />
            </body>
        </html>
    );
}
