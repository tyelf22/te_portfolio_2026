'use client';

import Message from './Message';

export default function MessageList({ messages }) {
    return (
        <div className="flex-1">
            {messages.map((msg, index) => (
                <Message key={index} role={msg.role} content={msg.content} />
            ))}
        </div>
    );
}
