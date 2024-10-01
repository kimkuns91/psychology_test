import { cn } from '@/lib/utils'
import { FaSpinner } from 'react-icons/fa'

interface SpinnerProps {
  colors?: string
}
const Spinner: React.FC<SpinnerProps> = ({ colors }) => {
  return (
    <FaSpinner
      className={cn(
        'animate-spin text-3xl',
        colors ? `text-[${colors}]` : 'text-zinc-500',
      )}
      aria-label="Loading spinner"
    />
  )
}

export default Spinner
