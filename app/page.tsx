"use client";

import { CompletionModal } from "@/components/completion-modal";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { GameShell } from "@/components/game-shell";
import { GroupPlayShell } from "@/components/group-play-shell";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { NicknameGate } from "@/components/nickname-gate";
import { useFocusGame } from "@/hooks/use-focus-game";

export default function Home() {
  const game = useFocusGame();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(40,92,165,0.18),_transparent_35%),linear-gradient(180deg,_var(--background),_var(--background-elevated))] text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[18rem] w-[18rem] rounded-full bg-teal/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <Header />
        <Hero onStart={game.scrollToGame} />
        <FeatureSection />
        <GameShell game={game} />
        <GroupPlayShell />
        <Footer />
      </div>
      <NicknameGate />

      <CompletionModal
        isOpen={game.isComplete}
        onRestart={game.restart}
        onClose={game.dismissCompletion}
        result={game.result}
      />
    </main>
  );
}
