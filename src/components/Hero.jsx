import Background from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <section className="w-full h-[75vh] bg-[forestgreen]">
      <div
        className="h-[75vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-start justify-center text-white text-left pl-4 md:pl-16 lg:pl-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Light Up Your Morning
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            Freshly roasted. Hand-rolled. Hippie Speedball.
          </p>
          <button className="bg-[#D06D3F] hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Shop Coffee
          </button>
        </div>
      </div>
    </section>
  );
}
