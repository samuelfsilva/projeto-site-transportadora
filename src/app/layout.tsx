import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valdecir Transportes - We Move Lives",
  description: "We Move Lives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
