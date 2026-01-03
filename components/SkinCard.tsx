import React from 'react';
import { Skin } from '../types';

interface SkinCardProps {
    skin: Skin;
    onClick: (skin: Skin) => void;
}

export const SkinCard: React.FC<SkinCardProps> = ({ skin, onClick }) => {
    return (
        <div 
            onClick={() => onClick(skin)}
            className="group bg-mc-gray/50 border-2 border-gray-700 hover:border-mc-green transition-all duration-300 rounded overflow-hidden cursor-pointer hover:shadow-[0px_0px_15px_rgba(86,131,56,0.5)] flex flex-col h-full"
        >
            <div className="relative aspect-[3/4] bg-neutral-800 overflow-hidden flex items-center justify-center p-4">
                {/* Background grid effect */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                
                <img 
                    src={skin.imageUrl} 
                    alt={skin.name}
                    className="h-full w-auto object-contain image-pixelated transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)]"
                    style={{ imageRendering: 'pixelated' }}
                />
                
                {skin.isAiGenerated && (
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 font-bold font-pixel border border-purple-400 rounded shadow-md">
                        IA ✨
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow bg-neutral-900 border-t-4 border-neutral-800">
                <h3 className="text-xl font-pixel text-white truncate mb-1 text-shadow">{skin.name}</h3>
                <div className="flex gap-2 mb-3 overflow-hidden">
                    {skin.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs bg-neutral-800 text-mc-green px-2 py-0.5 rounded border border-neutral-700 font-pixel uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex justify-between items-center text-gray-400 text-sm font-mono">
                    <span className="flex items-center gap-1 hover:text-white transition-colors">
                        ⬇ {skin.downloads}
                    </span>
                    <span className="flex items-center gap-1 hover:text-red-400 transition-colors">
                        ♥ {skin.likes}
                    </span>
                </div>
            </div>
        </div>
    );
};