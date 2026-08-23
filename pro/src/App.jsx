import { useMemo, useState } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Search, ShieldAlert, Siren, Phone, MapPin } from 'lucide-react'
import { contacts, disasters, alertText } from './data/disasters'

function Header() {
  return <>
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="focus-ring rounded-md text-base font-black tracking-tight text-slate-950">RESCUE_INFO</Link>
        <a href="#contacts" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold text-white hover:bg-slate-800">
          <Siren size={17} aria-hidden="true" /> Emergency contacts
        </a>
      </div>
    </header>
    <div role="status" aria-live="polite" className="border-b border-red-200 bg-red-50 px-4 py-2 text-center text-xs font-bold text-red-800 sm:text-sm">{alertText}</div>
  </>
}

function ContactPanel() {
  return <section id="contacts" className="surface overflow-hidden">
    <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 text-white">
      <div className="flex items-center gap-2"><Siren size={18} aria-hidden="true" /><h2 className="font-bold">Emergency contacts</h2></div>
      <p className="mt-1 text-xs text-slate-300">Tap to call from a supported device.</p>
    </div>
    <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
      {contacts.map((c) => <a key={c.number} href={`tel:${c.number}`} className="focus-ring block p-4 hover:bg-slate-50">
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-500"><Phone size={14} aria-hidden="true" /> {c.label}</span>
        <span className="mt-1 block text-2xl font-black tracking-tight text-slate-950">{c.number}</span>
        <span className="mt-1 block text-xs leading-relaxed text-slate-500">{c.note}</span>
      </a>)}
    </div>
  </section>
}

function DisasterCard({ disaster }) {
  const Icon = disaster.icon
  return <Link to={`/calamity/${disaster.id}`} className="surface group focus-ring block p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
    <div className="flex items-start justify-between gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800"><Icon size={22} aria-hidden="true" /></div>
      {disaster.warning && <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-yellow-800"><ShieldAlert size={13} /> Alert</span>}
    </div>
    <h3 className="mt-4 text-lg font-extrabold">{disaster.name}</h3>
    <p className="mt-1 text-sm leading-relaxed text-slate-500">{disaster.short}</p>
    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-slate-900">Open safety steps <ArrowRight size={15} className="transition group-hover:translate-x-0.5" /></span>
  </Link>
}

function Home() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => disasters.filter(d => `${d.name} ${d.short}`.toLowerCase().includes(query.toLowerCase())), [query])

  return <>
    <Header />
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">Fast safety information</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Know what to do.<br />Act without guessing.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">Minimal, scannable precautions for common natural calamities. Keep this page accessible before you need it.</p>
        </div>

        <div className="mt-7 max-w-3xl">
          <label htmlFor="calamity-search" className="sr-only">Search for a calamity</label>
          <div className="flex items-center gap-3 rounded-2xl border-2 border-slate-300 bg-white px-4 py-2.5 shadow-sm focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/10">
            <Search size={22} className="shrink-0 text-slate-400" aria-hidden="true" />
            <input id="calamity-search" autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Type a calamity or keyword…" className="min-h-11 w-full bg-transparent text-base outline-none placeholder:text-slate-400" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="mb-4 flex items-end justify-between gap-4"><div><h2 className="text-xl font-black">Choose a calamity</h2><p className="mt-1 text-sm text-slate-500">Jump straight to the phase you need.</p></div><span className="text-xs font-bold text-slate-400">{results.length} topics</span></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{results.map(d => <DisasterCard key={d.id} disaster={d} />)}</div>
        {results.length === 0 && <div className="surface p-8 text-center text-sm text-slate-500">No matching calamity. Try “flood”, “heat” or “earthquake”.</div>}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <ContactPanel />
      </section>
    </main>
    <MobileQuickNav />
  </>
}

function MobileQuickNav() {
  return <nav className="fixed inset-x-3 bottom-3 z-20 grid grid-cols-3 gap-1 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-emergency backdrop-blur md:hidden">
    <a href="#contacts" className="focus-ring rounded-xl px-3 py-2.5 text-center text-xs font-bold text-slate-700">Contacts</a>
    <Link to="/" className="focus-ring rounded-xl bg-slate-900 px-3 py-2.5 text-center text-xs font-bold text-white">Calamities</Link>
    <a href="#top" className="focus-ring rounded-xl px-3 py-2.5 text-center text-xs font-bold text-slate-700">Top</a>
  </nav>
}

function Phase({ title, tone, items }) {
  const styles = {
    before: 'border-yellow-300 bg-yellow-50',
    during: 'border-orange-300 bg-orange-50',
    after: 'border-green-300 bg-green-50'
  }
  const labelStyles = { before: 'text-yellow-900', during: 'text-orange-900', after: 'text-green-900' }
  return <section className={`rounded-2xl border p-5 sm:p-6 ${styles[tone]}`}>
    <div className="flex items-center justify-between gap-3"><h2 className={`text-xl font-black ${labelStyles[tone]}`}>{title}</h2><span className={`rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide ${labelStyles[tone]}`}>{tone}</span></div>
    <ul className="mt-5 space-y-4">
      {items.map((item, i) => <li key={i} className="flex gap-3 text-sm leading-6 text-slate-800"><CheckCircle2 className="mt-1 shrink-0" size={18} aria-hidden="true" /><span className={tone === 'during' ? 'font-bold' : ''}>{item}</span></li>)}
    </ul>
  </section>
}

function DisasterPage() {
  const { id } = useParams()
  const disaster = disasters.find(d => d.id === id)
  if (!disaster) return <div className="min-h-screen p-8 text-center"><Link to="/" className="font-bold underline">Back to safety portal</Link></div>
  const Icon = disaster.icon
  return <>
    <Header />
    <main className="mx-auto max-w-6xl px-4 py-7 pb-24 sm:px-6 sm:py-10">
      <Link to="/" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold hover:bg-slate-50"><ArrowLeft size={17} /> Back to Safety Portal</Link>
      <div className="mt-7 flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white"><Icon size={27} /></div>
        <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">Action guide</p><h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">{disaster.name}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{disaster.short}</p></div>
      </div>

      {disaster.warning && <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-5 text-red-900"><div className="flex items-start gap-3"><ShieldAlert className="mt-0.5 shrink-0" /><div><p className="font-black">Active-warning design state</p><p className="mt-1 text-sm leading-6">This card demonstrates how the interface surfaces an active warning without adding clutter. Connect it to your local/static alert JSON when deploying.</p></div></div></div>}

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        <Phase title="BEFORE" tone="before" items={disaster.before} />
        <Phase title="DURING" tone="during" items={disaster.during} />
        <Phase title="AFTER" tone="after" items={disaster.after} />
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <ContactPanel />
        <section className="surface p-5 sm:p-6">
          <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><MapPin size={19} /></div><div><h2 className="font-black">Your local route</h2><p className="text-xs text-slate-500">Keep a local evacuation point handy.</p></div></div>
          <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">Add your nearest shelter, assembly point or district helpline here. Keep this local data in your JSON so the app still works offline.</div>
          <button className="focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold text-white hover:bg-slate-800">Save this as a local placeholder <ChevronRight size={16} /></button>
        </section>
      </div>
    </main>
    <MobileQuickNav />
  </>
}

export default function App() {
  const location = useLocation()
  return <div id="top" className="min-h-screen bg-slate-50 text-slate-950"><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calamity/:id" element={<DisasterPage />} />
    <Route path="*" element={<Home />} />
  </Routes><div aria-hidden="true" data-route={location.pathname} /></div>
}
