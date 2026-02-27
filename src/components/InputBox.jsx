'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export default function InputBox({ onSend }) {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);
    const formRef = useRef(null);

    // Handle visual viewport resize (mobile keyboard open/close)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const vv = window.visualViewport;
        if (!vv) return;

        const onResize = () => {
            // Calculate offset when keyboard is open
            const offsetBottom = window.innerHeight - vv.height - vv.offsetTop;
            document.documentElement.style.setProperty(
                '--keyboard-offset',
                `${Math.max(0, offsetBottom)}px`
            );
        };

        vv.addEventListener('resize', onResize);
        vv.addEventListener('scroll', onResize);
        onResize();

        return () => {
            vv.removeEventListener('resize', onResize);
            vv.removeEventListener('scroll', onResize);
            document.documentElement.style.setProperty('--keyboard-offset', '0px');
        };
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    }, [input, onSend]);

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
        el.style.height = Math.min(el.scrollHeight, 200) + 'px';
    };

    return (
        <div
            className="shrink-0 w-full bg-chatgpt-bg px-3 md:px-4 pt-2 transition-all duration-100"
            style={{
                paddingBottom: 'max(env(safe-area-inset-bottom, 8px), 8px)',
            }}
        >
            <div className="max-w-3xl mx-auto flex flex-col gap-2">
                {/* Input form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex items-end gap-2 bg-chatgpt-input rounded-2xl border border-chatgpt-border shadow-lg px-3 py-2 md:px-4 md:py-3"
                >
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Message TysonGPT..."
                        rows={1}
                        className="flex-1 bg-transparent text-chatgpt-text placeholder-chatgpt-text-secondary resize-none focus:outline-none max-h-[200px] overflow-y-auto text-base leading-6 min-h-[24px] py-0.5"
                        style={{ fontSize: '16px' }}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        aria-label="Send message"
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-150 ${
                            input.trim()
                                ? 'bg-white text-chatgpt-sidebar hover:bg-gray-200 active:scale-95'
                                : 'bg-chatgpt-border text-chatgpt-text-secondary cursor-not-allowed'
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                </form>

                {/* Helper text */}
                <p className="text-[10px] md:text-xs text-chatgpt-text-secondary text-center pb-1">
                    TysonGPT can help you learn about my experience and projects
                </p>
            </div>
        </div>
    );
}