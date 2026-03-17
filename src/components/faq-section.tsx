import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    question: "Как часто публикуются новые материалы?",
    answer: "Ежедневно: утром — дайджест ночных новостей, в течение дня — срочные новости и статьи, вечером — глубокие материалы и рецензии. Минимум 5–7 публикаций в день.",
  },
  {
    question: "Можно ли предложить тему или материал для публикации?",
    answer: "Да! Мы всегда открыты к предложениям от читателей. Пишите на редакционную почту или в соцсетях. Если тема актуальная — возьмём в работу.",
  },
  {
    question: "Есть ли платная подписка?",
    answer: "Основной контент бесплатный. Платная подписка даёт доступ к эксклюзивным материалам, расширенным интервью и еженедельному дайджесту без рекламы.",
  },
  {
    question: "Как стать автором BeatWave?",
    answer: "Отправьте на почту редакции несколько своих текстов и коротко расскажите о себе. Если ваш стиль совпадает с нашим — обсудим сотрудничество.",
  },
  {
    question: "Освещаете ли вы региональную музыкальную сцену?",
    answer: "Да, и это важная для нас часть работы. У нас есть раздел «Сцены» — о региональных артистах и локальных музыкальных событиях по всей России.",
  },
  {
    question: "Можно ли разместить пресс-релиз или анонс концерта?",
    answer: "Да, пресс-релизы и анонсы принимаем через форму на сайте. Размещение анонсов бесплатно. Рекламные интеграции — по отдельному запросу.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-geist tracking-widest uppercase mb-4">
            <Icon name="HelpCircle" size={14} />
            <span>Вопросы и ответы</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Часто <span className="text-purple-500">спрашивают</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="glow-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-500/5 transition-colors duration-200"
              >
                <span className="font-geist text-white font-medium pr-4">{faq.question}</span>
                <Icon
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-purple-400 flex-shrink-0"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="font-geist text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
