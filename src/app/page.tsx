import Image from 'next/image'

export default function Banner() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-orange-500 text-xl mb-2 font-mono">The Quick & Amazing!</h2>
            <span className="text-4xl text-orange-500 md:text-6xl font-bold font-sans mb-4">
              Th
            </span>
            <span className="text-4xl  md:text-6xl font-bold font-sans mb-4">
              e Art of speed Food Quality
            </span>
            <p className="mb-8 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus sed pharetra dictum neque massa congue.
            </p>
            <div className='text-left'>
            <button className='bg-orange-500 rounded-full text-xl '><p className='pt-1 py-1 px-3 '>See Menu</p></button>
        </div>
          </div>
          
          <div className="md:w-1/2">
            <Image
              src="/banner.png"
              alt="Delicious food plate"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
        
      </section>

      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-orange-500 text-xl mb-2">About us</h2>
              <span className="text-3xl text-orange-500 md:text-5xl font-bold mb-4">
                We
              </span>
              <span className="text-3xl md:text-5xl px-3  font-bold mb-4">
                 Create the best foody product
              </span>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit 
                augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis 
                sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in 
                consequat.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lacus nisi, et ac dapibus sit eu velit in consequat.
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
              </ul>
              <div className='pt-3 text-left'>
            <button className=' bg-orange-500 rounded-full text-sm '><p className='pt-3 py-3 px-5 '>Read More</p></button>
        </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-4">
              <Image src="/bannerimg2.png" alt="Food image 1" width={700} height={200} className="rounded-lg px-14" /><br/>
              {/* <Image src="" alt="Food image 2" width={300} height={200} className="rounded-lg" /> */}
              <div className='flex px-14 gap-4'>
              <Image src="/bannerimg3.png" alt="Food image 3" width={180} height={120} className="rounded-lg" />
              <Image src="/bannerimg4.png" alt="Food image 4" width={180} height={120} className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

