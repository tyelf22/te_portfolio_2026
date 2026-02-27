'use client';

import Logo from './Logo';

export default function Sidebar({ onNewChat, onClose }) {
    return (
        <aside className="w-[260px] bg-chatgpt-sidebar flex flex-col h-screen">
            <div className="px-2 pt-3 pb-2">
                <button
                    onClick={() => {
                        onNewChat();
                        onClose?.();
                    }}
                    className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-medium text-chatgpt-text bg-chatgpt-hover hover:bg-white/10 rounded-lg transition-smooth"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>New chat</span>
                </button>
            </div>

            <div className="px-4 py-8 flex justify-center border-b border-chatgpt-border/50">
                <button onClick={() => {
                    onNewChat();
                    onClose?.();
                }} className="transition-all duration-200 hover:scale-105">
                    <Logo size={50} showText={true} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-4">
                <div className="px-3 py-1.5 mb-3">
                    <span className="text-xs font-semibold text-chatgpt-text-secondary uppercase tracking-wider">Connect</span>
                </div>
                <nav className="space-y-1.5">
                    <a href="https://github.com/tyelf22" target="_blank" onClick={() => onClose?.()} className="flex items-center gap-3 px-3 py-2.5 text-sm text-chatgpt-text hover:bg-chatgpt-hover rounded-lg transition-smooth group">
                        <svg className="w-4 h-4 text-chatgpt-text-secondary group-hover:text-chatgpt-green" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/tysonelfors" target="_blank" onClick={() => onClose?.()} className="flex items-center gap-3 px-3 py-2.5 text-sm text-chatgpt-text hover:bg-chatgpt-hover rounded-lg transition-smooth group">
                        <svg className="w-4 h-4 text-chatgpt-text-secondary group-hover:text-chatgpt-green" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.044-8.789 0-9.708h3.554v1.375c.425-.654 1.186-1.586 2.882-1.586 2.105 0 3.681 1.377 3.681 4.342v5.577zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.709 0-.968.77-1.708 1.971-1.708 1.2 0 1.914.74 1.938 1.708 0 .951-.738 1.709-1.994 1.709zm1.582 11.597H3.715V9.044h3.204v11.408zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:tyelf22@gmail.com" target="_blank" onClick={() => onClose?.()} className="flex items-center gap-3 px-3 py-2.5 text-sm text-chatgpt-text hover:bg-chatgpt-hover rounded-lg transition-smooth group">
                        <svg className="w-4 h-4 text-chatgpt-text-secondary group-hover:text-chatgpt-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span>Email</span>
                    </a>
                </nav>
            </div>

            <div className="p-2 border-t border-chatgpt-border">
                <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-chatgpt-hover transition-smooth cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-chatgpt-green flex items-center justify-center">
                        <span className="text-white text-sm font-medium">T</span>
                    </div>
                    <span className="text-sm text-chatgpt-text font-medium">Tyson</span>
                </div>
            </div>
        </aside>
    );
}
