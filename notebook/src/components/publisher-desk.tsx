"use client";
import { useEffect, useState } from "react";
import { Editor } from "./publisher-editor";
export function PublisherDesk() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    fetch("/privileged/api/session", { credentials: "same-origin" }).then(async (r) => {
      if (r.status === 401) { window.location.replace("/privileged/login/"); return; }
      const data = await r.json(); if (!r.ok) throw new Error(data.error || "Unable to open the editor.");
      if (active) setEmail(data.email);
    }).catch((e) => { if (active) setError(e.message); });
    return () => { active = false; };
  }, []);
  async function logout() {
    const r = await fetch("/privileged/api/logout", { method: "POST", credentials: "same-origin" });
    if (r.ok) window.location.assign("/privileged/login/"); else setError("Unable to sign out. Please try again.");
  }
  return <div className="publishing-desk container page-content">
    {error && <p className="error" role="alert">{error}</p>}
    {!email ? <p role="status">Opening your publishing desk…</p> : <><div className="editor-toolbar"><a href="/privileged/">View notebook ↗</a><button onClick={logout}>Sign out</button></div><Editor email={email} /></>}
  </div>;
}
