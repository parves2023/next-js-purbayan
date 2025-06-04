interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

export default function PlaceholderImage({ width, height, text, className }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
      style={{ width, height }}
    >
      <div className="text-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto h-12 w-12 text-gray-400"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <p className="mt-2 text-sm">{text || "Image not available"}</p>
      </div>
    </div>
  )
}
