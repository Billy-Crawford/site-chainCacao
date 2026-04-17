type Props = {
  title: string
  description: string
  number: string
}

export default function OddBadge({ title, description, number }: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
      <div className="text-secondary font-bold text-lg mb-2">
        ODD {number}
      </div>

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  )
}

