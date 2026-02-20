import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import thabolam1 from '../../../public/assets/thabolam1.jpeg';
import thabolam2 from '../../../public/assets/thabolam2.jpeg';
import thabolam3 from '../../../public/assets/thabolam3.jpeg';

// --- MULTI-LANGUAGE INTERFACE TEXT ---
const uiText = {
  en: {
    subtitle: "Gastronomic Delight",
    title: "Our",
    titleHighlight: "Menu",
    desc: "Explore our curated selection of authentic dishes, prepared with passion and the finest ingredients to honor tradition.",
    enquiryTitle: "Enquiry",
    cancel: "Cancel",
    proceed: "Proceed",
    currency: "₹"
  },
  ta: {
    subtitle: "சுவையான உணவு",
    title: "எங்கள்",
    titleHighlight: "மெனு",
    desc: "பாரம்பரியத்தை போற்றும் வகையில், மிகச்சிறந்த பொருட்களுடன், அன்போடு தயாரிக்கப்பட்ட எங்களின் தனித்துவமான உணவு வகைகளை ருசிக்கவும்.",
    enquiryTitle: "விசாரணை",
    cancel: "ரத்து",
    proceed: "தொடரவும்",
    currency: "₹"
  }
};

const categoryConfig = [
  { key: "Breakfast", label: { en: "Breakfast", ta: "காலை உணவு" } },
  { key: "Lunch", label: { en: "Lunch", ta: "மதிய உணவு" } },
  { key: "Dinner", label: { en: "Dinner", ta: "இரவு உணவு" } },
  { key: "Desserts", label: { en: "Sweets", ta: "இனிப்புகள்" } },
  { key: "Chat counters", label: { en: "Chat Counter", ta: "சாட் உணவுப் பிரிவு" } },
  { key: "Evening Counters", label: { en: "Evening Counters", ta: "மாலை சிற்றுண்டி" } },
  { key: "Welcome Juice", label: { en: "Welcome Juice", ta: "வரவேற்பு பானம்" } },
  { key: "Thambulam Bags", label: { en: "Thambulam Bags", ta: "தாம்பூலப் பைகள்" } },
];

