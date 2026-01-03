import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey });

export const generateSkinDescription = async (skinName: string): Promise<string> => {
    if (!apiKey) return "Descrição indisponível (Chave API não configurada).";

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Write a short, exciting lore description (max 2 sentences) in Portuguese for a Minecraft skin named "${skinName}". Focus on fantasy or sci-fi elements appropriate for the game.`,
        });
        return response.text || "Sem descrição disponível.";
    } catch (error) {
        console.error("Erro ao gerar descrição:", error);
        return "Uma skin misteriosa e poderosa pronta para a aventura.";
    }
};

export interface GeneratedSkinResult {
    imageUrl: string;
    description: string;
    name: string;
}

export const generateSkinConcept = async (prompt: string): Promise<GeneratedSkinResult> => {
    if (!apiKey) throw new Error("API Key não encontrada.");

    // 1. Generate the Image
    // We use gemini-2.5-flash-image for visual generation
    const imageResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: `A high quality 3D render of a Minecraft character skin: ${prompt}. The character should be in a dynamic pose, pixelated texture style consistent with Minecraft, isolated on a simple background.`,
        config: {
            imageConfig: {
                aspectRatio: "1:1" // Square for skin preview
            }
        }
    });

    let imageUrl = '';
    
    // Parse response for image
    if (imageResponse.candidates && imageResponse.candidates[0].content.parts) {
        for (const part of imageResponse.candidates[0].content.parts) {
            if (part.inlineData) {
                imageUrl = `data:image/png;base64,${part.inlineData.data}`;
                break;
            }
        }
    }

    if (!imageUrl) {
        throw new Error("Não foi possível gerar a imagem da skin.");
    }

    // 2. Generate Metadata (Name & Description) based on the user prompt
    // We use gemini-3-flash-preview for text logic
    const textResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Based on the skin concept "${prompt}", generate a creative name (max 3 words) and a short lore description (max 2 sentences) in Portuguese. Return ONLY JSON.`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING },
                    description: { type: Type.STRING }
                },
                required: ["name", "description"]
            }
        }
    });

    let metadata = { name: "Skin Desconhecida", description: "Uma skin gerada por IA." };
    if (textResponse.text) {
        try {
            metadata = JSON.parse(textResponse.text);
        } catch (e) {
            console.warn("Failed to parse JSON metadata", e);
        }
    }

    return {
        imageUrl,
        name: metadata.name,
        description: metadata.description
    };
};
