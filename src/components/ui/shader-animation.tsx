"use client";

/**
 * Lightweight CSS-only replacement for the Three.js shader.
 * Uses a subtle animated gradient that is GPU-friendly and won't
 * freeze the browser on scroll or on mobile devices.
 */
export function ShaderAnimation() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, transparent 0%, transparent 30%, rgba(21, 64, 232, 0.06) 35%, rgba(0, 200, 240, 0.04) 40%, transparent 45%, transparent 55%, rgba(21, 64, 232, 0.05) 60%, rgba(0, 200, 240, 0.03) 65%, transparent 70%, transparent 100%)`,
          animation: "shaderDrift 20s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(155deg, transparent 0%, transparent 40%, rgba(0, 200, 240, 0.03) 50%, rgba(21, 64, 232, 0.04) 55%, transparent 65%, transparent 100%)`,
          animation: "shaderDrift 25s ease-in-out infinite alternate-reverse",
        }}
      />
      <style>{`
        @keyframes shaderDrift {
          0% { transform: translateX(-5%) translateY(-3%) scale(1.1); }
          100% { transform: translateX(5%) translateY(3%) scale(1.15); }
        }
      `}</style>
    </div>
  );
}
