'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FAQItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-brand-line border-t border-b border-brand-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="py-4">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-2 text-left font-display text-lg text-brand-ink transition-colors hover:text-brand-gold focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold pr-4">{item.question}</span>
              <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                <svg
                  className={`h-4 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="pb-2 text-sm leading-relaxed text-brand-ink-2/80">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
