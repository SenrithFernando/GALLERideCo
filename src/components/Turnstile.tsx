import { useEffect, useRef } from "react";

declare global { interface Window { turnstile?: { render: (element: HTMLElement, options: Record<string, unknown>) => string; remove: (id: string) => void }; } }
const scriptId = "cloudflare-turnstile-script";

export function Turnstile({ onToken, resetKey }: { onToken: (token: string) => void; resetKey: number }) {
  const container = useRef<HTMLDivElement>(null);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  useEffect(() => {
    if (!siteKey || !container.current) return;
    let widgetId: string | undefined;
    const render = () => { if (container.current && window.turnstile) widgetId = window.turnstile.render(container.current, { sitekey: siteKey, theme: "light", size: "flexible", callback: onToken, "expired-callback": () => onToken(""), "error-callback": () => onToken("") }); };
    const current = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (window.turnstile) render(); else if (current) current.addEventListener("load", render, { once: true }); else { const script = document.createElement("script"); script.id = scriptId; script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; script.async = true; script.defer = true; script.addEventListener("load", render, { once: true }); document.head.appendChild(script); }
    return () => { if (widgetId && window.turnstile) window.turnstile.remove(widgetId); };
  }, [siteKey, resetKey, onToken]);
  if (!siteKey) return <p role="alert" className="text-sm text-red-700">Human verification has not been configured. Please contact us directly.</p>;
  return <div className="sm:col-span-2"><div ref={container} /></div>;
}
