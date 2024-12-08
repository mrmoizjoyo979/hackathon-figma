import { headers } from 'next/headers'
import Image from 'next/image'
import { MdHeight } from 'react-icons/md'

export default function FoodCategory() {
  return (
    <div className="bg-black text-white p-8">
      {/* Choose Food Item Section */}
      <section className="mb-12">
        <h1 className='text-orange-500 text-2xl py-2 font-mono text-center font-bold'>Food Category</h1>
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-orange-500 ">Ch</span>oose Food Item
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { src: "/category1.png", alt: "Salad"},
            { src: "/category2.png", alt: "Burger"},
            { src: "/category3.png", alt: "Mixed Dish"},
            { src: "/category4.png", alt: "Stacked Donuts"},
          ].map((item, index) => (
            <div key={index} className={`relative h-64 ${item} border-4 rounded-lg overflow-hidden`}>
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h3 className=" text-2xl text-right px-44 font-semibold font-mono text-orange-500 mb-2">Why Choose us</h3>
        <h2 className="text-right px-4 text-4xl font-bold mb-6">
          <span className="text-orange-500">E</span>xtra ordinary taste<br/>
          <span className='px-9'>And Experienced.</span>
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 grid grid-cols-2 gap-2">
            {[
              { src: "/choosepic1.png", alt: "Tacos"  },
              { src: "/choosepic2.png", alt: "Burger Closeup" },
              { src: "/choosepic3.png", alt: "Fried Food" },
              { src: "/choosepic4.png", alt: "Burger and Fries" },
              { src: "/choosepic5.png", alt: "Salad Plate" },
              { src: "/choosepic6.png", alt: "Salad Plate" },
            ].map((item, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={280}
                  width={280}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="text-sm ">
            <p className="text-gray-300 pt-1 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex pt-5 space-x-4">
                <div  className="bg-orange-500 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2"><img src='/fastfood.png' alt='Fast Food'></img></div>
                  <h1>Fast Food</h1>
                  <div className="text-sm"></div>
                </div>

                <div  className="bg-orange-500 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2"><img src='/lunch.png' alt='Fast Food'></img></div>
                  <h1>Lunch</h1>
                  <div className="text-sm"></div>
                </div>
                <div  className="bg-orange-500 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2"><img src='/dinner.png' alt='Fast Food'></img></div>
                  <h1>Dinner</h1>
                  <div className="text-sm"></div>
                </div>
               
              
            </div>
            <div className='pt-5'>
            <div className="bg-white text-center text-black flex p-4 rounded-lg">
              <span className="text-orange-500 text-5xl font-bold">30+</span>
              <span className="px-3 text-center pt-1 font-bold block text-xl">Years of <br/> Experienced</span>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

