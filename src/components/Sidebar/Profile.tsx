import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid grid items-center gap-3">
      <img
        src="https://github.com/ebnersilva.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Ebner Silva</span>
        <span className="truncate text-sm text-zinc-500">
          ebner.suporte@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-4 w-4 text-zinc-500" />
      </button>
    </div>
  )
}
