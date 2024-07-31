import React from "react";


const AboutPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Welcome to Our Store</h1>
        </header>

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded with a passion for style and technology, our online store began as a small venture with a big dream: to provide customers with a curated selection of high-quality products. Our journey has been fueled by a commitment to excellence, innovation, and customer satisfaction.
          </p>
          <p className="text-gray-700">
            From our humble beginnings, we've grown into a leading retailer offering a diverse range of products. Our mission is to make shopping easy, enjoyable, and accessible, whether you're looking for the latest fashion trends, state-of-the-art electronics, or timeless jewelry pieces.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6">Our Collections</h2>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-teal-800 mb-2">Men's and Women's Clothes</h3>
                <p className="text-gray-700">
                  Explore our extensive collection of apparel for men and women. Whether you’re dressing for a special occasion or updating your everyday wardrobe, we have stylish and comfortable options for every taste and preference.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-teal-800 mb-2">Electronics</h3>
                <p className="text-gray-700">
                  From the latest smartphones and laptops to innovative home gadgets, our electronics section is designed to keep you ahead of the curve. Discover high-performance products that blend seamlessly with your lifestyle.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-teal-800 mb-2">Jewelry</h3>
                <p className="text-gray-700">
                  Adorn yourself with our beautiful jewelry collections. From elegant necklaces to sophisticated rings, find the perfect piece to complement your style or celebrate a special moment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6">Our Commitment</h2>
          <p className="text-gray-700 mb-4">
            We are dedicated to providing a seamless shopping experience and exceptional customer service. Our team is committed to ensuring that every product meets our high standards of quality and craftsmanship.
          </p>
          <p className="text-gray-700">
            We value your feedback and strive to continuously improve our offerings. Your satisfaction is our top priority, and we are always here to assist you with any questions or concerns.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
