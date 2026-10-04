'use client'

import { useEffect, useMemo, useState } from 'react'
import { BriefcaseBusiness, ChevronDown, CircleCheck, Download, Filter, LayoutDashboard, Search, Trash2 } from 'lucide-react'
import { ApplicationStage, JobApplication, mergeSavedApplications, seedApplications } from '@/data/jobApplications'

const stages: ApplicationStage[] = ['Applied', 'Employer site', 'Interview', 'Offer', 'Unlikely to progress', 'Rejected', 'Withdrawn']
const stageClass: Record<ApplicationStage, string> = { Applied: 'tracker-pill tracker-pill-neutral', 'Employer site': 'tracker-pill tracker-pill-site', Interview: 'tracker-pill tracker-pill-interview', Offer: 'tracker-pill tracker-pill-offer', 'Unlikely to progress': 'tracker-pill tracker-pill-rejected', Rejected: 'tracker-pill tracker-pill-rejected', Withdrawn: 'tracker-pill tracker-pill-muted' }

export default function JobTrackerPage() {
  const [jobs, setJobs] = useState<JobApplication[]>(() => {
    if (typeof window === 'undefined') return seedApplications
    try {
      const saved = JSON.parse(window.localStorage.getItem('jhye-job-tracker') || 'null')
      return Array.isArray(saved) ? mergeSavedApplications(saved) : seedApplications
    } catch { return seedApplications }
  })
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'All' | ApplicationStage>('All')
  const [interestOnly, setInterestOnly] = useState(false)
  useEffect(() => { window.localStorage.setItem('jhye-job-tracker', JSON.stringify(jobs)) }, [jobs])

  const counts = useMemo(() => ({ total: jobs.length, applied: jobs.filter(j => j.stage === 'Applied').length, site: jobs.filter(j => j.stage === 'Employer site').length, interview: jobs.filter(j => j.stage === 'Interview').length, offer: jobs.filter(j => j.stage === 'Offer').length, closed: jobs.filter(j => ['Rejected', 'Withdrawn'].includes(j.stage)).length }), [jobs])
  const visible = useMemo(() => jobs.filter(j => (filter === 'All' || j.stage === filter) && (!interestOnly || j.strongInterest) && `${j.title} ${j.company} ${j.location}`.toLowerCase().includes(query.toLowerCase())), [jobs, filter, interestOnly, query])
  const updateStage = (id: string, stage: ApplicationStage) => { setJobs(current => current.map(job => job.id === id ? { ...job, stage } : job)) }
  const exportCsv = () => { const header = 'Role,Company,Location,Stage,Date,Strong interest\n'; const rows = jobs.map(j => [j.title, j.company, j.location, j.stage, j.date, j.strongInterest ? 'Yes' : 'No'].map(x => `"${x.replaceAll('"', '""')}"`).join(',')).join('\n'); const blob = new Blob([header + rows], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'jhye-job-applications.csv'; a.click(); URL.revokeObjectURL(url) }

  return <div className="tracker-page"><div className="shell">
    <header className="tracker-hero"><div><p className="eyebrow">Application tracker / updated 4 Oct 2026</p><h1 className="tracker-title">Job search<br /><span>control room.</span></h1><p className="tracker-intro">A clear view of your SEEK pipeline, from first application to interview and offer.</p></div><div className="tracker-hero-note"><LayoutDashboard size={20} /><p>{seedApplications.length} records in the updated snapshot<br /><span>Move each role as it progresses.</span></p></div></header>
    <section className="tracker-kpis" aria-label="Application summary">
      <div className="tracker-kpi tracker-kpi-dark"><span>Total tracked</span><strong>{counts.total}</strong><small>roles in this snapshot</small></div>
      <div className="tracker-kpi"><span>Applied on SEEK</span><strong>{counts.applied}</strong><small>{Math.round(counts.applied / counts.total * 100)}% of tracked</small></div>
      <div className="tracker-kpi"><span>Employer sites</span><strong>{counts.site}</strong><small>submission unconfirmed</small></div>
      <div className="tracker-kpi tracker-kpi-accent"><span>Interviews</span><strong>{counts.interview}</strong><small>next milestone</small></div>
      <div className="tracker-kpi"><span>Offers</span><strong>{counts.offer}</strong><small>keep this moving</small></div>
    </section>
    <section className="tracker-funnel"><div className="tracker-section-label"><span className="eyebrow">Pipeline health</span><span>{counts.total ? Math.round((counts.interview + counts.offer) / counts.total * 100) : 0}% reached interview stage</span></div><div className="tracker-bars">{[['Applied', counts.applied, 'var(--ink)'], ['Employer site', counts.site, '#9a9387'], ['Interview', counts.interview, 'var(--accent)'], ['Offer', counts.offer, '#26856a']].map(([label, count, color]) => <div key={String(label)} className="tracker-bar-row"><span>{label}</span><div><i style={{ width: `${counts.total ? Number(count) / counts.total * 100 : 0}%`, background: color as string }} /></div><b>{count}</b></div>)}</div></section>
    <section className="tracker-table-wrap"><div className="tracker-toolbar"><div><span className="eyebrow">All activity</span><h2>Application ledger <span>{visible.length} shown</span></h2></div><div className="tracker-actions"><label className="tracker-search"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search roles or companies" /></label><button className="tracker-export" onClick={exportCsv}><Download size={15} /> Export CSV</button></div></div><div className="tracker-filter-row"><div className="tracker-filter-scroll"><button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All <em>{counts.total}</em></button>{stages.map(stage => <button key={stage} className={filter === stage ? 'active' : ''} onClick={() => setFilter(stage)}>{stage} <em>{jobs.filter(j => j.stage === stage).length}</em></button>)}</div><button className={`tracker-interest ${interestOnly ? 'active' : ''}`} onClick={() => setInterestOnly(!interestOnly)}><CircleCheck size={15} /> Strong interest</button></div><div className="tracker-table"><div className="tracker-table-head"><span>Role / company</span><span>Location</span><span>Activity date</span><span>Stage</span><span>Update</span></div>{visible.map(job => <article className="tracker-row" key={job.id}><div className="tracker-role"><span className="tracker-company-mark">{job.company.slice(0, 1)}</span><div><strong>{job.title}</strong><small>{job.company} {job.sourceStatus === 'Viewed by employer' && <b>· viewed by employer{job.sourceStatusDate ? ` ${new Date(job.sourceStatusDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}` : ''}</b>} {job.note && <b>· {job.note}</b>} {job.strongInterest && <b>· strong interest</b>}</small></div></div><span className="tracker-location">{job.location}</span><span className="tracker-date">{new Date(job.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}</span><span><span className={stageClass[job.stage]}>{job.stage}</span></span><label className="tracker-select"><select value={job.stage} onChange={e => updateStage(job.id, e.target.value as ApplicationStage)} aria-label={`Update ${job.title}`}><option value="Applied">Applied</option>{stages.filter(s => s !== 'Applied').map(stage => <option key={stage}>{stage}</option>)}</select><ChevronDown size={14} /></label></article>)}{visible.length === 0 && <div className="tracker-empty"><Filter size={24} /><p>No roles match this view.</p><button onClick={() => { setQuery(''); setFilter('All'); setInterestOnly(false) }}>Clear filters</button></div>}</div></section>
    <footer className="tracker-footer"><p><BriefcaseBusiness size={17} /> Keep the next action visible. Update a role after every reply, interview or outcome.</p><button onClick={() => setJobs(seedApplications)}><Trash2 size={15} /> Reset to SEEK snapshot</button></footer>
  </div></div>
}
