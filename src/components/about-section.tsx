import Icon from "@/components/ui/icon"

const stats = [
  { value: "50K+", label: "Читателей ежедневно" },
  { value: "200+", label: "Статей в месяц" },
  { value: "15+", label: "Авторов-экспертов" },
  { value: "8", label: "Лет в эфире" },
]

export function AboutSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-6">
              <Icon name="Info" size={14} />
              <span>О редакции</span>
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
              Мы живём <span className="text-purple-500">музыкой</span>
            </h2>
            <p className="font-geist text-gray-400 text-lg leading-relaxed mb-6">
              BeatWave — независимое музыкальное медиа, основанное людьми, которые не могут жить без музыки. Мы пишем честно, без рекламных договорённостей и без лишних слов.
            </p>
            <p className="font-geist text-gray-400 leading-relaxed mb-8">
              Наша команда — музыкальные журналисты, критики и бывшие музыканты. Мы знаем индустрию изнутри и делимся этим знанием с вами каждый день.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Независимые", "Честные", "Экспертные", "Актуальные"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 text-sm font-geist">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glow-border rounded-xl p-6 text-center hover:bg-purple-500/5 transition-all duration-300">
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="font-geist text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
