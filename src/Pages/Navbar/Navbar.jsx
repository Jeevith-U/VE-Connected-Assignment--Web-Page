import React from "react";
import Button from "../../Components/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-6">
      <div className="flex justify-center items-center w-10/12">
        {/* Logo */}
        <Logo/>

        {/* Nav links */}
        <div className="w-7/12 flex justify-center items-center">
          <ul className="flex w-11/12 justify-evenly items-center text-base">
            <li>Home</li>
            <li>service</li>
            <li>feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="ml-auto flex">
        <Button name={"Login"} bgOn={false} />
        <Button name={"Sing up"} bgOn={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


export const Logo = ({light}) => {
    return (
        <div className={`flex mr-auto`}>
          <img src={light ? "LogoDarkMode.svg" : "LogoLightMode.svg"} alt="" className="h-6" />
        </div>
    )
}