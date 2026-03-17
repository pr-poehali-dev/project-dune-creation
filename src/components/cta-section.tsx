import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-6">
          <Icon name="Bell" size={14} />
          <span>Не пропустите ничего важного</span>
        </div>

        <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Подпишитесь на<br />
          <span className="text-purple-500">BeatWave</span>
        </h2>

        <p className="font-geist text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Получайте лучшие материалы прямо в почту. Никакого спама — только музыка, которая имеет значение.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ваш email"
            className="w-full sm:flex-1 px-5 py-3 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-gray-500 font-geist focus:outline-none focus:border-purple-500 transition-colors"
          />
          <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-geist px-8 py-3 border-0 whitespace-nowrap">
            Подписаться
          </Button>
        </div>

        <p className="font-geist text-gray-600 text-xs mt-4">
          Без спама. Отписаться можно в любой момент.
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { icon: "Newspaper", label: "Ежедневные новости" },
            { icon: "Mic2", label: "Эксклюзивные интервью" },
            { icon: "BarChart3", label: "Актуальные чарты" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Icon name={item.icon} size={20} className="text-purple-400" fallback="Music" />
              </div>
              <span className="font-geist text-gray-400 text-xs text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
