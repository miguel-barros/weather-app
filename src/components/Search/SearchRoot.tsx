import React from "react"

interface SearchRootProps {
  children: React.ReactNode
}

export function SearchRoot({ children }: SearchRootProps) {
  return (
    <div className="flex h-5/6 w-11/12 flex-col items-center justify-center rounded-xl bg-white">
      {children}
    </div>
  )
}
