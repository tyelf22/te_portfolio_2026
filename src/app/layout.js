import './globals.css';

export const metadata = {
    title: 'TysonGPT - Portfolio Assistant',
    description: 'ChatGPT-style portfolio website',
};

export const viewport = 'width=device-width, initial-scale=1, maximum-scale=1';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="overflow-hidden">{children}</body>
        </html>
    );
}
