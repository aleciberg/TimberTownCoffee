import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";

export default function FeaturedCoffees({ products }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    initial: 0,
    slides: {
      perView: 1, // mobile default
      spacing: 14,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(min-width: 1260px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      const details = slider.track.details;
      setMaxSlide(details.slides.length - details.slidesPerView);
    },
  });

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-[#568259] font-bold">Featured Coffees</h2>
        <div className="flex gap-2">
          <button
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
            className={`bg-gray-200 px-3 py-1 rounded transition hover:bg-gray-300 ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ◀
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            disabled={currentSlide >= maxSlide}
            className={`bg-gray-200 px-3 py-1 rounded transition hover:bg-gray-300 ${
              currentSlide >= maxSlide ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ▶
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {products.map((coffee) => (
          <div
            key={coffee.id}
            className="keen-slider__slide transition-all duration-50"
          >
            <CoffeeCard coffee={coffee} />
          </div>
        ))}
      </div>
    </section>
  );
}
