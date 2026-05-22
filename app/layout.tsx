import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onda Elétrica | Energia que Conecta - Atendimento Elétrico 24h",
  description: "Serviços elétricos premium com transparência total. Atendimento 24h, body cam em todos os serviços, equipe uniformizada e certificada. Instalações elétricas, câmeras, automação, energia solar e muito mais.",
  keywords: 'eletricista, elétrica, 24h, emergência, instalação elétrica, câmeras, automação, energia solar, ar condicionado, portões, segurança eletrônica',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className='dark bg-background'>
      <body className={cn('font-sans antialiased', inter.variable, geistMono.variable)}>
        {children}
      </body>
    </html>
  );
}
