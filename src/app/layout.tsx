import './globals.css';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Adem Khalfaoui Portfolio',
  description: 'Fullstack Developer Portfolio',
  icons: {
    icon: '/favicon/job.png' // Favicon placé dans /public/favicon
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Import des Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"  
        />
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/* Navbar fixe */}
        <Navbar />

        {/* Contenu de la page */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
