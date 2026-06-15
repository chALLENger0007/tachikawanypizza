import MenuItem from './MenuItem.jsx'

export default function CategorySection({ category, items }) {
  return (
    <section id={category.id} className="pt-6">
      <h2 className="text-xl font-semibold text-[#0c1127]">
        {category.sublabel}
      </h2>

      <div className="mt-4 space-y-5">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 h-px w-full bg-[#0c1127]/10" />
    </section>
  )
}
