'use client';

export default function ContextualChips({ lastMessageType, onChipClick }) {
    const chipsByContext = {
        work: [
            {
                text: 'Tell me about your education',
                icon: '🎓',
            },
            {
                text: 'What are your skills?',
                icon: '🎯',
            },
            {
                text: 'Show me your projects',
                icon: '🚀',
            },
            {
                text: 'How can I contact you?',
                icon: '📧',
            },
        ],
        skills: [
            {
                text: 'Tell me about your work experience',
                icon: '💼',
            },
            {
                text: 'What about your education?',
                icon: '🎓',
            },
            {
                text: 'Show me your projects',
                icon: '🚀',
            },
            {
                text: 'How can I contact you?',
                icon: '📧',
            },
        ],
        education: [
            {
                text: 'Tell me about your work experience',
                icon: '💼',
            },
            {
                text: 'What are your skills?',
                icon: '🎯',
            },
            {
                text: 'Show me your projects',
                icon: '🚀',
            },
            {
                text: 'How can I contact you?',
                icon: '📧',
            },
        ],
        projects: [
            {
                text: 'Tell me about your work experience',
                icon: '💼',
            },
            {
                text: 'What are your skills?',
                icon: '🎯',
            },
            {
                text: 'What about your education?',
                icon: '🎓',
            },
            {
                text: 'How can I contact you?',
                icon: '📧',
            },
        ],
        contact: [
            {
                text: 'Tell me about your work experience',
                icon: '💼',
            },
            {
                text: 'What are your skills?',
                icon: '🎯',
            },
            {
                text: 'What about your education?',
                icon: '🎓',
            },
            {
                text: 'Show me your projects',
                icon: '🚀',
            },
        ],
        default: [
            {
                text: 'Tell me about your work experience',
                icon: '💼',
            },
            {
                text: 'What are your skills?',
                icon: '🎯',
            },
            {
                text: 'What about your education?',
                icon: '🎓',
            },
            {
                text: 'How can I contact you?',
                icon: '📧',
            },
        ],
    };

    const chips = chipsByContext[lastMessageType] || chipsByContext.default;

    return (
        <div className="shrink-0 overflow-x-auto px-3 md:px-4 py-2 md:py-3">
            <div className="flex md:flex-wrap md:justify-center gap-2 max-w-3xl mx-auto">
                {chips.map((chip, index) => (
                    <button
                        key={index}
                        onClick={() => onChipClick(chip.text)}
                        className="flex items-center gap-2 px-3 py-2 text-sm bg-chatgpt-sidebar border border-chatgpt-border hover:bg-chatgpt-hover hover:border-chatgpt-green/50 rounded-full transition-all duration-200 text-gray-200 hover:text-white whitespace-nowrap"
                    >
                        <span className="text-base">{chip.icon}</span>
                        <span>{chip.text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
