// Style
import "./globals.css";

// Components
import PageNavbar from "@/components/common/PageNavbar";
import PageFooter from "@/components/common/PageFooter";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <head></head>
            <body className="font-ubuntu bg-slate-100">
                <NextTopLoader />
                <PageNavbar />
                {children}
                <PageFooter />
            </body>
        </html>
    );
}
