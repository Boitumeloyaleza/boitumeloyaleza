import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Download,
  Github,
  Linkedin,
  ArrowUpRight,
  GraduationCap,
  Award,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

import cvAsset from "@/assets/cv.pdf.asset.json";
import {
  profile,
  technicalSkills,
  softSkills,
  languages,
  highlights,
  experience,
  education,
  certifications,
  references,
} from "@/data/cv";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boitumelo Yaleza — Sales & Administration Professional" },
      {
        name: "description",
        content:
          "Portfolio of Boitumelo Yaleza, a Johannesburg-based sales agent and cashier experienced in data capturing, client applications and payments handling.",
      },
      { property: "og:title", content: "Boitumelo Yaleza — Sales & Administration Professional" },
      {
        property: "og:description",
        content:
          "Three years of front-line client service, accurate data capturing and cash handling. View experience, skills and download the CV.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80">
      {children}
    </span>
  );
}

function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Boitumelo <span className="text-accent">Yaleza</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={cvAsset.url}
              download="Boitumelo_Yaleza_CV.pdf"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md border border-border p-2 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvAsset.url}
              download="Boitumelo_Yaleza_CV.pdf"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" /> {profile.location}
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">{profile.title}</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.tagline}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                <a
                  href={cvAsset.url}
                  download="Boitumelo_Yaleza_CV.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                At a glance
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="mt-0.5 font-medium">3 years in sales & cashiering</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Education</dt>
                  <dd className="mt-0.5 font-medium">National Senior Certificate, 2021</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Languages</dt>
                  <dd className="mt-0.5 font-medium">{languages.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${profile.email}`} className="font-medium hover:text-accent">
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading eyebrow="About" title="A careful pair of hands" />
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                {profile.about.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <blockquote className="rounded-2xl border-l-2 border-accent bg-card p-7 text-base italic leading-relaxed text-foreground/85">
                {profile.objective}
              </blockquote>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading eyebrow="Skills" title="What I bring to a team" />
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-lg font-semibold">Technical skills</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {technicalSkills.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-lg font-semibold">Soft skills</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work highlights */}
        <section id="work" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
              eyebrow="Work highlights"
              title="Responsibilities I owned day to day"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h, i) => (
                <article
                  key={h.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
                >
                  <span className="font-display text-3xl text-accent/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{h.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {h.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {h.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading eyebrow="Experience" title="Where I've worked" />
            <div className="space-y-6">
              {experience.map((job) => (
                <article
                  key={job.company}
                  className="rounded-2xl border border-border bg-card p-7 sm:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="mt-1 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{job.period}</p>
                  </div>
                  <ul className="mt-5 space-y-2.5 pl-8">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="relative text-sm leading-relaxed text-muted-foreground before:absolute before:-left-4 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education & certifications */}
        <section id="education" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading eyebrow="Education" title="Qualifications & certifications" />
            <div className="grid gap-6 lg:grid-cols-2">
              {education.map((e) => (
                <article key={e.qualification} className="rounded-2xl border border-border bg-card p-7">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{e.qualification}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.institution} · {e.period}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                </article>
              ))}
              {certifications.map((c) => (
                <article key={c.name} className="rounded-2xl border border-border bg-card p-7">
                  <Award className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer} · {c.year}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-dashed border-border p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                References
              </h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {references.map((r) => (
                  <div key={r.name}>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.role}</p>
                    <p className="text-sm text-muted-foreground">{r.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5 py-24 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Looking for a reliable, detail-focused team member?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70">
              I'd be glad to hear about the role. The quickest way to reach me is by email.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a
                href={cvAsset.url}
                download="Boitumelo_Yaleza_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
                >
                  <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl border-t border-primary-foreground/15 px-5 py-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </div>
      </footer>
    </div>
  );
}
