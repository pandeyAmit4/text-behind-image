import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const FAQs: FAQItem[] = [
  {
    question: 'What is Text Behind Image?',
    answer: 'Text Behind Image is an open-source online image editor that allows you to effortlessly place text behind objects in an image, giving your visuals a more dynamic and cool appearance.',
  },
  {
    question: 'How to Use Text Behind Image?',
    answer: (
      <>
        Simply visit{' '}
        <a href="https://textinimage-pro.netlify.app/" className="text-blue-600 hover:underline">
          https://textinimage-pro.netlify.app/
        </a>
        , upload your image, enter your text, and customize the size, color, and position of the text. Then, save and download your image.
      </>
    ),
  },
  {
    question: 'Is Text Behind Image Free?',
    answer: 'Yes, Text Behind Image is completely free to use with no restrictions.',
  },
  {
    question: 'What image formats does Text Behind Image support?',
    answer: 'Text Behind Image supports png, jpg, jpeg formats.',
  },
  {
    question: 'What languages does Text Behind Image support?',
    answer: 'Text Behind Image supports input in English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, and nearly all other languages.',
  },
  {
    question: 'How Does Text Behind Image Protect Privacy?',
    answer: 'Text Behind Image does not store your uploaded images or input text. All editing takes place directly within your browser, ensuring your privacy is protected.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-2 text-left text-gray-900 font-semibold text-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span
                className={`ml-2 transform ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                } transition-transform duration-300`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-base text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
