import { Container, SectionTitle, PrimaryButton } from "./ui";
import CardVisual from "./CardVisual";
import cardsData from "@/data/cards.json";

export default function CardsSection() {
  const regular = cardsData.cards.filter((c) => !c.premium);
  const elite = cardsData.cards.find((c) => c.premium)!;

  return (
    <section id="cards" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        className="pointer-events-none absolute -top-32 left-1/3 -z-10 h-[460px] w-[460px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-blue), transparent 70%)" }}
      />
      <Container>
        <SectionTitle
          title="Линейка международных карт"
          subtitle="Выберите карту под свои задачи — от ежедневных платежей до премиальных привилегий в аэропортах."
        />

        <div className="flex flex-col gap-6">
          <div className="grid gap-6 md:grid-cols-3">
            {regular.map((card) => (
              <div
                key={card.id}
                className="relative flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/5 md:p-8"
              >
                <CardVisual name={card.name} brand={card.brand} style={card.style} badge={card.badge} className="mb-6" />

                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-navy)]">{card.name}</h3>
                  <span className="text-xl md:text-2xl font-bold whitespace-nowrap text-[var(--brand-blue)]">
                    {card.price.toLocaleString("ru-RU")} ₽
                  </span>
                </div>

                <p className="mt-1 text-sm md:text-base text-slate-500">{card.tagline}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm md:text-base text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <PrimaryButton href={card.link} className="mt-7 w-full">
                  Оформить карту
                </PrimaryButton>
              </div>
            ))}
          </div>

          {/* Flagship card — full width banner */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--brand-navy)] p-6 text-white shadow-2xl shadow-slate-900/40 md:p-10">
            <div
              className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #f5d98b, transparent 70%)" }}
            />
            <div className="noise-bg pointer-events-none absolute inset-0 opacity-10" />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
              <CardVisual name={elite.name} brand={elite.brand} style={elite.style} badge={elite.badge} className="lg:order-2" />

              <div className="lg:order-1">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{elite.name}</h3>
                  <span className="text-2xl md:text-3xl font-bold text-[#f5d98b]">
                    {elite.price.toLocaleString("ru-RU")} ₽
                  </span>
                </div>

                <p className="mt-1 text-sm md:text-base text-slate-300">{elite.tagline}</p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {elite.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm md:text-base text-slate-200">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5d98b]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <PrimaryButton
                  href={elite.link}
                  className="mt-7 w-full sm:w-auto bg-[#f5d98b] text-[var(--brand-navy)] shadow-[#f5d98b]/30 hover:bg-[#eccb6f]"
                >
                  Оформить карту
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
