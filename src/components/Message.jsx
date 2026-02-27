'use client';

import Logo from './Logo';

export default function Message({ role, content }) {
    const isUser = role === 'user';

    return (
        <div className="w-full py-3 md:py-5 px-3 md:px-4">
            <div className="max-w-3xl mx-auto">
                <div className="flex gap-2 md:gap-4 items-start">
                    {isUser ? (
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                            <span className="text-white text-xs md:text-sm font-medium">T</span>
                        </div>
                    ) : (
                        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0">
                            <Logo size={24} showText={false} className="md:hidden" />
                        </div>
                    )}

                    <div className="flex-1 min-w-0 overflow-hidden">
                        <p className="text-xs font-semibold text-chatgpt-text mb-1 md:mb-1.5">
                            {isUser ? 'You' : 'TysonGPT'}
                        </p>
                        <div className="text-chatgpt-text text-sm md:text-[15px] leading-relaxed break-words">
                            {typeof content === 'string' ? (
                                <p>{content}</p>
                            ) : (
                                <div className="[&>div]:space-y-2 md:[&>div]:space-y-4">{content}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
