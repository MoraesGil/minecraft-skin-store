import React from 'react';

interface HeroProps {
    onViewChange: (view: 'gallery' | 'generator') => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
    return (
        <div className="bg-mc-dark/80 border-4 border-mc-gray rounded-lg p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-pixel text-white mb-6 leading-tight">
                    Sua Identidade <span className="text-mc-green block md:inline">Cúbica</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 font-light">
                    Explore milhares de skins criadas pela comunidade ou use nossa Inteligência Artificial avançada para forjar uma aparência única para sua próxima aventura.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => onViewChange('generator')}
                        className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-pixel text-lg border-b-4 border-purple-800 active:border-b-0 active:translate-y-1 transition-all rounded shadow-lg"
                    >
                        CRIAR SKIN AGORA
                    </button>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Buscar skin..." 
                            className="w-full sm:w-64 px-4 py-4 bg-mc-gray border-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-mc-green font-pixel"
                        />
                        <span className="absolute right-4 top-4 text-gray-400">🔍</span>
                    </div>
                </div>
            </div>
        </div>
    );
};