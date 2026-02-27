'use client';

import Logo from './Logo';

export default function SuggestionChips({ onChipClick }) {
    const chips = [
        {
            text: 'Tell me about your work experience',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
            ),
        },
        {
            text: 'What are your core skills?',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            ),
        },
        {
            text: 'Show me your projects',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            ),
        },
        {
            text: 'How can I contact you?',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
        },
    ];

    return (
        <div className="flex-1 flex flex-col items-center justify-center px-3 md:px-4 pb-4 md:pb-8 pt-14 md:pt-0">
            <div className="text-center mb-6 md:mb-10">
                <div className="flex justify-center mb-4 md:mb-8">
                    <Logo size={40} />
                </div>
                <h1 className="text-xl md:text-3xl font-semibold text-chatgpt-text mb-2 px-2">
                    How can I help you today?
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full max-w-[720px]">
                {chips.map((chip, index) => (
                    <button
                        key={index}
                        onClick={() => onChipClick(chip.text)}
                        className="flex flex-col items-start gap-2 p-3 md:p-4 text-left bg-chatgpt-sidebar hover:bg-chatgpt-hover border border-chatgpt-border rounded-lg md:rounded-xl transition-smooth group"
                    >
                        <div className="text-chatgpt-text-secondary group-hover:text-chatgpt-text transition-smooth [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                            {chip.icon}
                        </div>
                        <span className="text-sm md:text-sm text-chatgpt-text leading-snug">
                            {chip.text}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
