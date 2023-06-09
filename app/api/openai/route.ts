import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";
import { CreateChatCompletionResponse } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request, response: any) {
    try {
        const { title, role } = await request.json();

        const aiResponse: AxiosResponse<CreateChatCompletionResponse,any> = 
            await openai.createChatCompletion({
                model: "text-davinci-003",
                messages: [
                    {
                        role: 'user',
                        // content: `Create small blog post with html tags based on this title: ${title}`
                        content: `Create 4 line blog post with html tags based on this title: ${title}` // shortens response time to prevent vercel timeout
                    },
                    {
                        role: 'system',
                        content: `${
                            role || 'I am a travel blog writer'
                        }. Write with html tags.`,
                    },                
                    
                ]
            });
        
            // response.revalidate('api/posts') will timeout on vercel
        return NextResponse.json({
            content: aiResponse.data.choices[0].message?.content
        }, { status: 200 });
        } catch (error) {
            console.error('request erorr', error);
            NextResponse.json({ error: 'Something went wrong communicating with OpenAI' }, { status: 500 });
        }
}
