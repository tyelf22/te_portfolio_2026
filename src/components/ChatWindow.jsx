'use client';

import { useEffect, useRef, useState } from 'react';
import MessageList from './MessageList';
import SuggestionChips from './SuggestionChips';
import ContextualChips from './ContextualChips';
import InputBox from './InputBox';

async function askGrok(messages) {
    const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Something went wrong');
    return data.reply;
}

export default function ChatWindow({ messages, setMessages }) {
    const messagesContainerRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        }, 50);
        return () => clearTimeout(timer);
    }, [messages]);

    const sendMessage = async (text) => {
        const userMsg = { role: 'user', content: text };
        const updated = [...messages, userMsg];
        setMessages(updated);
        setLoading(true);
        try {
            const reply = await askGrok(updated);
            setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
        } catch (err) {
            console.error('Grok API error:', err);
            setMessages((prev) => [...prev, { role: 'assistant', content: "Oops! Something went sideways. Try again! 🙃" }]);
        } finally {
            setLoading(false);
        }
    };

    const handleChipClick = (chipText) => sendMessage(chipText);
    const handleSendMessage = (text) => sendMessage(text);

    return (
        <div className="flex flex-col h-full overflow-hidden bg-chatgpt-bg">
            {messages.length === 0 ? (
                <div className="flex-1 min-h-0 overflow-y-auto">
                    <SuggestionChips onChipClick={handleChipClick} />
                </div>
            ) : (
                <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                    <div
                        ref={messagesContainerRef}
                        className="flex-1 overflow-y-auto overscroll-contain scroll-smooth pt-12 md:pt-0"
                    >
                        <MessageList messages={messages} />
                        {loading && (
                            <div className="flex justify-start px-4 py-2">
                                <div className="flex gap-1 items-center text-chatgpt-text-secondary text-sm">
                                    <span className="animate-bounce">•</span>
                                    <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>•</span>
                                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>•</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <ContextualChips
                        lastMessageType="default"
                        onChipClick={handleChipClick}
                    />
                </div>
            )}

            <InputBox onSend={handleSendMessage} disabled={loading} />
        </div>
    );
}
