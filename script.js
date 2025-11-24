// Menu Data
const menuData = {
  "سیب زمینی": {
    color: "#fecd07",
    icon: "beef",
    items: [
      {
        name: "سیب مخصوص بلیز من",
        description:
          "سیب زمینی فرنچ پرمیوم همراه با پنیر چدار، سس ویژه و ادویه مخصوص",
        price: "۱۲۵,۰۰۰ تومان",
      },
      {
        name: "سیب ساده",
        description: "سیب زمینی فرنچ کلاسیک تازه و ترد",
        price: "۴۵,۰۰۰ تومان",
      },
      {
        name: "سیب ویفری",
        description: "سیب زمینی ویفری ضخیم و برشته شده",
        price: "۶۵,۰۰۰ تومان",
      },
      {
        name: "سیب پیچ پیچی",
        description: "سیب زمینی پیچ پیچی خوشمزه و ترد",
        price: "۵۵,۰۰۰ تومان",
      },
      {
        name: "سیب سوخاری",
        description: "سیب زمینی سوخاری کروکت شده با پوشش ترد",
        price: "۷۵,۰۰۰ تومان",
      },
      {
        name: "سیب جورو نسکو",
        description: "سیب زمینی استریپس ضخیم و طلایی",
        price: "۸۵,۰۰۰ تومان",
      },
    ],
  },
  پیتزاها: {
    color: "#93298d",
    icon: "pizza",
    items: [
      {
        name: "پیتزا پپرونی",
        description: "پیتزا پپرونی با گوشت، قارچ، فلفل دلمه و پنیر پروسس",
        price: "۱۸۵,۰۰۰ تومان",
      },
      {
        name: "پیتزا کلاسیک",
        description: "پیتزا کلاسیک با پنیر گودا و مواد تازه",
        price: "۱۶۵,۰۰۰ تومان",
      },
      {
        name: "پیتزا گاریبالدی",
        description: "پیتزا با گوشت چرخ کرده و پنیر ویژه",
        price: "۱۹۵,۰۰۰ تومان",
      },
      {
        name: "پیتزا چیکن",
        description: "پیتزا مرغ با فیله مرغ و پنیر پروسس",
        price: "۱۷۵,۰۰۰ تومان",
      },
      {
        name: "پیتزا سبزیجات",
        description: "پیتزا سبزیجات تازه با پنیر",
        price: "۱۵۵,۰۰۰ تومان",
      },
      {
        name: "پیتزا مخصوص",
        description: "پیتزا مخصوص بلیز من با ترکیبات ویژه",
        price: "۲۲۵,۰۰۰ تومان",
      },
    ],
  },
  سالادها: {
    color: "#fecd07",
    icon: "salad",
    items: [
      {
        name: "سالاد سزار مرغ",
        description: "کاهو، مرغ کریل، نان تست، سس کریمی و پنیر پارمزان",
        price: "۱۳۵,۰۰۰ تومان",
      },
      {
        name: "سالاد سزار سوخاری",
        description: "کاهو، فیله سوخاری، نان تست، سس کریمی و پنیر پارمزان",
        price: "۱۴۵,۰۰۰ تومان",
      },
      {
        name: "سالاد شف",
        description: "کاهو، گوجه فرنگی، خیار، ذرت و زیتون",
        price: "۹۵,۰۰۰ تومان",
      },
      {
        name: "سالاد یونانی",
        description: "کاهو، فتا، زیتون، گوجه و خیار",
        price: "۱۱۵,۰۰۰ تومان",
      },
    ],
  },
  "دیپ های گرم": {
    color: "#93298d",
    icon: "flame",
    items: [
      {
        name: "دیپ چدار",
        description: "پنیر چدار کرمی شده با ادویه ویژه",
        price: "۴۵,۰۰۰ تومان",
      },
      {
        name: "دیپ اسفناج",
        description: "اسفناج و پنیر ذوب شده",
        price: "۵۵,۰۰۰ تومان",
      }, 
      {
        name: "دیپ پنیر پارمزان",
        description: "پنیر پارمزان با ادویه خاص",
        price: "۶۵,۰۰۰ تومان",
      },
      {
        name: "دیپ مخلوط",
        description: "ترکیبی از پنیرهای مختلف",
        price: "۷۵,۰۰۰ تومان",
      },
    ],
  },
  "نوشیدنی ها": {
    color: "#fecd07",
    icon: "coffee",
    items: [
      {
        name: "لیموناد",
        description: "لیمو تازه با شربت",
        price: "۳۵,۰۰۰ تومان",
      },
      {
        name: "موهیتو",
        description: "نوشیدنی خنک با نعناع تازه",
        price: "۴۵,۰۰۰ تومان",
      },
      {
        name: "بلو هاوایی",
        description: "نوشیدنی استوایی رنگارنگ",
        price: "۵۵,۰۰۰ تومان",
      },
      {
        name: "نوشابه",
        description: "انواع نوشابه گازدار",
        price: "۲۰,۰۰۰ تومان",
      },
      { name: "کولا", description: "کوکاکولا یا پپسی", price: "۲۵,۰۰۰ تومان" },
      {
        name: "آب پرتقال",
        description: "آب پرتقال تازه",
        price: "۳۸,۰۰۰ تومان",
      },
      { name: "سون آپ", description: "نوشابه لیمویی", price: "۲۲,۰۰۰ تومان" },
      {
        name: "لیموناد توت فرنگی",
        description: "لیموناد با طعم توت فرنگی",
        price: "۴۲,۰۰۰ تومان",
      },
      { name: "دلستر", description: "نوشیدنی انرژی زا", price: "۳۵,۰۰۰ تومان" },
      { name: "آب معدنی", description: "آب معدنی", price: "۱۵,۰۰۰ تومان" },
    ],
  },
};

