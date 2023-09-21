"use client"
import React from "react"
import { Search } from "@/components/Search"

export default function Home() {
  return (
    <Search.Root>
      <Search.Bar />
      <Search.Status />
      <Search.Details />
    </Search.Root>
  )
}
