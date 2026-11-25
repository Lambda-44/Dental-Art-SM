export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Da li je potrebno prethodno kontaktirati ordinaciju?",
    answer:
      "Da, preporučujemo da nas prije posjete kontaktirate telefonom ili e-mailom kako bismo se dogovorili oko termina koji odgovara i vama i našem timu.",
  },
  {
    question: "Koliko traje prvi pregled?",
    answer:
      "Prvi pregled obično traje između 30 i 45 minuta i uključuje razgovor o vašim potrebama, pregled i, po potrebi, dijagnostiku.",
  },
  {
    question: "Da li su stomatološki tretmani bolni?",
    answer:
      "Trudimo se da svaki tretman bude što ugodniji uz adekvatnu anesteziju i pažljiv pristup. Prije svakog zahvata objasnit ćemo vam šta možete očekivati.",
  },
  {
    question: "Da li primate djecu?",
    answer:
      "Da, naš tim ima iskustva u radu s najmlađim pacijentima i trudi se stvoriti opušten i siguran ambijent za njihovu prvu i svaku narednu posjetu.",
  },
  {
    question: "Da li je moguće plaćanje karticom?",
    answer:
      "Ne, u ordinaciji je trenutno nije moguće plaćanje karticom. Za detalje o dostupnim opcijama plaćanja slobodno nas kontaktirajte.",
  },
  {
    question: "Koliko traje izbjeljivanje zuba?",
    answer:
      "Profesionalno izbjeljivanje u ordinaciji obično traje oko 60 minuta, a konačan rezultat zavisi od individualnih karakteristika zuba.",
  },
  {
    question: "Koje metode plaćanja prihvatate?",
    answer:
      "Prihvatamo gotovinu i platne kartice. Za veće terapije možemo razgovarati o dinamici plaćanja prilagođenoj vašim mogućnostima.",
  },
  {
    question: "Da li mogu dobiti individualni plan terapije?",
    answer:
      "Naravno. Nakon pregleda i konsultacije, doktor priprema pisani plan terapije s objašnjenim koracima i informativnim cijenama.",
  },
];
