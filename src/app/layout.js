import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: "Gabriel de Miranda",
  description: "Portifolio de Gabriel de Miranda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
