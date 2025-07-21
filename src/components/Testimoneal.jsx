import React from 'react'

function Testimoneal() {
  return (
    <section className=" py-16 px-6 md:px-[10%]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {[
        {
        name: "Emma Johnson",
        title: "Plant Enthusiast",
        review: "Urban Jungle Co. exceeded my expectations. My plants arrived healthy and beautiful!",
        rating: 5,
        },
        {
        name: "Michael Lee",
        title: "Interior Designer",
        review: "The plant variety is stunning, and delivery was super fast. My clients love it!",
        rating: 4,
        },
        {
        name: "Sophia Patel",
        title: "Beginner Gardener",
        review: "Easy to order, great support, and beautiful packaging. Highly recommend!",
        rating: 5,
        },
        {
        name: "Liam Chen",
        title: "Eco-Lifestyle Blogger",
        review: "I've worked with many plant shops, but this one's customer service is unmatched.",
        rating: 5,
        },
        
        ].map((person, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-700 font-bold flex items-center justify-center rounded-full">
                        {person.name[0]}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{person.name}</p>
                        <p className="text-sm text-gray-500">{person.title}</p>
                    </div>
                </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm">"{person.review}"</p>

            <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: person.rating }).map((_, i) => (
                <span key={i}>★</span>
                ))}
                {person.rating < 5 &&
                Array.from({ length: 5 - person.rating }).map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
                ))}
            </div>
        </div>
        ))}
        </div>
    </section>

  )
}

export default Testimoneal