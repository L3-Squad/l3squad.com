import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-customBlue px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to work-with our community?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Visit our github and start to work with us .
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/L3-Squad"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-customBlue bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            L3Squad Github
          </a>
        </div>
      </div>
    </Container>
  );
};
