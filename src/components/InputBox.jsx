'use client';

import { useState, useRef, useEffect } from 'react';

export default function InputBox({ onSend, suggestions = [] }) {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
            if (textareaRef.current) textareaRef.current.style.height = 'auto';
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        const el = e.target;
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Chat area */}
            <div className="flex-1 overflow-y-auto px-2 md:px-4">
                {/* Messages would go here */}
            </div>

            {/* Input area */}
            <div className="sticky bottom-0 bg-chatgpt-bg z-50 px-2 md:px-4 pt-2 pb-[env(safe-area-inset-bottom,12px)]">
                <div className="max-w-3xl mx-auto flex flex-col gap-2">

                    {/* Suggestion Chips */}
                    {suggestions.length > 0 && (
                        <div className="flex overflow-x-auto gap-2 touch-manipulation">
                            {suggestions.map((sugg, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => {
                                        setInput(sugg);
                                        if (textareaRef.current) textareaRef.current.focus();
                                    }}
                                    className="px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap text-sm md:text-base"
                                >
                                    {sugg}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input form */}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-chatgpt-input rounded-xl border border-chatgpt-border shadow-lg p-2">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Message TysonGPT..."
                            rows={1}
                            className="flex-1 bg-transparent text-chatgpt-text placeholder-chatgpt-text-secondary resize-none focus:outline-none max-h-[200px] overflow-y-auto text-sm md:text-base min-h-[44px] px-2 py-2"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className={`flex-shrink-0 p-2 rounded-lg transition ${input.trim()
                                ? 'bg-white text-chatgpt-sidebar hover:bg-gray-200'
                                : 'bg-chatgpt-border text-chatgpt-text-secondary cursor-not-allowed'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                            </svg>
                        </button>
                    </form>

                    {/* Helper text */}
                    <p className="text-[10px] md:text-xs text-chatgpt-text-secondary text-center mt-1">
                        TysonGPT can help you learn about my experience and projects
                    </p>
                </div>
            </div>
        </div>
    );
}