// Icons
const icons = {
  beef: '<path d="M4 17V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11"/><line x1="10" x2="10" y1="13" y2="13"/><line x1="14" x2="14" y1="13" y2="13"/><rect width="20" height="8" x="2" y="15" rx="2"/>',
  pizza:
    '<path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/>',
  salad:
    '<path d="M7 21h10"/><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"/>',
  flame:
    '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  coffee:
    '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
};

// State
let activeCategory = "سیب زمینی";

// Functions
function getIcon(iconName) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[iconName]}</svg>`;
}

function setActiveCategory(category) {
  activeCategory = category;
  renderAll();
}

function renderDesktopSidebar() {
  const sidebar = document.getElementById("desktopSidebar");
  sidebar.innerHTML = Object.keys(menuData)
    .map((category) => {
      const data = menuData[category];
      const isActive = category === activeCategory;
      return `
          <button onclick="setActiveCategory('${category}')" class="${
        isActive ? "active" : ""
      }">
            <div class="category-icon" style="background-color: ${
              isActive ? "#ffffff" : data.color
            }">
              <div style="color: ${isActive ? data.color : "#ffffff"}">
                ${getIcon(data.icon)}
              </div>
            </div>
          </button>
        `;
    })
    .join("");
}

function renderMobileNav() {
  const nav = document.getElementById("mobileNav");
  nav.innerHTML = Object.keys(menuData)
    .map((category) => {
      const data = menuData[category];
      const isActive = category === activeCategory;
      return `
          <button onclick="setActiveCategory('${category}')" class="${
        isActive ? "active" : ""
      }">
            <div class="mobile-icon" style="background-color: ${
              isActive ? "#ffffff" : "transparent"
            }">
              <div style="color: ${isActive ? data.color : "#ffffff"}">
                ${getIcon(data.icon)}
              </div>
            </div>
          </button>
        `;
    })
    .join("");
}

function renderCategoryHeader() {
  const header = document.getElementById("categoryHeader");
  const data = menuData[activeCategory];
  header.innerHTML = `
        <div class="category-badge" style="background-color: ${data.color}">
          <div class="category-badge-icon">
            <div style="color: ${data.color}">
              ${getIcon(data.icon)}
            </div>
          </div>
          <h2 class="category-badge-text">${activeCategory}</h2>
        </div>
      `;
}

function renderMenuGrid() {
  const grid = document.getElementById("menuGrid");
  const data = menuData[activeCategory];
  grid.innerHTML = data.items
    .map(
      (item) => `
        <div class="menu-item" style="border-color: ${data.color}">
          <div class="menu-item-image">
            <img src="https://via.placeholder.com/300x200/${data.color.replace(
              "#",
              ""
            )}/ffffff?text=${encodeURIComponent(item.name)}" alt="${item.name}">
          </div>
          <div class="menu-item-content">
            <div class="menu-item-header">
              <h3 class="menu-item-name">${item.name}</h3>
              <div class="menu-item-price" style="background-color: ${
                data.color
              }">
                <span>${item.price}</span>
              </div>
            </div>
            <p class="menu-item-description">${item.description}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderAll() {
  renderDesktopSidebar();
  renderMobileNav();
  renderCategoryHeader();
  renderMenuGrid();
}

// Initialize
renderAll();
