import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface IconProps {
  icon: keyof typeof Icons
  color?: string
  size?: "xs" | "sm" | "lg" | "xl" | "2xl"
  className?: string
}

export default function Icon({
  icon,
  color = "#06283D",
  size = "xl",
  className = "",
}: IconProps) {
  const IconComponent = Icons[icon] as IconProp
  return (
    <FontAwesomeIcon
      icon={IconComponent}
      color={color}
      size={size}
      className={className}
    />
  )
}
