import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Hammer,
  Syringe,
  Crown,
  Sparkles,
  Scissors,
  Layers,
  Baby,
  Siren,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "preventivna",
    title: "Preventivna stomatologija",
    description:
      "Pregledi, čišćenje kamenca, poliranje, fluoridacija, pečaćenje fisura.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: "konzervativna",
    title: "Konzervativna stomatologija",
    description: "Liječenje karijesa, plombe, restauracije zuba.",
    icon: Hammer,
  },
  {
    id: "endodoncija",
    title: "Endodoncija",
    description: "Liječenje korijenskih kanala i upalnih procesa.",
    icon: Syringe,
  },
  {
    id: "protetika",
    title: "Protetika",
    description: "Krunice, mostovi i zubne proteze.",
    icon: Crown,
  },
  {
    id: "estetska",
    title: "Estetska stomatologija",
    description: "Izbjeljivanje, estetske restauracije i fasete.",
    icon: Sparkles,
  },
  {
    id: "oralna-hirurgija",
    title: "Oralna hirurgija",
    description: "Vađenje zuba i jednostavniji hirurški zahvati.",
    icon: Scissors,
  },
  {
    id: "parodontologija",
    title: "Parodontologija",
    description: "Liječenje desni i parodontološki tretmani.",
    icon: Layers,
  },
  {
    id: "djecija",
    title: "Dječija stomatologija",
    description:
      "Pregledi djece, prevencija karijesa, pečaćenje fisura i drugi tretmani prilagođeni najmlađima.",
    icon: Baby,
  },
  {
    id: "hitna-pomoc",
    title: "Hitna stomatološka pomoć",
    description: "Akutna bol, upale, traume i hitna sanacija.",
    icon: Siren,
  },
];
