import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Advanced, Base } from "../../components";
import { Providers } from "../../store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Space Project",
    description: "Site dedicated to space and various technologies for its study",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Advanced.MainBackgroundContainer preloader={<Base.Preloader />}>
                    <Advanced.Header />
                    <Providers>
                        <div className="center">{children}</div>
                    </Providers>
                    <Advanced.Footer />
                </Advanced.MainBackgroundContainer>
            </body>
        </html>
    );
}
