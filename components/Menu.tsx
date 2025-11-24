import { MenuItem } from './MenuItem';
import { Beef, Pizza, Salad, Flame, Coffee } from 'lucide-react';

interface MenuProps {
  activeCategory: string;
}

export function Menu({ activeCategory }: MenuProps) {
  const menuData = {
    'سیب زمینی': [
      { name: 'سیب مخصوص بلیز من', description: 'سیب زمینی فرنچ پرمیوم همراه با پنیر چدار، سس ویژه و ادویه مخصوص', price: '۱۲۵,۰۰۰ تومان', imageQuery: 'french fries cheese' },
      { name: 'سیب ساده', description: 'سیب زمینی فرنچ کلاسیک تازه و ترد', price: '۴۵,۰۰۰ تومان', imageQuery: 'french fries' },
      { name: 'سیب ویفری', description: 'سیب زمینی ویفری ضخیم و برشته شده', price: '۶۵,۰۰۰ تومان', imageQuery: 'waffle fries' },
      { name: 'سیب پیچ پیچی', description: 'سیب زمینی پیچ پیچی خوشمزه و ترد', price: '۵۵,۰۰۰ تومان', imageQuery: 'curly fries' },
      { name: 'سیب سوخاری', description: 'سیب زمینی سوخاری کروکت شده با پوشش ترد', price: '۷۵,۰۰۰ تومان', imageQuery: 'potato croquettes' },
      { name: 'سیب جورو نسکو', description: 'سیب زمینی استریپس ضخیم و طلایی', price: '۸۵,۰۰۰ تومان', imageQuery: 'potato wedges' },
    ],
    'پیتزاها': [
      { name: 'پیتزا پپرونی', description: 'پیتزا پپرونی با گوشت، قارچ، فلفل دلمه و پنیر پروسس', price: '۱۸۵,۰۰۰ تومان', imageQuery: 'pepperoni pizza' },
      { name: 'پیتزا کلاسیک', description: 'پیتزا کلاسیک با پنیر گودا و مواد تازه', price: '۱۶۵,۰۰۰ تومان', imageQuery: 'classic pizza' },
      { name: 'پیتزا گاریبالدی', description: 'پیتزا با گوشت چرخ کرده و پنیر ویژه', price: '۱۹۵,۰۰۰ تومان', imageQuery: 'meat pizza' },
      { name: 'پیتزا چیکن', description: 'پیتزا مرغ با فیله مرغ و پنیر پروسس', price: '۱۷۵,۰۰۰ تومان', imageQuery: 'chicken pizza' },
      { name: 'پیتزا سبزیجات', description: 'پیتزا سبزیجات تازه با پنیر', price: '۱۵۵,۰۰۰ تومان', imageQuery: 'vegetable pizza' },
      { name: 'پیتزا مخصوص', description: 'پیتزا مخصوص بلیز من با ترکیبات ویژه', price: '۲۲۵,۰۰۰ تومان', imageQuery: 'supreme pizza' },
    ],
    'سالادها': [
      { name: 'سالاد سزار مرغ', description: 'کاهو، مرغ کریل، نان تست، سس کریمی و پنیر پارمزان', price: '۱۳۵,۰۰۰ تومان', imageQuery: 'chicken caesar salad' },
      { name: 'سالاد سزار سوخاری', description: 'کاهو، فیله سوخاری، نان تست، سس کریمی و پنیر پارمزان', price: '۱۴۵,۰۰۰ تومان', imageQuery: 'crispy chicken salad' },
      { name: 'سالاد شف', description: 'کاهو، گوجه فرنگی، خیار، ذرت و زیتون', price: '۹۵,۰۰۰ تومان', imageQuery: 'chef salad' },
      { name: 'سالاد یونانی', description: 'کاهو، فتا، زیتون، گوجه و خیار', price: '۱۱۵,۰۰۰ تومان', imageQuery: 'greek salad' },
    ],
    'دیپ های گرم': [
      { name: 'دیپ چدار', description: 'پنیر چدار کرمی شده با ادویه ویژه', price: '۴۵,۰۰۰ تومان', imageQuery: 'cheddar dip' },
      { name: 'دیپ اسفناج', description: 'اسفناج و پنیر ذوب شده', price: '۵۵,۰۰۰ تومان', imageQuery: 'spinach dip' },
      { name: 'دیپ پنیر پارمزان', description: 'پنیر پارمزان با ادویه خاص', price: '۶۵,۰۰۰ تومان', imageQuery: 'parmesan dip' },
      { name: 'دیپ مخلوط', description: 'ترکیبی از پنیرهای مختلف', price: '۷۵,۰۰۰ تومان', imageQuery: 'cheese dip' },
    ],
    'نوشیدنی ها': [
      { name: 'لیموناد', description: 'لیمو تازه با شربت', price: '۳۵,۰۰۰ تومان', imageQuery: 'lemonade drink' },
      { name: 'موهیتو', description: 'نوشیدنی خنک با نعناع تازه', price: '۴۵,۰۰۰ تومان', imageQuery: 'mojito drink' },
      { name: 'بلو هاوایی', description: 'نوشیدنی استوایی رنگارنگ', price: '۵۵,۰۰۰ تومان', imageQuery: 'blue hawaii drink' },
      { name: 'نوشابه', description: 'انواع نوشابه گازدار', price: '۲۰,۰۰۰ تومان', imageQuery: 'soda can' },
      { name: 'کولا', description: 'کوکاکولا یا پپسی', price: '۲۵,۰۰۰ تومان', imageQuery: 'cola drink' },
      { name: 'آب پرتقال', description: 'آب پرتقال تازه', price: '۳۸,۰۰۰ تومان', imageQuery: 'orange juice' },
      { name: 'سون آپ', description: 'نوشابه لیمویی', price: '۲۲,۰۰۰ تومان', imageQuery: 'lemon soda' },
      { name: 'لیموناد توت فرنگی', description: 'لیموناد با طعم توت فرنگی', price: '۴۲,۰۰۰ تومان', imageQuery: 'strawberry lemonade' },
      { name: 'دلستر', description: 'نوشیدنی انرژی زا', price: '۳۵,۰۰۰ تومان', imageQuery: 'energy drink' },
      { name: 'آب معدنی', description: 'آب معدنی', price: '۱۵,۰۰۰ تومان', imageQuery: 'water bottle' },
    ],
  };

  const items = menuData[activeCategory as keyof typeof menuData] || [];

  const getCategoryColor = () => {
    switch (activeCategory) {
      case 'پیتزاها':
        return '#93298d';
      case 'سالادها':
        return '#edc7de';
      case 'دیپ های گرم':
        return '#fecd07';
      case 'نوشیدنی ها':
        return '#93298d';
      default:
        return '#fecd07';
    }
  };

  const getCategoryIcon = () => {
    switch (activeCategory) {
      case 'سیب زمینی':
        return Beef;
      case 'پیتزاها':
        return Pizza;
      case 'سالادها':
        return Salad;
      case 'دیپ های گرم':
        return Flame;
      case 'نوشیدنی ها':
        return Coffee;
      default:
        return Beef;
    }
  };

  const CategoryIcon = getCategoryIcon();
  const categoryColor = getCategoryColor();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12" dir="rtl">
      {/* Category Header - Right Aligned */}
      <div className="flex items-center justify-end gap-4 mb-8 lg:mb-12">
        <div 
          className="px-8 py-4 rounded-full flex items-center gap-3 shadow-lg ml-auto"
          style={{ backgroundColor: categoryColor }}
        >
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center">
            <CategoryIcon 
              className="w-6 h-6 lg:w-8 lg:h-8" 
              style={{ color: categoryColor }}
            />
          </div>
          <h2 className="text-white text-2xl lg:text-3xl">{activeCategory}</h2>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            description={item.description}
            color={categoryColor}
            price={item.price}
            imageQuery={item.imageQuery}
          />
        ))}
      </div>
    </div>
  );
}
