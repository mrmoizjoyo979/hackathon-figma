import Image from 'next/image'
import { Play, ArrowRight} from 'lucide-react'


export default function ActiveProcess() {
  return (
    <div className="bg-black text-white pt-16">
      {/* Restaurant Active Process Section */}
      <section className="relative h-[300px] ">
        <Image
          src="/activeProcess.png"
          alt="Food Process"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 flex">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <h3 className="text-orange-500 text-xl mb-2">Restaurant Active Process</h3>
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-orange-500 p-0.5">We</span> Document Every Food
                <br />Bean Process untile it is saved
              </h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                pellentesque bibendum non dui volutpat fringilla bibendum.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-transparent border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors flex items-center">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <div className='flex'>
                <button className="pt-2 py-2 px-2 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center">
                <Play className="pt-2 px-2 py-2 ml-2 w-11 h-11 rounded-full bg-orange-600" />
                 <h1 className='px-2'> Play Video </h1>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

