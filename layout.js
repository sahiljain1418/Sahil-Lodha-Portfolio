import "./globals.css";

export const metadata = {
  title: "Sahil Lodha | Finance × Marketing × Leadership",
  description: "The portfolio of Sahil Lodha — PGDM Finance & Marketing candidate, student leader, host and curious builder."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
