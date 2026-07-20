"use client";

import { useLanguage } from "./LanguageProvider";

// Segmented ລາວ | EN switch. Both options are always visible with the active
// one highlighted, so it reads unmistakably as a language switcher.
export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`lang-toggle ${className}`.trim()} role="group" aria-label="Language / ພາສາ">
      <button
        type="button"
        className={`lang-toggle__opt ${lang === "lo" ? "active" : ""}`}
        aria-pressed={lang === "lo"}
        onClick={() => setLang("lo")}
      >
        ລາວ
      </button>
      <button
        type="button"
        className={`lang-toggle__opt ${lang === "en" ? "active" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
