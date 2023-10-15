import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portpolio - Ninh Nam Web Dev',
    description: 'A portpolio Generated by Next.JS',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
