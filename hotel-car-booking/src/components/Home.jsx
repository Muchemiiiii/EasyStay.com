import React from "react";
import nairobiImage from "../assets/pexels-youngafrikanna-29891537.jpg";
import mombasaImage from "../assets/pexels-qarim-zam-814182490-29205959.jpg";
import kisumuImage from "../assets/pexels-donald-kamau-5768092-5943255.jpg";
import tamarindtreeImage from "../assets/Tamarid.PNG";
import kempinsikiImage from "../assets/Kempinsiki.PNG";
import toyotaImage from "../assets/Corolla.PNG";
import hondaImage from "../assets/Honda Civic.jpeg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Your Next Adventure Starts Here</h1>
        <p className="mt-4 text-lg">Find the best deals on hotels and cars.</p>
        <div className="mt-6 flex justify-center">
          <a
            href="/car-rentals"
            className="ml-4 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Search Cars
          </a>
          <a
            href="/hotels"
            className="ml-4 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Search Hotels
          </a>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="p-5">
        <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { name: "Nairobi", image: nairobiImage },
            { name: "Mombasa", image: mombasaImage },
            { name: "Kisumu", image: kisumuImage },
          ].map((destination, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-lg text-center font-semibold"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <p>{destination.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: "Tamarind Tree Hotel",
              location: "Langata, Kenya",
              price: 9000,
              imageUrl: tamarindtreeImage,
            },
            {
              name: "Villa Rosa Kempinski",
              location: "Nairobi, Kenya",
              price: 12000,
              imageUrl: kempinsikiImage,
            },
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={hotel.imageUrl}
                alt={hotel.name}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p className="mt-2 text-blue-600">From KSh {hotel.price}/day</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Cars */}
    {/* Available Cars */}
    <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: "Toyota Corolla",
              seats: 4,
              price: 3000,
              image: toyotaImage,
            },
            {
              name: "Honda Civic",
              seats: 4,
              price: 4000,
              image: hondaImage,
            },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={car.image}
                alt={car.name}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p>
                Seats {car.seats} | KSh {car.price}/day
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials or Reviews */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
        <div className="grid gap-4">
          {[
            { name: "Alice", review: "Amazing service! Highly recommend." },
            { name: "John", review: "Great deals and an easy-to-use platform." },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <p className="italic">"{testimonial.review}"</p>
              <p className="mt-2 font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
{/* Call to Action */}
<section className="p-6 bg-blue-600 text-white text-center">
  <h2 className="text-2xl font-bold">Ready to Plan Your Trip?</h2>
  <p className="mt-2">
    Book your hotel or car now and start your journey.
  </p>
  <div className="mt-4">
    <a
      href="/registraction"
      className="inline-block"
    >
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
        REGISTER NOW
      </button>
    </a>
  </div>
</section>
      
    </div>
  );
};

export default Home;