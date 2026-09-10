import doctor1Photo from "../assets/doctors/doctor-1.jpeg";
import doctor2Photo from "../assets/doctors/doctor-2.jpeg";

export type Doctor = {
  id: string;
  name: string;
  title: string;
  specialization: string;
  photo: string;
  phone: { display: string; href: string };
  bio: string;
  education: string[];
  focusAreas: string[];
  experience: string;
  languages: string[];
};

export const doctors: Doctor[] = [
  {
    id: "dr-seid",
    name: "Seid Halilović",
    title: "Doktor dentalne medicine",
    specialization: "Protetika, konzervativna stomatologija i endodoncija",
    photo: doctor1Photo,
    phone: { display: "060 301 05 50", href: "tel:+38760301050" },
    bio: "Doktor dentalne medicine s višegodišnjim profesionalnim iskustvom u stomatologiji. Stomatološki fakultet u Travniku završio je u decembru 2018. godine, nakon čega je kontinuirano radio u stomatološkoj praksi. Posebno iskustvo posjeduje u oblasti protetike, konzervativne stomatologije, endodoncije, ekstrakcija i preventivne stomatologije, uz profesionalan odnos prema pacijentima i preciznost u radu.",
    education: ["Stomatološki fakultet u Travniku — doktor dentalne medicine (decembar 2018.)"],
    focusAreas: [
      "Fiksna i mobilna protetika",
      "Konzervativna stomatologija i endodoncija",
      "Ekstrakcije zuba i preventivna stomatologija",
      "Parodontološka terapija",
    ],
    experience: "Kontinuiran klinički rad od decembra 2018. godine",
    languages: ["Bosanski", "Engleski"],
  },
  {
    id: "dr-mustafa",
    name: "Mustafa Seferović",
    title: "Doktor dentalne medicine",
    specialization: "Protetika, estetska stomatologija i endodoncija",
    photo: doctor2Photo,
    phone: { display: "060 347 82 44", href: "tel:+38760347844" },
    bio: "Doktor dentalne medicine, diplomirao na Stomatološkom fakultetu sa klinikama Univerziteta u Sarajevu. Tokom studija stekao je praktično iskustvo radom u stomatološkim ordinacijama u Travniku, a poseban interes pokazuje za savremenu protetiku, konzervativnu stomatologiju, endodonciju i estetsku stomatologiju. Odlikuju ga odgovornost, preciznost i profesionalan odnos prema pacijentima.",
    education: [
      "Stomatološki fakultet Univerziteta u Sarajevu — doktor dentalne medicine (septembar 2024.)",
    ],
    focusAreas: [
      "Protetika i planiranje protetske terapije",
      "Konzervativna i preventivna stomatologija",
      "Endodoncija",
      "Osnove implantološke terapije",
    ],
    experience: "Klinički rad od 2024. godine, uz praktično iskustvo tokom studija",
    languages: ["Bosanski", "Engleski"],
  },
];
