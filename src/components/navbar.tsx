import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Icon name="Music2" size={22} className="text-purple-500" />
            <h1 className="font-orbitron text-xl font-bold text-white">
              Beat<span className="text-purple-500">Wave</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#news" className="font-geist text-white hover:text-purple-400 transition-colors duration-200">
                Новости
              </a>
              <a href="#genres" className="font-geist text-white hover:text-purple-400 transition-colors duration-200">
                Жанры
              </a>
              <a href="#charts" className="font-geist text-white hover:text-purple-400 transition-colors duration-200">
                Чарты
              </a>
              <a href="#faq" className="font-geist text-white hover:text-purple-400 transition-colors duration-200">
                О нас
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-geist border-0">
              Подписаться
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-purple-500/20">
              <a href="#news" className="block px-3 py-2 font-geist text-white hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Новости</a>
              <a href="#genres" className="block px-3 py-2 font-geist text-white hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Жанры</a>
              <a href="#charts" className="block px-3 py-2 font-geist text-white hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Чарты</a>
              <a href="#faq" className="block px-3 py-2 font-geist text-white hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>О нас</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-geist border-0">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
