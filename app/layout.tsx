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
    <html lang="en">
      <body className="bg-gray-50 text-black font-sans min-h-screen flex flex-col">
        <NavigationBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
