import React, { useState, useEffect } from 'react';
import { generateSkinConcept } from '../services/geminiService';
import { Skin } from '../types';
import { MOCK_LOADING_MESSAGES } from '../constants';

interface SkinGeneratorProps {
    onSkinGenerated: (skin: Skin) => void;
    onCancel: () => void;
}

export const SkinGenerator: React.FC<SkinGeneratorProps> = ({ onSkinGenerated, onCancel }) => {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState(MOCK_LOADING_MESSAGES[0]);
    const [error, setError] = useState<string | null>(null);

    // Rotate loading messages
    useEffect(() => {
        if (!loading) return;
        const interval = setInterval(() => {
            setLoadingMessage(prev => {
                const currentIndex = MOCK_LOADING_MESSAGES.indexOf(prev);
                return MOCK_LOADING_MESSAGES[(currentIndex + 1) % MOCK_LOADING_MESSAGES.length];
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [loading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const result = await generateSkinConcept(prompt);
            
            const newSkin: Skin = {
                id: Date.now().toString(),
                name: result.name,
                description: result.description,
                imageUrl: result.imageUrl,
                tags: ['IA', 'Gerada', 'Custom'],
                downloads: 0,
                likes: 0,
                isAiGenerated: true
            };

            onSkinGenerated(newSkin);
        } catch (err: any) {
            console.error(err);
            setError("Ocorreu um erro ao gerar a skin. Tente novamente ou verifique sua API Key.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-mc-dark border-4 border-purple-600 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-purple-900 p-4 border-b-4 border-purple-700">
                <h2 className="text-2xl font-pixel text-white text-center">Laboratório de Criação</h2>
            </div>

            <div className="p-8">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="w-16 h-16 border-4 border-purple-500 border-t-white rounded-full animate-spin mb-6"></div>
                        <p className="text-xl font-pixel text-purple-300 animate-pulse">{loadingMessage}</p>
                    </div>
                ) : (
                    <>
                        <p className="text-gray-300 mb-6 text-center">
                            Descreva sua ideia e nossa IA irá forjar um conceito de skin exclusivo para você.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-purple-300 font-pixel mb-2 uppercase">Descrição da Skin</label>
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Ex: Um cavaleiro galáctico com armadura dourada e olhos vermelhos brilhantes..."
                                    className="w-full h-32 p-4 bg-neutral-900 border-2 border-neutral-700 rounded text-white focus:border-purple-500 focus:outline-none transition-colors font-sans"
                                    required
                                />
                            </div>

                            {error && (
                                <div className="p-4 bg-red-900/50 border border-red-500 text-red-200 rounded text-sm">
                                    {error}
                                </div>
                            )}

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={onCancel}
                                    className="flex-1 py-3 px-6 bg-transparent border-2 border-gray-600 text-gray-400 font-pixel hover:border-gray-400 hover:text-white transition-all rounded"
                                >
                                    CANCELAR
                                </button>
                                <button
                                    type="submit"
                                    disabled={!prompt.trim()}
                                    className={`flex-1 py-3 px-6 font-pixel text-white border-b-4 transition-all rounded shadow-lg flex items-center justify-center gap-2
                                        ${!prompt.trim() 
                                            ? 'bg-purple-900 border-purple-950 opacity-50 cursor-not-allowed' 
                                            : 'bg-purple-600 hover:bg-purple-500 border-purple-800 active:border-b-0 active:translate-y-1'
                                        }`}
                                >
                                    <span>⚡</span> GERAR SKIN
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
            
            {!loading && (
                <div className="bg-neutral-900 p-4 border-t border-neutral-800 text-center text-xs text-gray-500">
                    * A geração pode levar alguns segundos. Powered by Gemini AI.
                </div>
            )}
        </div>
    );
};