import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mmm",
  description: "welcome to mmm client",
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
