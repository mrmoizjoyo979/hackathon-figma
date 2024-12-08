"use client"

import Link from "next/link"
import { FaSearch, FaShoppingBag } from 'react-icons/fa'
import { VscAccount } from "react-icons/vsc";

export function Header() {
  return (
    <header className="w-full bg-black">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Logo */}
        <div className="flex justify-center py-2">
          <Link href="/" className="flex items-center space-x-0">
            <span className="text-2xl font-bold text-white">Food</span>
            <span className="text-2xl font-bold text-[#FFA200]">tuck</span>
          </Link>
        </div>

        {/* Navigation and Search */}
        <div className="flex items-center justify-between h-16">
          {/* Main Navigation */}
          <nav className="flex items-center space-x-6">
            {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-white hover:text-white/80 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#FFA200] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2"></span>
              </Link>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-[200px] bg-zinc-900 text-white placeholder-zinc-400 border border-[#FFA200] rounded-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-700"
              />
              <FaSearch className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            </div>
            <button className="flex text-white hover:text-white/80">
              <FaShoppingBag className=" h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

