"use client";
import { useEffect, useState } from "react";
export function PublisherLogin() {
  const [setupToken, setSetupToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => { if (active) { const params = new URLSearchParams(window.location.hash.slice(1)); setSetupToken(params.get("setup") || ""); } });
    return () => { active = false; };
  }, []);
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setError("");
    if (setupToken && password !== confirmPassword) { setError("The passwords do not match."); return; }
    setBusy(true);
    try {
      const r = await fetch(`/privileged/api/${setupToken ? "setup" : "login"}`, { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify(setupToken ? { token: setupToken, password } : { email, password }) });
      if (!r.headers.get("content-type")?.includes("application/json")) throw new Error("Publishing is being connected. Please try again shortly.");
      const data = await r.json(); if (!r.ok) throw new Error(data.error || "Unable to sign in.");
      window.history.replaceState(null, "", "/privileged/login/"); window.location.assign("/privileged/admin/");
    } catch (e) { setError((e as Error).message); setBusy(false); }
  }
  return <div className="publishing-desk container"><section className="login-panel">
    <p className="eyebrow">Privileged · Publishing</p>
    <h1>{setupToken ? "Set your publishing password." : "Welcome back, Jhye."}</h1>
    <p>{setupToken ? "Choose a password for your own publishing desk. This private setup link works once." : "Sign in to write stories, save drafts and add photos or videos."}</p>
    <form onSubmit={submit}>
      {!setupToken && <label>Email<input type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} /></label>}
      <label>{setupToken ? "New password" : "Password"}<input type="password" required minLength={setupToken ? 12 : undefined} maxLength={256} autoComplete={setupToken ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} disabled={busy} /></label>
      {setupToken && <><label>Confirm password<input type="password" required autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={busy} /></label><p className="small">Use at least 12 characters. Your login email will be omeleyjhye@gmail.com.</p></>}
      {error && <p className="error" role="alert">{error}</p>}
      <button className="primary" disabled={busy}>{busy ? "Please wait…" : setupToken ? "Set password and open editor" : "Sign in"}</button>
    </form>
    <p><a href="/privileged/">← Back to Privileged</a></p>
  </section></div>;
}
