import Image from 'next/image'
import { StarIcon } from 'lucide-react'

const chefs = [
  { name: "D.Estwood", title: "Chef Cook", image: "/chef1.png" },
  { name: "D.Scoriesh", title: "Assistant Chef", image: "/chef2.png" },
  { name: "M. William", title: "Executive Chef", image: "/chef3.png" },
  { name: "W.Readfroad", title: "Chef", image: "/chef4.png" },
]


export default function Chef() {
  return (
    <div className="bg-black text-white p-8">
      {/* Meet Our Chef Section */}
      <section className="mb-16">
        <h3 className='text-orange-500 text-2xl text-center font-mono font-semibold'>Chefs</h3>
        <h2 className="text-center text-4xl font-bold mb-8">
          <span className="text-orange-500">M</span>eet Our Chef
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div key={index} className="relative">
              <Image
                src={chef.image}
                alt={chef.name}
                width={250}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-2 rounded-b-lg">
                <p className="font-bold">{chef.name}</p>
                <p className="text-sm">{chef.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center'>
        <button className="mt-6 px-4 py-2 border border-orange-500 text-white text-sm rounded-full hover:bg-orange-600 transition-colors">
          See More
        </button>
        </div>
      </section>

    </div>
  )
}

