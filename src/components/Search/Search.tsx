import React from "react"
import Icon from "../Icon/Icon"

export default function Search() {
  return (
    <div className="flex w-fit items-center justify-center gap-10 rounded-xl bg-white p-10">
      <Icon icon={"faLocationDot"} size="xl" />
      <input
        className="text-md outline-none"
        type="text"
        placeholder="Enter your location"
      />
      <span className="group cursor-pointer rounded-full bg-[#dff6ff] p-3 duration-300 hover:bg-[#06283D]">
        <Icon
          icon={"faMagnifyingGlass"}
          size="xl"
          className="duration-200 group-hover:text-white"
        />
      </span>
    </div>
  )
}
