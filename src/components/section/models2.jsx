import { useState } from "react";
import copy from "clipboard-copy";

export const SectionModel2 = () => {
  const [copied, setCopy] = useState("");

  const copyToClipboard = () => {
    const textToCopy = "0x642e993Fa91FFE9FB24d39a8eB0e0663145f8e92";
    copy(textToCopy);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <div
      id="section-2"
      className="w-full p-6 sm:p-8 flex flex-col-reverse gap-6 lg:grid lg:grid-cols-2 lg:gap-6 relative lg:h-screen overflow-hidden font-poppins"
    >
      <div className="--component1 relative">
        <div className="flex justify-center lg:justify-normal lg:flex-none">
          <video
            className="2xl:w-[650px] sm:w-[450px] w-[300px] 2xl:max-h-[700px] max-h-[550px] object-cover lg:ml-6 rounded-[50px]"
            src="oyen/gif.mp4"
            alt=""
            autoPlay
            loop
            muted
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          ></video>
        </div>
        <img
          className="2xl:w-[300px] sm:w-[150px] w-[100px] object-cover bottom-10 absolute lg:bottom-20 rounded-[30px]"
          src="oyen/1.jpg"
          alt=""
        />
        <img
          className="2xl:w-[260px] sm:w-[150px] w-[100px] object-cover absolute right-0 2xl:bottom-16 2xl:right-0 sm:right-4 bottom-6 lg:right-4 lg:bottom-6 xl:right-20 xl:bottom-0 lg:-z-10 rounded-[30px]"
          src="oyen/4.jpg"
          alt=""
        />
      </div>
      <div className="--component2 flex flex-col gap-4">
        {/* text-[#1D2B48]  */}
        <div className="--heading font-black text-white text-[40px] lg:text-left text-center sm:text-[50px]">
          INTRODUCING OYEN
        </div>
        <div className="--body flex flex-col gap-4">
          <p className="text-[18px] text-white font-medium lg:text-left text-center">
          In the heart of a quaint little town, Oyen the cat captivated everyone with his adventurous spirit and unique style. With his soft fur and curious eyes, Oyen ventured into every corner, always ready for a new adventure. Whether he donned a traditional hat, a beanie, or a military helmet, Oyen's presence was always striking. Armed with his trusty gear and a playful demeanor, Oyen was not only the town's beloved companion but also its unexpected hero, spreading smiles and warmth wherever he went.
          </p>
        </div>
        <div className="--footer">
          {/* bg-[#FFD33B]/50 */}
          <div className="--contract p-4 bg-white/70 rounded-[20px] sm:flex sm:items-center lg:items-start gap-2">
            <img
              className="w-[100px] h-[100px] object-cover rounded-[20px]"
              src="oyen/2.jpg"
              alt=""
            />
            <div className="--title">
              <p className="text-[34px] font-bold">Official Contract</p>
              <p className="text-[18px] font-medium">
                <i
                  className={`bi ${
                    copied ? "bi-check-circle-fill" : "bi-clipboard-fill"
                  } cursor-pointer`}
                  onClick={copyToClipboard}
                ></i>
                <span className=""></span>{""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