const menuItems = {
  Breakfast: [
    { 
      id: 1, 
      image: "https://www.indianveggiedelight.com/wp-content/uploads/2021/11/ven-pongal-featured.jpg", 
      tag: { en: "Bestseller", ta: "பிரபலம்" },
      name: { en: "Ghee Pongal", ta: "நெய் பொங்கல்" }, 
      desc: { 
        en: "Soft rice and lentils cooked in pure cow ghee with cashews and pepper.", 
        ta: "முந்திரி மற்றும் மிளகு சேர்த்து, தூய பசு நெய்யில் சமைக்கப்பட்ட மென்மையான அரிசி மற்றும் பருப்பு." 
      }
    },
    { 
      id: 2, 
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", 
      tag: { en: "Signature", ta: "சிறப்பு" },
      name: { en: "Kanjeevaram Idli", ta: "காஞ்சிபுரம் இட்லி" }, 
      desc: { 
        en: "Soft, tasty idli made with light spices and cooked in special leaves.", 
        ta: "மிதமான மசாலாப் பொருட்களுடன், மந்தார இலைகளில் சமைக்கப்பட்ட மென்மையான மற்றும் சுவையான இட்லி." 
      }
    },
    { 
      id: 3, 
      image: "https://traditionallymodernfood.com/wp-content/uploads/2022/02/vada-curry-vadakari-4-841x1024.jpeg", 
      tag: null,
      name: { en: "Vada Kari", ta: "வடகறி" }, 
      desc: { 
        en: "Crispy donut-shaped lentil fritters, served with coconut chutney and sambar.", 
        ta: "வடை சேர்த்து செய்யப்பட்ட சுவையான கிரேவி. தேங்காய் சட்னி மற்றும் சாம்பாருடன் பரிமாறப்படுகிறது." 
      }
    },
    { 
      id: 4, 
      image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=600&q=80", 
      tag: null,
      name: { en: "Poori Masala", ta: "பூரி மசாலா" }, 
      desc: { 
        en: "Fluffy wheat bread served with a spiced potato & onion curry.", 
        ta: "உருளைக்கிழங்கு மசாலாவுடன் பரிமாறப்படும் பொன்னிறமான பூரி." 
      }
    },
    { 
      id: 5, 
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7yq2Jf6anaGqqmiPRb40T43UjZK7QmMnSQk6FxmFkt63DsI6xCAcrpXhbSIZQTpLidMAMTxPDxPBrjYe_vusMk6NAYu70wa5_Gptd5GGVInAdAA_B0JItCx3McfMy_gC308scozQh49Y/s1600/IMG_20190820_152853.jpg", 
      tag: null,
      name: { en: "Kesari", ta: "கேசரி" }, 
      desc: { 
        en: "Sweet made with rava, sugar, and ghee. Usually served in functions.", 
        ta: "ரவை, சர்க்கரை மற்றும் நெய் சேர்த்து செய்யப்பட்ட இனிப்பு. இது விசேஷங்களில் மிகவும் பிரபலம்." 
      }
    },
    { 
      id: 6, 
      image: "https://www.awesomecuisine.com/wp-content/uploads/2008/02/idiyappam.jpg", 
      tag: null,
      name: { en: "Idiyappam", ta: "இடியாப்பம்" }, 
      desc: { 
        en: "Soft string rice noodles served with sweet coconut milk.", 
        ta: "இனிப்பு தேங்காய் பாலுடன் பரிமாறப்படும் மென்மையான இடியாப்பம்." 
      }
    }
  ],
  Lunch: [
    { 
      id: 7, 
      image: "https://tse1.mm.bing.net/th/id/OIP.YG95IXw215wyaqfX0Mik7QHaEK?pid=Api&P=0&h=180", 
      tag: null,
      name: { en: "Rice", ta: "சாதம்" }, 
      desc: { 
        en: "Soft cooked grains that serve as the main food in most meals.", 
        ta: "கறி, குழம்பு அல்லது சாம்பாருடன் சாப்பிடக்கூடிய மென்மையான சாதம்." 
      }
    },
    { 
      id: 8, 
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar.jpg", 
      tag: null,
      name: { en: "Sambar", ta: "சாம்பார்" }, 
      desc: { 
        en: "A mixed vegetable dal curry. It is healthy and very tasty.", 
        ta: "காய்கறிகள் மற்றும் பருப்பு சேர்த்து செய்யப்பட்ட ஆரோக்கியமான மற்றும் சுவையான குழம்பு." 
      }
    },
    { 
      id: 9, 
      image: "https://www.padhuskitchen.com/wp-content/uploads/2018/03/vendakkaipulikulambu.jpg", 
      tag: null,
      name: { en: "Puli Kulambu", ta: "புளிக்குழம்பு" }, 
      desc: { 
        en: "A tangy tamarind curry served with rice.", 
        ta: "புளி மற்றும் மசாலா சேர்த்து செய்யப்பட்ட காரமான மற்றும் சுவையான குழம்பு." 
      }
    },
    { 
      id: 10, 
      image: "https://paattiskitchen.com/wp-content/uploads/2022/11/kmc_20221106_190919-1200x675.jpg", 
      tag: null,
      name: { en: "Poriyal", ta: "பொரியல்" }, 
      desc: { 
        en: "Lightly fried vegetables cooked with coconut and mild spices.", 
        ta: "தேங்காய் மற்றும் மிதமான மசாலா சேர்த்து வதக்கிய காய்கறிகள்." 
      }
    },
    { 
      id: 11, 
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/11/rasam-recipe.jpg", 
      tag: null,
      name: { en: "Rasam", ta: "ரசம்" }, 
      desc: { 
        en: "A thin, spicy, and sour soup made with tamarind and pepper.", 
        ta: "புளி, மிளகு மற்றும் சீரகம் சேர்த்து செய்யப்பட்ட ஜீரணத்தை தூண்டும் சூப்." 
      }
    },
    { 
      id: 12, 
      image: "http://cravecookclick.com/wp-content/uploads/2014/09/IMG_9229-2.jpg", 
      tag: null,
      name: { en: "Paruppu Payasam", ta: "பருப்பு பாயசம்" }, 
      desc: { 
        en: "A sweet made with dal, jaggery, and coconut.", 
        ta: "பருப்பு, வெல்லம் மற்றும் தேங்காய் பால் சேர்த்து செய்யப்பட்ட பாரம்பரிய இனிப்பு." 
      }
    }
  ],
  Dinner: [
    { 
      id: 13, 
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", 
      tag: null,
      name: { en: "Kal Dosa", ta: "கல் தோசை" }, 
      desc: { 
        en: "Thick, soft dosa cooked on a hot stone. Crispy outside, soft inside.", 
        ta: "சூடான கல்லில் சுடப்பட்ட, வெளிப்புறம் மொறுமொறுப்பாகவும் உள்ளே மென்மையாகவும் இருக்கும் தோசை." 
      }
    },
    { 
      id: 14, 
      image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/cf/74/3f/parotta-salna-with-chutney.jpg", 
      tag: { en: "Classic", ta: "கிளாசிக்" },
      name: { en: "Parotta Salna", ta: "பரோட்டா சால்னா" }, 
      desc: { 
        en: "Flaky layered flatbread served with a rich, empty salna gravy.", 
        ta: "அடுக்கு பரோட்டா மற்றும் சுவையான சால்னா கிரேவி." 
      }
    },
    { 
      id: 15, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpKRs9S5Lc1XUFjgwbg7QuZxtZ0ox4zlujg&s", 
      tag: { en: "Light", ta: "லேசான உணவு" },
      name: { en: "Idiyappam", ta: "இடியாப்பம்" }, 
      desc: { 
        en: "Steamed rice string hoppers with a mild coconut milk vegetable stew.", 
        ta: "ஆவியில் வேகவைத்த இடியாப்பம் மற்றும் தேங்காய் பால் குருமா." 
      }
    },
    { 
      id: 16, 
      image: "https://tse3.mm.bing.net/th/id/OIP.dVhsa6_d0Sw1QnmqdZBvQgHaEK?pid=Api&P=0&h=180", 
      tag: { en: "Spicy", ta: "காரம்" },
      name: { en: "Kothu Parotta", ta: "கொத்து பரோட்டா" }, 
      desc: { 
        en: "Chopped parotta fried with eggs/vegetables and spices.", 
        ta: "முட்டை, காய்கறிகள் மற்றும் மசாலா சேர்த்து கொத்தி போடப்பட்ட பரோட்டா." 
      }
    },
    { 
      id: 17, 
      image: "https://vismaifood.com/storage/app/uploads/public/45a/29b/a17/thumb__700_0_0_0_auto.jpg", 
      tag: { en: "Light", ta: "லேசான உணவு" },
      name: { en: "Masala Dosa", ta: "மசால் தோசை" }, 
      desc: { 
        en: "Crispy dosa stuffed with spiced potato masala.", 
        ta: "உருளைக்கிழங்கு மசாலா உள்ளீடாக வைக்கப்பட்ட மொறுமொறுப்பான தோசை." 
      }
    },
    { 
      id: 18, 
      image: "https://www.krumpli.co.uk/wp-content/uploads/2023/05/Homemade-Indian-Chapati-02-1200x1200.jpg", 
      tag: { en: "Light", ta: "லேசான உணவு" },
      name: { en: "Chapati", ta: "சப்பாத்தி" }, 
      desc: { 
        en: "Soft wheat bread served with side dishes.", 
        ta: "சைட் டிஷ் உடன் சாப்பிடக்கூடிய மென்மையான கோதுமை சப்பாத்தி." 
      }
    },
  ],
  Desserts: [
  {
    id: 23,
    image: "https://m.media-amazon.com/images/I/618qkOUvliL._AC_UF350,350_QL80_.jpg",
    tag: { en: "Special", ta: "சிறப்பு" },
    name: { en: "Ghee Mysore Pak", ta: "நெய் மைசூர் பாக்" },
    desc: {
      en: "Rich gram flour sweet made with pure ghee and sugar.",
      ta: "நெய் மற்றும் கடலை மாவில் செய்யப்பட்ட சுவையான மைசூர் பாக்."
    }
  },
  {
    id: 24,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.jpg",
    tag: null,
    name: { en: "Jamun", ta: "ஜாமூன்" },
    desc: {
      en: "Soft fried dumplings soaked in sugar syrup.",
      ta: "சர்க்கரை பாகில் ஊறிய மென்மையான ஜாமூன்."
    }
  },
  {
    id: 25,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/kaju-katli.jpg",
    tag: null,
    name: { en: "Kaju Katli", ta: "காஜு கட்லி" },
    desc: {
      en: "Smooth cashew fudge with a delicate sweetness.",
      ta: "முந்திரியில் செய்யப்பட்ட மென்மையான இனிப்பு."
    }
  },
  {
    id: 26,
    image: "https://themodernvillage.store/media/iopt/catalog/product/cache/2b5712646a65adccb0b96ae3ea69cb78/image/346fdd0/kaju-anarkali.webp",
    tag: null,
    name: { en: "Anarkali", ta: "அனார்கலி" },
    desc: {
      en: "Layered milk sweet with rich flavors.",
      ta: "பாலில் செய்யப்பட்ட பல அடுக்குகள் கொண்ட இனிப்பு."
    }
  },
  {
    id: 27,
    image: "https://jodhpursweetsbangalore.com/wp-content/uploads/2024/08/Malai-sandwich-1-scaled.jpg",
    tag: null,
    name: { en: "Malai Sandwich", ta: "மலை சாண்ட்விச்" },
    desc: {
      en: "Soft paneer discs layered with creamy malai.",
      ta: "கிரீமி மலையுடன் செய்யப்பட்ட மென்மையான இனிப்பு."
    }
  },
  {
    id: 28,
    image: "https://www.ruchiskitchen.com/wp-content/uploads/2017/02/Rasmalai-recipe-01.jpg",
    tag: null,
    name: { en: "Rasamalai", ta: "ரசமலை" },
    desc: {
      en: "Soft cottage cheese balls soaked in flavored milk.",
      ta: "சுவைபூர்வமான பாலில் ஊறிய ரசமலை."
    }
  },
  {
    id: 29,
    image: "https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2021/03/00000IMG_00000_BURST20200611141633564_COVER-01.jpeg?fit=%2C&ssl=1",
    tag: null,
    name: { en: "Rose Malai", ta: "ரோஸ் மலை" },
    desc: {
      en: "Milk sweet flavored with rose essence.",
      ta: "ரோஸ் சுவையுடன் செய்யப்பட்ட பாலினிப்பு."
    }
  },
  {
    id: 30,
    image: "https://content.jdmagicbox.com/comp/def_content_category/zam-zam-sweets-and-bakery/419275609-752926539599990-4472104680677716157-n-zam-zam-sweets-and-bakery-999-x68u9.jpg",
    tag: { en: "Popular", ta: "பிரபலமானது" },
    name: { en: "Zam Zam Sweet", ta: "ஜம் ஜம் ஸ்வீட்" },
    desc: {
      en: "Traditional layered sweet soaked in sugar syrup.",
      ta: "சர்க்கரை பாகில் ஊறிய பாரம்பரிய இனிப்பு."
    }
  },
  {
    id: 31,
    image: "https://m.media-amazon.com/images/I/71DSRcj4qcL.jpg",
    tag: { en: "Special", ta: "சிறப்பு" },
    name: { en: "Halwa Special", ta: "ஹல்வா சிறப்பு" },
    desc: {
      en: "Classic rich halwa made with ghee and nuts.",
      ta: "நெய் மற்றும் நட்ஸ் சேர்த்து செய்யப்பட்ட ஹல்வா."
    }
  },
  {
    id: 32,
    image: "https://spicecravings.com/wp-content/uploads/2022/10/Badam-Halwa-Featured.jpg",
    tag: null,
    name: { en: "Badham Halwa", ta: "பாதாம் ஹல்வா" },
    desc: {
      en: "Almond-based rich and aromatic halwa.",
      ta: "பாதாமில் செய்யப்பட்ட சுவையான ஹல்வா."
    }
  },
  {
    id: 33,
    image: "https://www.orderyourchoice.com/124474-large_default/dumroot-halwa.jpg",
    tag: null,
    name: { en: "Damkarroot Halwa", ta: "கேரட் ஹல்வா" },
    desc: {
      en: "Sweet carrot dessert cooked with milk and ghee.",
      ta: "பால் மற்றும் நெய்யில் சமைத்த கேரட் ஹல்வா."
    }
  },
  {
    id: 34,
    image: "https://i0.wp.com/www.sharmiskitchen.com/wp-content/uploads/2017/08/Paal-Kozhukattai.jpg?fit=1199%2C1799&ssl=1",
    tag: { en: "Traditional", ta: "பாரம்பரியம்" },
    name: { en: "Pal Kozhukatta", ta: "பால் கொழுக்கட்டை" },
    desc: {
      en: "Rice dumplings cooked in sweet coconut milk.",
      ta: "தேங்காய் பாலில் செய்யப்பட்ட கொழுக்கட்டை."
    }
  },
  {
    id: 35,
    image: "https://cdn2.foodviva.com/static-content/food-images/dessert-recipes/paruppu-payasam-recipe/paruppu-payasam-recipe.jpg",
    tag: null,
    name: { en: "Parupu Payasam", ta: "பருப்பு பாயசம்" },
    desc: {
      en: "Moong dal payasam with jaggery and coconut milk.",
      ta: "வெல்லம் மற்றும் தேங்காய் பாலில் செய்யப்பட்ட பருப்பு பாயசம்."
    }
  },
  {
    id: 36,
    image: "https://www.jeyashriskitchen.com/wp-content/uploads/2014/07/akkara-adisal.jpg",
    tag: { en: "Traditional Special", ta: "பாரம்பரிய சிறப்பு" },
    name: { en: "Akkara Adisal", ta: "அக்கார அடிசல்" },
    desc: {
      en: "Traditional Tamil sweet made with rice, milk and jaggery.",
      ta: "அரிசி, பால் மற்றும் வெல்லத்தில் செய்யப்பட்ட பாரம்பரிய இனிப்பு."
    }
  }
],
  "Chat counters": [
  {
    id: 204,
    image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/pani_puri_73491_16x9.jpg",
    tag: { en: "Popular", ta: "பிரபலம்" },
    name: { en: "Pani Poori", ta: "பானி பூரி" },
    desc: {
      en: "Crispy hollow poori filled with spiced potatoes and tangy water.",
      ta: "உருளைக்கிழங்கு மசாலா மற்றும் புளிப்பு தண்ணீர் கலந்த பானி பூரி."
    }
  },
  {
    id: 205,
    image: "https://www.thecuriouschickpea.com/wp-content/uploads/2018/12/Tibetan-Veggie-Momos-1.jpg.webp",
    tag: null,
    name: { en: "Momos", ta: "மோமோஸ்" },
    desc: {
      en: "Steamed dumplings stuffed with vegetables or spicy fillings.",
      ta: "காய்கறி அல்லது காரமான பூரணத்துடன் செய்யப்பட்ட மோமோஸ்."
    }
  },
  {
    id: 206,
    image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2024/01/karupatti-paniyaram-recipe.jpg?resize=500%2C500&ssl=1",
    tag: null,
    name: { en: "Kuzhi Paniyaram (Sweet/Karam)", ta: "குழி பணியாரம் (இனிப்பு/காரம்)" },
    desc: {
      en: "Soft round paniyarams available in sweet and spicy varieties.",
      ta: "இனிப்பு மற்றும் கார சுவைகளில் கிடைக்கும் குழி பணியாரம்."
    }
  },
  {
    id: 207,
    image: "data:image/jpeg;base64,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",
    tag: null,
    name: { en: "Bhel Poori", ta: "பேல் பூரி" },
    desc: {
      en: "Crunchy puffed rice mixed with chutneys and vegetables.",
      ta: "பொரி, சட்னி மற்றும் காய்கறிகள் கலந்து செய்யப்பட்ட சாட்."
    }
  },
  {
    id: 208,
    image: "https://ministryofcurry.com/wp-content/uploads/2022/07/Dahi-Puri_-3.jpg",
    tag: null,
    name: { en: "Dahi Puri", ta: "தயிர் பூரி" },
    desc: {
      en: "Crispy pooris topped with fresh sweetened yogurt and chutneys.",
      ta: "இனிப்பு தயிர் மற்றும் சட்னி சேர்க்கப்பட்ட சுவையான தயிர் பூரி."
    }
  },
  {
    id: 209,
    image: "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A=",
    tag: null,
    name: { en: "Masala Poori", ta: "மசாலா பூரி" },
    desc: {
      en: "Crushed pooris topped with spicy masala and chutneys.",
      ta: "கார மசாலா மற்றும் சட்னி சேர்க்கப்பட்ட மசாலா பூரி."
    }
  },
  {
    id: 210,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1-500x500.jpg",
    tag: { en: "Popular", ta: "பிரபலம்" },
    name: { en: "Samosa", ta: "சமோசா" },
    desc: {
      en: "Crispy fried pastry filled with spicy potato stuffing.",
      ta: "உருளைக்கிழங்கு பூரணத்துடன் செய்யப்பட்ட காரமான சமோசா."
    }
  },
  {
    id: 211,
    image: "https://images.onlymyhealth.com/tamil/2024/02/sale-of-cotton-candy-banned-in-tamil-nadu-main.jpg",
    tag: null,
    name: { en: "Panju Mittai", ta: "பஞ்சு மிட்டாய்" },
    desc: {
      en: "Colorful fluffy cotton candy loved by kids.",
      ta: "குழந்தைகள் விரும்பும் நிறமுள்ள பஞ்சு மிட்டாய்."
    }
  },
  {
    id: 212,
    image: "https://www.simplyrecipes.com/thmb/Xzggu-Md45HKhhYSw4DK8tGlZ_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Perfect-Popcorn-LEAD-41-4a75a18443ae45aa96053f30a3ed0a6b.JPG",
    tag: null,
    name: { en: "Pop Corn", ta: "பாப்கார்ன்" },
    desc: {
      en: "Light and crunchy salted or butter popcorn.",
      ta: "உப்பு அல்லது வெண்ணெய் சேர்க்கப்பட்ட குர்குரப்பான பாப்கார்ன்."
    }
  },
  {
    id: 213,
    image: "https://premasculinary.com/wp-content/uploads/2022/10/%E0%AE%9A%E0%AF%81%E0%AE%B4%E0%AE%BF%E0%AE%AF%E0%AE%AE%E0%AF%8D-Susiyam-Recipe-in-Tamil-How-to-make-Suzhiyam-Sweets-768x1024.jpg",
    tag: null,
    name: { en: "Sweet Suiyam", ta: "சுவீட் சுயியம்" },
    desc: {
      en: "Deep-fried sweet dumplings stuffed with jaggery and dal.",
      ta: "வெல்லம் மற்றும் பருப்பு பூரணத்துடன் செய்யப்பட்ட இனிப்பு சுயியம்."
    }
  }
],
  "Evening Counters": [
  {
    id: 301,
    image: "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/07/Mysore-Bonda-02.jpg",
    tag: null,
    name: { en: "Mysore Bonda", ta: "மைசூர் போண்டா" },
    desc: {
      en: "Crispy outside and soft inside fried dumplings made with urad dal.",
      ta: "உளுந்து மாவில் செய்யப்பட்ட மென்மையான மைசூர் போண்டா."
    }
  },
  {
    id: 302,
    image: "https://rakskitchen.net/wp-content/uploads/2015/08/bonda-recipe.jpg",
    tag: null,
    name: { en: "Medhu Bonda", ta: "மேது போண்டா" },
    desc: {
      en: "Soft and fluffy deep-fried lentil fritters.",
      ta: "மென்மையான மற்றும் சுவையான பருப்பு போண்டா."
    }
  },
  {
    id: 303,
    image: "https://images.archanaskitchen.com/images/recipes/snack-recipes/indian-snack-recipes/Aloo_Bonda_Deep_fried_snack_made_with_potato_filling_and_gram_flour_batter_895a9651ec.jpg",
    tag: null,
    name: { en: "Aloo Bonda", ta: "உருளைக்கிழங்கு போண்டா" },
    desc: {
      en: "Spiced mashed potato balls coated and deep fried.",
      ta: "மசாலா உருளைக்கிழங்கு பூரணத்துடன் செய்யப்பட்ட போண்டா."
    }
  },
  {
    id: 304,
    image: "https://i.ytimg.com/vi/7KhTfQ2Kr8w/maxresdefault.jpg",
    tag: null,
    name: { en: "Aloo Bajji", ta: "உருளைக்கிழங்கு பஜ்ஜி" },
    desc: {
      en: "Crispy potato slices dipped in gram flour batter and fried.",
      ta: "கடலை மாவில் நனைத்து பொறிக்கப்பட்ட உருளைக்கிழங்கு பஜ்ஜி."
    }
  },
  {
    id: 305,
    image: "https://gayathriscookspot.com/wp-content/uploads/2015/12/3-1.jpg",
    tag: { en: "Popular", ta: "பிரபலம்" },
    name: { en: "Onion Bajji", ta: "வெங்காய பஜ்ஜி" },
    desc: {
      en: "Golden fried onion fritters with crispy texture.",
      ta: "மொறுமொறுப்பான வெங்காய பஜ்ஜி."
    }
  },
  {
    id: 306,
    image: "https://cookingfromheart.com/wp-content/uploads/2017/08/Rava-Kesari-6.jpg",
    tag: { en: "Evening Sweet", ta: "மாலை இனிப்பு" },
    name: { en: "Kesari", ta: "கேசரி" },
    desc: {
      en: "Traditional semolina sweet flavored with ghee and saffron.",
      ta: "நெய் மற்றும் குங்குமப்பூ சேர்த்து செய்யப்பட்ட கேசரி."
    }
  },
  {
    id: 307,
    image: "https://media.istockphoto.com/id/1447442563/photo/homemade-carrot-pudding-gajar-halwa-indian-dessert.jpg?s=612x612&w=0&k=20&c=9O3ArX_Zp9nMA-7Ffpu6zxdoV9FRfcuajc1FlCyQuP8=",
    tag: null,
    name: { en: "Carrot Halwa", ta: "கேரட் ஹல்வா" },
    desc: {
      en: "Rich carrot dessert cooked with milk, ghee and nuts.",
      ta: "பால் மற்றும் நெய்யில் சமைத்த கேரட் ஹல்வா."
    }
  },
  {
    id: 308,
    image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2015/10/ash-gourd-halwa.jpg?w=1200&ssl=1",
    tag: null,
    name: { en: "Kasi Halwa", ta: "காசி ஹல்வா" },
    desc: {
      en: "Ash gourd halwa cooked with ghee and sugar.",
      ta: "பூசணிக்காய் கொண்டு செய்யப்பட்ட காசி ஹல்வா."
    }
  }
],
  "Welcome Juice": [
  {
    id: 401,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500",
    tag: { en: "Signature", ta: "சிறப்பு" },
    name: { en: "Madurai Special Jigarthanda", ta: "மதுரை ஜிகர்தண்டா" },
    desc: {
      en: "Authentic Madurai cooling drink with milk solids and almond resin.",
      ta: "பாதாம் பிசின் சேர்த்த மதுரையின் புகழ்பெற்ற ஜிகர்தண்டா."
    }
  },

  {
    id: 402,
    image: "https://www.rebootwithjoe.com/wp-content/uploads/2012/05/watermelon-pineapple-juice.jpg",
    tag: { en: "Fresh Juice", ta: "புதிய சாறு" },
    name: { en: "Water Melon", ta: "தர்பூசணி சாறு" },
    desc: {
      en: "Freshly pressed chilled watermelon juice.",
      ta: "புத்துணர்ச்சி தரும் குளிர்ச்சியான தர்பூசணி சாறு."
    }
  },
  {
    id: 403,
    image: "https://i.redd.it/k6swcc83lli81.jpg",
    tag: { en: "Fresh Juice", ta: "புதிய சாறு" },
    name: { en: "Orange Delight", ta: "ஆரஞ்சு சாறு" },
    desc: {
      en: "Pure and tangy orange juice rich in Vitamin C.",
      ta: "வைட்டமின் சி நிறைந்த சுவையான ஆரஞ்சு சாறு."
    }
  },
  {
    id: 404,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500",
    tag: { en: "Fresh Juice", ta: "புதிய சாறு" },
    name: { en: "Jaljeera Phani", ta: "ஜல்ஜீரா" },
    desc: {
      en: "Refreshing spiced Indian lemonade with cumin and mint.",
      ta: "சீரகம் மற்றும் புதினா கலந்த புத்துணர்ச்சி தரும் பானம்."
    }
  },
  {
    id: 405,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-nnxm8rS81ajq_81pRQcyaPjai7CMf0nkg&s",
    tag: { en: "Fresh Juice", ta: "புதிய சாறு" },
    name: { en: "Guava Delight", ta: "கொய்யா சாறு" },
    desc: {
      en: "Smooth and sweet pink guava juice with a pinch of spice.",
      ta: "இனிப்பான மற்றும் சுவையான கொய்யா பழச்சாறு."
    }
  },

  {
    id: 406,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
    tag: { en: "Shake", ta: "ஷேக்" },
    name: { en: "Vanilla Shake", ta: "வெண்ணிலா ஷேக்" },
    desc: {
      en: "Classic creamy milkshake flavored with premium vanilla.",
      ta: "பாலேடு மற்றும் வெண்ணிலா மணம் கொண்ட சுவையான ஷேக்."
    }
  },
  {
    id: 407,
    image: "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg",
    tag: { en: "Shake", ta: "ஷேக்" },
    name: { en: "Strawberry Shake", ta: "ஸ்ட்ராபெர்ரி ஷேக்" },
    desc: {
      en: "Sweet and pink strawberry milkshake blended to perfection.",
      ta: "ஸ்ட்ராபெர்ரி பழங்கள் சேர்த்த குளிர்ச்சியான மில்க் ஷேக்."
    }
  },
  {
    id: 408,
    image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-badam-milkshake.jpg",
    tag: { en: "Shake", ta: "ஷேக்" },
    name: { en: "Badham Shake", ta: "பாதாம் ஷேக்" },
    desc: {
      en: "Rich and healthy milk shake blended with premium almonds.",
      ta: "பாதாம் பருப்பு மற்றும் குங்குமப்பூ சேர்த்த சத்தான பானம்."
    }
  }
],

  "Thambulam Bags": [
    { id: 501, image: thabolam3, tag: { en: "Traditional", ta: "பாரம்பரியம்" }, name: { en: "Printed Thambulam Bag", ta: "தாம்பூலப் பை" }, desc: { en: "Elegant jute drawstring bag with traditional prints for weddings.", ta: "திருமணங்களுக்கு ஏற்ற பாரம்பரிய அச்சுடன் கூடிய சணல் பை." } },
    { id: 502, image: thabolam2, tag: null, name: { en: "Premium Jute Bag", ta: "பிரீமியம் சணல் பை" }, desc: { en: "High-quality jute bag designed for traditional wedding returns.", ta: "திருமண தாம்பூலத்திற்கு ஏற்ற உயர்தரமான சணல் பை." } },
    {
  id: 503,
  image: thabolam1,
  tag: { en: "Premium", ta: "பிரீமியம்" },
  name: { 
    en: "Designer Thambulam Bag", 
    ta: "டிசைனர் தாம்பூலப் பை" 
  },
  desc: { 
    en: "Beautifully crafted designer jute thambulam bag with zari border and premium finish, perfect for weddings and special occasions.", 
    ta: "ஜரி அலங்காரம் மற்றும் அழகான வடிவமைப்புடன் தயாரிக்கப்பட்ட பிரீமியம் தாம்பூலப் பை, திருமணங்களுக்கு சிறந்த தேர்வு." 
  }
}
  ]
};

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("Breakfast");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [lang, setLang] = useState('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ta' : 'en');

  const handleEnquiry = (item) => {
    setSelectedItem(item);
    setIsEnquiryOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#050505] text-white relative font-sans selection:bg-amber-500 selection:text-black">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-900/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

        {/* Language Toggle */}
        <div className="absolute top-24 right-6 z-20">
          <button onClick={toggleLang} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2">
            <span className={lang === 'en' ? "text-amber-400" : "text-gray-500"}>ENG</span>
            <span className="w-[1px] h-3 bg-white/30"></span>
            <span className={lang === 'ta' ? "text-amber-400" : "text-gray-500"}>தமிழ்</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-amber-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">{uiText[lang].subtitle}</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">
              {uiText[lang].title} <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">{uiText[lang].titleHighlight}</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed">{uiText[lang].desc}</p>
          </motion.div>
        </section>

        {/* Sticky Tab Navigation */}
        <div className="sticky top-20 z-30 py-6 bg-[#050505]/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center items-center">
              {categoryConfig.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`relative px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap rounded-full border
                    ${activeTab === cat.key ? 'text-black bg-amber-500 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'text-gray-400 border-white/10 hover:border-white/30 hover:text-white bg-white/5'}`}
                >
                  {cat.label[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 min-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + lang}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              {menuItems[activeTab]?.map((item) => (
                <div key={item.id} onClick={() => handleEnquiry(item)} className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-colors duration-500 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={item.name[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent opacity-90" />
                    {item.tag && <span className="absolute top-4 right-4 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">{item.tag[lang]}</span>}
                  </div>
                  <div className="p-8 relative -mt-12">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-2xl font-serif text-white group-hover:text-amber-400 transition-colors duration-300">{item.name[lang]}</h3>
                      <span className="text-amber-500 text-xl">✦</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isEnquiryOpen && selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setIsEnquiryOpen(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ type: "spring" }} onClick={(e) => e.stopPropagation()} className="bg-[#111] text-white rounded-2xl p-8 w-[90%] max-w-md border border-white/10 relative">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-amber-400">{uiText[lang].enquiryTitle}</h2>
                <button onClick={() => setIsEnquiryOpen(false)} className="text-white/50 hover:text-white text-xl">✕</button>
              </div>
              <div className="mb-6">
                <img src={selectedItem.image} alt={selectedItem.name[lang]} className="w-full h-40 object-cover rounded-xl mb-4" />
                <h3 className="text-lg font-bold">{selectedItem.name[lang]}</h3>
                <p className="text-sm text-gray-400 mt-1">{selectedItem.desc[lang]}</p>
              </div>
              <div className="flex justify-end gap-4">
                <button onClick={() => setIsEnquiryOpen(false)} className="px-5 py-2 text-sm uppercase text-gray-400">{uiText[lang].cancel}</button>
                <button className="px-6 py-2 bg-amber-500 text-black text-sm font-bold uppercase rounded-full transition">{uiText[lang].proceed}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default MenuPage;