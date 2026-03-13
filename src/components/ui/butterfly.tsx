import { cn } from '@/lib/utils'

interface ButterflyProps {
  className?: string
  size?: number
}

export function Butterfly({ className, size = 24 }: ButterflyProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
    >
      <path d="M12 2c-4 0-7.5 3-7.5 7.5S8 17 12 17s7.5-3 7.5-7.5S16 2 12 2z" />
      <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
      <path d="M12 9c-3.5 0-6.5 2.5-6.5 5.5S8.5 20 12 20s6.5-2.5 6.5-5.5S15.5 9 12 9z" />
    </svg>
  )
}
