import React from "react";
import Button from "../../Components/Button";
import { Logo } from "../Navbar/Navbar";

const Footer = () => {
  const column1 = {
    cp1: "Copyright © 2020 Nexcent ltd.",
    cp2: "All rights reserved",
    logos: [
      "footer/PathInsta.svg",
      "footer/PathWeb.svg",
      "footer/PathTwitter.svg",
      "footer/PathYouTube.svg",
    ],
  };

  const column2 = {
    title: "Company",
    links: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  };

  const column3 = {
    title: "Support",
    links: ["help center", "Terms of service", "Legal", "Privacy policy", "Status"],
  };
  return (
    <>
      <FooterHead />
      <div className="w-full py-6 flex justify-center items-center bg-black">
        <div className="w-10/12 p-4 mb-10 flex justify-between items-start">
          <div>
            <Logo light={true} />
            <div className="mt-8 p-2">
              <p className="text-white text-sm py-1">{column1.cp1}</p>
              <p className="text-white text-sm py-1">{column1.cp2}</p>
            </div>
            <ul className="flex justify-start items-center mt-8">
              {column1.logos.map((src, i) => (
                <li className="w-full m-2" key={i}>
                  <img src={src} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <Links links={column2.links}  title={column2.title}/>
          <Links links={column3.links} title={column3.title} />
          <div>
          <h3 className="text-white text-xl font-medium">Stay up to date</h3>
          <div className="flex justify-center items-center bg-white bg-opacity-30 px-3 py-2 my-4 rounded-md">
          <input type="text" placeholder="Your email address" className="placeholder:text-sm placeholder:text-white bg-white bg-opacity-0 outline-none"/>
          <button><img src="footer/mail.svg" alt="" /></button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

export const Links = ({ links, title }) => {
  return (
    <div>
      <h3 className="text-white text-xl font-medium">{title}</h3>
      <ul>
        { links.map((link, i) => (
          <li className="w-full my-2.5 text-sm text-white" key={i}>
            <button className="hover:underline">{link}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FooterHead = () => {
  return (
    <div className="w-full py-6 flex justify-center items-center bg-silver">
      <div className="w-10/12 px-4 flex justify-center items-center">
        <div className="w-9/12 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-black text-center mb-6">
            Let Nextcent do the work so you don't have to!
          </h1>
          <Button
            name={"Read more"}
            icon={"unlock/ArrowWhite.svg"}
            bgOn={true}
          />
        </div>
      </div>
    </div>
  );
};
