export default function MenuItemSkeleton() {
  return (
    <div className="flex gap-3.5 animate-pulse">
      <div className="h-[110px] w-[110px] flex-shrink-0 rounded-[5px] bg-[#0c1127]/10" />

      <div className="relative flex-1 min-w-0 py-1">
        <div className="h-4 w-3/4 rounded bg-[#0c1127]/10" />
        <div className="mt-2 h-3 w-full rounded bg-[#0c1127]/10" />
        <div className="mt-1 h-3 w-2/3 rounded bg-[#0c1127]/10" />
        <div className="mt-3 h-4 w-16 rounded bg-[#0c1127]/10" />

        <div className="absolute bottom-0 right-0 h-9 w-9 rounded-full bg-[#0c1127]/10" />
      </div>
    </div>
  )
}
