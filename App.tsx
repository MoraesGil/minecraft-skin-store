import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkinGallery } from './components/SkinGallery';
import { SkinGenerator } from './components/SkinGenerator';
import { Footer } from './components/Footer';
import { Skin } from './types';
import { INITIAL_SKINS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'gallery' | 'generator'>('gallery');
  const [skins, setSkins] = useState<Skin[]>(INITIAL_SKINS);

  const handleSkinGenerated = (newSkin: Skin) => {
    setSkins(prev => [newSkin, ...prev]);
    setCurrentView('gallery');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-100 bg-neutral-900 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentView === 'gallery' ? (
          <>
            <Hero onViewChange={setCurrentView} />
            <div className="mt-12">
               <h2 className="text-3xl font-pixel text-mc-green mb-6 border-b-4 border-mc-gray pb-2 inline-block">
                 Galeria de Skins Recentes
               </h2>
               <SkinGallery skins={skins} />
            </div>
          </>
        ) : (
          <SkinGenerator onSkinGenerated={handleSkinGenerated} onCancel={() => setCurrentView('gallery')} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;