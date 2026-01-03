import React, { useState } from 'react';
import { Skin } from '../types';
import { SkinCard } from './SkinCard';

interface SkinGalleryProps {
    skins: Skin[];
}

export const SkinGallery: React.FC<SkinGalleryProps> = ({ skins }) => {
    const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skins.map((skin) => (
                    <SkinCard key={skin.id} skin={skin} onClick={setSelectedSkin} />
                ))}
            </div>

            {/* Modal Detail View */}
            {selectedSkin && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-mc-dark border-4 border-mc-gray w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative rounded-lg shadow-2xl">
                        <button 
                            onClick={() => setSelectedSkin(null)}
                            className="absolute top-4 right-4 text-white hover:text-red-500 font-bold text-2xl z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
                        >
                            ×
                        </button>

                        <div className="w-full md:w-1/2 bg-neutral-800 p-8 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]">
                             <img 
                                src={selectedSkin.imageUrl} 
                                alt={selectedSkin.name}
                                className="max-h-[60vh] object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                                style={{ imageRendering: 'pixelated' }}
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-8 flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-3xl md:text-4xl font-pixel text-white">{selectedSkin.name}</h2>
                                {selectedSkin.isAiGenerated && (
                                    <span className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded border border-purple-500 font-pixel">
                                        GERADA POR IA
                                    </span>
                                )}
                            </div>
                            
                            <p className="text-gray-300 italic mb-6 border-l-4 border-mc-green pl-4 py-1">
                                "{selectedSkin.description}"
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedSkin.tags.map(tag => (
                                    <span key={tag} className="bg-neutral-700 text-white px-3 py-1 rounded text-sm font-semibold border border-neutral-600">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto space-y-4">
                                <div className="flex justify-between text-gray-400 font-pixel border-t border-gray-700 pt-4">
                                    <span>Downloads: {selectedSkin.downloads}</span>
                                    <span>Likes: {selectedSkin.likes}</span>
                                </div>
                                
                                <button className="w-full py-4 bg-mc-green hover:bg-green-600 text-white font-pixel text-xl border-b-4 border-green-800 active:border-b-0 active:translate-y-1 transition-all rounded shadow flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    BAIXAR SKIN
                                </button>
                                <button className="w-full py-2 bg-neutral-700 hover:bg-neutral-600 text-white font-pixel border border-neutral-500 rounded">
                                    EDITAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};