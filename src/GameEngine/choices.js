const choices = [
  {
    text: "İskoçya'da Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: 40, money: 800, love: 15, happiness: 25 },
    longTermEffects: [],
  },
  {
    text: "Kanada'da Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: 30, money: 1000, love: 20, happiness: 35 },
    longTermEffects: [],
  },
  {
    text: "Brezilya'da Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: -10, money: 100, love: 10, happiness: 10 },
    longTermEffects: [],
  },
  {
    text: "Japonya'da Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: 60, money: 1000, love: 5, happiness: 40 },
    longTermEffects: [],
  },
  {
    text: "Avustralya'da Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: 10, money: 500, love: 0, happiness: 5 },
    longTermEffects: [],
  },
  {
    text: "Evde yoga yap",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 15, money: 0, love: 5, happiness: 20 },
    longTermEffects: [],
  },
  {
    text: "Evde bir bira demleme kitini deneyin",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: -5, money: -20, love: 0, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Bir bitki teraryumu yap",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 5, money: -15, love: 0, happiness: 20 },
    longTermEffects: [],
  },
  {
    text: "Gece gökyüzü fotoğrafçılığına başla",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -10, love: 0, happiness: 25 },
    longTermEffects: [],
  },
  {
    text: "Karmaşık bir model uçak kitini tamamla",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -50, love: 0, happiness: 30 },
    longTermEffects: [],
  },
  {
    text: "Sıradışı bir müze keşfet",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -5, love: 0, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Bir sokak sanatı turuna çık",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: 0, love: 0, happiness: 20 },
    longTermEffects: [],
  },
  {
    text: "Antikalarla dolu bir pazar gez",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -15, love: 0, happiness: 10 },
    longTermEffects: [],
  },
  {
    text: "Ortaçağ tarzı bir yemek pişir",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -20, love: 0, happiness: 25 },
    longTermEffects: [],
  },
  {
    text: "Zorlu bir doğa yürüyüşüne çık",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 30, money: 0, love: 0, happiness: 35 },
    longTermEffects: [],
  },
  {
    text: "Kendi podcast'ini başlat",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -10, love: 0, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Vintage bir kamera ile fotoğraf çekmeyi öğren",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -50, love: 0, happiness: 20 },
    longTermEffects: [],
  },
  {
    text: "Bir komedi kulübünde stand-up yapmayı dene",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: 0, love: 0, happiness: 30 },
    longTermEffects: [],
  },
  {
    text: "Bir çiçek bahçesi kur",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 10, money: -20, love: 0, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Fotoğrafçılık öğren",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -15, love: 0, happiness: 10 },
    longTermEffects: [],
  },
  {
    text: "Bir kitap kulübüne katıl",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: 0, love: 10, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Blog yazmaya başla",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -10, love: 0, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Bir online mağaza aç",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: -5, money: -1000, love: 0, happiness: 5 },
    longTermEffects: [{ effect: { money: 5000 }, duration: 15, startYear: 3 }],
  },
  {
    text: "Bir belgesel çek",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -2000, love: 0, happiness: 20 },
    longTermEffects: [
      { effect: { money: 1000, happiness: 10 }, duration: 5, startYear: 1 },
    ],
  },
  {
    text: "Profesyonel bir dansçı ol",
    ageRange: { min: 18, max: 35 },
    immediateEffects: { health: -5, money: -500, love: 15, happiness: 25 },
    longTermEffects: [
      { effect: { money: 300, happiness: 20 }, duration: 10, startYear: 3 },
    ],
  },
  {
    text: "Kırsal bir alanda yaşamaya başla",
    ageRange: { min: 25, max: 70 },
    immediateEffects: { health: 20, money: -5000, love: 0, happiness: 30 },
    longTermEffects: [{ effect: { health: 20 }, duration: 30, startYear: 5 }],
  },
  {
    text: "Pakistanda Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: -50, money: 0, love: 0, happiness: 0 },
    longTermEffects: [{ effect: { money: 50 }, duration: 20, startYear: 1 }],
  },
  {
    text: "Türkiyede Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: 0, money: 1000, love: 0, happiness: 0 },
    longTermEffects: [],
  },
  {
    text: "Amerikada Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: -20, money: 3000, love: 30, happiness: 40 },
    longTermEffects: [],
  },
  {
    text: "Almanyada Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: 50, money: 3000, love: 10, happiness: 30 },
    longTermEffects: [],
  },
  {
    text: "Hindistanda Doğ",
    ageRange: { min: 0, max: 1 },
    immediateEffects: { health: 0, money: 50, love: 0, happiness: 0 },
    longTermEffects: [],
  },
  {
    text: "Evdeki bitkileri bakımını yap",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 5, money: 0, love: 0, happiness: 5 },
    longTermEffects: [],
  },
  {
    text: "Haftada bir yeni bir yemek tarifi deneyin",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -5, love: 0, happiness: 10 },
    longTermEffects: [],
  },
  {
    text: "Bir enstrüman çalmayı öğrenin",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 10, money: -10, love: 0, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Gönüllü çalışmaya başla",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: 0, love: 5, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Bir hobinin tadını çıkar",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -500, love: 0, happiness: 10 },
    longTermEffects: [],
  },
  {
    text: "Yeni bir dil öğrenmeye başla",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -100, love: 0, happiness: 25 },
    longTermEffects: [],
  },
  {
    text: "Yoga veya meditasyon yapmayı dene",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 25, money: 0, love: 20, happiness: 30 },
    longTermEffects: [],
  },
  {
    text: "Bir spor veya fitness rutini başlat",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 30, money: -500, love: 0, happiness: 15 },
    longTermEffects: [],
  },
  {
    text: "Evde temizlik yap",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 10, money: 0, love: 0, happiness: -10 },
    longTermEffects: [],
  },
  {
    text: "Daha sağlıklı bir beslenme alışkanlığı edin",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 45, money: -200, love: 0, happiness: 0 },
    longTermEffects: [],
  },
  {
    text: "Kendi işini kur",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: -10, money: -5000, love: 0, happiness: -10 },
    longTermEffects: [
      { effect: { money: 20000, happiness: 20 }, duration: 10, startYear: 5 },
    ],
  },
  {
    text: "Yüksek öğrenim için yurtdışına git",
    ageRange: { min: 18, max: 30 },
    immediateEffects: { health: 0, money: -900, love: 5, happiness: 30 },
    longTermEffects: [
      { effect: { happiness: 50, love: 50 }, duration: 5, startYear: 5 },
    ],
  },
  {
    text: "Bir aile kur",
    ageRange: { min: 20, max: 40 },
    immediateEffects: { health: 0, money: -2000, love: 500, happiness: 30 },
    longTermEffects: [{ effect: { love: -50 }, duration: 20, startYear: 5 }],
  },
  {
    text: "Yatırım yapmaya başla",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 0, money: -20, love: 0, happiness: 10 },
    longTermEffects: [{ effect: { money: 50 }, duration: 10, startYear: 5 }],
  },
  {
    text: "Sağlık sigortası satın al",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 10, money: -20, love: 0, happiness: 10 },
    longTermEffects: [{ effect: { health: 30 }, duration: 20, startYear: 5 }],
  },
  {
    text: "Girişimci ol",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: -10, money: -30, love: 0, happiness: 20 },
    longTermEffects: [{ effect: { money: 100 }, duration: 15, startYear: 5 }],
  },
  {
    text: "Emeklilik fonu aç",
    ageRange: { min: 18, max: 40 },
    immediateEffects: { health: 0, money: -20, love: 0, happiness: 10 },
    longTermEffects: [{ effect: { money: 50 }, duration: 25, startYear: 5 }],
  },
  {
    text: "Yeni bir kariyer yoluna gir",
    ageRange: { min: 25, max: 50 },
    immediateEffects: { health: -10, money: -30, love: 0, happiness: 20 },
    longTermEffects: [{ effect: { money: 50 }, duration: 15, startYear: 5 }],
  },
  {
    text: "Yatırım yapmak için bir danışman işe al",
    ageRange: { min: 30, max: 60 },
    immediateEffects: { health: 0, money: -20, love: 0, happiness: 10 },
    longTermEffects: [{ effect: { money: 50 }, duration: 20, startYear: 5 }],
  },
  {
    text: "Bir müzik grubu kur",
    ageRange: { min: 18, max: 35 },
    immediateEffects: { health: -5, money: -1000, love: 10, happiness: 20 },
    longTermEffects: [
      { effect: { money: 500, happiness: 5 }, duration: 5, startYear: 3 },
    ],
  },
  {
    text: "Dünya turuna çık",
    ageRange: { min: 18, max: 50 },
    immediateEffects: { health: 10, money: -1000, love: 0, happiness: 30 },
    longTermEffects: [
      { effect: { happiness: 10 }, duration: 10, startYear: 1 },
    ],
  },
  {
    text: "Bir kitap yaz",
    ageRange: { min: 20, max: 60 },
    immediateEffects: { health: 0, money: -1000, love: 0, happiness: 15 },
    longTermEffects: [
      { effect: { money: 1000, happiness: 5 }, duration: 10, startYear: 2 },
    ],
  },
  {
    text: "Stand-up komediye başla",
    ageRange: { min: 18, max: 40 },
    immediateEffects: { health: 0, money: -500, love: 10, happiness: 30 },
    longTermEffects: [
      { effect: { happiness: 20 }, duration: 10, startYear: 1 },
    ],
  },
  {
    text: "Sosyal medya fenomeni ol",
    ageRange: { min: 18, max: 30 },
    immediateEffects: { health: 0, money: -100, love: 20, happiness: 25 },
    longTermEffects: [{ effect: { money: 2000 }, duration: 5, startYear: 2 }],
  },
  {
    text: "Bitki bazlı beslenmeye geç",
    ageRange: { min: 18, max: 60 },
    immediateEffects: { health: 20, money: -200, love: 0, happiness: 10 },
    longTermEffects: [{ effect: { health: 50 }, duration: 20, startYear: 1 }],
  },
  {
    text: "Yoga stüdyosu aç",
    ageRange: { min: 25, max: 50 },
    immediateEffects: { health: -10, money: -2500, love: 0, happiness: 15 },
    longTermEffects: [
      { effect: { money: 300, happiness: 10 }, duration: 15, startYear: 3 },
    ],
  },
  {
    text: "Vegan kafe aç",
    ageRange: { min: 20, max: 50 },
    immediateEffects: { health: 5, money: -3500, love: 10, happiness: 10 },
    longTermEffects: [{ effect: { money: 400 }, duration: 10, startYear: 4 }],
  },
  {
    text: "Antika koleksiyonuna başla",
    ageRange: { min: 25, max: 60 },
    immediateEffects: { health: 0, money: -3000, love: 0, happiness: 10 },
    longTermEffects: [{ effect: { money: 2000 }, duration: 30, startYear: 10 }],
  },
  {
    text: "Astronomiyle ilgilen",
    ageRange: { min: 18, max: 99 },
    immediateEffects: { health: 10, money: -2000, love: 0, happiness: 15 },
    longTermEffects: [
      { effect: { happiness: 20 }, duration: 20, startYear: 3 },
    ],
  },
  {
    text: "Bir dil öğren",
    ageRange: { min: 18, max: 50 },
    immediateEffects: { health: 0, money: -1000, love: 5, happiness: 20 },
    longTermEffects: [
      { effect: { happiness: 30 }, duration: 10, startYear: 1 },
    ],
  },
  {
    text: "Organik çiftlik kur",
    ageRange: { min: 25, max: 60 },
    immediateEffects: { health: 10, money: -20000, love: 0, happiness: 15 },
    longTermEffects: [
      { effect: { money: 500, health: 20 }, duration: 25, startYear: 5 },
    ],
  },
  {
    text: "Dans kurslarına git",
    ageRange: { min: 18, max: 50 },
    immediateEffects: { health: 10, money: -1000, love: 20, happiness: 20 },
    longTermEffects: [{ effect: { happiness: 10 }, duration: 5, startYear: 1 }],
  },
  {
    text: "Bir sergi düzenle",
    ageRange: { min: 20, max: 60 },
    immediateEffects: { health: 0, money: -5000, love: 5, happiness: 15 },
    longTermEffects: [
      { effect: { money: 1000, happiness: 5 }, duration: 10, startYear: 2 },
    ],
  },
  {
    text: "Bir sanat galerisi aç",
    ageRange: { min: 25, max: 70 },
    immediateEffects: { health: 0, money: -15000, love: 0, happiness: 10 },
    longTermEffects: [
      { effect: { money: 2000, happiness: 10 }, duration: 15, startYear: 4 },
    ],
  },
  {
    text: "Bir restoran aç",
    ageRange: { min: 25, max: 60 },
    immediateEffects: { health: -5, money: -3000, love: 0, happiness: 10 },
    longTermEffects: [
      { effect: { money: 5000, happiness: 10 }, duration: 10, startYear: 5 },
    ],
  },
  {
    text: "Bir çiftlik işlet",
    ageRange: { min: 25, max: 80 },
    immediateEffects: { health: 20, money: -2000, love: 0, happiness: 15 },
    longTermEffects: [
      { effect: { money: 3000, happiness: 5 }, duration: 20, startYear: 3 },
    ],
  },
  {
    text: "Bir teknoloji startup'ı kur",
    ageRange: { min: 22, max: 45 },
    immediateEffects: { health: -15, money: -5000, love: 0, happiness: -5 },
    longTermEffects: [
      { effect: { money: 15000, happiness: 15 }, duration: 10, startYear: 5 },
    ],
  },
  {
    text: "Bir hayır kurumu başlat",
    ageRange: { min: 30, max: 80 },
    immediateEffects: { health: 5, money: -1000, love: 10, happiness: 25 },
    longTermEffects: [
      { effect: { happiness: 10 }, duration: 20, startYear: 2 },
    ],
  },
  {
    text: "Bir film yönet",
    ageRange: { min: 20, max: 70 },
    immediateEffects: { health: -5, money: -1500, love: 0, happiness: 20 },
    longTermEffects: [
      { effect: { money: 7000, happiness: 10 }, duration: 10, startYear: 3 },
    ],
  },
];

export default choices;
