type Props = {
  name: string
  role: string
  description: string
}

export default function TeamCard({ name, role, description }: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary hover:-translate-y-1 transition duration-300">
      
      {/* Avatar stylé */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
        {name.split(" ").map(n => n[0]).slice(0,2).join("")}
      </div>

      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-secondary mb-2">{role}</p>

      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  )
}
