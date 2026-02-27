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
            const grokReply = await fetchGrokResponse(text);
            setIsLoading(false);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: grokReply },
            ]);
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
                            <div className="px-4 py-2">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <div className="flex gap-1">
                                        <span className="animate-bounce">●</span>
                                        <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>●</span>
                                        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
                                    </div>
                                    Thinking...
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
