import Link from 'next/link'
import { FaClock, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {['Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis', 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A', 'Curabitur rutrum velit ac congue malesuada'].map((title, index) => (
            <div key={index} className="relative overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700"></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity group-hover:bg-opacity-75">
                <p className="text-[#FFA200] text-sm mb-2">10 February 2022</p>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <Link href="#" className="text-sm text-[#FFA200] hover:underline">Learn More</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FFA200] mb-2">Still You Need Our Support ?</h2>
          <p className="text-gray-400">Don't wait make a smart & logical quote here. Its pretty easy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us.</h3>
            <p className="text-gray-400 mb-4">Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.</p>
            <div className="flex items-center">
              <img src='/footer1.png' height={50} width={50} className=''></img>
              <div className='px-3'>
                <h4 className="font-semibold font-sm">Opening Houres</h4>
                <p className="text-sm text-gray-400">Mon - Sat(8.00 - 6.00)</p>
                <p className="text-sm text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contacts'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Help?</h3>
            <ul className="space-y-2">
              {['FAQ', 'Term & conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
            <div className="space-y-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="mr-4">
                    <img src='/footerimg1.png' className='w-24 h-16'></img>
                    
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">20 Feb 2022</p>
                    <Link href="" className="hover:text-[#FFA200]">Keep Your Business</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800  flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGoogle].map((Icon, index) => (
              <Link key={index} href="#" className="bg-gray-400 text-black hover:text-orange-500">
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

