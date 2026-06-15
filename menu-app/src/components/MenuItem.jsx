export default function MenuItem({ item }) {
  return (
    <div className="group flex gap-3.5 rounded-[5px] transition-colors duration-150 active:bg-[#0c1127]/[0.03]">
      <img
        src={item.image}
        alt={item.name}
        className="h-[110px] w-[110px] flex-shrink-0 rounded-[5px] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
      />

      <div className="relative flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold leading-tight text-[#0c1127]">
          {item.name}
        </h3>

        {item.description && (
          <p className="mt-1 text-[11px] leading-snug text-[#0c1127]/60 line-clamp-2">
            {item.description}
          </p>
        )}

        <span className="mt-2 block text-[15px] font-bold text-[#d04c01]">
          ¥{Number(item.price).toLocaleString('ja-JP')}
        </span>

        <button
          type="button"
          aria-label={`Add ${item.name}`}
          className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#d04c01] text-white shadow-sm transition-all duration-150 hover:bg-[#b84301] hover:shadow-md active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
