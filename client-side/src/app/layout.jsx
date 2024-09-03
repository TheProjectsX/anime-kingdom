// Style
import "./globals.css";

// Components
import PageNavbar from "@/components/PageNavbar";
import PageFooter from "@/components/PageFooter";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body className="font-ubuntu space-y-4 bg-slate-200">
                <PageNavbar />
                {children}
                <PageFooter />
            </body>
        </html>
    );
}
