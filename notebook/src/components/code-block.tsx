"use client";
import { useRef, useState, type HTMLAttributes } from "react";
import { Check, Copy } from "@/components/icons";
export function CodeBlock({
  children,
  ...props
}: HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(ref.current?.textContent || "");
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  }
  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>
          {((props as Record<string, unknown>)["data-language"] as string) ||
            "code"}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label={state === "copied" ? "Code copied" : "Copy code"}
        >
          {state === "copied" ? <Check size={14} /> : <Copy size={14} />}
          <span aria-live="polite">
            {state === "copied"
              ? "Copied"
              : state === "error"
                ? "Select code to copy"
                : "Copy"}
          </span>
        </button>
      </div>
      <pre {...props} ref={ref}>
        {children}
      </pre>
    </div>
  );
}
