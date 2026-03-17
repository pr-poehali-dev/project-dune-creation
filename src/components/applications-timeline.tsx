import Icon from "@/components/ui/icon"

const timeline = [
  {
    year: "Поп",
    title: "Мировые хиты",
    description: "Все главные поп-релизы, новости о мировых звёздах и разборы трендов mainstream-музыки.",
    icon: "Star",
  },
  {
    year: "Рэп",
    title: "Хип-хоп сцена",
    description: "Русский рэп, мировой хип-хоп, баттлы, альбомы и всё, что происходит в рэп-индустрии.",
    icon: "Mic",
  },
  {
    year: "Рок",
    title: "Гитарная культура",
    description: "От классического рока до металла и инди. Концерты, альбомы и жизнь рок-сообщества.",
    icon: "Guitar",
  },
  {
    year: "Электро",
    title: "Электронная музыка",
    description: "EDM, техно, хаус и ambient. Фестивали, диджеи, новые имена электронной сцены.",
    icon: "Radio",
  },
  {
    year: "Классика",
    title: "Академическая музыка",
    description: "Оперы, симфонии, премьеры и гастроли ведущих оркестров и солистов мира.",
    icon: "Music",
  },
]

export function ApplicationsTimeline() {
  return (
    <section id="genres" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-4">
            <Icon name="Layers" size={14} />
            <span>По жанрам</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Охватываем <span className="text-purple-500">все жанры</span>
          </h2>
          <p className="font-geist text-gray-400 text-lg max-w-2xl mx-auto">
            От мировых чартов до андеграунда — мы пишем о музыке в любом её проявлении.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500/20 hidden lg:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1 lg:text-right">
                  {index % 2 === 0 ? (
                    <div className="glow-border rounded-xl p-6 hover:bg-purple-500/5 transition-all duration-300">
                      <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-geist tracking-widest uppercase mb-2">
                        <Icon name={item.icon} size={14} fallback="Music" />
                        <span>{item.year}</span>
                      </div>
                      <h3 className="font-orbitron text-white font-bold text-xl mb-2">{item.title}</h3>
                      <p className="font-geist text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}
                </div>

                <div className="hidden lg:flex w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 items-center justify-center z-10 flex-shrink-0">
                  <Icon name={item.icon} size={20} className="text-purple-400" fallback="Music" />
                </div>

                <div className="flex-1">
                  {index % 2 === 1 ? (
                    <div className="glow-border rounded-xl p-6 hover:bg-purple-500/5 transition-all duration-300">
                      <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-geist tracking-widest uppercase mb-2">
                        <Icon name={item.icon} size={14} fallback="Music" />
                        <span>{item.year}</span>
                      </div>
                      <h3 className="font-orbitron text-white font-bold text-xl mb-2">{item.title}</h3>
                      <p className="font-geist text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}

                  <div className="lg:hidden glow-border rounded-xl p-6 hover:bg-purple-500/5 transition-all duration-300">
                    <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-geist tracking-widest uppercase mb-2">
                      <Icon name={item.icon} size={14} fallback="Music" />
                      <span>{item.year}</span>
                    </div>
                    <h3 className="font-orbitron text-white font-bold text-xl mb-2">{item.title}</h3>
                    <p className="font-geist text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
