import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className, width = 200, height = 75 }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/logo-white.png"
        alt="Purbayan Properties Limited Logo"
        width={width}
        height={height}
        className="h-16 w-auto"
        priority
      />
    </Link>
  )
}
