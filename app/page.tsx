export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Privacy Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Bypass VPN Blocks —{" "}
          <span className="text-[#58a6ff]">Anywhere in the World</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Get a personalized, always-updated circumvention guide tailored to your country and ISP.
          Stay connected no matter what your government blocks.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $15/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          ["Country-Specific", "Guides built for your exact ISP and region."],
          ["Real-Time Updates", "Community reports + automated testing keep methods fresh."],
          ["All Protocols", "Covers obfs4, Shadowsocks, V2Ray, Tor bridges & more."],
        ].map(([title, desc]) => (
          <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-sm text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Personalized guide for your country & ISP",
              "Weekly updated circumvention methods",
              "Access to all protocol configs",
              "Community-sourced real-time reports",
              "Priority support via email",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "Is this legal to use?",
              "Using circumvention tools is legal in most countries. We provide educational information about privacy technologies. Always check your local laws.",
            ],
            [
              "How often are guides updated?",
              "Guides are refreshed weekly using automated testing and community reports, so you always have working methods.",
            ],
            [
              "What if a method stops working?",
              "Open a support ticket and we'll provide an updated method within 24 hours, or your next month is free.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} VPN Circumvention Advisor. For educational purposes only.
      </footer>
    </main>
  );
}
