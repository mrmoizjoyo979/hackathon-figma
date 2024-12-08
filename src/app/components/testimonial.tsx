
import { StarIcon } from "lucide-react"

const testimonial = {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    name: "Alamin Hasan",
    title: "Food Specialist",
    image: "/testimonial.png",
    rating: 5,
  }
  

export default function Testimonial(){
    return(
       <div className="bg-black"> 
      {/* Testimonials Section */}
      <section>
      <h3 className="text-2xl text-orange-500 mb-2 font-mono pt-5 px-9">Testimonials</h3>
      <h2 className="text-4xl text-white font-bold mb-8 px-9 pt-4 py-9">What our client are saying</h2>
      <div className="bg-white text-black p-10  max-w-2xl mx-auto relative py-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          width={120}
          height={120}
          className="rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-white"
        />
        <div className=" text-4xl text-orange-500 mb-4">"</div>
        <p className="mb-4 text-center">{testimonial.quote}</p>
        <div className="flex justify-center mb-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon key={i} className="text-yellow-500  w-5 h-5" />
          ))}
        </div>
        <p className="font-bold text-center">{testimonial.name}</p>
        <p className="text-sm text-gray-600 text-center">{testimonial.title}</p>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === 0 ? 'bg-orange-500' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
      </section>
      </div>
    )
}