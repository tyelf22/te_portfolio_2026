'use client';

import { useEffect, useRef, useState } from 'react';
import MessageList from './MessageList';
import SuggestionChips from './SuggestionChips';
import ContextualChips from './ContextualChips';
import InputBox from './InputBox';
import { resumeData } from '@/data/resumeData';

function getMessageType(userMessage) {
    if (typeof userMessage !== 'string') return 'default';
    const msg = userMessage.toLowerCase();
    if (msg.includes('resume') || msg.includes('download') || msg.includes('pdf') || msg.includes('cv')) return 'resume';
    if (msg.includes('work experience') || msg.includes('job') || msg.includes('experience')) return 'work';
    if (msg.includes('skill') || msg.includes('expertise')) return 'skills';
    if (msg.includes('education') || msg.includes('degree') || msg.includes('university')) return 'education';
    if (msg.includes('project') || msg.includes('build') || msg.includes('portfolio')) return 'projects';
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('phone')) return 'contact';
    return 'default';
}

function generateResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    if (
        msg.includes('resume') ||
        msg.includes('download') ||
        msg.includes('pdf') ||
        msg.includes('cv')
    ) {
        return (
            <div className="space-y-3">
                <p className="text-gray-300">Here's Tyson's resume — click below to download! 📄</p>
                <a
                    href="/Tyson_Elfors_Resume.pdf"
                    download="Tyson_Elfors_Resume.pdf"
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200 group w-fit"
                >
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-200 group-hover:text-white">Tyson_Elfors_Resume.pdf</p>
                        <p className="text-xs text-gray-500">PDF Document</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
            </div>
        );
    }

    if (
        msg.includes('work experience') ||
        msg.includes('experience') ||
        msg.includes('job')
    ) {
        return (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                    💼 Work Experience
                </h3>
                {resumeData.workExperience.length > 0 ? (
                    <div className="space-y-4">
                        {resumeData.workExperience.map((job, idx) => (
                            <div key={idx} className="border-l-2 border-chatgpt-green pl-4">
                                <p className="font-semibold text-white">
                                    {job.position}
                                </p>
                                <p className="text-sm text-chatgpt-green">{job.company}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {job.startDate} - {job.endDate}
                                </p>
                                <ul className="mt-2 text-gray-300 text-sm space-y-1">
                                    {job.highlights && job.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="list-disc list-inside">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400">
                        Work experience details coming soon! 🚀
                    </p>
                )}
            </div>
        );
    }

    if (
        msg.includes('skill') ||
        msg.includes('expertise') ||
        msg.includes('what can')
    ) {
        return (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                    🎯 Skills & Expertise
                </h3>
                <div className="space-y-3">
                    {resumeData.skills.languages && (
                        <div>
                            <p className="text-sm font-semibold text-chatgpt-green mb-2">Languages</p>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.languages.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {resumeData.skills.frameworks && (
                        <div>
                            <p className="text-sm font-semibold text-chatgpt-green mb-2">Frameworks & Libraries</p>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.frameworks.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {resumeData.skills.databases && (
                        <div>
                            <p className="text-sm font-semibold text-chatgpt-green mb-2">Databases</p>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.databases.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {resumeData.skills.architectureAndTools && (
                        <div>
                            <p className="text-sm font-semibold text-chatgpt-green mb-2">Architecture & Tools</p>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.architectureAndTools.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (
        msg.includes('education') ||
        msg.includes('degree') ||
        msg.includes('university') ||
        msg.includes('school')
    ) {
        return (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                    🎓 Education
                </h3>
                {resumeData.education.length > 0 ? (
                    <div className="space-y-4">
                        {resumeData.education.map((edu, idx) => (
                            <div key={idx} className="border-l-2 border-chatgpt-green pl-4">
                                <p className="font-semibold text-white">{edu.degree} in {edu.major}</p>
                                <p className="text-sm text-chatgpt-green">{edu.institution}</p>
                                {edu.minor && (
                                    <p className="text-sm text-gray-400">Minor: {edu.minor}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">Graduated: {edu.graduationYear}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400">Education details coming soon! 🚀</p>
                )}
            </div>
        );
    }

    if (
        msg.includes('project') ||
        msg.includes('build') ||
        msg.includes('work')
    ) {
        return (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                    🚀 Projects
                </h3>
                {resumeData.projects.length > 0 ? (
                    <div className="space-y-4">
                        {resumeData.projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-smooth"
                            >
                                <p className="font-semibold text-white">{project.name}</p>
                                <p className="text-gray-300 text-sm mt-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-chatgpt-green/20 text-chatgpt-green text-xs rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400">Projects coming soon! 🎨</p>
                )}
            </div>
        );
    }

    if (
        msg.includes('contact') ||
        msg.includes('reach') ||
        msg.includes('email') ||
        msg.includes('get in touch')
    ) {
        return (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                    📧 Get In Touch
                </h3>
                <p className="text-gray-300">You can reach me through:</p>
                <div className="space-y-2">
                    <a
                        href={`mailto:${resumeData.contact.email}`}
                        className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-smooth"
                    >
                        <span>📧</span>
                        <div>
                            <p className="text-sm font-medium text-gray-200">Email</p>
                            <p className="text-xs text-gray-400">{resumeData.contact.email}</p>
                        </div>
                    </a>
                    <a
                        href={`tel:${resumeData.contact.phone}`}
                        className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-smooth"
                    >
                        <span>📞</span>
                        <div>
                            <p className="text-sm font-medium text-gray-200">Phone</p>
                            <p className="text-xs text-gray-400">{resumeData.contact.phone}</p>
                        </div>
                    </a>
                    <a
                        href={resumeData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-smooth"
                    >
                        <span>💼</span>
                        <div>
                            <p className="text-sm font-medium text-gray-200">LinkedIn</p>
                            <p className="text-xs text-gray-400">View my profile</p>
                        </div>
                    </a>
                    <a
                        href={resumeData.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-smooth"
                    >
                        <span>🐙</span>
                        <div>
                            <p className="text-sm font-medium text-gray-200">GitHub</p>
                            <p className="text-xs text-gray-400">Check out my repos</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <p className="text-gray-300">
                I didn't quite catch that. Here are some things you can ask me:
            </p>
            <ul className="space-y-1 text-sm text-gray-400">
                <li>• Tell me about your work experience</li>
                <li>• What are your skills?</li>
                <li>• What's your education background?</li>
                <li>• Show me your projects</li>
                <li>• How can I contact you?</li>
                <li>• Can I download your resume?</li>
            </ul>
        </div>
    );
}

async function fetchGrokResponse(userMessage) {
    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage }),
        });
        const data = await res.json();
        return data.message;
    } catch {
        return "Something went wrong, but hey — ask me about Tyson's skills or experience! 🚀";
    }
}

export default function ChatWindow({ messages, setMessages }) {
    const messagesContainerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        }, 50);
        return () => clearTimeout(timer);
    }, [messages]);

    const handleResponse = async (text) => {
        const messageType = getMessageType(text);

        if (messageType !== 'default') {
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    { role: 'assistant', content: generateResponse(text) },
                ]);
            }, 300);
        } else {
            setIsLoading(true);
            try {
                const grokReply = await fetchGrokResponse(text);
                setMessages((prev) => [
                    ...prev,
                    { role: 'assistant', content: grokReply },
                ]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleChipClick = (chipText) => {
        setMessages((prev) => [
            ...prev,
            { role: 'user', content: chipText },
        ]);
        handleResponse(chipText);
    };

    const handleSendMessage = (text) => {
        setMessages((prev) => [
            ...prev,
            { role: 'user', content: text },
        ]);
        handleResponse(text);
    };

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
                        {isLoading && (
                            <div className="w-full py-3 md:py-5 px-3 md:px-4">
                                <div className="max-w-3xl mx-auto">
                                    <div className="flex gap-2 md:gap-4 items-start">
                                        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-semibold text-chatgpt-text mb-1 md:mb-1.5">TysonGPT</p>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                <div className="flex gap-1">
                                                    <span className="animate-bounce">●</span>
                                                    <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>●</span>
                                                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
                                                </div>
                                                Thinking...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <ContextualChips
                        lastMessageType={getMessageType(messages[messages.length - 2]?.content || '')}
                        onChipClick={handleChipClick}
                    />
                </div>
            )}

            <InputBox onSend={handleSendMessage} />
        </div>
    );
}
