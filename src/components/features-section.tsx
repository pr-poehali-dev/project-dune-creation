import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Newspaper",
    title: "Горячие новости",
    description: "Первыми узнавайте о релизах, скандалах и событиях из мира музыки. Обновления каждый час.",
  },
  {
    icon: "Mic2",
    title: "Эксклюзивные интервью",
    description: "Разговоры с артистами, продюсерами и музыкальными критиками. Взгляд изнутри индустрии.",
  },
  {
    icon: "BarChart3",
    title: "Актуальные чарты",
    description: "Мировые и российские чарты в реальном времени. Billboard, Яндекс.Музыка, Spotify.",
  },
  {
    icon: "Calendar",
    title: "Афиша концертов",
    description: "Все предстоящие концерты и фестивали в одном месте. Не пропустите любимых артистов.",
  },
  {
    icon: "Headphones",
    title: "Рецензии альбомов",
    description: "Подробные обзоры новых альбомов от профессиональных музыкальных критиков.",
  },
  {
    icon: "TrendingUp",
    title: "Тренды и вирусное",
    description: "Следите за вирусными треками, мемами и культурными явлениями в музыкальном мире.",
  },
]

export function FeaturesSection() {
  return (
    <section id="news" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-4">
            <Icon name="Zap" size={14} />
            <span>Всё о музыке</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Музыкальная журналистика<br />
            <span className="text-purple-500">нового уровня</span>
          </h2>
          <p className="font-geist text-gray-400 text-lg max-w-2xl mx-auto">
            BeatWave — это не просто новости. Это живой пульс музыкальной индустрии: от поп-хитов до андеграунда.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glow-border rounded-xl p-6 hover:bg-purple-500/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Icon name={feature.icon} size={24} className="text-purple-400" fallback="Music" />
              </div>
              <h3 className="font-orbitron text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="font-geist text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
