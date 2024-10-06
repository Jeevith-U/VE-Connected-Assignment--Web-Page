import React from 'react'
import Button from '../../Components/Button';

const Hero = () => {
    return (
        <div className="w-full py-4 flex flex-col justify-center items-center bg-silver">
          <div className="w-10/12 px-8 flex justify-center items-center">
            <div className="w-8/12">
              <div className="text-6xl font-semibold text-grey">
                Lessons and insights
              </div>
              <div className="text-6xl font-semibold text-primary">
                from 8 years
              </div>
              <p className="text-grey2 py-4">
                Where to grow your business as a photographer: site or social media?
              </p>
              <Button bgOn={true} name={"Register"}/>
            </div>
            <div className="w-4/12 h-home flex justify-center items-center">
                <img src="Illustration.svg" alt="" />
            </div>
          </div>
            <div className="flex ">
              <Dot on={true}/>
              <Dot on={false}/>
              <Dot on={false}/>
            </div>
        </div>
      );
}

export default Hero

export const Dot = ({on}) => {
  return (
    <div className={`w-2.5 min-h-2.5 mx-2 ${on ? "bg-primary" : "bg-primary_light"} rounded-full`}></div>
  )
}