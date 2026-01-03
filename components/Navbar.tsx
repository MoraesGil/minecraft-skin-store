import React from 'react';

interface NavbarProps {
    currentView: 'gallery' | 'generator';
    onViewChange: (view: 'gallery' | 'generator') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
    return (
        <nav className="bg-mc-dark border-b-4 border-mc-green sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <div 
                    className="flex items-center gap-3 cursor-pointer mb-4 md:mb-0"
                    onClick={() => onViewChange('gallery')}
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-700 border-2 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                        <span className="text-white text-2xl font-bold">M</span>
                    </div>
                    <h1 className="text-2xl font-pixel text-white tracking-widest drop-shadow-md">
                        MINESKINS<span className="text-mc-green">.AI</span>
                    </h1>
                </div>

                <div className="flex gap-4">
                    <button 
                        onClick={() => onViewChange('gallery')}
                        className={`px-4 py-2 font-bold font-pixel transition-all duration-200 border-2 ${
                            currentView === 'gallery' 
                            ? 'bg-mc-green text-white border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transform translate-y-[-2px]' 
                            : 'bg-mc-gray text-gray-300 border-transparent hover:bg-gray-600'
                        }`}
                    >
                        EXPLORAR
                    </button>
                    <button 
                        onClick={() => onViewChange('generator')}
                        className={`px-4 py-2 font-bold font-pixel transition-all duration-200 border-2 ${
                            currentView === 'generator' 
                            ? 'bg-purple-600 text-white border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transform translate-y-[-2px]' 
                            : 'bg-mc-gray text-gray-300 border-transparent hover:bg-purple-900/50'
                        }`}
                    >
                        CRIAR COM IA ✨
                    </button>
                </div>
            </div>
        </nav>
    );
};