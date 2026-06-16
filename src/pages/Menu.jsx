import { Link } from 'react-router-dom'
import CategorySection from '../components/CategorySection.jsx'
import { categories, menuData } from '../data/menuData.js'

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#ffffe3]">
      <div className="mx-auto max-w-md px-6 pb-10 pt-6">

        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Menu"
            className="rounded-full p-1 text-[#0c1127] transition-colors duration-150 hover:bg-[#0c1127]/5 active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <Link to="/" className="rounded text-sm font-semibold tracking-wide text-[#0c1127] transition-opacity duration-150 hover:opacity-70 active:opacity-50">
            NY PIZZA
          </Link>

          <button type="button" aria-label="Cart" className="rounded-full p-1 text-[#0c1127] transition-colors duration-150 hover:bg-[#0c1127]/5 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </header>

        {/* Title */}
        <h1 className="mt-6 text-[25px] font-semibold tracking-tight text-[#0c1127]">
          MENU
        </h1>

        {/* Category pills */}
        <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`flex-shrink-0 rounded-[5px] px-4 py-2 text-xs font-medium transition-all duration-150 active:scale-95 ${
                i === 0
                  ? 'bg-[#d04c01] text-white hover:bg-[#b84301]'
                  : 'text-[#0c1127]/70 hover:bg-[#0c1127]/5 hover:text-[#0c1127]'
              }`}
            >
              {cat.label}
            </a>
          ))}
        </nav>

        {/* Category sections */}
        <div>
          {categories.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              items={menuData[cat.id] || []}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
