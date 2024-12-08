import Image from "next/image"
import { ThumbsUp, MessageSquareMore, Share2 } from 'lucide-react'


const blogPosts = [
    {
      image: "/blog1.png",
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      link: "#"
    },
    {
      image: "/blog2.png",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus  Suscipit  A",
      link: "#"
    },
    {
      image: "/blog3.png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "#"
    }
  ]


export default function Blog(){
    return(
        <div className=" bg-black pt-5  h-[500px]">
      {/* Blog Post Section */}
      <section className=" mx-auto px-4 mb-16">
      <h3 className="text-orange-500 text-center font-mono text-2xl mb-2">Blog Post</h3>
      <h2 className="text-4xl text-center font-bold mb-8">
        <span className="text-orange-500">L</span><span className="text-white">atest News & Blog</span>
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-black rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-orange-500 text-sm mb-2">{post.date}</p>
              <h3 className="text-white text-xl font-semibold mb-4">{post.title}</h3>
              <div className="flex justify-between items-center">
                <a href={post.link} className="text-gray-400 font-sans hover:underline hover:text-orange-500 flex items-center">
                  Learn More
                </a>
                <div className="flex space-x-2">
                  <ThumbsUp className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                  <MessageSquareMore className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                  <Share2 className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    )
}