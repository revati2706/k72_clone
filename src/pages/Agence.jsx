import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
 

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/PLP2_640x960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  gsap.registerPlugin(ScrollTrigger);
          let lastIdx=-1
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -100%",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate:(self)=>{
          const imageIdx=Math.min(imageArray.length-1,Math.floor(self.progress*imageArray.length));
          if(imageIdx !==lastIdx){
            imageRef.current.src =imageArray[imageIdx];
            lastIdx=imageIdx;
          }
        }
      },
    });
  });

  return (
    <div>
      <div className="section-1 font-[font2]  ">
        <div
          ref={imageDivRef}
          className=" -z-1 absolute  h-40 w-28 sm:h-52 sm:w-40  md:h-72 md:w-52  lg:h-80 lg:w-60   bg-amber-600 left-[31.5vw] top-60 rounded-3xl  overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover "
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>

        <div className="relative">
          <div className="mt-[55vh] relative">
            <h1 className="pt-5 text-[20vw]  text-center uppercase leading-[15vw] ">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>

          <div className="mr-auto mt-20 pl-[37%] ">
            <p className="text-[3vw] font-[font2] text-base pl-20 leading-none  text-section ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>

        <div>
          <div className="mt-40">
            <div className=" flex  justify-around gap-[30px]">
              <div>
                <h2 className="text-[vw]">Expertise</h2>
              </div>
              <div className="list-none text-[vw]">
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </div>
              <div></div>
            </div>
          </div>

          <div className="mt-40">
            <div className="flex justify-around gap-12 ml-[10vw]">
              <div className="w-[20vw] text-[vw] leading-none">
                <p>
                  Our Work_ Born in curiosity, raised by dedication and fed with
                  a steady diet of creativit
                </p>
              </div>

              <div className="w-[20vw] text-[vw] leading-none">
                <p>
                  Our Creative_ Simmering in an environment where talent can
                  come to a full boil. Encouraged to become the best versions of
                  ourselves.
                </p>
              </div>

              <div className="w-[20vw] text-[vw] leading-none">
                <p>
                  Our Culture_ We’re open to each other. Period. The team works
                  together to create a space that makes us proud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
