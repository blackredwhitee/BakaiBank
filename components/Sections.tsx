"use client";

import { useState } from "react";
import { Container, SectionTitle, PrimaryButton, SecondaryButton, SUPPORT_TG, PRIMARY_CARD_LINK } from "./ui";

/* ---------- Block 2: Нам доверяют ---------- */
const TRUST_ITEMS = [
  "Выпуск карт с сопровождением под ключ",
  "Доставка по всей России",
  "Поддержка на русском языке",
  "Именные карты",
  "Выпуск в Кыргызстане",
  "Международные платежи",
];

export function TrustSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[var(--brand-blue)] font-bold">
                ✓
              </span>
              <span className="text-sm md:text-base font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 5: Оплачивайте по всему миру ---------- */
const MERCHANTS: { name: string; color: string }[] = [
  { name: "Booking", color: "#003580" },
  { name: "Airbnb", color: "#FF5A5F" },
  { name: "Netflix", color: "#E50914" },
  { name: "Spotify", color: "#1DB954" },
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Google", color: "#4285F4" },
  { name: "Google Ads", color: "#34A853" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Steam", color: "#1B2838" },
  { name: "Zoom", color: "#2D8CFF" },
  { name: "Canva", color: "#00C4CC" },
  { name: "Adobe", color: "#FF0000" },
];

export function MerchantsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Оплачивайте зарубежные сервисы и покупки"
          subtitle="Карта подходит для подписок, онлайн-сервисов и покупок в зарубежных магазинах."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {MERCHANTS.map((m) => (
            <div
              key={m.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-lg"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-base font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                style={{ background: m.color }}
              >
                {m.name[0]}
              </span>
              <span className="text-sm md:text-base font-semibold text-slate-600">{m.name}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400">
          Работа отдельных сервисов зависит от их собственных ограничений на момент оплаты.
        </p>
      </Container>
    </section>
  );
}

/* ---------- Block 6: Где работает карта ---------- */
const COVERAGE_COUNTRIES = ["Европа", "США", "ОАЭ", "Турция", "Казахстан", "Грузия", "Армения", "Таиланд", "Южная Корея"];

export function CoverageSection() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-[var(--brand-navy)] py-16 md:py-24">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-blue), transparent 70%)" }}
      />
      <Container className="relative">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">Где работает карта</h2>
          <p className="mt-3 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Карта принимается для платежей по всему миру.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-sm">
            <WorldMap />
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {COVERAGE_COUNTRIES.map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm md:text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                  <span className="text-emerald-400">●</span> {c}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm md:text-base font-medium text-red-300">
              <span>●</span> Карта не работает на территории РФ
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorldMap() {
  const points: [number, number, number][] = [
    [80, 60, 22], [150, 100, 16], [220, 70, 26], [300, 120, 18], [360, 90, 22],
    [430, 140, 16], [480, 70, 20], [520, 150, 14], [200, 200, 20], [350, 210, 16],
    [120, 180, 18], [450, 220, 20],
  ];
  const highlights: [number, number][] = [[80, 60], [220, 70], [430, 140], [520, 150], [350, 210], [120, 180], [300, 120]];

  return (
    <svg viewBox="0 0 600 300" className="w-full" aria-hidden>
      {points.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="rgba(255,255,255,0.06)" />
      ))}
      {highlights.map(([x, y], i) => (
        <g key={`p-${i}`}>
          <circle cx={x} cy={y} r={14} fill="var(--brand-blue)" opacity="0.18">
            <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
          <circle cx={x} cy={y} r={5} fill="#60A5FA" />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Block 7: Почему выбирают карты Кыргызстана ---------- */
const WHY_KG = [
  "Зарубежный банковский счёт",
  "Выпуск без поездки в Кыргызстан",
  "Российский номер телефона подходит",
  "Пополнение из российских банков",
  "Международные платежи",
  "SWIFT-переводы",
  "Мультивалютные счета",
  "Мобильное приложение банка",
];

export function WhyKyrgyzstanSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Почему выбирают карты Кыргызстана" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_KG.map((item) => (
            <div key={item} className="rounded-2xl bg-white border border-slate-100 p-6 text-sm md:text-base font-medium text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 8: Что входит в стоимость ---------- */
const INCLUDED = [
  "Проверка документов",
  "Подготовка банковской анкеты",
  "Передача документов в банк",
  "Выпуск карты",
  "Доставка карты в Россию",
  "Курьерская доставка клиенту",
  "Консультации менеджера",
  "Помощь при активации",
];

export function IncludedSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Что входит в стоимость" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-100 p-4 text-sm md:text-base text-slate-700">
              <span className="text-[var(--brand-blue)] font-bold">✓</span>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 9: Как проходит оформление ---------- */
const STEPS = [
  { title: "Выбираете карту", icon: "💳" },
  { title: "Оплачиваете выпуск", icon: "💰" },
  { title: "Передаёте документы", icon: "📄" },
  { title: "Отправляем анкету в банк", icon: "📨" },
  { title: "Банк выпускает карту", icon: "🏦" },
  { title: "Получаете SMS и доступ в приложение", icon: "📱" },
  { title: "Карта доставляется в Россию", icon: "✈️" },
  { title: "Курьер привозит карту", icon: "📦" },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Как проходит оформление" />

        {/* Desktop: zigzag timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-x-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className={`flex flex-col ${i % 2 === 1 ? "mt-16" : ""}`}>
                <div className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-navy)] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="absolute top-5 right-5 text-2xl">{step.icon}</span>
                  <p className="mt-4 text-sm md:text-base font-medium text-slate-700">{step.title}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-8 w-px self-center bg-slate-200 ${i % 2 === 1 ? "order-first mb-0" : "mt-0"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="relative lg:hidden">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200" />
          <div className="space-y-5">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative flex items-start gap-4 pl-0">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy)] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="text-sm md:text-base font-medium text-slate-700">
                    <span className="mr-2">{step.icon}</span>
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          Средний срок выпуска составляет 10–14 рабочих дней.
          <br />
          Срок ориентировочный и зависит от загрузки банка, логистики и праздничных дней.
        </p>
      </Container>
    </section>
  );
}

/* ---------- Block 10: Документы ---------- */
const DOCUMENTS = ["Паспорт РФ", "Загранпаспорт", "ИНН", "Email", "Номер телефона", "Адрес проживания"];

export function DocumentsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Документы для оформления" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {DOCUMENTS.map((doc) => (
            <div key={doc} className="rounded-xl bg-blue-50 px-4 py-5 text-center text-sm md:text-base font-medium text-[var(--brand-navy)]">
              {doc}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 11: Пополнение из России ---------- */
const RU_BANKS = ["Сбер", "Т-Банк", "ВТБ", "Газпромбанк", "Альфа-Банк"];

export function TopUpSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Пополнение из России" subtitle="Пополнение через СБП и банковские переводы." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {RU_BANKS.map((bank) => (
            <div key={bank} className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm md:text-base font-semibold text-slate-600">
              {bank}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
          Для большинства банков зачисление происходит практически моментально.
        </p>
      </Container>
    </section>
  );
}

/* ---------- Block 12: Валюты ---------- */
const CURRENCIES = ["USD", "EUR", "RUB", "KZT", "AED", "KGS"];

export function CurrenciesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Мультивалютные счета" subtitle="Мультивалютные счета доступны внутри мобильного приложения." />
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {CURRENCIES.map((cur) => (
            <div key={cur} className="flex h-20 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 text-lg md:text-xl font-bold text-[var(--brand-navy)]">
              {cur}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 13: Мобильное приложение ---------- */
const APP_FEATURES = [
  "Просмотр баланса",
  "Переводы",
  "Валютные счета",
  "SWIFT",
  "Выписки",
  "Управление лимитами",
  "Блокировка карты",
  "Поддержка банка",
];

const APP_ICONS: Record<string, string> = {
  "Просмотр баланса": "💰",
  "Переводы": "↔️",
  "Валютные счета": "🌍",
  "SWIFT": "🏦",
  "Выписки": "🧾",
  "Управление лимитами": "⚙️",
  "Блокировка карты": "🔒",
  "Поддержка банка": "💬",
};

export function MobileAppSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-blue), transparent 70%)" }}
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionTitle title="Мобильное приложение" subtitle="Полный контроль над картой и счетами — прямо со смартфона." center={false} />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {APP_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl bg-white border border-slate-100 px-4 py-3.5 text-sm md:text-base text-slate-700 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg">
                  {APP_ICONS[f]}
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 mx-auto flex justify-center lg:order-2">
          <div className="relative h-[460px] w-[240px] rounded-[2.5rem] border-[10px] border-[var(--brand-navy)] bg-[var(--brand-navy)] shadow-2xl shadow-slate-900/30">
            <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-2">
              <div className="h-5 w-28 rounded-b-2xl bg-[var(--brand-navy)]" />
            </div>
            <div className="flex h-full flex-col gap-3 overflow-hidden rounded-[1.75rem] bg-white px-4 pt-8 pb-4">
              <p className="text-xs font-semibold text-slate-400">Мои счета</p>
              <div className="rounded-2xl bg-gradient-to-br from-[var(--brand-navy)] to-blue-700 p-4 text-white shadow-lg">
                <p className="text-xs text-white/60">Основной счёт · USD</p>
                <p className="mt-1 text-2xl font-bold">$ 4 280.50</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold">Перевод</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold">SWIFT</span>
                </div>
              </div>
              {[
                { c: "EUR", v: "1 120.30" },
                { c: "KGS", v: "85 400" },
              ].map((row) => (
                <div key={row.c} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                  <span className="text-sm font-semibold text-slate-600">{row.c}</span>
                  <span className="text-sm text-slate-500">{row.v}</span>
                </div>
              ))}
              <div className="mt-auto flex items-center justify-between rounded-xl border border-dashed border-slate-200 px-4 py-3 text-xs text-slate-400">
                <span>Карта</span>
                <span className="font-mono">•••• 4829</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 14: Для кого ---------- */
const AUDIENCE = ["Путешественникам", "Предпринимателям", "Студентам", "Фрилансерам", "Специалистам, оплачивающим зарубежные сервисы"];

export function AudienceSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Для кого подойдут карты" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AUDIENCE.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center text-sm md:text-base font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 15: Почему оформление безопасно ---------- */
const SAFETY = [
  "Счёт открывается на ваше имя",
  "Карта выпускается официально в Кыргызстане",
  "Доступ к счёту получаете только вы",
  "Карта именная",
  "Все операции проходят через банковскую инфраструктуру",
  "Сопровождение до получения карты",
];

export function SafetySection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Почему нам можно доверять" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAFETY.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-white border border-slate-100 p-5 text-sm md:text-base text-slate-700 shadow-sm">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[var(--brand-blue)]">
                🔒
              </span>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Shared collapsible FAQ ---------- */
function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm md:text-base font-semibold text-[var(--brand-navy)]"
          >
            {item.q}
            <span className={`shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm md:text-base text-slate-500">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------- Block 16: Частые опасения ---------- */
const CONCERNS = [
  { q: "Это легально?", a: "Да. Карта выпускается официальным банком Кыргызстана на ваше имя, все операции проходят через банковскую инфраструктуру." },
  { q: "Нужно ли ехать в Кыргызстан?", a: "Нет, выпуск карты происходит полностью дистанционно — без поездки в Кыргызстан." },
  { q: "Почему оформление идёт через партнёра?", a: "Партнёр сопровождает заполнение анкеты, проверку документов и логистику доставки, упрощая процесс для клиента." },
  { q: "Что происходит после оплаты?", a: "После оплаты вы передаёте документы, мы готовим и отправляем анкету в банк, далее банк выпускает карту." },
  { q: "Как понять, что это не мошенники?", a: "Карта выпускается официальным банком, счёт открывается на ваше имя, доступ к нему получаете только вы." },
  { q: "Почему сроки могут отличаться?", a: "Срок зависит от загрузки банка, логистики и праздничных дней — в среднем 10–14 рабочих дней." },
  { q: "Можно ли оформить карту из другого города?", a: "Да, оформление доступно из любого города России — доставка осуществляется курьером." },
  { q: "Нужно ли уведомлять ФНС?", a: "Обязанность по уведомлению об открытии зарубежного счёта определяется законодательством РФ — рекомендуем уточнить актуальные требования." },
];

export function ConcernsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <SectionTitle title="Частые опасения" />
        <FaqList items={CONCERNS} />
      </Container>
    </section>
  );
}

/* ---------- Block 18: Что вы получаете после оформления ---------- */
const DELIVERABLES = [
  { title: "Именная карта", desc: "Visa или Mastercard, выпущенная на ваше имя", icon: "💳" },
  { title: "Доступ к мобильному приложению", desc: "Полное управление счетами и картой со смартфона", icon: "📱" },
  { title: "Договор и документы", desc: "Полный комплект документов по оформлению", icon: "📄" },
  { title: "Инструкция по активации", desc: "Понятный пошаговый гайд для первого запуска", icon: "📋" },
  { title: "Поддержка менеджера", desc: "Сопровождение на каждом этапе после получения карты", icon: "🤝" },
];

export function ReviewsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Что вы получаете после оформления" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {DELIVERABLES.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm transition-shadow hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                {item.icon}
              </span>
              <h3 className="mt-4 text-sm md:text-base font-semibold text-[var(--brand-navy)]">{item.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 19: FAQ ---------- */
const FAQ = [
  { q: "Работает ли карта в Европе?", a: "Да, карта принимается для оплаты в Европе, США, ОАЭ, Турции и других странах из списка покрытия." },
  { q: "Можно ли оплачивать подписки?", a: "Да, карта подходит для оплаты подписок Netflix, Spotify, ChatGPT и других сервисов." },
  { q: "Можно ли получать SWIFT?", a: "Да, для карт с поддержкой SWIFT доступны входящие и исходящие международные переводы." },
  { q: "Нужно ли уведомлять ФНС?", a: "Это зависит от требований законодательства РФ к зарубежным счетам — рекомендуем проверить актуальные правила." },
  { q: "Какие документы нужны?", a: "Паспорт РФ, загранпаспорт, ИНН, email, номер телефона и адрес проживания." },
  { q: "Сколько занимает выпуск?", a: "В среднем 10–14 рабочих дней с учётом логистики и загрузки банка." },
  { q: "Почему карта может прийти позже?", a: "Срок доставки зависит от загрузки банка, праздничных дней и работы курьерской службы." },
  { q: "Можно ли открыть счёт в евро?", a: "Да, мультивалютные счета, включая евро, доступны в мобильном приложении банка." },
  { q: "Можно ли привязать карту к Google Pay?", a: "Да, все карты линейки поддерживают Google Pay." },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <SectionTitle title="Часто задаваемые вопросы" />
        <FaqList items={FAQ} />
      </Container>
    </section>
  );
}

/* ---------- Block 20: Финальный CTA ---------- */
export function FinalCtaSection() {
  return (
    <section className="bg-[var(--brand-navy)] py-16 md:py-24">
      <Container className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Оформите международную карту уже сегодня</h2>
        <p className="mx-auto mt-3 max-w-xl text-base md:text-lg text-slate-300">
          Оплата онлайн, доставка по России и сопровождение на каждом этапе.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href={PRIMARY_CARD_LINK}>Оформить карту</PrimaryButton>
          <SecondaryButton href={SUPPORT_TG} className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30">
            Задать вопрос
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
