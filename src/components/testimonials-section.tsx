import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Алексей М.",
    role: "Меломан со стажем",
    text: "BeatWave — первый сайт, который я открываю утром. Здесь всегда свежо, честно и без воды. Лучшее музыкальное медиа рунета.",
    avatar: "🎧",
  },
  {
    name: "Катерина В.",
    role: "Музыкальный блогер",
    text: "Наконец-то нашла место, где пишут о музыке серьёзно. Рецензии развёрнутые, интервью живые. Авторы явно разбираются в теме.",
    avatar: "🎵",
  },
  {
    name: "Дмитрий К.",
    role: "Диджей, промоутер",
    text: "Слежу за электронной секцией. Покрывают и андеграунд, и mainstream — редкий баланс. Рекомендую всем из тусовки.",
    avatar: "🎛️",
  },
  {
    name: "Маша Л.",
    role: "Студентка музыкального колледжа",
    text: "Читаю для общего развития и вдохновения. Узнала много нового о классике и джазе, о которых раньше не писали нигде.",
    avatar: "🎹",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-4">
            <Icon name="Heart" size={14} />
            <span>Читатели о нас</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Нам <span className="text-purple-500">доверяют</span>
          </h2>
          <p className="font-geist text-gray-400 text-lg max-w-2xl mx-auto">
            Тысячи читателей каждый день выбирают BeatWave как главный источник музыкальных новостей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="glow-border rounded-xl p-6 hover:bg-purple-500/5 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-orbitron text-white font-bold text-sm">{t.name}</div>
                  <div className="font-geist text-purple-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-purple-400" />
                ))}
              </div>
              <p className="font-geist text-gray-300 text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
