// src/app/layout.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next",
  description: "My next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Header title={metadata.title} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
