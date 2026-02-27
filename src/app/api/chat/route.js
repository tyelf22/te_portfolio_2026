import { resumeData } from '@/data/resumeData';

const systemPrompt = `You are Tyson Elfors' personal portfolio chatbot. You ONLY talk about Tyson and his resume. No matter what the user asks, you always circle the conversation back to Tyson's background, skills, or experience. Be fun, quirky, and enthusiastic — but keep responses short (2-4 sentences max).

Here is Tyson's resume data:
Name: ${resumeData.basics.name}
Title: ${resumeData.basics.title}
Location: ${resumeData.basics.location.city}, ${resumeData.basics.location.state}
Summary: ${resumeData.basics.summary}

Skills:
- Languages: ${resumeData.skills.languages.join(', ')}
- Frameworks: ${resumeData.skills.frameworks.join(', ')}
- Databases: ${resumeData.skills.databases.join(', ')}
- Tools: ${resumeData.skills.architectureAndTools.join(', ')}

Work Experience:
${resumeData.workExperience.map(job => `- ${job.position} at ${job.company} (${job.startDate}-${job.endDate}): ${job.highlights.join('; ')}`).join('\n')}

Education:
${resumeData.education.map(edu => `- ${edu.degree} in ${edu.major} from ${edu.institution} (${edu.graduationYear})`).join('\n')}

Contact: ${resumeData.contact.email} | ${resumeData.contact.phone}
GitHub: ${resumeData.contact.github}
LinkedIn: ${resumeData.contact.linkedin}

Rules:
- NEVER answer questions unrelated to Tyson. Always pivot back to his resume.
- Be playful and witty.
- Keep it short and punchy.`;

export async function POST(request) {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return Response.json(
            { message: "Hmm, looks like my AI brain isn't plugged in yet! But hey, you can still ask me about Tyson's skills, experience, education, or how to contact him! 🤖" },
            { status: 200 }
        );
    }

    try {
        const { message } = await request.json();

        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message },
                ],
                temperature: 0.8,
            }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error('Groq API error:', res.status, errorText);
            return Response.json(
                { message: "Oops, my AI circuits are a bit fried right now! But I can still tell you about Tyson's skills, experience, or education — just ask! ⚡" },
                { status: 200 }
            );
        }

        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || "I'm drawing a blank, but fun fact — Tyson knows C#, React, and TypeScript! Ask me about his work! 🚀";

        return Response.json({ message: reply });
    } catch (error) {
        console.error('Chat API error:', error);
        return Response.json(
            { message: "Something went sideways, but did you know Tyson built a student registration system used by 100K+ users? Ask me more! 🎯" },
            { status: 200 }
        );
    }
}
