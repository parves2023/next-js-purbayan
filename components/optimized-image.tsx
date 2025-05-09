"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string
  loadingClassName?: string
  loadedClassName?: string
  errorClassName?: string
  withBlur?: boolean
  lowPriority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.png",
  className,
  loadingClassName = "blur-sm opacity-0",
  loadedClassName = "blur-none opacity-100",
  errorClassName = "grayscale",
  withBlur = true,
  lowPriority = true,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  useEffect(() => {
    // Use the provided image URL directly
    setImageSrc(typeof src === "string" ? src : fallbackSrc)
    setIsLoading(true)
    setError(false)
  }, [src, fallbackSrc])

  const handleLoad = () => {
    if (isLoading) {
      setIsLoading(false)
    }
  }

  const handleError = () => {
    console.error("Image failed to load:", src)
    if (!error) {
      setError(true)
      setIsLoading(false)
      setImageSrc(fallbackSrc)
    }
  }

  // Determine if image should be eagerly loaded or lazy loaded
  const loadingStrategy = props.priority ? "eager" : lowPriority ? "lazy" : "eager"

  return (
    <Image
      {...props}
      src={imageSrc || fallbackSrc}
      alt={alt}
      className={cn(
        className,
        "transition-all duration-500",
        withBlur && isLoading ? loadingClassName : "",
        !isLoading && !error ? loadedClassName : "",
        error ? errorClassName : "",
      )}
      onLoad={handleLoad}
      onError={handleError}
      loading={loadingStrategy}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      quality={props.quality || 75}
    />
  )
}
