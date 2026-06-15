import { Container, SUPPORT_TG } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--brand-navy)] pb-28 pt-14 text-slate-300 md:pb-12">
      <div
        className="pointer-events-none absolute -bottom-32 right-[-10%] h-[360px] w-[360px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-blue), transparent 70%)" }}
      />
      <Container className="relative">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <span className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs">KG</span>
              TalkBank
            </span>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              ООО «Толкфинанс»
              <br />
              ОГРН 1167746688944
              <br />
              ИНН 7734387717
              <br />
              Основано в 2019 году
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Документы</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="https://business.talkbank.io/policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Политика обработки персональных данных
                </a>
              </li>
              <li>
                <a href="https://business.talkbank.io/policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Поддержка</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={SUPPORT_TG} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Telegram поддержки
                </a>
              </li>
              <li>Контакты поддержки доступны через Telegram</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Сколково</h3>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Резидент Сколково
            </div>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Деятельность осуществляется при грантовой поддержке Фонда «Сколково».
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          Используя сайт и подавая заявку, вы даёте согласие на обработку персональных данных в соответствии с
          {" "}
          <a href="https://business.talkbank.io/policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            Политикой обработки персональных данных
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}
