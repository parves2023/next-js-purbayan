interface PlaceholderSVGProps {
  width?: number | string
  height?: number | string
  text?: string
  className?: string
}

export default function PlaceholderSVG({
  width = "100%",
  height = "100%",
  text = "Image",
  className = "",
}: PlaceholderSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`Placeholder: ${text}`}
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#dee2e6"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24px"
      >
        {text}
      </text>
    </svg>
  )
}
