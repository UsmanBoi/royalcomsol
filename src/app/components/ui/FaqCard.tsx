"use client";
import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCardProps = {
  cardData: FaqItem[];
};

const FaqCard: React.FC<FaqCardProps> = ({ cardData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full space-y-4 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
      {cardData.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 pb-4">
          <button
            type="button"
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between py-2 text-left font-medium sm:text-lg xl:text-2xl 2xl:text-3xl"
          >
            <span className={openIndex === index ? "text-blue-600" : ""}>
              {faq.question}
            </span>
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "mt-2 max-h-40 text-base leading-normal opacity-100"
                : "mt-0 max-h-0 text-sm leading-tight opacity-0"
            }`}
          >
            <p className="xl:text-xl">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqCard;
