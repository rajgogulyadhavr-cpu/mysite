import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Portfolio } from "@/components/Portfolio";
import { FloatingAssistant } from "@/components/FloatingAssistant";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rajalingam Yadav — AI & Data Science · UI/UX Portfolio" },
      { name: "description", content: "Futuristic AI-powered portfolio of Rajalingam Yadav — AI & Data Science engineer and UI/UX designer building intelligent, user-friendly digital experiences." },
      { property: "og:title", content: "Rajalingam Yadav — AI & UI/UX Portfolio" },
      { property: "og:description", content: "Final-year B.Tech AI & DS student. Projects in AI, computer vision, and UI/UX design." },
    ],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onEnter={() => setLoaded(true)} />}
      </AnimatePresence>
      <Portfolio />
      {loaded && <FloatingAssistant />}
    </>
  );
}
