import React from "react";

const About = () => {
  return (
    <section className="bg-white-smoke text-taupe py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cocoa-brown mb-8">
          About TimberTown Coffee
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          At{" "}
          <span className="font-semibold text-cocoa-brown">
            TimberTown Coffee
          </span>
          , we believe that every cup should tell a story. Our mission is to
          craft artisanal coffees that celebrate the rich flavors of nature, all
          while supporting sustainable farming practices and building a
          community of passionate coffee enthusiasts.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Founded by a group of coffee lovers who wanted to bring out the
          natural complexity of beans from around the world, TimberTown Coffee
          began as a small roastery in the heart of the city. What started as a
          hobby quickly turned into a mission: to offer coffee that tells a
          deeper story, both in taste and in sustainability.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Our beans are carefully selected from the best sustainable farms,
          offering a variety of single-origin roasts and blends designed to
          highlight the unique flavors of each region. Whether you're enjoying a
          bold dark roast or a smooth medium brew, every cup is a celebration of
          quality and craftsmanship.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          We are committed to ethical sourcing, ensuring that every bean is
          grown in harmony with the environment and fairly compensated farmers.
          We’re also dedicated to reducing our carbon footprint and using
          eco-friendly packaging to contribute to a healthier planet.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Join us in our journey to make every coffee moment extraordinary.
          Explore our blends, get to know the stories behind our beans, and be
          part of the{" "}
          <span className="font-semibold text-cocoa-brown">
            TimberTown Coffee
          </span>{" "}
          community.
        </p>
      </div>
    </section>
  );
};

export default About;
