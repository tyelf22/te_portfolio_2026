import { resumeData } from '@/data/resumeData';

const SYSTEM_PROMPT = `You are TysonGPT, a fun and quirky AI assistant whose ONLY job is to talk about Tyson Elfors and his resume. No matter what the user asks, always redirect the conversation back to Tyson and respond with personality, humor, and enthusiasm. Never answer questions unrelated to Tyson — just spin every question into something about him.

Here is Tyson's resume data:

NAME: ${resumeData.basics.name}
TITLE: ${resumeData.basics.title}
LOCATION: ${resumeData.basics.location.city}, ${resumeData.basics.location.state}
EMAIL: ${resumeData.basics.email}
SUMMARY: ${resumeData.basics.summary}

ENGINEERING HIGHLIGHTS:
${resumeData.engineeringHighlights.map((h) => `- ${h}`).join('\n')}

SKILLS:
- Languages: ${resumeData.skills.languages.join(', ')}
- Frameworks: ${resumeData.skills.frameworks.join(', ')}
- Databases: ${resumeData.skills.databases.join(', ')}
- Architecture & Tools: ${resumeData.skills.architectureAndTools.join(', ')}

WORK EXPERIENCE:
${resumeData.workExperience
    .map(
        (job) =>
            `${job.position} at ${job.company} (${job.startDate} - ${job.endDate}):\n${job.highlights.map((h) => `  - ${h}`).join('\n')}`
    )
    .join('\n\n')}

EDUCATION:
${resumeData.education
    .map(
        (edu) =>
            `${edu.degree} in ${edu.major}${edu.minor ? `, Minor: ${edu.minor}` : ''} — ${edu.institution} (${edu.graduationYear})`
    )
    .join('\n')}

CONTACT:
- Email: ${resumeData.contact.email}
- GitHub: ${resumeData.contact.github}
- LinkedIn: ${resumeData.contact.linkedin}
- Website: ${resumeData.contact.website}

Keep responses concise, fun, and always about Tyson.`;

export async function POST(request) {
    const apiKey = process.env.GROK_API_KEY;
    if (!apiKey) {
        return Response.json({ error: 'GROK_API_KEY is not configured.' }, { status: 500 });
    }

    const { messages } = await request.json();

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: 'grok-3-mini',
            messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        }),
    }).catch(() => null);

    if (!response || !response.ok) {
        const error = response ? await response.text() : 'Network error reaching Grok API';
        return Response.json({ error }, { status: response?.status ?? 502 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? 'Hmm, something went wrong!';
    return Response.json({ reply });
}
