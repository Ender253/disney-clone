'use client'
import React from "react";
import Slider from "react-slick";
import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = { title?: string; movies: Movie[]; isVertical?: boolean };

function MoviesCarousel({ title, movies, isVertical }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: isVertical,
  };

  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className={cn("outline-none")}>
            {isVertical ? (
              <div className={cn("flex flex-col space-y-5 overflow-hidden mb-5 items-center lg:flex-row space-x-5")}>
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ) : (
              <MovieCard movie={movie} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MoviesCarousel;
