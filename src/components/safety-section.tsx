import Icon from "@/components/ui/icon"

const principles = [
  {
    icon: "ShieldCheck",
    title: "Независимая редакция",
    description: "Мы не принимаем рекламные материалы под видом новостей. Все оценки — честные и объективные.",
  },
  {
    icon: "CheckCircle",
    title: "Проверка фактов",
    description: "Каждая новость проходит редактуру и проверку источников перед публикацией.",
  },
  {
    icon: "Users",
    title: "Экспертная команда",
    description: "Авторы — профессиональные музыкальные журналисты с многолетним опытом.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-4">
            <Icon name="ShieldCheck" size={14} />
            <span>Наши принципы</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Журналистика, <span className="text-purple-500">которой можно доверять</span>
          </h2>
          <p className="font-geist text-gray-400 text-lg max-w-2xl mx-auto">
            Мы верим, что честная музыкальная критика важна. Поэтому работаем по строгим редакционным стандартам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, index) => (
            <div key={index} className="glow-border rounded-xl p-8 text-center hover:bg-purple-500/5 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <Icon name={p.icon} size={28} className="text-purple-400" fallback="CheckCircle" />
              </div>
              <h3 className="font-orbitron text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="font-geist text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
