import Link from 'next/link'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { Cartwidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between max-w-screen-xl">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <SearchForm />
      </div>

      <div className=" flex items-center gap-4">
        <Cartwidget />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Usuário</span>
          <Image
            src="https://github.com/vitorbelluzzo.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
