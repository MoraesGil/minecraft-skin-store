import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-mc-dark border-t-4 border-mc-gray py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="font-pixel text-gray-400 mb-2">
                    MineSkins Portal AI &copy; {new Date().getFullYear()}
                </p>
                <p className="text-xs text-gray-600 max-w-md mx-auto">
                    Não afiliado à Mojang Studios. Minecraft é uma marca registrada da Mojang Synergies AB.
                    Este site usa Google Gemini para geração de conteúdo criativo.
                </p>
                <div className="flex justify-center gap-4 mt-4 text-2xl">
                    <span className="cursor-pointer hover:scale-110 transition-transform">🐦</span>
                    <span className="cursor-pointer hover:scale-110 transition-transform">👾</span>
                    <span className="cursor-pointer hover:scale-110 transition-transform">📸</span>
                </div>
            </div>
        </footer>
    );
};