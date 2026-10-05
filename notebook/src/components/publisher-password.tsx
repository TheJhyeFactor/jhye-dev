"use client";
import { useState } from "react";
export function PasswordChange({ onChanged }: { onChanged: () => void }) {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: React.FormEvent) {
    event.preventDefault(); setError("");
    if (password !== confirmation) { setError("The passwords do not match."); return; }
    setBusy(true);
    try {
      const response = await fetch("/privileged/api/password", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to change your password.");
      setPassword(""); setConfirmation(""); onChanged();
    } catch (error) { setError((error as Error).message); setBusy(false); }
  }
  return <section className="login-panel">
    <p className="eyebrow">Privileged · First sign-in</p>
    <h1>Choose your own password.</h1>
    <p>Replace your temporary password to open the publishing desk.</p>
    <form onSubmit={submit}>
      <label>New password<input type="password" required minLength={12} maxLength={256} autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} disabled={busy} /></label>
      <label>Confirm password<input type="password" required autoComplete="new-password" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} disabled={busy} /></label>
      <p className="small">Use at least 12 characters and a different password from the temporary one.</p>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="primary" disabled={busy}>{busy ? "Saving…" : "Save password and open editor"}</button>
    </form>
  </section>;
}
