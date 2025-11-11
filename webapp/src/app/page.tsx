"use client";

import { useEffect, useMemo, useState } from "react";

const stageDelays = [0, 2200, 4200, 6300, 8200];

export default function Home() {
  const [stage, setStage] = useState(0);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = stageDelays
      .slice(1)
      .map((delay, index) =>
        setTimeout(() => setStage(index + 1), delay),
      );
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [runId]);

  const caption = useMemo(() => {
    switch (stage) {
      case 0:
        return "A perfect sunny afternoon bathes the busy hippo enclosure in golden light.";
      case 1:
        return "The hippo heaves upward, water cascading down its slick hide.";
      case 2:
        return "Tail on high alert—spotlights tighten on the mischievous wag.";
      case 3:
        return "SPLAT! The hippo fires an unforgettable volley across the fence.";
      case 4:
        return "The crowd erupts while the stunned guest blurts, \"Ahhh!!\"";
      default:
        return "";
    }
  }, [stage]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#fef9ea] px-6 py-16 font-sans">
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-[0.4rem] text-[#3b4b16] sm:text-4xl">
          Hippo Splash Zone
        </h1>
        <p className="max-w-2xl text-balance text-base text-[#607023] sm:text-lg">
          An 8-second highlight reel from a lively afternoon at the zoo—best
          enjoyed with sound effects supplied by your imagination.
        </p>
      </header>

      <section className={`scene stage-${stage}`}>
        <div className="scene__camera">
          <div className="scene__sky">
            <div className="scene__sun" />
            <div className="scene__cloud scene__cloud--left" />
            <div className="scene__cloud scene__cloud--right" />
          </div>
          <div className="scene__fence" />
          <div className="scene__water">
            <div className="scene__ripples" />
          </div>

          <div className="hippo">
            <div className="hippo__head">
              <div className="hippo__ear hippo__ear--left" />
              <div className="hippo__ear hippo__ear--right" />
              <div className="hippo__eye hippo__eye--left" />
              <div className="hippo__eye hippo__eye--right" />
              <div className="hippo__nostrils" />
            </div>
            <div className="hippo__tail" />
            <div className="hippo__spray hippo__spray--1" />
            <div className="hippo__spray hippo__spray--2" />
            <div className="hippo__spray hippo__spray--3" />
          </div>

          <div className="lady">
            <div className="lady__hair" />
            <div className="lady__face">
              <div className="lady__eye lady__eye--left" />
              <div className="lady__eye lady__eye--right" />
              <div className="lady__mouth" />
            </div>
            <div className="lady__dress" />
            <div className="lady__arm lady__arm--left" />
            <div className="lady__arm lady__arm--right">
              <div className="lady__phone" />
            </div>
            <div className="lady__legs" />
            <div className="lady__splat" />
          </div>

          <div className="crowd">
            <div className="crowd__person crowd__person--1" />
            <div className="crowd__person crowd__person--2" />
            <div className="crowd__person crowd__person--3" />
            <div className="crowd__sign">
              {"\"Oh my God, that's hilarious!\""}
            </div>
          </div>

          <div className="audio-strip">
            <span className="audio-strip__dot audio-strip__dot--laugh" />
            <span className="audio-strip__dot audio-strip__dot--cheer" />
            <span className="audio-strip__dot audio-strip__dot--shutter" />
          </div>

          <div className="subtitle">
            <span key={stage} className="subtitle__text">
              {caption}
            </span>
          </div>
        </div>
      </section>

      <button
        type="button"
        className="rounded-full bg-[#3f5b16] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-lime-800/30 transition hover:bg-[#4b6d1b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7b500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fef9ea]"
        onClick={() => {
          setStage(0);
          setRunId((value) => value + 1);
        }}
      >
        Replay the Mayhem
      </button>
    </div>
  );
}
