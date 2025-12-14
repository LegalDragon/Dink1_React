import React from "react";
import Icon from "../../icon-system/components/Icon";
import { useIconPack } from "../../icon-system/hooks/useIconPack";
import { useTheme } from "../../contexts/ThemeContext";

export default function Settings() {
  const { iconPack, setIconPack } = useIconPack();
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-6 text-[var(--text-main)] space-y-8">

      {/* PAGE TITLE */}
      <h1 className="text-2xl mb-2 font-bold">Settings</h1>

      {/* ICON PACK SELECTOR */}
      <div className="bg-[var(--bg-card)] p-4 rounded-xl">
        <h2 className="text-lg mb-3 font-semibold">Icon Style</h2>

        <div className="space-y-3">
          {["line", "solid", "duotone"].map((p) => (
            <label
              key={p}
              className="flex items-center justify-between bg-[var(--bg-hover)] p-3 rounded-xl cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Icon name="home" size={28} />
                <span className="capitalize">{p}</span>
              </div>

              <input
                type="radio"
                name="iconpack"
                checked={iconPack === p}
                onChange={() => setIconPack(p)}
                className="form-radio"
              />
            </label>
          ))}
        </div>
      </div>

      {/* THEME SELECTOR */}
      <div className="bg-[var(--bg-card)] p-4 rounded-xl">
        <h2 className="text-lg mb-3 font-semibold text-[var(--text-main)]">Theme</h2>

        <div className="space-y-3">
          {[
            { id: "light", label: "Light", icon: "sun" },
            { id: "dark", label: "Dark", icon: "moon" },
            { id: "system", label: "System", icon: "settings" },
          ].map((t) => (
            <label
              key={t.id}
              className="flex items-center justify-between 
                   bg-[var(--bg-hover)] p-3 rounded-xl cursor-pointer"
            >
              <div className="flex items-center gap-3 text-[var(--text-main)]">
                <Icon name={t.icon} size={28} />
                <span>{t.label}</span>
              </div>

              <input
                type="radio"
                name="theme"
                checked={theme === t.id}
                onChange={() => setTheme(t.id)}
              />
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}
