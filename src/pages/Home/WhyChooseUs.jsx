import React, { useState } from "react";
import "../../styles/home/WhyChooseUs.css";

const items = [
  {
    title: "Personalized Support Plans",
    content:
      "We tailor support plans to each individual's unique needs and aspirations.",
  },
  {
    title: "Expert Financial Guidance",
    content:
      "Our team provides expert financial guidance to promote independence.",
  },
  {
    title: "Access to Specialised Services",
    content: "We connect individuals with trusted specialist services.",
  },
  {
    title: "Pathway to Independence",
    content: "We empower individuals on their journey to independent living.",
  },
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="why">
      <h2>Why Choose Us</h2>
      <h4>The “ProVision” Difference</h4>

      <p className="why-text">
        Our personalized care and commitment to individual goals set us apart.
      </p>

      <div className="accordion">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-header ${openIndex === index ? "active" : ""}`}
              onClick={() => setOpenIndex(index)}
              // aria-expanded={openIndex === index}
            >
              {item.title}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {openIndex === index && (
              <div className="accordion-body">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
