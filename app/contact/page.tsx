import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Book a consult — OvertimeLabs.ai" };

export default function ContactPage() {
  return (
    <main className="container py-20 max-w-3xl">
      <h1 className="text-4xl font-semibold">Book a consult</h1>
      <p className="mt-4 text-white/70">
        Share a few details and pick a time. I’ll review your goals and suggest a practical plan with costs and timelines.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
      <div className="mt-16">
        <iframe
          src={process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/overtimelabs"}
          className="w-full h-[800px] rounded-2xl border border-white/10"
        />
      </div>
    </main>
  );
}
