import { PrimaryButton, PRIMARY_CARD_LINK } from "./ui";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-100 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.15)] backdrop-blur md:hidden">
      <PrimaryButton href={PRIMARY_CARD_LINK} className="w-full text-base py-4">
        Оформить карту
      </PrimaryButton>
    </div>
  );
}
