export type GameMode = "quick" | "deep";

export type SceneObject = {
  id: string;
  label: {
    tr: string;
    en: string;
  };
  x: number;
  y: number;
  width: number;
  height: number;
};

export type SceneDefinition = {
  id: string;
  image: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  ambience: {
    tr: string;
    en: string;
  };
  objects: SceneObject[];
};

export const scenes: SceneDefinition[] = [
  {
    id: "desk-01",
    image: "/scenes/scene-01.png",
    title: {
      tr: "Executive Desk",
      en: "Executive Desk",
    },
    description: {
      tr: "Yoğun ama kontrollü bir masaüstü çalışma alanı.",
      en: "A dense but controlled desktop workstation.",
    },
    ambience: {
      tr: "Sessiz masa reseti",
      en: "Quiet desk reset",
    },
    objects: [
      { id: "headphones", label: { tr: "Kulaklık", en: "Headphones" }, x: 10.4, y: 14.8, width: 12.2, height: 16.3 },
      { id: "phone", label: { tr: "Telefon", en: "Phone" }, x: 31.8, y: 28.6, width: 4.2, height: 10.7 },
      { id: "ruler", label: { tr: "Cetvel", en: "Ruler" }, x: 70.6, y: 18.6, width: 3.1, height: 17.1 },
      { id: "plant", label: { tr: "Bitki", en: "Plant" }, x: 82.7, y: 14.4, width: 8.4, height: 12.4 },
      { id: "calendar", label: { tr: "Takvim", en: "Calendar" }, x: 92.6, y: 13.4, width: 8.6, height: 11.2 },
      { id: "glasses", label: { tr: "Gözlük", en: "Glasses" }, x: 16.5, y: 44.3, width: 8, height: 10.6 },
      { id: "watch", label: { tr: "Saat", en: "Watch" }, x: 41.6, y: 48.2, width: 10.6, height: 5.6 },
      { id: "tablet", label: { tr: "Tablet", en: "Tablet" }, x: 55.2, y: 48.1, width: 14.7, height: 12.9 },
      { id: "calculator", label: { tr: "Hesap Makinesi", en: "Calculator" }, x: 70.5, y: 49.8, width: 6.2, height: 13.3 },
      { id: "earbuds", label: { tr: "Kulaklık Kutusu", en: "Earbuds Case" }, x: 80.8, y: 51.5, width: 7.4, height: 6.8 },
      { id: "keys", label: { tr: "Anahtar", en: "Keys" }, x: 6.4, y: 76, width: 8.5, height: 7.4 },
      { id: "wallet", label: { tr: "Cüzdan", en: "Wallet" }, x: 23.3, y: 76.4, width: 7.4, height: 6.7 },
      { id: "keyboard", label: { tr: "Klavye", en: "Keyboard" }, x: 47.8, y: 75.2, width: 22.3, height: 11.3 },
      { id: "mouse", label: { tr: "Mouse", en: "Mouse" }, x: 67.8, y: 75.3, width: 5.8, height: 10.4 },
      { id: "remote", label: { tr: "Kumanda", en: "Remote" }, x: 92.4, y: 69.8, width: 3.2, height: 8.7 },
      { id: "bottle", label: { tr: "Matara", en: "Bottle" }, x: 96.2, y: 79.5, width: 8.5, height: 12.2 },
      { id: "usb-cable", label: { tr: "USB Kablo", en: "USB Cable" }, x: 93.1, y: 89.4, width: 8.3, height: 6.2 },
      { id: "memory-card", label: { tr: "Hafıza Kartı", en: "Memory Card" }, x: 40.4, y: 88.7, width: 4.2, height: 5.4 },
    ],
  },
  {
    id: "desk-02",
    image: "/scenes/scene-02.png",
    title: {
      tr: "Studio Desk",
      en: "Studio Desk",
    },
    description: {
      tr: "Dağınık ama premium masa kurgusu.",
      en: "A premium desk with layered distractors.",
    },
    ambience: {
      tr: "Ara notlar ve cihazlar",
      en: "Notes and devices",
    },
    objects: [
      { id: "tablet-stand", label: { tr: "Tablet", en: "Tablet" }, x: 14.5, y: 13.4, width: 13.4, height: 16.5 },
      { id: "plant", label: { tr: "Bitki", en: "Plant" }, x: 39.2, y: 3.2, width: 7.6, height: 12.4 },
      { id: "speaker", label: { tr: "Hoparlör", en: "Speaker" }, x: 49.4, y: 7.1, width: 3.8, height: 9.5 },
      { id: "earbuds-case", label: { tr: "Kulaklık Kutusu", en: "Earbuds Case" }, x: 57.7, y: 8.6, width: 5.2, height: 6.5 },
      { id: "headphones", label: { tr: "Kulaklık", en: "Headphones" }, x: 69.3, y: 6.2, width: 8.5, height: 13.3 },
      { id: "keys", label: { tr: "Anahtar", en: "Keys" }, x: 34.4, y: 26.4, width: 6.3, height: 6.1 },
      { id: "glasses", label: { tr: "Gözlük", en: "Glasses" }, x: 44.1, y: 30.1, width: 7.2, height: 4.7 },
      { id: "phone", label: { tr: "Telefon", en: "Phone" }, x: 21.3, y: 48.5, width: 5.8, height: 12.2 },
      { id: "usb-drive", label: { tr: "USB Bellek", en: "USB Drive" }, x: 12.6, y: 52.7, width: 3.8, height: 4.6 },
      { id: "keyboard", label: { tr: "Klavye", en: "Keyboard" }, x: 35.8, y: 39.4, width: 21.1, height: 11.7 },
      { id: "notebook", label: { tr: "Defter", en: "Notebook" }, x: 31.7, y: 63.5, width: 16.5, height: 18.4 },
      { id: "mouse", label: { tr: "Mouse", en: "Mouse" }, x: 62.5, y: 49.2, width: 8.3, height: 15.3 },
      { id: "calculator", label: { tr: "Hesap Makinesi", en: "Calculator" }, x: 92.3, y: 44.1, width: 6.2, height: 12.7 },
      { id: "sticky-tabs", label: { tr: "Renkli Notlar", en: "Sticky Tabs" }, x: 82.1, y: 62.4, width: 6.8, height: 6.8 },
      { id: "wallet", label: { tr: "Kartlık", en: "Card Holder" }, x: 68.4, y: 82.2, width: 6.9, height: 6.6 },
      { id: "airpods", label: { tr: "AirPods", en: "AirPods" }, x: 79.2, y: 81.4, width: 4.1, height: 5.9 },
      { id: "speaker-case", label: { tr: "Hoparlör Kutu", en: "Speaker Case" }, x: 84.1, y: 84.8, width: 6.4, height: 5.6 },
      { id: "dock", label: { tr: "Kablo Hub", en: "Cable Hub" }, x: 88.2, y: 90.4, width: 9.7, height: 7.4 },
    ],
  },
  {
    id: "kitchen-01",
    image: "/scenes/scene-06.png",
    title: {
      tr: "Cluttered Kitchen",
      en: "Cluttered Kitchen",
    },
    description: {
      tr: "Yoğun mutfak ritminde küçük bir odak temizliği.",
      en: "A quick attention reset inside a dense kitchen rhythm.",
    },
    ambience: {
      tr: "Gün ortası ev kaosu",
      en: "Midday home chaos",
    },
    objects: [
      { id: "knife-block", label: { tr: "Bıçak Seti", en: "Knife Block" }, x: 7.8, y: 56.8, width: 8.4, height: 16.8 },
      { id: "potatoes", label: { tr: "Patates", en: "Potatoes" }, x: 11.8, y: 73.6, width: 8, height: 6.3 },
      { id: "toaster", label: { tr: "Tost Makinesi", en: "Toaster" }, x: 45.1, y: 74.6, width: 8.5, height: 9.6 },
      { id: "scissors", label: { tr: "Makas", en: "Scissors" }, x: 42.4, y: 90.2, width: 4.8, height: 5.4 },
      { id: "keys", label: { tr: "Anahtar", en: "Keys" }, x: 50.3, y: 92.4, width: 5.5, height: 4.2 },
      { id: "phone", label: { tr: "Telefon", en: "Phone" }, x: 80.1, y: 33.3, width: 5.3, height: 5.8 },
      { id: "headphones", label: { tr: "Kulaklık", en: "Headphones" }, x: 93.8, y: 35.7, width: 5.9, height: 6.6 },
      { id: "notebook", label: { tr: "Not Defteri", en: "Notebook" }, x: 80.2, y: 80.8, width: 10.8, height: 9.7 },
      { id: "kettle", label: { tr: "Kettle", en: "Kettle" }, x: 71.2, y: 69.2, width: 8.2, height: 11.1 },
      { id: "timer", label: { tr: "Zamanlayıcı", en: "Timer" }, x: 41.5, y: 87.2, width: 4.1, height: 5.5 },
      { id: "carrots", label: { tr: "Havuç", en: "Carrots" }, x: 23.8, y: 41.6, width: 8.7, height: 7.8 },
      { id: "newspaper", label: { tr: "Gazete", en: "Newspaper" }, x: 61.9, y: 74.8, width: 8.7, height: 7.9 },
      { id: "receipt", label: { tr: "Fiş", en: "Receipt" }, x: 45.8, y: 93.5, width: 7.3, height: 4.9 },
      { id: "coffee-maker", label: { tr: "Kahve Makinesi", en: "Coffee Maker" }, x: 47.4, y: 79.2, width: 7.3, height: 11.6 },
      { id: "mug", label: { tr: "Kupa", en: "Mug" }, x: 17.6, y: 69.2, width: 4.3, height: 6.1 },
      { id: "olive-oil", label: { tr: "Zeytinyağı", en: "Olive Oil Bottle" }, x: 88.6, y: 25.2, width: 3.4, height: 10.6 },
      { id: "trash-bag", label: { tr: "Çöp Torbası", en: "Trash Bag" }, x: 57.4, y: 49.4, width: 8.4, height: 13.4 },
      { id: "shopping-bag", label: { tr: "Alışveriş Çantası", en: "Shopping Bag" }, x: 53.5, y: 59.6, width: 6.8, height: 11.1 },
    ],
  },
  {
    id: "desk-03",
    image: "/scenes/scene-03.png",
    title: {
      tr: "Planner Desk",
      en: "Planner Desk",
    },
    description: {
      tr: "Planlayıcı, cihazlar ve masaüstü aksesuarları.",
      en: "Planner, devices, and layered accessories.",
    },
    ambience: {
      tr: "Temiz ama yoğun düzen",
      en: "Clean but dense setup",
    },
    objects: [
      { id: "lamp-base", label: { tr: "Lamba", en: "Lamp" }, x: 0.4, y: 0.6, width: 11.7, height: 20.6 },
      { id: "sticky-notes", label: { tr: "Yapışkan Notlar", en: "Sticky Notes" }, x: 14.9, y: 6.9, width: 7, height: 6.7 },
      { id: "plant", label: { tr: "Bitki", en: "Plant" }, x: 23.3, y: 4.4, width: 6.8, height: 9.7 },
      { id: "ruler", label: { tr: "Cetvel", en: "Ruler" }, x: 32.1, y: 3.5, width: 8.2, height: 15.8 },
      { id: "glasses", label: { tr: "Gözlük", en: "Glasses" }, x: 14.5, y: 27.8, width: 8.4, height: 8.3 },
      { id: "wallet", label: { tr: "Cüzdan", en: "Wallet" }, x: 59.2, y: 9.8, width: 6.2, height: 8.7 },
      { id: "watch", label: { tr: "Saat", en: "Watch" }, x: 70.1, y: 11.8, width: 5.1, height: 8.4 },
      { id: "notepad", label: { tr: "Not Defteri", en: "Notepad" }, x: 76.1, y: 19.1, width: 6.8, height: 10.4 },
      { id: "calculator", label: { tr: "Hesap Makinesi", en: "Calculator" }, x: 92.5, y: 18.1, width: 7.2, height: 16.3 },
      { id: "phone", label: { tr: "Telefon", en: "Phone" }, x: 1.8, y: 44.2, width: 7.7, height: 17.2 },
      { id: "coffee-mug", label: { tr: "Kahve", en: "Coffee Mug" }, x: 11.8, y: 46.8, width: 6.4, height: 10.2 },
      { id: "planner", label: { tr: "Ajanda", en: "Planner" }, x: 37.6, y: 38.3, width: 16.4, height: 18.8 },
      { id: "cream", label: { tr: "Krem", en: "Cream Tube" }, x: 63.9, y: 44.7, width: 4.3, height: 9.8 },
      { id: "cable", label: { tr: "Şarj Kablosu", en: "Charging Cable" }, x: 72.4, y: 45.7, width: 8.4, height: 12.4 },
      { id: "spray", label: { tr: "Sprey", en: "Spray Bottle" }, x: 82.5, y: 46.1, width: 4.6, height: 10.8 },
      { id: "headphones", label: { tr: "Kulaklık", en: "Headphones" }, x: 20.2, y: 69.1, width: 11.1, height: 17.8 },
      { id: "tablet", label: { tr: "Tablet", en: "Tablet" }, x: 59.8, y: 66.2, width: 12.6, height: 20.3 },
      { id: "mouse", label: { tr: "Mouse", en: "Mouse" }, x: 88.2, y: 63.6, width: 8.8, height: 16.5 },
    ],
  },
  {
    id: "living-room-01",
    image: "/scenes/scene-04.png",
    title: {
      tr: "Living Room",
      en: "Living Room",
    },
    description: {
      tr: "Salon içinde daha geniş sahne taraması.",
      en: "A wider lounge scan with home distractors.",
    },
    ambience: {
      tr: "Sessiz salon taraması",
      en: "Quiet lounge scan",
    },
    objects: [
      { id: "tissue-box", label: { tr: "Peçete Kutusu", en: "Tissue Box" }, x: 1.1, y: 40.7, width: 5.4, height: 8.6 },
      { id: "magazines", label: { tr: "Dergiler", en: "Magazines" }, x: 9.3, y: 52.7, width: 7.8, height: 4.9 },
      { id: "tablet", label: { tr: "Tablet", en: "Tablet" }, x: 24.5, y: 61.6, width: 8.6, height: 4.8 },
      { id: "headphones", label: { tr: "Kulaklık", en: "Headphones" }, x: 41.2, y: 60.3, width: 4.7, height: 4.8 },
      { id: "book-open", label: { tr: "Açık Kitap", en: "Open Book" }, x: 49.2, y: 58.8, width: 8.4, height: 5.3 },
      { id: "watering-can", label: { tr: "Sulama Kabı", en: "Watering Can" }, x: 65.9, y: 61.8, width: 5.4, height: 7.3 },
      { id: "tablet-remote", label: { tr: "Tablet", en: "Tablet" }, x: 28.8, y: 77.4, width: 6.9, height: 4.8 },
      { id: "coffee-mug", label: { tr: "Kupa", en: "Mug" }, x: 47.2, y: 73.3, width: 3.4, height: 6.2 },
      { id: "glasses", label: { tr: "Gözlük", en: "Glasses" }, x: 49.3, y: 83.1, width: 6.2, height: 4.2 },
      { id: "keys", label: { tr: "Anahtar", en: "Keys" }, x: 57.6, y: 84.4, width: 4.4, height: 4.3 },
      { id: "glass", label: { tr: "Bardak", en: "Glass" }, x: 67.2, y: 82.2, width: 3.6, height: 7.1 },
      { id: "slippers", label: { tr: "Terlik", en: "Slippers" }, x: 31.4, y: 90.1, width: 8.3, height: 5.8 },
      { id: "water-bottle", label: { tr: "Matara", en: "Bottle" }, x: 12.2, y: 89.3, width: 3.8, height: 8.8 },
      { id: "dumbbell", label: { tr: "Dambıl", en: "Dumbbell" }, x: 1.8, y: 92.1, width: 5.2, height: 4.1 },
      { id: "gamepad", label: { tr: "Oyun Kolu", en: "Game Controller" }, x: 83.7, y: 70.7, width: 4.8, height: 4.4 },
      { id: "speaker", label: { tr: "Hoparlör", en: "Speaker" }, x: 78.6, y: 64.8, width: 2.8, height: 8.7 },
    ],
  },
  {
    id: "living-room-02",
    image: "/scenes/scene-05.png",
    title: {
      tr: "City Lounge",
      en: "City Lounge",
    },
    description: {
      tr: "Şehir manzaralı salon içinde daha rafine arama.",
      en: "A refined search inside a city-view lounge.",
    },
    ambience: {
      tr: "Akşamüstü salon modu",
      en: "Late lounge mode",
    },
    objects: [
      { id: "plant", label: { tr: "Bitki", en: "Plant" }, x: 1.9, y: 67.1, width: 5.8, height: 8.4 },
      { id: "wallet", label: { tr: "Cüzdan", en: "Wallet" }, x: 9.2, y: 69.6, width: 4.8, height: 4.8 },
      { id: "glasses", label: { tr: "Gözlük", en: "Glasses" }, x: 12.7, y: 75.7, width: 4.9, height: 3.1 },
      { id: "magazine", label: { tr: "Dergi", en: "Magazine" }, x: 43.9, y: 58.2, width: 7.6, height: 5.2 },
      { id: "candle", label: { tr: "Mum", en: "Candle" }, x: 56.5, y: 61.7, width: 3.5, height: 5.5 },
      { id: "coffee-cup", label: { tr: "Kahve", en: "Coffee Cup" }, x: 48.1, y: 74.6, width: 3.2, height: 5.4 },
      { id: "glass", label: { tr: "Bardak", en: "Glass" }, x: 55.1, y: 76, width: 3.1, height: 5.6 },
      { id: "bowl", label: { tr: "Kase", en: "Bowl" }, x: 61.8, y: 71.8, width: 5.5, height: 5.2 },
      { id: "phone", label: { tr: "Telefon", en: "Phone" }, x: 59.8, y: 79, width: 5.2, height: 4.2 },
      { id: "books", label: { tr: "Kitaplar", en: "Books" }, x: 58.3, y: 82.5, width: 8.8, height: 7.1 },
      { id: "slippers", label: { tr: "Terlik", en: "Slippers" }, x: 36.8, y: 90.2, width: 7.4, height: 4.8 },
      { id: "controller", label: { tr: "Oyun Kolu", en: "Controller" }, x: 82.1, y: 77.6, width: 4.8, height: 4.5 },
      { id: "water-bottle", label: { tr: "Şişe", en: "Bottle" }, x: 94.3, y: 74.8, width: 3.5, height: 8.6 },
      { id: "cable", label: { tr: "Kablo", en: "Cable" }, x: 78.2, y: 92.2, width: 7.7, height: 5.8 },
      { id: "speaker-right", label: { tr: "Hoparlör", en: "Speaker" }, x: 88.4, y: 68.8, width: 2.8, height: 8.7 },
      { id: "remote", label: { tr: "Kumanda", en: "Remote" }, x: 47.2, y: 79.4, width: 5.7, height: 2.6 },
    ],
  },
  {
    id: "open-office-01",
    image: "/scenes/scene-08.png",
    title: {
      tr: "Open Office",
      en: "Open Office",
    },
    description: {
      tr: "Dikkat dağıtan masa kalabalığı içinde hedef avı.",
      en: "Target hunting inside a busy office floor.",
    },
    ambience: {
      tr: "Çok ekranlı ofis akışı",
      en: "Multi-screen office flow",
    },
    objects: [
      { id: "keyboard", label: { tr: "Mekanik Klavye", en: "Mechanical Keyboard" }, x: 18.8, y: 83.4, width: 11.3, height: 8.4 },
      { id: "tablet", label: { tr: "Tablet", en: "Tablet" }, x: 24.1, y: 73.6, width: 6.8, height: 7.4 },
      { id: "mouse", label: { tr: "Mouse", en: "Mouse" }, x: 30.7, y: 81.7, width: 4.1, height: 5.3 },
      { id: "headphones", label: { tr: "Kulaklık", en: "Headphones" }, x: 39.6, y: 64.4, width: 6.8, height: 11.9 },
      { id: "phone", label: { tr: "Telefon", en: "Phone" }, x: 58.7, y: 72.5, width: 5.7, height: 6.7 },
      { id: "stylus-pad", label: { tr: "Çizim Tableti", en: "Drawing Tablet" }, x: 66.9, y: 70.4, width: 11.5, height: 8.8 },
      { id: "water-bottle", label: { tr: "Su Şişesi", en: "Water Bottle" }, x: 88.4, y: 53.1, width: 3.5, height: 11.2 },
      { id: "sanitizer", label: { tr: "Dezenfektan", en: "Sanitizer" }, x: 55.1, y: 61.7, width: 3.2, height: 8.5 },
      { id: "backpack", label: { tr: "Sırt Çantası", en: "Backpack" }, x: 66.6, y: 90.5, width: 8.8, height: 14.4 },
      { id: "power-strip", label: { tr: "Priz Çoklayıcı", en: "Power Strip" }, x: 61.8, y: 79.4, width: 8.2, height: 4.8 },
      { id: "cable-coil", label: { tr: "Kablo Sarımı", en: "Cable Coil" }, x: 27.1, y: 90.5, width: 8.8, height: 7.5 },
      { id: "usb-drive", label: { tr: "USB Bellek", en: "USB Drive" }, x: 6.1, y: 84.1, width: 2.3, height: 3.1 },
      { id: "external-drive", label: { tr: "Harici Disk", en: "External Drive" }, x: 2.8, y: 95.1, width: 5.8, height: 4.7 },
      { id: "laptop", label: { tr: "Laptop", en: "Laptop" }, x: 58.1, y: 60.5, width: 10.4, height: 10.6 },
      { id: "sticky-notes", label: { tr: "Yapışkan Notlar", en: "Sticky Notes" }, x: 13.5, y: 70.6, width: 6.4, height: 8.8 },
      { id: "notebook", label: { tr: "Ajanda", en: "Notebook" }, x: 43.4, y: 81.1, width: 8.1, height: 7.4 },
      { id: "coffee-mug", label: { tr: "Kahve Kupası", en: "Coffee Mug" }, x: 2.9, y: 86.6, width: 4.2, height: 6.4 },
      { id: "marker-set", label: { tr: "Fosforlu Kalemler", en: "Highlighters" }, x: 47.1, y: 69.3, width: 8.2, height: 5.8 },
    ],
  },
  {
    id: "bank-office-01",
    image: "/scenes/scene-07.png",
    title: {
      tr: "Corporate Branch",
      en: "Corporate Branch",
    },
    description: {
      tr: "Kurumsal çalışma alanında hedef bulma turu.",
      en: "A target-finding round inside a corporate branch.",
    },
    ambience: {
      tr: "Resmi ofis akışı",
      en: "Formal office flow",
    },
    objects: [
      { id: "water-bottle", label: { tr: "Su Şişesi", en: "Water Bottle" }, x: 6.4, y: 59.3, width: 2.7, height: 6.5 },
      { id: "umbrella", label: { tr: "Şemsiye", en: "Umbrella" }, x: 3.2, y: 66.5, width: 5.4, height: 24.2 },
      { id: "phone", label: { tr: "Telefon", en: "Phone" }, x: 33.6, y: 73.8, width: 6.4, height: 5.1 },
      { id: "notebook", label: { tr: "Not Defteri", en: "Notebook" }, x: 41.6, y: 66.1, width: 9.7, height: 8.4 },
      { id: "calculator", label: { tr: "Hesap Makinesi", en: "Calculator" }, x: 56.4, y: 57.9, width: 4.9, height: 6.4 },
      { id: "mug", label: { tr: "Kupa", en: "Mug" }, x: 66.8, y: 57.4, width: 4.1, height: 7.1 },
      { id: "tape", label: { tr: "Bant", en: "Tape Roll" }, x: 50.7, y: 57.4, width: 4.1, height: 5.7 },
      { id: "desk-phone", label: { tr: "Masa Telefonu", en: "Desk Phone" }, x: 72.4, y: 57.3, width: 5, height: 4.6 },
      { id: "glasses", label: { tr: "Gözlük", en: "Glasses" }, x: 84.9, y: 65.2, width: 5.2, height: 3.2 },
      { id: "coffee-cup", label: { tr: "Kahve", en: "Coffee Cup" }, x: 95.3, y: 54.7, width: 3.6, height: 7.7 },
      { id: "keys", label: { tr: "Anahtar", en: "Keys" }, x: 97.1, y: 66.8, width: 4.6, height: 3.7 },
      { id: "bag", label: { tr: "Çanta", en: "Bag" }, x: 20.5, y: 76.2, width: 7, height: 16.6 },
      { id: "files", label: { tr: "Dosyalar", en: "Files" }, x: 35.4, y: 52.7, width: 8.4, height: 12.5 },
      { id: "monitor", label: { tr: "Monitör", en: "Monitor" }, x: 56.8, y: 28.9, width: 10.2, height: 10.5 },
      { id: "brochure-rack", label: { tr: "Broşürlük", en: "Brochure Rack" }, x: 0.8, y: 51.4, width: 5, height: 13.4 },
      { id: "queue-kiosk", label: { tr: "Sıra Kiosku", en: "Queue Kiosk" }, x: 24.6, y: 31.2, width: 3.6, height: 11.8 },
    ],
  },
  {
    id: "bedroom-01",
    image: "/scenes/scene-09.png",
    title: {
      tr: "Bedroom Reset",
      en: "Bedroom Reset",
    },
    description: {
      tr: "Dağınık kişisel alanda dikkat toparlama turu.",
      en: "A focus recovery round inside a cluttered personal space.",
    },
    ambience: {
      tr: "Kişisel alan taraması",
      en: "Personal space scan",
    },
    objects: [
      { id: "phone-bed", label: { tr: "Telefon", en: "Phone" }, x: 21.8, y: 48.6, width: 4.2, height: 8.2 },
      { id: "notebook", label: { tr: "Defter", en: "Notebook" }, x: 35.4, y: 50.4, width: 7.7, height: 8.7 },
      { id: "headphones", label: { tr: "Kulaklık", en: "Headphones" }, x: 42.3, y: 54.6, width: 6.8, height: 8.1 },
      { id: "water-bottle", label: { tr: "Su Şişesi", en: "Water Bottle" }, x: 48.5, y: 51.4, width: 3.4, height: 9.3 },
      { id: "perfume", label: { tr: "Parfüm", en: "Perfume" }, x: 55.6, y: 57.2, width: 3.4, height: 6.1 },
      { id: "keys", label: { tr: "Anahtar", en: "Keys" }, x: 71.2, y: 58.3, width: 5.2, height: 4.5 },
      { id: "remote-double", label: { tr: "Kumandalar", en: "Remote Controls" }, x: 61.2, y: 69.1, width: 7.8, height: 7.2 },
      { id: "sock-pair", label: { tr: "Çorap", en: "Socks" }, x: 55.8, y: 69.4, width: 8.2, height: 7.1 },
      { id: "slippers", label: { tr: "Terlik", en: "Slippers" }, x: 46.5, y: 75.1, width: 8.4, height: 8.3 },
      { id: "tablet-right", label: { tr: "Tablet", en: "Tablet" }, x: 88.6, y: 94.1, width: 7.4, height: 6.6 },
      { id: "lipsticks", label: { tr: "Rujlar", en: "Lipsticks" }, x: 86.6, y: 82.6, width: 8.5, height: 4.9 },
      { id: "laptop", label: { tr: "Laptop", en: "Laptop" }, x: 61.2, y: 14.7, width: 8.6, height: 9.3 },
      { id: "mirror", label: { tr: "Ayna", en: "Mirror" }, x: 91.6, y: 18.4, width: 4.7, height: 9.6 },
      { id: "hairbrush", label: { tr: "Saç Fırçası", en: "Hairbrush" }, x: 86.6, y: 45.2, width: 5.2, height: 4.2 },
      { id: "tablet-left", label: { tr: "Tablet", en: "Tablet" }, x: 12.7, y: 90.5, width: 6.7, height: 7.6 },
      { id: "earbuds-case", label: { tr: "Kulaklık Kutusu", en: "Earbuds Case" }, x: 49.6, y: 57.2, width: 3.9, height: 4.6 },
      { id: "glasses", label: { tr: "Gözlük", en: "Glasses" }, x: 31.4, y: 36.8, width: 5.4, height: 4.3 },
      { id: "book-stack", label: { tr: "Kitaplar", en: "Books" }, x: 24.9, y: 37.8, width: 8.4, height: 7.1 },
    ],
  },
];

export const modeConfig: Record<
  GameMode,
  { duration: number; objectCount: number; hints: number }
> = {
  quick: { duration: 80, objectCount: 5, hints: 2 },
  deep: { duration: 165, objectCount: 9, hints: 3 },
};
