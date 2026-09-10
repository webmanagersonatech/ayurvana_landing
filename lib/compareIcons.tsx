import {
  Leaf,
  Droplets,
  Flower2,
  Activity,
  HeartPulse,
  Sparkles,
  Stethoscope,
  Brain,
  Utensils,
  Syringe,
  Waves,
  Sun,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

// Maps a treatment-category label to a representative icon so each
// category card reads at a glance instead of relying on text alone.
const rules: [RegExp, LucideIcon][] = [
  [/ayurved|panchakarma|shirodhara|basti/i, Leaf],
  [/hydro|water|bath|jacuzzi|whirlpool/i, Droplets],
  [/mud|earth|heat|infrared|sauna/i, Sun],
  [/yoga|pranayama|meditat|mind[\s–-]?body|divine/i, Flower2],
  [/physio|rehab|postural|spine|joint|musculoskeletal/i, Activity],
  [/clinical|diabetes|hypertension|cardiac|lifestyle disease|thyroid|respiratory/i, Stethoscope],
  [/weight|metabolic|obesity/i, HeartPulse],
  [/mental|emotional|stress|anxiety|sleep|burnout|psychosomatic/i, Brain],
  [/spa|massage|manual|rejuvenat|manipulative/i, Sparkles],
  [/acupuncture/i, Syringe],
  [/diet|nutrition|fasting/i, Utensils],
  [/diagnostic|preventive|functional medicine/i, ShieldCheck],
];

export function categoryIcon(category: string): LucideIcon {
  const match = rules.find(([re]) => re.test(category));
  return match ? match[1] : Waves;
}
