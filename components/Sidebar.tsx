import { Beef, Pizza, Salad, Flame, Coffee, Instagram, MapPin, Phone } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export function Sidebar({ activeCategory, setActiveCategory }: SidebarProps) {
  const categories = [
    { 
      name: 'سیب زمینی', 
      icon: Beef,
      color: '#fecd07'
    },
    { 
      name: 'پیتزاها', 
      icon: Pizza,
      color: '#93298d'
    },
    { 
      name: 'سالادها', 
      icon: Salad,
      color: '#edc7de'
    },
    { 
      name: 'دیپ های گرم', 
      icon: Flame,
      color: '#fecd07'
    },
    { 
      name: 'نوشیدنی ها', 
      icon: Coffee,
      color: '#93298d'
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-20 xl:w-24 bg-gradient-to-b from-[#93298d] to-[#fecd07] py-8 gap-6 items-center sticky top-0 h-screen">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;
          
          return (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`group flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:scale-110 ${
                isActive ? 'bg-white/20' : ''
              }`}
              title={category.name}
            >
              <div 
                className="w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center transition-transform"
                style={{ backgroundColor: isActive ? '#ffffff' : category.color }}
              >
                <Icon 
                  className="w-6 h-6 xl:w-7 xl:h-7" 
                  style={{ color: isActive ? category.color : '#ffffff' }}
                />
              </div>
            </button>
          );
        })}
      </aside>

      {/* Mobile Top Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-[#93298d] to-[#fecd07] p-3 z-50 shadow-lg">
        <div className="flex justify-around items-center max-w-2xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  isActive ? 'scale-110' : ''
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ backgroundColor: isActive ? '#ffffff' : 'transparent' }}
                >
                  <Icon 
                    className="w-5 h-5" 
                    style={{ color: isActive ? category.color : '#ffffff' }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Bar with Social Icons */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#93298d] to-[#fecd07] p-4 z-50 shadow-lg">
        <div className="flex justify-around items-center max-w-2xl mx-auto">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Instagram className="w-5 h-5" />
            </div>
            <span className="text-xs">اینستاگرام</span>
          </a>
          
          <a 
            href="tel:+989123456789" 
            className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs">تماس</span>
          </a>
          
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs">موقعیت</span>
          </a>
        </div>
      </div>
    </>
  );
}