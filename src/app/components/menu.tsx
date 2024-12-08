import Image from 'next/image'

const stats = [
  { icon: "/chefs.png", label: "Professional Chefs", value: "420" },
  { icon: "/burger.png", label: "Items Of Food", value: "320" },
  { icon: "/spoon.png", label: "Years Of Experienced", value: "30+" },
  { icon: "/pizza.png", label: "Happy Customers", value: "220" },
]

const menuCategories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"]

const menuItems = [
  { name: "Lettuce Leaf", price: "12.5$", image: "/lattuce.png" },
  { name: "Fresh Breakfast", price: "14.5$", image: "/fresh.png" },
  { name: "Mild Butter", price: "12.5$", image: "/milk.png" },
  { name: "Fresh Bread", price: "12.5$", image: "/bread.png" },
  { name: "Glow Cheese", price: "12.5$", image: "/cheese.png" },
  { name: "Italian Pizza", price: "14.5$", image: "/pizza2.png" },
  { name: "Silice Beef", price: "12.5$", image: "/beef.png" },
  { name: "Mushaom Pizza", price: "12.5$", image: "/mushroom.png" },
]

export default function Menu() {
  return (
    <div className="bg-black relative text-white min-h-screen">
      
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Stats Section */}
        <section className="mb-16 grid grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <Image src={stat.icon} alt={stat.label} width={50} height={50} className="mx-auto mb-2" />
              <p className="text-orange-400">{stat.label}</p>
              <p className="text-4xl font-bold">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Menu Section */}
        <section>
        <p className="text-orange-400 mb-6 text-center font-mono font-bold text-lg">Choose & pick</p>
          <h2 className="text-3xl font-bold mb-2 text-center py-1">
            <span className="text-orange-400">F</span>rom Our Menu
          </h2>
          

          {/* Menu Categories */}
          <div className="flex  space-x-4 mb-8">
            {menuCategories.map((category, index) => (
              <button key={index} className="text-white px-7 py-3 text-center pt-3 hover:text-orange-500">
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-3 gap-8">
            {/* Featured Item */}
            <div className="col-span-1 relative">
             
              <div className="absolute top-2 left-2 items-center  text-black px-2 py-1 text-sm rounded">
                <img src='/menumainpic.png'></img>
              </div>
            </div>

            {/* Menu Items List */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {menuItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-orange-400">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

