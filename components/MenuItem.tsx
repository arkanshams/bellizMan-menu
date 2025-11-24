import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItemProps {
  name: string;
  description: string;
  color: string;
  price: string;
  imageQuery: string;
}

export function MenuItem({ name, description, color, price, imageQuery }: MenuItemProps) {
  return (
    <div 
      className="rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-4 bg-white/80 backdrop-blur-sm"
      style={{ 
        borderColor: color 
      }}
      dir="rtl"
    >
      {/* Image Section */}
      <div className="mb-4 rounded-xl overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
        <ImageWithFallback
          src={`https://via.placeholder.com/300x200/fecd07/ffffff?text=${encodeURIComponent(name)}`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-right">
        <div className="flex items-center justify-between mb-3 gap-3">
          <h3 className="text-gray-800 flex-1">{name}</h3>
          <div 
            className="px-4 py-2 rounded-full text-white flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <span className="text-lg">{price}</span>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
