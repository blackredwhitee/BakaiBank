import { Container, SectionTitle } from "./ui";
import cardsData from "@/data/cards.json";

const HIGHLIGHT = ["Lounge", "Fast Track", "Личный менеджер", "Страховка"];

export default function ComparisonSection() {
  const { cards, comparison } = cardsData;

  return (
    <section id="compare" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Сравнение карт"
          subtitle="Различия между картами — буквально за 10 секунд."
        />

        {/* Desktop / tablet table */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <table className="w-full table-fixed text-left text-sm md:text-base">
            <colgroup>
              <col className="w-[26%]" />
              {cards.map((c) => (
                <col key={c.id} className="w-[18.5%]" />
              ))}
            </colgroup>
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="px-4 py-4 font-semibold text-slate-500 md:px-6">Параметр</th>
                {cards.map((c) => (
                  <th key={c.id} className="px-4 py-4 font-semibold text-[var(--brand-navy)] md:px-6">
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, idx) => {
                const isHighlight = HIGHLIGHT.includes(row.label);
                return (
                  <tr
                    key={row.label}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"} ${isHighlight ? "bg-blue-50/40" : ""}`}
                  >
                    <td className="px-4 py-4 font-medium text-slate-600 md:px-6">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-4 py-4 text-slate-700 md:px-6 break-words">
                        <Cell value={v} premium={cards[i]?.premium} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="grid grid-cols-1 gap-5 md:hidden">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`rounded-2xl border p-5 shadow-sm ${
                card.premium ? "border-slate-800 bg-[var(--brand-navy)] text-white" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-lg font-bold ${card.premium ? "text-white" : "text-[var(--brand-navy)]"}`}>
                  {card.name}
                </h3>
                <span className={`text-base font-bold ${card.premium ? "text-[#f5d98b]" : "text-[var(--brand-blue)]"}`}>
                  {card.price.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <dl className="mt-4 divide-y divide-dashed divide-slate-200/60 text-sm">
                {comparison.rows
                  .filter((r) => r.label !== "Стоимость")
                  .map((row) => {
                    const isHighlight = HIGHLIGHT.includes(row.label);
                    return (
                      <div key={row.label} className="flex items-center justify-between gap-3 py-2">
                        <dt className={card.premium ? "text-slate-300" : "text-slate-500"}>{row.label}</dt>
                        <dd className={`text-right font-medium ${isHighlight ? (card.premium ? "text-[#f5d98b]" : "text-[var(--brand-blue)]") : card.premium ? "text-slate-100" : "text-slate-700"}`}>
                          <Cell value={row.values[i]} premium={card.premium} />
                        </dd>
                      </div>
                    );
                  })}
              </dl>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Cell({ value, premium }: { value: string; premium?: boolean }) {
  if (value === "✓") {
    return <span className={`font-semibold ${premium ? "text-[#f5d98b]" : "text-[var(--brand-blue)]"}`}>✓</span>;
  }
  if (value === "—") {
    return <span className="text-slate-300">—</span>;
  }
  return <span>{value}</span>;
}
