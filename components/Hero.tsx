import { Container, PrimaryButton, SecondaryButton, SUPPORT_TG, PRIMARY_CARD_LINK } from "./ui";
import CardVisual from "./CardVisual";
import cardsData from "@/data/cards.json";

const ADVANTAGES = [
  "Именная пластиковая карта",
  "Онлайн и офлайн платежи",
  "Google Pay",
  "SWIFT-переводы",
  "Счета в нескольких валютах",
  "Доставка по России",
  "Российский номер телефона подходит",
  "Выпуск без поездки в Кыргызстан",
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[var(--brand-ice)] pb-20 pt-12 md:pb-0 md:pt-0">
      <div className="relative min-h-screen md:min-h-[92vh]">
        {/* layered backdrop */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-ice) 0%, var(--brand-ice) 48%, var(--brand-navy) 48%, var(--brand-navy-soft) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brand-blue), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-[-20%] right-[10%] -z-10 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brand-gold), transparent 70%)" }}
        />
        <div className="noise-bg pointer-events-none absolute inset-0 -z-10 opacity-[0.15]" />

        <Container className="relative grid min-h-screen items-center gap-12 py-16 md:min-h-[92vh] lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="fade-up">
            <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-[var(--brand-navy)] shadow-sm">
              Оформление через официального партнёра банка
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-[3.85rem] font-extrabold leading-[1.04] tracking-tight text-[var(--brand-navy)]">
              Международные карты{" "}
              <span className="bg-gradient-to-r from-[var(--brand-blue)] via-blue-500 to-[var(--brand-gold)] bg-clip-text text-transparent">
                Visa
              </span>{" "}
              и{" "}
              <span className="bg-gradient-to-r from-[var(--brand-blue)] via-blue-500 to-[var(--brand-gold)] bg-clip-text text-transparent">
                Mastercard
              </span>{" "}
              с выпуском в Кыргызстане
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-xl text-slate-600">
              Именные карты для путешествий, оплаты зарубежных сервисов, международных переводов и
              покупок по всему миру.
            </p>

            <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ADVANTAGES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-slate-700">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={PRIMARY_CARD_LINK} className="text-base md:text-lg px-8 py-4 md:px-9 md:py-5">
                Оформить карту
              </PrimaryButton>
              <SecondaryButton href={SUPPORT_TG} className="text-base md:text-lg px-8 py-4 md:px-9 md:py-5">
                Задать вопрос
              </SecondaryButton>
            </div>
          </div>

          {/* cards stack */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center md:h-[520px] lg:max-w-none">
            {cardsData.cards.map((card, i) => {
              const layout = [
                "z-10 w-[68%] -translate-x-[18%] -translate-y-10 -rotate-6",
                "z-30 w-[72%] translate-x-[6%] translate-y-2 rotate-2",
                "z-20 w-[64%] translate-x-[32%] -translate-y-2 rotate-9",
                "z-40 w-[78%] translate-x-[2%] translate-y-28 -rotate-3",
              ][i];
              return (
                <div key={card.id} className={`absolute ${layout}`}>
                  <CardVisual name={card.name} brand={card.brand} style={card.style} badge={card.badge} float />
                </div>
              );
            })}

            {/* floating glass stat chips */}
            <div className="glass-dark absolute -left-2 top-2 z-50 hidden rounded-2xl px-4 py-3 text-white shadow-xl sm:flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-white/60">SWIFT-перевод</span>
              <span className="text-sm font-semibold">Доступен в 190+ странах</span>
            </div>
            <div className="glass absolute -right-2 bottom-6 z-50 hidden rounded-2xl px-4 py-3 text-[var(--brand-navy)] shadow-xl sm:flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Выпуск карты</span>
              <span className="text-sm font-semibold">10–14 рабочих дней</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 shrink-0 text-[var(--brand-blue)]"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
