import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "listing",
    url: "/listing",
  },
  {
    id: 4,
    text: "contact us",
    url: "/contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "location",
    text: "Our properties are located at prime areas which guarantees return on investment.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Trusted",
    text: "We have been in business for over 16 years, for clients in diaspora you can trust us to deliver well finished homes.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Affordability",
    text: "Our homes are very affordable, we have something for both the high & middle class earners with flexible payment plans",
  },
];

export const single_product_url = `/.netlify/functions/single-listing?id=`;

export const products_url = "/.netlify/functions/listings";
