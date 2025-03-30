import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

interface CarouselItem {
  src: string;
  link: string;
  title: string;
  description: string;
}

const Carousel = ({ items }: { items: CarouselItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    startInterval(); // Reinicia o intervalo
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    startInterval(); // Reinicia o intervalo
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startInterval(); // Reinicia o intervalo
  };

  useEffect(() => {
    startInterval(); // Inicia o intervalo ao carregar o componente
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current); // Limpa o intervalo ao desmontar o componente
    };
  }, []);

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-slide">
        <div className="carousel-item-inner" key={currentIndex}>
          <Image
            src={items[currentIndex].src}
            alt={items[currentIndex].title}
            className="carousel-item-image"
            width={500}
            height={300}
          />
          <div className="carousel-item-overlay">
            <p className="carousel-item-description">
              <Link href={items[currentIndex].link}>
                {items[currentIndex].title}
              </Link>
            </p>
            <p className="carousel-item-subdescription">
              {items[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>

      {/* Miniaturas */}
      <div className="carousel-thumbnails">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-thumbnail ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <Image
              src={item.src}
              alt={item.title}
              className="carousel-thumbnail-image"
              width={100}
              height={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
