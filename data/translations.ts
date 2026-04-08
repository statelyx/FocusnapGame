import type { GameMode } from "@/data/game-data";

export type Locale = "tr" | "en";

type Dictionary = {
  brand: string;
  navHow: string;
  navBenefits: string;
  navSession: string;
  navGroup: string;
  startSession: string;
  groupPlay: string;
  nicknameTitle: string;
  nicknameBody: string;
  nicknamePlaceholder: string;
  continueAction: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBadge: string;
  heroFootnote: string;
  howTitle: string;
  howSubtitle: string;
  steps: { title: string; body: string }[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: { title: string; body: string }[];
  sessionTitle: string;
  sessionSubtitle: string;
  scenePoolTitle: string;
  scenePoolBody: string;
  modes: Record<GameMode, { title: string; description: string; timing: string }>;
  objectsTitle: string;
  currentScene: string;
  ambience: string;
  progressLabel: string;
  livesLabel: string;
  scoreLabel: string;
  hint: string;
  restart: string;
  reshuffle: string;
  hintsLeft: string;
  sceneLabel: string;
  objectFound: string;
  miss: string;
  timeUp: string;
  completionTitle: string;
  completionBody: string;
  completionAction: string;
  secondsLeft: string;
  wrongLeft: string;
  themeDark: string;
  themeLight: string;
  footer: string;
  voiceCommands: string;
  groupTitle: string;
  groupSubtitle: string;
  createRoom: string;
  joinRoom: string;
  roomPin: string;
  roomLink: string;
  copyLink: string;
  startRace: string;
  waitingRoom: string;
  players: string;
  host: string;
  joinAction: string;
  createAction: string;
  enterPin: string;
  lobbyReady: string;
  raceLive: string;
  leaderboard: string;
  shareLink: string;
  groupNote: string;
};

export const translations: Record<Locale, Dictionary> = {
  en: {
    brand: "FocusnapGame",
    navHow: "How it works",
    navBenefits: "Benefits",
    navSession: "Session",
    navGroup: "Group Play",
    startSession: "Start Focus Session",
    groupPlay: "Group Play",
    nicknameTitle: "Set your nickname",
    nicknameBody: "Your nickname will be used for solo scoring and multiplayer rooms.",
    nicknamePlaceholder: "Enter nickname",
    continueAction: "Continue",
    heroTitle: "Recover attention with a hidden-object micro reset.",
    heroSubtitle: "Premium focus tool",
    heroDescription:
      "A polished workstation scene designed to interrupt drift, clear mental fog, and return you to work in under three minutes.",
    heroBadge: "No login. No friction. Just reset.",
    heroFootnote:
      "Built for office workers, developers, analysts, and anyone losing sharpness at the desk.",
    howTitle: "How It Works",
    howSubtitle: "Three compact steps, one deliberate state change.",
    steps: [
      {
        title: "Start",
        body: "Pick a mode and begin a short visual search session tuned for speed or calm concentration.",
      },
      {
        title: "Find",
        body: "Spot the required desk objects, click with intent, and let the scene pull your attention back into the present.",
      },
      {
        title: "Refocus",
        body: "Finish the round with a cleaner head, lighter fatigue, and a clearer path back to your task.",
      },
    ],
    benefitsTitle: "Why It Helps",
    benefitsSubtitle: "Designed as a productivity ritual, not a toy.",
    benefits: [
      {
        title: "Fast cognitive reset",
        body: "Uses visual scanning to break passive fatigue and restore active attention.",
      },
      {
        title: "Minimal friction",
        body: "No sign-up, no tutorial trap, no bloated setup. Open and play immediately.",
      },
      {
        title: "Desk-native theme",
        body: "The office workstation scene feels aligned with real working environments.",
      },
    ],
    sessionTitle: "Focus Session",
    sessionSubtitle: "Choose a mode, enter the scene, and recover momentum.",
    scenePoolTitle: "Real Photo Scenes",
    scenePoolBody: "Each session now pulls from a different realistic environment with scene-specific targets.",
    modes: {
      quick: {
        title: "Quick Focus",
        description: "For a tight 60–90 second reset with fewer targets.",
        timing: "75 sec",
      },
      deep: {
        title: "Deep Focus",
        description: "A calmer, longer round with the full object set.",
        timing: "150 sec",
      },
    },
    objectsTitle: "Objects",
    currentScene: "Current scene",
    ambience: "Ambience",
    progressLabel: "Progress",
    livesLabel: "Lives",
    scoreLabel: "Score",
    hint: "Hint",
    restart: "Restart",
    reshuffle: "Shuffle Scene",
    hintsLeft: "Hints left",
    sceneLabel: "Office desk scene",
    objectFound: "Object found",
    miss: "Not quite. Try a different area.",
    timeUp: "Time is up. Restart for another reset.",
    completionTitle: "Focus Restored",
    completionBody:
      "You cleared the scene and completed the reset. Step back into work while your attention is still sharp.",
    completionAction: "Start Another Session",
    secondsLeft: "left",
    wrongLeft: "wrong attempts left",
    themeDark: "Dark",
    themeLight: "Light",
    footer: "FocusnapGame is a micro-focus experience for desk workers.",
    voiceCommands: "Accepts Turkish intent words like “başlat”, “ipucu ver”, and “yeniden dene”.",
    groupTitle: "Group Focus Race",
    groupSubtitle: "Create a room, share the link or PIN, and start the same round together.",
    createRoom: "Create Room",
    joinRoom: "Join Room",
    roomPin: "Room PIN",
    roomLink: "Room link",
    copyLink: "Copy Link",
    startRace: "Start Race",
    waitingRoom: "Waiting Room",
    players: "Players",
    host: "Host",
    joinAction: "Join",
    createAction: "Create",
    enterPin: "Enter PIN",
    lobbyReady: "Waiting for everyone to join.",
    raceLive: "Race Live",
    leaderboard: "Leaderboard",
    shareLink: "Share this link with the team",
    groupNote: "Current room system is single-instance and ideal for one running deployment.",
  },
  tr: {
    brand: "FocusnapGame",
    navHow: "Nasıl çalışır",
    navBenefits: "Faydalar",
    navSession: "Oturum",
    navGroup: "Grup Oyun",
    startSession: "Odak Oturumunu Başlat",
    groupPlay: "Grup Oyun",
    nicknameTitle: "Takma adını belirle",
    nicknameBody: "Takma adın solo skor ve çok oyunculu odalarda kullanılacak.",
    nicknamePlaceholder: "Takma ad gir",
    continueAction: "Devam Et",
    heroTitle: "Gizli nesne tabanlı mikro reset ile odağını geri kazan.",
    heroSubtitle: "Premium odak aracı",
    heroDescription:
      "Masa başında zihinsel bulanıklığı kesmek, dikkati toplamak ve üç dakikadan kısa sürede işe geri dönmek için tasarlanmış rafine bir workstation deneyimi.",
    heroBadge: "Giriş yok. Sürtünme yok. Sadece reset.",
    heroFootnote:
      "Ofis çalışanları, geliştiriciler, analistler ve masa başında odağı kayan herkes için üretildi.",
    howTitle: "Nasıl Çalışır",
    howSubtitle: "Üç kısa adım, tek bir bilinçli durum değişimi.",
    steps: [
      {
        title: "Başlat",
        body: "Moda karar ver ve hız ya da sakin konsantrasyon için ayarlanmış kısa bir görsel arama oturumu başlat.",
      },
      {
        title: "Bul",
        body: "İstenen masa nesnelerini tara, bilinçli şekilde tıkla ve sahnenin dikkatini şimdiye geri çekmesine izin ver.",
      },
      {
        title: "Odaklan",
        body: "Turu daha temiz bir zihin, daha hafif yorgunluk ve görevine dönmek için daha net bir dikkatle bitir.",
      },
    ],
    benefitsTitle: "Neden İşe Yarar",
    benefitsSubtitle: "Bir oyuncaktan değil, üretkenlik ritüelinden ilham alır.",
    benefits: [
      {
        title: "Hızlı bilişsel reset",
        body: "Pasif yorgunluğu kırmak ve aktif dikkati geri getirmek için görsel tarama kullanır.",
      },
      {
        title: "Minimum sürtünme",
        body: "Üyelik yok, gereksiz öğretici yok, şişkin kurulum yok. Aç ve hemen başla.",
      },
      {
        title: "Masa başına uygun tema",
        body: "Modern ofis çalışma alanı, gerçek iş ortamlarıyla doğal olarak hizalanır.",
      },
    ],
    sessionTitle: "Odak Oturumu",
    sessionSubtitle: "Modu seç, sahneye gir ve ritmini geri kazan.",
    scenePoolTitle: "Gerçek Fotoğraf Sahneleri",
    scenePoolBody: "Her oturum farklı bir gerçek ortamdan gelir ve hedef nesneler sahneye göre değişir.",
    modes: {
      quick: {
        title: "Quick Focus",
        description: "Daha az hedefle 60–90 saniyelik hızlı reset.",
        timing: "75 sn",
      },
      deep: {
        title: "Deep Focus",
        description: "Tam nesne setiyle daha sakin ve daha uzun deneyim.",
        timing: "150 sn",
      },
    },
    objectsTitle: "Nesneler",
    currentScene: "Aktif sahne",
    ambience: "Atmosfer",
    progressLabel: "İlerleme",
    livesLabel: "Hak",
    scoreLabel: "Skor",
    hint: "İpucu",
    restart: "Yeniden Başlat",
    reshuffle: "Sahneyi Değiştir",
    hintsLeft: "Kalan ipucu",
    sceneLabel: "Ofis masası sahnesi",
    objectFound: "Nesne bulundu",
    miss: "Henüz değil. Farklı bir alan dene.",
    timeUp: "Süre doldu. Yeni bir reset için yeniden başlat.",
    completionTitle: "Odak Geri Geldi",
    completionBody:
      "Sahneyi temizledin ve reset turunu tamamladın. Dikkatin tazeyken işine geri dön.",
    completionAction: "Yeni Oturum Başlat",
    secondsLeft: "kaldı",
    wrongLeft: "yanlış hakkı kaldı",
    themeDark: "Koyu",
    themeLight: "Açık",
    footer: "FocusnapGame, masa başı çalışanlar için mikro odak deneyimidir.",
    voiceCommands: "“başlat”, “ipucu ver” ve “yeniden dene” gibi Türkçe niyet kelimelerini anlayacak yapıyla tasarlandı.",
    groupTitle: "Grup Odak Yarışı",
    groupSubtitle: "Oda oluştur, linki veya PIN'i paylaş ve aynı turu birlikte başlat.",
    createRoom: "Oda Oluştur",
    joinRoom: "Odaya Katıl",
    roomPin: "Oda PIN",
    roomLink: "Oda bağlantısı",
    copyLink: "Linki Kopyala",
    startRace: "Yarışı Başlat",
    waitingRoom: "Bekleme Odası",
    players: "Oyuncular",
    host: "Sunucu",
    joinAction: "Katıl",
    createAction: "Oluştur",
    enterPin: "PIN gir",
    lobbyReady: "Herkesin katılması bekleniyor.",
    raceLive: "Yarış Canlı",
    leaderboard: "Sıralama",
    shareLink: "Bu bağlantıyı ekiple paylaş",
    groupNote: "Mevcut oda sistemi tek çalışan deployment üzerinde en iyi şekilde çalışır.",
  },
};
