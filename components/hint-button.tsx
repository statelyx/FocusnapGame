"use client";

import { SearchCheck } from "lucide-react";
import { useAppContext } from "@/components/app-providers";

export function HintButton({
  hintsLeft,
  onClick,
}: {
  hintsLeft: number;
  onClick: () => void;
}) {
  const { t } = useAppContext();

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={hintsLeft <= 0}
      className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-teal/20 bg-teal/10 px-4 font-medium text-teal transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-45"
    >
      <SearchCheck size={18} />
      {t.hint} · {t.hintsLeft}: {hintsLeft}
    </button>
  );
}
