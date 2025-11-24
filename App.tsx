import { useState } from 'react';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import logo from 'figma:asset/6c904ebce386ee37f39621af28a81d47dad892d0.png';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('سیب زمینی');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef3ff] via-[#fff9f0] to-[#fffaed]" dir="rtl">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        {/* Main Content */}
        <div className="flex-1 pb-24 lg:pb-0 pt-16 lg:pt-0">
          {/* Header with Logo */}
          <header className="bg-gradient-to-l from-[#93298d] to-[#fecd07] p-6 lg:p-8 sticky top-16 lg:top-0 z-40 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-center">
              <img 
                src={logo} 
                alt="Buzz Man Logo" 
                className="h-20 lg:h-28 w-auto"
              />
            </div>
          </header>

          {/* Menu Content */}
          <Menu activeCategory={activeCategory} />
        </div>
      </div>
    </div>
  );
}