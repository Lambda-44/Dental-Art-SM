// Official price list — Stomatološka ordinacija Dental Art SM.
// Grouped by category, in the same order as the clinic's printed cjenovnik.

export type PriceItem = {
  name: string;
  price: string;
  description: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};

export const pricingCategories: PriceCategory[] = [
  {
    id: "pregled",
    title: "Pregled i dijagnostika",
    items: [
      {
        name: "Pregled",
        price: "10,00 KM",
        description:
          "Osnovni stomatološki pregled kojim utvrđujemo stanje zuba i desni te predlažemo dalje korake liječenja.",
      },
      {
        name: "Površinska anestezija",
        price: "5,00 KM",
        description:
          "Lokalno omekšavanje sluznice prije uboda anestetika radi bezbolnijeg zahvata.",
      },
      {
        name: "Slikanje zuba (RVG)",
        price: "10,00 KM",
        description:
          "Digitalni rendgenski snimak pojedinačnog zuba za preciznu dijagnostiku.",
      },
      {
        name: "Izdavanje nalaza",
        price: "20,00 KM",
        description:
          "Pisani nalaz o stanju zuba i preporučenoj terapiji, za vaše potrebe ili drugu ustanovu.",
      },
    ],
  },
  {
    id: "preventiva",
    title: "Preventivna stomatologija",
    items: [
      {
        name: "Ultrazvučno skidanje kamenca",
        price: "30,00 KM",
        description:
          "Uklanjanje zubnog kamenca ultrazvučnim uređajem radi zdravijih desni.",
      },
      {
        name: "Air Flow – Pjeskarenje",
        price: "50,00 KM",
        description:
          "Uklanjanje površinskih mrlja i naslaga mlazom vode, zraka i praška za sjajniji izgled zuba.",
      },
      {
        name: "Zalijevanje fisura (molari)",
        price: "30,00 KM",
        description:
          "Zaštita dubokih fisura kutnjaka pečatnim materijalom radi prevencije karijesa.",
      },
      {
        name: "Zalijevanje fisura (premolari)",
        price: "20,00 KM",
        description:
          "Zaštita fisura pretkutnjaka pečatnim materijalom radi prevencije karijesa.",
      },
    ],
  },
  {
    id: "konzervativna",
    title: "Konzervativna stomatologija",
    items: [
      {
        name: "Plomba na mliječnom zubu",
        price: "30,00 KM",
        description: "Sanacija karijesa na mliječnom zubu estetskim ispunom.",
      },
      {
        name: "Kompozitna plomba (jednopovršinska)",
        price: "40,00 KM",
        description: "Ispun karijesa ograničenog na jednu površinu zuba.",
      },
      {
        name: "Kompozitna plomba (dvopovršinska)",
        price: "50,00 KM",
        description: "Ispun karijesa koji zahvata dvije površine zuba.",
      },
      {
        name: "Kompozitna plomba (višepovršinska)",
        price: "60,00 KM",
        description:
          "Ispun opsežnijeg karijesa koji zahvata više površina zuba.",
      },
      {
        name: "Kompozitne fasete",
        price: "100,00 KM",
        description:
          "Tanak sloj estetskog kompozitnog materijala za poboljšanje oblika i boje prednjeg zuba.",
      },
      {
        name: "Cirkonski ukras na zubu",
        price: "50,00 KM",
        description: "Dekorativni cirkonski detalj na zubu, po želji pacijenta.",
      },
    ],
  },
  {
    id: "endodoncija",
    title: "Endodoncija",
    items: [
      {
        name: "Trepanacija zuba",
        price: "20,00 KM",
        description:
          "Otvaranje zuba radi rasterećenja pritiska i pristupa korijenskom kanalu.",
      },
      {
        name: "Punjenje korijenskog kanala (po kanalu)",
        price: "50,00 KM",
        description:
          "Čišćenje i trajno punjenje korijenskog kanala nakon liječenja infekcije.",
      },
      {
        name: "IPP (Ca(OH)₂)",
        price: "20,00 KM",
        description:
          "Privremeni uložak u korijenski kanal radi smirivanja upale prije trajnog punjenja.",
      },
      {
        name: "DPP (Ca(OH)₂)",
        price: "20,00 KM",
        description:
          "Direktno prekrivanje pulpe zaštitnim materijalom radi očuvanja vitalnosti zuba.",
      },
      {
        name: "Devitalizacija pulpe (pulpix/toxavit)",
        price: "30,00 KM",
        description:
          "Postupak umrtvljivanja zubne pulpe prije daljeg endodontskog liječenja.",
      },
      {
        name: "Biološko punjenje (Ca(OH)₂ + jodoform)",
        price: "30,00 KM",
        description:
          "Punjenje korijenskog kanala biokompatibilnim materijalom, najčešće kod mliječnih zuba.",
      },
    ],
  },
  {
    id: "estetska",
    title: "Estetska stomatologija",
    items: [
      {
        name: "Izbjeljivanje zuba (po luku)",
        price: "200,00 KM",
        description:
          "Kontrolisano posvjetljivanje boje zuba u ordinaciji, za jedan zubni luk.",
      },
    ],
  },
  {
    id: "hirurgija",
    title: "Oralna hirurgija",
    items: [
      {
        name: "Vađenje zuba",
        price: "50,00 KM",
        description: "Standardna ekstrakcija zuba koji se više ne može sačuvati.",
      },
      {
        name: "Separacija korjenova",
        price: "20,00 KM",
        description:
          "Razdvajanje korijena višekorijenog zuba radi lakšeg i sigurnijeg vađenja.",
      },
      {
        name: "Vađenje mliječnog zuba",
        price: "30,00 KM",
        description: "Nježno vađenje mliječnog zuba kod djece.",
      },
      {
        name: "Komplikovano vađenje",
        price: "120,00 KM",
        description:
          "Ekstrakcija zuba koja zahtijeva dodatni hirurški pristup zbog položaja ili stanja zuba.",
      },
      {
        name: "Komplikovano vađenje sa suturama",
        price: "150,00 KM",
        description:
          "Komplikovana ekstrakcija koja se završava postavljanjem šavova radi bržeg zarastanja.",
      },
    ],
  },
  {
    id: "protetika-krunice",
    title: "Protetika — krunice i mostovi",
    items: [
      {
        name: "Privremena krunica",
        price: "40,00 KM",
        description:
          "Zaštitna krunica koja štiti obrađen zub do izrade trajnog rada.",
      },
      {
        name: "Skidanje navlake",
        price: "30,00 KM",
        description: "Uklanjanje postojeće krunice radi pregleda ili zamjene.",
      },
      {
        name: "Skidanje mosta (po članu)",
        price: "30,00 KM",
        description: "Uklanjanje postojećeg mosta, po jednom članu konstrukcije.",
      },
      {
        name: "Ponovno cementiranje navlaka",
        price: "40,00 KM",
        description: "Fiksiranje odvojene krunice nazad na zub dentalnim cementom.",
      },
      {
        name: "Ponovno cementiranje mosta",
        price: "100,00 KM",
        description:
          "Fiksiranje odvojenog mosta nazad na nosače dentalnim cementom.",
      },
      {
        name: "Selektivno brušenje (po članu)",
        price: "20,00 KM",
        description:
          "Fino prilagođavanje visine zagriza brušenjem, po članu protetskog rada.",
      },
      {
        name: "Nadogradnja zuba konfekcijskim kočićem",
        price: "150,00 KM",
        description: "Ojačanje oslabljenog zuba kočićem prije izrade krunice.",
      },
      {
        name: "Metal-keramička krunica (Standard pack)",
        price: "230,00 KM",
        description:
          "Krunica s metalnom osnovom i keramičkom oblogom, u standardnoj izvedbi.",
      },
      {
        name: "Metal-keramička krunica (Econimic pack)",
        price: "280,00 KM",
        description:
          "Pristupačnija varijanta metal-keramičke krunice uz zadržanu funkcionalnost.",
      },
      {
        name: "Metal-keramička krunica (Premium pack)",
        price: "420,00 KM",
        description:
          "Metal-keramička krunica izrađena premium materijalima za bolju estetiku.",
      },
      {
        name: "Cirkon-keramička krunica (Standard pack)",
        price: "350,00 KM",
        description:
          "Krunica od cirkonijuma s keramičkom oblogom, u standardnoj izvedbi.",
      },
      {
        name: "Cirkon-keramička krunica (Economic pack)",
        price: "420,00 KM",
        description: "Pristupačnija varijanta cirkon-keramičke krunice.",
      },
      {
        name: "Cirkon-keramička krunica (CutBack)",
        price: "370,00 KM",
        description:
          "Cirkonska krunica s djelomičnom keramičkom oblogom za prirodniji izgled.",
      },
      {
        name: "Cirkon-keramička krunica (Puni oblik)",
        price: "400,00 KM",
        description:
          "Krunica izrađena u potpunosti od cirkonijuma, bez dodatne keramičke obloge.",
      },
      {
        name: "Cirkon-keramička krunica (Premium paket)",
        price: "670,00 KM",
        description:
          "Vrhunska cirkon-keramička krunica s najvišim nivoom estetske obrade.",
      },
    ],
  },
  {
    id: "protetika-proteze",
    title: "Protetika — proteze i dodatne usluge",
    items: [
      {
        name: "Totalna proteza (po luku)",
        price: "400,00 KM",
        description: "Klasična proteza koja nadomješta sve zube jedne vilice.",
      },
      {
        name: "Parcijalna proteza (po luku)",
        price: "400,00 KM",
        description:
          "Proteza koja nadomješta manji broj nedostajućih zuba u jednoj vilici.",
      },
      {
        name: "Totalna proteza Pfizio dens (po luku)",
        price: "900,00 KM",
        description:
          "Totalna proteza izrađena fleksibilnim Pfizio dens materijalom za veći komfor.",
      },
      {
        name: "Totalna proteza Pfizio dens prozirna (po luku)",
        price: "1000,00 KM",
        description:
          "Prozirna varijanta Pfizio dens proteze za diskretniji izgled.",
      },
      {
        name: "Skeletirana proteza vizil (po luku)",
        price: "800,00 KM",
        description:
          "Djelomična proteza s metalnom skeletnom osnovom za veću stabilnost.",
      },
      {
        name: "Skeletirana proteza Pfizio dens (po luku)",
        price: "1000,00 KM",
        description:
          "Skeletirana proteza kombinovana s fleksibilnim Pfizio dens materijalom.",
      },
      {
        name: "Mobilna proteza (žabica)",
        price: "150,00 KM",
        description: "Manja mobilna proteza za nadomještanje jednog ili dva zuba.",
      },
      {
        name: "Reparatura proteze",
        price: "50,00 KM",
        description: "Popravka oštećene ili slomljene proteze.",
      },
      {
        name: "Dodatak zuba (po zubu) u protezu",
        price: "50,00 KM",
        description: "Naknadno dodavanje zuba u postojeću protezu.",
      },
      {
        name: "Podlaganje proteze",
        price: "120,00 KM",
        description:
          "Prilagođavanje unutrašnje strane proteze radi boljeg naliježanja na desni.",
      },
      {
        name: "Zamjena gumica na protezi",
        price: "120,00 KM",
        description:
          "Zamjena elastičnih elemenata koji pomažu držanju proteze.",
      },
      {
        name: "Udlaga za bruksizam",
        price: "150,00 KM",
        description:
          "Zaštitna udlaga koja štiti zube od trošenja uslijed noćnog škrgutanja.",
      },
    ],
  },
];
