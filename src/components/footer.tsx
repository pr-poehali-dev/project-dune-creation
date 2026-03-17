import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Music2" size={22} className="text-purple-500" />
              <h3 className="font-orbitron text-xl font-bold text-white">
                Beat<span className="text-purple-500">Wave</span>
              </h3>
            </div>
            <p className="font-geist text-gray-400 text-sm leading-relaxed max-w-xs">
              Независимое музыкальное медиа. Пишем о музыке честно и с любовью с 2016 года.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: "Youtube", label: "YouTube" },
                { icon: "Instagram", label: "Instagram" },
                { icon: "Twitter", label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={16} className="text-purple-400" fallback="Link" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-orbitron text-white font-bold text-sm mb-4 uppercase tracking-wider">Рубрики</h4>
            <ul className="space-y-2">
              {["Новости", "Рецензии", "Интервью", "Чарты", "Концерты", "Подборки"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-geist text-gray-400 text-sm hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-white font-bold text-sm mb-4 uppercase tracking-wider">Редакция</h4>
            <ul className="space-y-2">
              {["О нас", "Авторы", "Стать автором", "Реклама", "Контакты", "Политика конфиденциальности"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-geist text-gray-400 text-sm hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-geist text-gray-500 text-sm">
            © 2024 BeatWave. Все права защищены.
          </p>
          <p className="font-geist text-gray-600 text-xs">
            Музыка — это жизнь 🎵
          </p>
        </div>
      </div>
    </footer>
  )
}
