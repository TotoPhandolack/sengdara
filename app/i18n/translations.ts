// Central EN / Lao dictionary for the Sengdara Fitness site.
//
// `en` is the source of truth for the shape; `lo` is typed as `Dict` so
// TypeScript flags any missing key. Brand names (Precor, Google, Sengdara)
// and numerals are intentionally left in Latin in the Lao copy — that's how
// they're normally written in Laos.

export type Lang = "en" | "lo";

const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    join: "Join Now",
  },
  hero: {
    subtitle:
      "Premium Precor equipment, a full swimming pool and sauna, and trainers who actually spot you — Vientiane's highest-rated gym at Km6.",
    getStarted: "Get Started",
    takeTour: "Take a tour",
    proofText: "from 62 Google reviews",
  },
  stats: {
    googleRating: "Google Rating",
    memberReviews: "Member Reviews",
    gymEquipment: "Gym Equipment",
    openUntil: "Open Until",
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Built for real results",
    desc: "Rated 4.7 out of 5 from 62 members — here's what keeps them coming back to Sengdara Fitness Km6.",
    features: [
      {
        title: "Premium Precor Equipment",
        desc: "New gym equipment from Precor, a premium global brand — high standards, durable materials.",
      },
      {
        title: "Pool & Sauna",
        desc: "A full swimming pool and excellent sauna to help you recover between sessions.",
      },
      {
        title: "Boxing & Functional Training",
        desc: "A dedicated boxing and functional area for high-intensity, no-equipment-needed workouts.",
      },
      {
        title: "Friendly, Hands-On Trainers",
        desc: "Trainers who walk the floor to spot you and teach proper form — new members welcome.",
      },
    ],
  },
  program: {
    eyebrow: "Are you looking for a mentor?",
    heading: "Coaches",
    body: "“The trainers are incredibly kind — always around to spot you and teach you how to use the equipment properly,” says one member. Whether you're brand new to the gym or training for a specific goal, our team walks the floor with you instead of leaving you to figure it out alone.",
    cta: "Explore More",
  },
  facility: {
    eyebrow: "Facility",
    heading: "Take a look inside",
    desc: "Two floors of premium Precor equipment, a boxing area, an elevated running track, and more.",
  },
  pricing: {
    eyebrow: "Membership",
    heading: "Simple pricing",
    desc: "Choose the plan that fits your training goals. No hidden fees — call anytime for an accurate quote.",
    popular: "Popular",
    contactForPricing: "Contact for pricing",
    callToJoin: "Call to Join",
    plans: [
      {
        name: "Day Pass",
        desc: "Try the gym for a day — full access to the equipment floor and cardio area.",
        features: ["Precor equipment floor", "Cardio & elevated track", "Locker access"],
      },
      {
        name: "Monthly Membership",
        desc: "Full access, including the pool, sauna, and boxing area, billed monthly.",
        features: [
          "Everything in Day Pass",
          "Swimming pool & sauna",
          "Boxing & functional area",
          "Trainer floor support",
        ],
      },
      {
        name: "Annual Membership",
        desc: "Our best-value plan for members training year-round.",
        features: [
          "Everything in Monthly",
          "Priority class booking",
          "Guest passes",
          "Restaurant discount",
        ],
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    heading: "What members say",
    leaveReview: "Leave a Review",
    googleReview: "Google review",
    starsAria: "Rated 5 out of 5",
    prevAria: "Previous reviews",
    nextAria: "Next reviews",
    pageAria: "Review pages",
    goToPage: "Go to review page",
  },
  footer: {
    ctaEyebrow: "Ready when you are",
    ctaTitle: "Start training at Sengdara",
    colQuick: "Quick Links",
    colContact: "Contact",
    colHours: "Hours",
    quick: ["Home", "Why Choose Us", "Facility", "Pricing"],
    contact: ["020 93 460 645", "Ban Nongnieng 13, South Rd", "Vientiane 01160, Laos"],
    hours: ["Open daily", "Until 10:00 PM"],
    tagline:
      "Vientiane's 4.7-star rated gym — premium Precor equipment, a full swimming pool, sauna, and trainers who spot you.",
    copyright: "© 2026 Sengdara Fitness Km6. All rights reserved.",
  },
};

export type Dict = typeof en;

const lo: Dict = {
  nav: {
    home: "ໜ້າຫຼັກ",
    about: "ກ່ຽວກັບ",
    services: "ບໍລິການ",
    contact: "ຕິດຕໍ່",
    join: "ສະໝັກເລີຍ",
  },
  hero: {
    subtitle:
      "ອຸປະກອນ Precor ລະດັບພຣີມຽມ, ສະລອຍນ້ຳເຕັມຮູບແບບ ແລະ ຫ້ອງອົບໄອນ້ຳ, ພ້ອມເທຣນເນີທີ່ຄອຍເບິ່ງແຍງທ່ານແທ້ໆ — ຟິດເນສທີ່ໄດ້ຄະແນນສູງທີ່ສຸດຂອງນະຄອນຫຼວງວຽງຈັນ ຢູ່ຫຼັກ 6.",
    getStarted: "ເລີ່ມຕົ້ນ",
    takeTour: "ຢ້ຽມຊົມ",
    proofText: "ຈາກ 62 ຣີວິວໃນ Google",
  },
  stats: {
    googleRating: "ຄະແນນ Google",
    memberReviews: "ຣີວິວສະມາຊິກ",
    gymEquipment: "ອຸປະກອນ",
    openUntil: "ເປີດຮອດ",
  },
  why: {
    eyebrow: "ເປັນຫຍັງຕ້ອງເລືອກພວກເຮົາ",
    heading: "ສ້າງມາເພື່ອຜົນລັບທີ່ແທ້ຈິງ",
    desc: "ໄດ້ຄະແນນ 4.7 ຈາກ 5 ໂດຍສະມາຊິກ 62 ຄົນ — ນີ້ຄືເຫດຜົນທີ່ພວກເຂົາກັບມາ Sengdara Fitness ຫຼັກ 6 ຢູ່ສະເໝີ.",
    features: [
      {
        title: "ອຸປະກອນ Precor ລະດັບພຣີມຽມ",
        desc: "ອຸປະກອນອອກກຳລັງກາຍໃໝ່ຈາກ Precor ແບຣນຊັ້ນນຳລະດັບໂລກ — ມາດຕະຖານສູງ, ວັດສະດຸທົນທານ.",
      },
      {
        title: "ສະລອຍນ້ຳ & ຫ້ອງອົບໄອນ້ຳ",
        desc: "ສະລອຍນ້ຳເຕັມຮູບແບບ ແລະ ຫ້ອງອົບໄອນ້ຳຊັ້ນດີ ຊ່ວຍໃຫ້ທ່ານຟື້ນຕົວລະຫວ່າງການຝຶກ.",
      },
      {
        title: "ມວຍ & ຝຶກຟັງຊັນນອລ",
        desc: "ໂຊນມວຍ ແລະ ຟັງຊັນນອລໂດຍສະເພາະ ສຳລັບການອອກກຳລັງກາຍແບບເຂັ້ມຂຸ້ນ ໂດຍບໍ່ຕ້ອງໃຊ້ອຸປະກອນ.",
      },
      {
        title: "ເທຣນເນີເປັນກັນເອງ ດູແລໃກ້ຊິດ",
        desc: "ເທຣນເນີທີ່ຍ່າງເບິ່ງແຍງ ຄອຍຊ່ວຍ ແລະ ສອນທ່າທາງທີ່ຖືກຕ້ອງ — ຍິນດີຕ້ອນຮັບສະມາຊິກໃໝ່.",
      },
    ],
  },
  program: {
    eyebrow: "ກຳລັງຊອກຫາຄູຝຶກຢູ່ບໍ?",
    heading: "ຄູຝຶກ",
    body: "“ເທຣນເນີໃຈດີຫຼາຍ — ຄອຍຢູ່ໃກ້ຊ່ວຍເບິ່ງແຍງ ແລະ ສອນວິທີໃຊ້ອຸປະກອນຢ່າງຖືກຕ້ອງສະເໝີ,” ສະມາຊິກຄົນໜຶ່ງເລົ່າ. ບໍ່ວ່າທ່ານຈະຫາກໍເລີ່ມມາ ຫຼື ກຳລັງຝຶກເພື່ອເປົ້າໝາຍໃດໜຶ່ງ, ທີມງານຂອງພວກເຮົາຈະຢູ່ຄຽງຂ້າງທ່ານ ແທນທີ່ຈະປ່ອຍໃຫ້ທ່ານຄິດເອງຄົນດຽວ.",
    cta: "ເບິ່ງເພີ່ມເຕີມ",
  },
  facility: {
    eyebrow: "ສະຖານທີ່",
    heading: "ເບິ່ງພາຍໃນ",
    desc: "ອຸປະກອນ Precor ລະດັບພຣີມຽມສອງຊັ້ນ, ໂຊນມວຍ, ລູ່ແລ່ນຍົກສູງ ແລະ ອື່ນໆອີກ.",
  },
  pricing: {
    eyebrow: "ສະມາຊິກ",
    heading: "ລາຄາແບບງ່າຍໆ",
    desc: "ເລືອກແພັກເກັດທີ່ເໝາະກັບເປົ້າໝາຍການຝຶກຂອງທ່ານ. ບໍ່ມີຄ່າໃຊ້ຈ່າຍແອບແຝງ — ໂທຫາໄດ້ທຸກເວລາເພື່ອສອບຖາມລາຄາ.",
    popular: "ນິຍົມ",
    contactForPricing: "ຕິດຕໍ່ສອບຖາມລາຄາ",
    callToJoin: "ໂທເພື່ອສະໝັກ",
    plans: [
      {
        name: "ບັດລາຍວັນ",
        desc: "ລອງໃຊ້ຫ້ອງອອກກຳລັງກາຍໜຶ່ງມື້ — ເຂົ້າໃຊ້ໂຊນອຸປະກອນ ແລະ ຄາດີໂອໄດ້ເຕັມທີ່.",
        features: ["ໂຊນອຸປະກອນ Precor", "ຄາດີໂອ & ລູ່ແລ່ນຍົກສູງ", "ໃຊ້ຕູ້ລັອກເກີ"],
      },
      {
        name: "ສະມາຊິກລາຍເດືອນ",
        desc: "ເຂົ້າໃຊ້ໄດ້ເຕັມທີ່ ລວມທັງສະລອຍນ້ຳ, ຫ້ອງອົບໄອນ້ຳ ແລະ ໂຊນມວຍ, ຄິດຄ່າລາຍເດືອນ.",
        features: [
          "ທຸກຢ່າງໃນບັດລາຍວັນ",
          "ສະລອຍນ້ຳ & ຫ້ອງອົບໄອນ້ຳ",
          "ໂຊນມວຍ & ຟັງຊັນນອລ",
          "ເທຣນເນີຊ່ວຍເບິ່ງແຍງ",
        ],
      },
      {
        name: "ສະມາຊິກລາຍປີ",
        desc: "ແພັກເກັດຄຸ້ມຄ່າທີ່ສຸດ ສຳລັບຜູ້ທີ່ຝຶກຕະຫຼອດປີ.",
        features: [
          "ທຸກຢ່າງໃນລາຍເດືອນ",
          "ຈອງຄລາສກ່ອນໃຜ",
          "ບັດເຊີນແຂກ",
          "ສ່ວນຫຼຸດຮ້ານອາຫານ",
        ],
      },
    ],
  },
  reviews: {
    eyebrow: "ຣີວິວ",
    heading: "ສະມາຊິກເວົ້າແນວໃດ",
    leaveReview: "ຂຽນຣີວິວ",
    googleReview: "ຣີວິວ Google",
    starsAria: "ໃຫ້ຄະແນນ 5 ຈາກ 5",
    prevAria: "ຣີວິວກ່ອນໜ້າ",
    nextAria: "ຣີວິວຕໍ່ໄປ",
    pageAria: "ໜ້າຣີວິວ",
    goToPage: "ໄປທີ່ໜ້າຣີວິວ",
  },
  footer: {
    ctaEyebrow: "ພ້ອມເມື່ອທ່ານພ້ອມ",
    ctaTitle: "ເລີ່ມຝຶກທີ່ Sengdara",
    colQuick: "ລິ້ງດ່ວນ",
    colContact: "ຕິດຕໍ່",
    colHours: "ເວລາເປີດ",
    quick: ["ໜ້າຫຼັກ", "ເປັນຫຍັງຕ້ອງເລືອກພວກເຮົາ", "ສະຖານທີ່", "ລາຄາ"],
    contact: ["020 93 460 645", "ບ້ານໜອງໜ່ຽງ 13, ຖະໜົນໃຕ້", "ນະຄອນຫຼວງວຽງຈັນ 01160, ລາວ"],
    hours: ["ເປີດທຸກມື້", "ຮອດ 22:00 ໂມງ"],
    tagline:
      "ຫ້ອງອອກກຳລັງກາຍລະດັບ 4.7 ດາວຂອງນະຄອນຫຼວງວຽງຈັນ — ອຸປະກອນ Precor ລະດັບພຣີມຽມ, ສະລອຍນ້ຳເຕັມຮູບແບບ, ຫ້ອງອົບໄອນ້ຳ ແລະ ເທຣນເນີທີ່ຄອຍເບິ່ງແຍງທ່ານ.",
    copyright: "© 2026 Sengdara Fitness ຫຼັກ 6. ສະຫງວນລິຂະສິດທັງໝົດ.",
  },
};

export const translations: Record<Lang, Dict> = { en, lo };
