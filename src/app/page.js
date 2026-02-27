'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatWindow from '@/components/ChatWindow';

export default function Page() {
    const [messages, setMessages] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleNewChat = () => {
        setMessages([]);
    };

    return (
        <div className="flex h-screen bg-chatgpt-bg overflow-hidden">
            {/* Hamburger Menu Button - Mobile Only */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden fixed top-3 left-3 z-50 p-2 rounded-lg bg-chatgpt-sidebar/80 hover:bg-chatgpt-hover transition-smooth"
                aria-label="Toggle menu"
            >
                <svg className="w-5 h-5 text-chatgpt-text" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    {sidebarOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 transition-transform duration-200 ease-in-out`}>
                <Sidebar onNewChat={handleNewChat} onClose={() => setSidebarOpen(false)} />
            </div>

            {/* Chat Window */}
            <div className="flex-1 w-full md:w-auto overflow-hidden">
                <ChatWindow messages={messages} setMessages={setMessages} />
            </div>
        </div>
    );
}
