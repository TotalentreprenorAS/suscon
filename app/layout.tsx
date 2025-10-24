// app/layout.tsx or app/layout.jsx
import "./globals.css";
import NavigationBar from "./components/nav";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Suscon - Sustainable Construction",
  description:
    "Suscon engages in multidisciplinary research and consultancy on a wide range of topics for that construction industry and everyday situations that affect our living environment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className="bg-gray-100 text-black font-sans">
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          <NavigationBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
