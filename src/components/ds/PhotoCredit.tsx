import seedPotato from "@/assets/seed-potato.jpg";
import redSorghum from "@/assets/red-sorghum.jpg";
import peaBean from "@/assets/michigan-pea-bean.jpg";
import { cn } from "@/lib/utils";

const credits: Record<string, { author: string; source: string; version: string }> = {
  [seedPotato]: { author: "Kangarooth", source: "https://commons.wikimedia.org/wiki/File:Chitted_seed_potatoes.jpg", version: "4.0" },
  [redSorghum]: { author: "IBS-Gh", source: "https://commons.wikimedia.org/wiki/File:Red_Sorghum_Grains.jpg", version: "4.0" },
  [peaBean]: { author: "Rasbak", source: "https://commons.wikimedia.org/wiki/File:Phaseolus_vulgaris_white_beans,_witte_boon.jpg", version: "3.0" },
};

export function PhotoCredit({ image, className }: { image: string; className?: string }) {
  const credit = credits[image];
  if (!credit) return null;
  return (
    <p className={cn("mt-2 text-xs leading-relaxed text-muted-foreground", className)}>
      Photo: <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{credit.author}</a>
      {" / "}<a href={`https://creativecommons.org/licenses/by-sa/${credit.version}/`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">CC BY-SA {credit.version}</a>
      {" (cropped to fit)"}
    </p>
  );
}
