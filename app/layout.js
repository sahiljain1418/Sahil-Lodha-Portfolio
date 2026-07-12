import "./globals.css";

export const metadata = {
  title: "Sahil Lodha | Finance, Marketing & Leadership",
  description:
    "The personal portfolio of Sahil Lodha — finance, marketing, leadership, hosting and stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
