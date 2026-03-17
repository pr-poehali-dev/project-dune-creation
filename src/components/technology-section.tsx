import Icon from "@/components/ui/icon"

const newsItems = [
  {
    category: "Релиз",
    title: "Новый альбом недели",
    description: "Разбираем главный релиз этой недели: что получилось, что нет, и почему это важно.",
    time: "2 часа назад",
    icon: "Disc3",
    hot: true,
  },
  {
    category: "Концерты",
    title: "Топ-5 фестивалей лета",
    description: "Составили список must-visit фестивалей этого лета — от Glastonbury до Пикника Афиши.",
    time: "5 часов назад",
    icon: "MapPin",
    hot: false,
  },
  {
    category: "Интервью",
    title: "Артист рассказал о новом проекте",
    description: "Эксклюзивный разговор о том, как создавался альбом, что вдохновляло и что дальше.",
    time: "Вчера",
    icon: "Mic2",
    hot: false,
  },
  {
    category: "Чарты",
    title: "Billboard Hot 100 — итоги недели",
    description: "Кто вошёл в топ, кто вылетел и какой трек побил рекорды по стримингу.",
    time: "Вчера",
    icon: "BarChart2",
    hot: false,
  },
]

export function TechnologySection() {
  return (
    <section id="charts" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-4">
            <Icon name="Flame" size={14} />
            <span>Свежее</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Последние <span className="text-purple-500">публикации</span>
          </h2>
          <p className="font-geist text-gray-400 text-lg max-w-2xl mx-auto">
            Самые горячие материалы прямо сейчас. Обновляем контент каждый день.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="glow-border rounded-xl p-6 hover:bg-purple-500/5 transition-all duration-300 group cursor-pointer relative"
            >
              {item.hot && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-purple-500/20 border border-purple-500/40 rounded-full px-2 py-1">
                  <Icon name="Flame" size={10} className="text-purple-400" />
                  <span className="text-purple-300 text-xs font-geist">Горячее</span>
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <Icon name={item.icon} size={20} className="text-purple-400" fallback="Music" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-400 text-xs font-geist uppercase tracking-wider">{item.category}</span>
                    <span className="text-gray-600 text-xs">·</span>
                    <span className="text-gray-500 text-xs font-geist">{item.time}</span>
                  </div>
                  <h3 className="font-orbitron text-white font-bold text-base mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="font-geist text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
