import React from "react"
import Search from "@/components/Search/Search"
import Image from "next/image"
import Icon from "@/components/Icon/Icon"

export default function Home() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center rounded-xl bg-white">
      <Search />
      <Image src="/assets/clear.png" alt="Not found" width={200} height={250} />
      <div className="mt-5">
        <p className="flex items-start text-6xl font-bold">
          1 <span className="text-sm">º</span>
          <span className="text-xl">C</span>
        </p>
        <p>Clear</p>
      </div>
      <div className="my-10 flex h-20 w-9/12 justify-between">
        <span className="flex items-end gap-3">
          <Icon icon="faWater" size="2xl" />
          <span>
            <p className="text-xl">99%</p>
            <p className="text-sm">Humidity</p>
          </span>
        </span>
        <span className="flex items-end gap-3">
          <Icon icon="faWind" size="2xl" />
          <span>
            <p className="text-xl">4Km/h</p>
            <p className="text-sm">Wind Speed</p>
          </span>
        </span>
      </div>
    </div>
  )
}
