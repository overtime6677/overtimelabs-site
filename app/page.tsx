export default function Page() {
  return (
    <main>
      <section className="bg-hero">
        <div className="container py-24 text-center">
          <img src="/logo.png" alt="OvertimeLabs.ai" className="h-16 w-auto mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Systems that move data and decisions</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
            APIs, pipelines, dashboards, and automation — designed for reliability, cost efficiency, and speed to value.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="/contact" className="btn">Book a 20‑minute consult</a>
            <a href="/resources" className="btn-outline">Read the buyer’s guide</a>
          </div>
        </div>
      </section>

      <section className="container py-16 grid md:grid-cols-3 gap-6">
        {[
          {title: "Data APIs & Dashboards", desc:"FastAPI/NestJS backends with Postgres, auth/RBAC, and admin UIs."},
          {title: "ETL/ELT & Warehouses", desc:"Ingest 3–5 sources, dbt models/tests, freshness checks, alerts."},
          {title: "Integrations & Automation", desc:"Resilient connectors, queues, retries, idempotency, audit logs."},
        ].map((c) => (
          <div key={c.title} className="card">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-3 text-white/70">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="container py-8 text-white/70 text-sm">
        Python • Node.js • PHP • Postgres • Redis • Kafka • AWS • Terraform • Next.js • dbt • OpenTelemetry • Groq/Claude/OpenAI
      </section>
    </main>
  )
}
