'use client';

import { useState } from 'react';

export default function InputBox({ onSend }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="w-full px-2 md:px-4 pb-3 md:pb-6 pt-2">
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="relative">
                    <div className="relative flex items-end bg-chatgpt-input rounded-xl md:rounded-2xl border border-chatgpt-border shadow-lg">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Message TysonGPT..."
                            rows={1}
                            className="flex-1 bg-transparent text-chatgpt-text placeholder-chatgpt-text-secondary px-3 md:px-4 py-3 md:py-4 pr-10 md:pr-14 resize-none focus:outline-none max-h-[200px] overflow-y-auto text-sm md:text-base"
                            style={{ minHeight: '44px' }}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className={`absolute right-1.5 md:right-2 bottom-1.5 md:bottom-2 p-1.5 md:p-2 rounded-lg transition-smooth ${input.trim()
                                ? 'bg-white text-chatgpt-sidebar hover:bg-gray-200'
                                : 'bg-chatgpt-border text-chatgpt-text-secondary cursor-not-allowed'
                                }`}
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                            </svg>
                        </button>
                    </div>
                </form>
                <p className="text-[10px] md:text-xs text-chatgpt-text-secondary text-center mt-2 md:mt-3">
                    TysonGPT can help you learn about my experience and projects
                </p>
            </div>
        </div>
    );
}
