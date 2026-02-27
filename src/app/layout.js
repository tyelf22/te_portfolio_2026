import './globals.css';

export const metadata = {
    title: 'TysonGPT - Portfolio Assistant',
    description: 'ChatGPT-style portfolio website',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    interactiveWidget: 'resizes-content',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="overflow-hidden h-dvh">{children}</body>
        </html>
    );
}
