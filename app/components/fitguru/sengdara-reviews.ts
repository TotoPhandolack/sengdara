// Real reviews from the Sengdara Fitness Km6 Google Business Profile.
// Reviews originally written in Thai / Lao / French are provided here in both
// English and Lao; only genuine, positive member reviews are included. `lang`
// notes the original language for the ones that were translated.
import type { Lang } from "../../i18n/translations";

export type TimeUnit = "week" | "month" | "year";

export type Review = {
  name: string;
  initials: string;
  timeAgo: { count: number; unit: TimeUnit };
  quote: Record<Lang, string>;
  lang?: "Thai" | "Lao" | "French";
};

const UNIT_LO: Record<TimeUnit, string> = {
  week: "ອາທິດ",
  month: "ເດືອນ",
  year: "ປີ",
};

// "7 months ago" (en) / "7 ເດືອນກ່ອນ" (lo)
export function formatTimeAgo(
  { count, unit }: Review["timeAgo"],
  lang: Lang
): string {
  if (lang === "lo") return `${count} ${UNIT_LO[unit]}ກ່ອນ`;
  return `${count} ${unit}${count === 1 ? "" : "s"} ago`;
}

export const sengdaraReviews: Review[] = [
  {
    name: "Namnueng Kvs",
    initials: "NK",
    timeAgo: { count: 1, unit: "month" },
    lang: "Thai",
    quote: {
      en: "My favorite gym, hands down — 5 stars, no deductions! I was nervous at first since I'd only just started working out, but this place put me completely at ease. The trainers are incredibly kind, always spotting you and teaching proper form without holding anything back.",
      lo: "ຫ້ອງອອກກຳລັງກາຍທີ່ຂ້ອຍມັກທີ່ສຸດ — 5 ດາວເຕັມ ບໍ່ຫັກເລີຍ! ຕອນທຳອິດຂ້ອຍຮູ້ສຶກກັງວົນເພາະຫາກໍເລີ່ມອອກກຳລັງກາຍ ແຕ່ບ່ອນນີ້ເຮັດໃຫ້ຂ້ອຍສະບາຍໃຈໝົດ. ເທຣນເນີໃຈດີຫຼາຍ ຄອຍຊ່ວຍເບິ່ງແຍງ ແລະ ສອນທ່າທາງທີ່ຖືກຕ້ອງໂດຍບໍ່ປິດບັງ.",
    },
  },
  {
    name: "Mee Lutsamy",
    initials: "ML",
    timeAgo: { count: 7, unit: "month" },
    lang: "Thai",
    quote: {
      en: "Really impressed with this gym — every kip I spent was completely worth it. They chose Precor equipment, a premium brand: great quality, high standards, and strong, durable materials.",
      lo: "ປະທັບໃຈຫ້ອງອອກກຳລັງກາຍນີ້ຫຼາຍ — ທຸກໆກີບທີ່ຈ່າຍໄປຄຸ້ມຄ່າແທ້ໆ. ເຂົາເລືອກໃຊ້ອຸປະກອນ Precor ຊຶ່ງເປັນແບຣນພຣີມຽມ: ຄຸນນະພາບດີ, ມາດຕະຖານສູງ ແລະ ວັດສະດຸແຂງແຮງທົນທານ.",
    },
  },
  {
    name: "Pandacoco",
    initials: "PC",
    timeAgo: { count: 5, unit: "month" },
    quote: {
      en: "Best fitness club in Vientiane I can recommend. Staff so friendly and respectful. Swimming pool and sauna are excellent. New gym equipment and the restaurant food is good. Toilets are clean. I give 5 stars for this gym.",
      lo: "ຟິດເນສຄລັບທີ່ດີທີ່ສຸດໃນວຽງຈັນທີ່ຂ້ອຍແນະນຳໄດ້. ພະນັກງານເປັນກັນເອງ ແລະ ສຸພາບຫຼາຍ. ສະລອຍນ້ຳ ແລະ ຫ້ອງອົບໄອນ້ຳຊັ້ນດີ. ອຸປະກອນໃໝ່ ແລະ ອາຫານໃນຮ້ານກໍແຊບ. ຫ້ອງນ້ຳສະອາດ. ຂ້ອຍໃຫ້ 5 ດາວສຳລັບບ່ອນນີ້.",
    },
  },
  {
    name: "Tamon Phommaharn",
    initials: "TP",
    timeAgo: { count: 6, unit: "month" },
    quote: {
      en: "This gym is amazing. The facilities are top-notch, the equipment is new, and the environment is great for all levels. The staff is super friendly and the place is always clean.",
      lo: "ຫ້ອງອອກກຳລັງກາຍນີ້ຍອດຢ້ຽມ. ສິ່ງອຳນວຍຄວາມສະດວກຊັ້ນນຳ, ອຸປະກອນໃໝ່ ແລະ ບັນຍາກາດເໝາະສຳລັບທຸກລະດັບ. ພະນັກງານເປັນກັນເອງຫຼາຍ ແລະ ບ່ອນນີ້ສະອາດຕະຫຼອດ.",
    },
  },
  {
    name: "Sujidtra Jongpongklang",
    initials: "SJ",
    timeAgo: { count: 6, unit: "month" },
    lang: "Thai",
    quote: {
      en: "A really great gym — private, clean, with a lovely atmosphere. The staff service is excellent and the equipment is premium. Best of all, there's a swimming pool and a sauna too. Fantastic.",
      lo: "ຫ້ອງອອກກຳລັງກາຍທີ່ດີແທ້ໆ — ເປັນສ່ວນຕົວ, ສະອາດ ແລະ ບັນຍາກາດໜ້າຮັກ. ການບໍລິການຂອງພະນັກງານດີເລີດ ແລະ ອຸປະກອນລະດັບພຣີມຽມ. ທີ່ດີທີ່ສຸດຄື ມີສະລອຍນ້ຳ ແລະ ຫ້ອງອົບໄອນ້ຳນຳ. ຍອດຢ້ຽມ.",
    },
  },
  {
    name: "Sasiwimon Chantarasakha",
    initials: "SC",
    timeAgo: { count: 6, unit: "month" },
    lang: "Thai",
    quote: {
      en: "The staff service is excellent and there's a huge variety of machines. My kids love the pool, everything is clean, and the food is delicious. Overall — simply the best.",
      lo: "ການບໍລິການຂອງພະນັກງານດີເລີດ ແລະ ມີເຄື່ອງອອກກຳລັງກາຍຫຼວງຫຼາຍ. ລູກໆຂອງຂ້ອຍມັກສະລອຍນ້ຳ, ທຸກຢ່າງສະອາດ ແລະ ອາຫານກໍແຊບ. ໂດຍລວມແລ້ວ — ດີທີ່ສຸດ.",
    },
  },
  {
    name: "Pany Phimphisan",
    initials: "PP",
    timeAgo: { count: 4, unit: "month" },
    lang: "Thai",
    quote: {
      en: "Modern equipment, great service, and attention to every detail. Quality and style combined — perfect for people who choose only the best for themselves.",
      lo: "ອຸປະກອນທັນສະໄໝ, ບໍລິການດີ ແລະ ໃສ່ໃຈທຸກລາຍລະອຽດ. ຄຸນນະພາບ ແລະ ສະໄຕລ໌ຄົບຄັນ — ເໝາະສຳລັບຄົນທີ່ເລືອກແຕ່ສິ່ງທີ່ດີທີ່ສຸດໃຫ້ຕົນເອງ.",
    },
  },
  {
    name: "Tharadon",
    initials: "TH",
    timeAgo: { count: 3, unit: "month" },
    lang: "Thai",
    quote: {
      en: "Clean, inviting, and fully equipped — truly a one-stop gym. I'm really impressed. Coming here makes me feel far more motivated to work out.",
      lo: "ສະອາດ, ໜ້າເຂົ້າ ແລະ ອຸປະກອນຄົບຄັນ — ເປັນຫ້ອງອອກກຳລັງກາຍແບບຄົບວົງຈອນແທ້ໆ. ຂ້ອຍປະທັບໃຈຫຼາຍ. ມາບ່ອນນີ້ເຮັດໃຫ້ຮູ້ສຶກມີກຳລັງໃຈຢາກອອກກຳລັງກາຍຫຼາຍຂຶ້ນ.",
    },
  },
  {
    name: "Pat Banuvong",
    initials: "PB",
    timeAgo: { count: 7, unit: "month" },
    lang: "Thai",
    quote: {
      en: "I love that there are so many varied zones and machines — both free weights and machines. Most importantly it's clean, and the staff always keep the equipment tidy, which makes the whole workout atmosphere great.",
      lo: "ຂ້ອຍມັກທີ່ມີໂຊນ ແລະ ເຄື່ອງຫຼາກຫຼາຍ — ທັງຟຣີເວດ ແລະ ເຄື່ອງ. ທີ່ສຳຄັນຄືສະອາດ ແລະ ພະນັກງານຄອຍຈັດອຸປະກອນໃຫ້ເປັນລະບຽບ ເຮັດໃຫ້ບັນຍາກາດການອອກກຳລັງກາຍດີຫຼາຍ.",
    },
  },
  {
    name: "Nisachone Buaeseng",
    initials: "NB",
    timeAgo: { count: 9, unit: "month" },
    lang: "Thai",
    quote: {
      en: "Cheerful, friendly staff and warm, personable service. A wide variety of machines suitable for every level of training.",
      lo: "ພະນັກງານຮ່າເລີງ ເປັນກັນເອງ ແລະ ບໍລິການອົບອຸ່ນເປັນມິດ. ມີເຄື່ອງຫຼາກຫຼາຍເໝາະສຳລັບການຝຶກທຸກລະດັບ.",
    },
  },
  {
    name: "La La",
    initials: "LL",
    timeAgo: { count: 6, unit: "month" },
    quote: {
      en: "The service is good, the facility is clean, and working out here is well worth the time and money.",
      lo: "ບໍລິການດີ, ສະຖານທີ່ສະອາດ ແລະ ການອອກກຳລັງກາຍຢູ່ນີ້ຄຸ້ມຄ່າທັງເວລາ ແລະ ເງິນ.",
    },
  },
  {
    name: "Tim Sorphapmichai",
    initials: "TS",
    timeAgo: { count: 7, unit: "month" },
    lang: "Lao",
    quote: {
      en: "Really impressed with the fitness center. Brand-new equipment, spotlessly clean, air-conditioned, and a great atmosphere.",
      lo: "ປະທັບໃຈຟິດເນສນີ້ຫຼາຍ. ອຸປະກອນໃໝ່ຫຼ້າສຸດ, ສະອາດ, ມີແອ ແລະ ບັນຍາກາດດີ.",
    },
  },
  {
    name: "Ping Shui Chan",
    initials: "PS",
    timeAgo: { count: 2, unit: "year" },
    quote: {
      en: "Comfortable and spacious place to exercise, with amenities that are fully equipped and convenient. The swimming pool and sauna are great too.",
      lo: "ບ່ອນອອກກຳລັງກາຍທີ່ສະດວກສະບາຍ ແລະ ກ້ວາງຂວາງ ພ້ອມສິ່ງອຳນວຍຄວາມສະດວກຄົບຄັນ. ສະລອຍນ້ຳ ແລະ ຫ້ອງອົບໄອນ້ຳກໍດີ.",
    },
  },
  {
    name: "M D",
    initials: "MD",
    timeAgo: { count: 2, unit: "year" },
    lang: "French",
    quote: {
      en: "The gym is extremely well equipped and the staff are attentive. There's a play area for kids, a large clean pool, and the sauna and steam room are a comfortable temperature. I highly recommend it.",
      lo: "ຫ້ອງອອກກຳລັງກາຍມີອຸປະກອນຄົບຄັນຫຼາຍ ແລະ ພະນັກງານໃສ່ໃຈດີ. ມີບ່ອນຫຼິ້ນສຳລັບເດັກ, ສະລອຍນ້ຳໃຫຍ່ສະອາດ ແລະ ຫ້ອງອົບໄອນ້ຳ ກັບ ຫ້ອງໄອນ້ຳຮ້ອນອຸນຫະພູມສະບາຍ. ຂ້ອຍແນະນຳຢ່າງຍິ່ງ.",
    },
  },
  {
    name: "Kongthong Tandavong",
    initials: "KT",
    timeAgo: { count: 1, unit: "month" },
    quote: {
      en: "The gym in my heart — five stars without deduction! At first I was nervous because I'd only just started training, but the moment I walked in I felt completely at ease.",
      lo: "ຫ້ອງອອກກຳລັງກາຍໃນໃຈຂ້ອຍ — ຫ້າດາວບໍ່ຫັກ! ຕອນທຳອິດຂ້ອຍກັງວົນເພາະຫາກໍເລີ່ມຝຶກ ແຕ່ພໍກ້າວເຂົ້າໄປກໍຮູ້ສຶກສະບາຍໃຈໝົດ.",
    },
  },
  {
    name: "Jindojin Ss",
    initials: "JS",
    timeAgo: { count: 1, unit: "year" },
    lang: "Thai",
    quote: {
      en: "Absolutely brilliant — the best. Modern equipment, great service, and genuinely professional trainers.",
      lo: "ດີເລີດແທ້ໆ — ດີທີ່ສຸດ. ອຸປະກອນທັນສະໄໝ, ບໍລິການດີ ແລະ ເທຣນເນີເປັນມືອາຊີບແທ້ໆ.",
    },
  },
  {
    name: "Athi Studio",
    initials: "AS",
    timeAgo: { count: 4, unit: "week" },
    lang: "Thai",
    quote: {
      en: "I finally got to try this place and overall it's excellent. Of all the gyms I've been to, this is the best — welcoming front-desk staff and trainers, all smiles. Highly recommended.",
      lo: "ໃນທີ່ສຸດກໍໄດ້ລອງບ່ອນນີ້ ແລະ ໂດຍລວມແລ້ວດີເລີດ. ໃນບັນດາຫ້ອງອອກກຳລັງກາຍທີ່ເຄີຍໄປ ບ່ອນນີ້ດີທີ່ສຸດ — ພະນັກງານຕ້ອນຮັບ ແລະ ເທຣນເນີຍິ້ມແຍ້ມ. ແນະນຳຢ່າງຍິ່ງ.",
    },
  },
  {
    name: "Nisakorn Tangmandee",
    initials: "NT",
    timeAgo: { count: 1, unit: "year" },
    lang: "Thai",
    quote: {
      en: "Modern machines and impressive, memorable service. No disappointment using this place at all.",
      lo: "ເຄື່ອງທັນສະໄໝ ແລະ ບໍລິການປະທັບໃຈຈົນຈຳ. ໃຊ້ບ່ອນນີ້ບໍ່ຜິດຫວັງເລີຍ.",
    },
  },
  {
    name: "Richard Chisholm",
    initials: "RC",
    timeAgo: { count: 4, unit: "month" },
    quote: {
      en: "Fantastic experience — highly recommended.",
      lo: "ປະສົບການທີ່ຍອດຢ້ຽມ — ແນະນຳຢ່າງຍິ່ງ.",
    },
  },
  {
    name: "Sarawut Otthon",
    initials: "SO",
    timeAgo: { count: 1, unit: "year" },
    lang: "Thai",
    quote: {
      en: "Really great — no disappointment at all. There are so many machines to use.",
      lo: "ດີແທ້ໆ — ບໍ່ຜິດຫວັງເລີຍ. ມີເຄື່ອງໃຫ້ໃຊ້ຫຼາຍ.",
    },
  },
  {
    name: "John Stirzaker",
    initials: "JS",
    timeAgo: { count: 3, unit: "year" },
    quote: {
      en: "Excellent gym and a great pool.",
      lo: "ຫ້ອງອອກກຳລັງກາຍດີເລີດ ແລະ ສະລອຍນ້ຳກໍດີ.",
    },
  },
  {
    name: "Albert Thane",
    initials: "AT",
    timeAgo: { count: 3, unit: "year" },
    quote: {
      en: "All-new gym and sauna. Love it.",
      lo: "ຫ້ອງອອກກຳລັງກາຍ ແລະ ຫ້ອງອົບໄອນ້ຳໃໝ່ໝົດ. ມັກຫຼາຍ.",
    },
  },
  {
    name: "Phanpadith",
    initials: "PH",
    timeAgo: { count: 3, unit: "month" },
    quote: {
      en: "Best gym in town.",
      lo: "ຫ້ອງອອກກຳລັງກາຍທີ່ດີທີ່ສຸດໃນເມືອງ.",
    },
  },
  {
    name: "Sankerdas Latthanhot",
    initials: "SL",
    timeAgo: { count: 1, unit: "year" },
    quote: {
      en: "Best gym in Lao PDR.",
      lo: "ຫ້ອງອອກກຳລັງກາຍທີ່ດີທີ່ສຸດໃນ ສປປ ລາວ.",
    },
  },
];
