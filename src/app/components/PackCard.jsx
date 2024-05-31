import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

export default function PackCard(props) {
  let includes = props.includes;
  let price = props.price;

  const splitPrice = (priceString) => {
    if (priceString.includes("+")) {
      const [firstPart, secondPart] = priceString
        .split("+")
        .map((part) => part.trim());
      return (
        <div className="flex flex-col items-center py-10">
          <div className="text-3xl">{firstPart}</div>
          <div className="">+</div>
          <div className="text-3xl">{secondPart}</div>
        </div>
      );
    }
    return priceString;
  };

  const listItems = includes.map((included, index) => (
    <li key={index} className=" text-primary font-semibold mb-2">
      {included}
    </li>
  ));

  return (
    <div className=" bg-white w-[300px] lg:w-[280px] xl:w-[360px] flex flex-col p-8  rounded-xl overflow-hidden">
      <div className="h-[240px]">
        <div className="relative w-[60px] h-[60px] mx-auto mb-5">
          <Image
            src={props.image}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt={props.title}
          />
        </div>
        <h3 className=" text-center mb-9">{props.title}</h3>
      </div>

      <div>
        <h4 className=" font-bold text-lg mb-4">Includes:</h4>
        <ul className=" list-disc px-5 mb-9">{listItems}</ul>
      </div>

      <div className=" mt-auto">
        <div>
          <div className=" h-px w-[90%] border-b-2"></div>

          <h4 className=" font-bold text-3xl text-center py-8 mb-4">
            {splitPrice(price)}
          </h4>
        </div>
        <div className="flex justify-center">
          <Link href="/contact">
            <Button>Get Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
