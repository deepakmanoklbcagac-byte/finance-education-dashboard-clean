import "./globals.css";

export const metadata = {
  title: "Finance Education Dashboard",
  description: "Interactive Financial Education Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}