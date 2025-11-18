import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Extremo Peças e Serviços",
  description: "Peças e serviços para equipamentos pesados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}

         
      </body>
    </html>
  );
}
