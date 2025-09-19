import React, { useEffect, useState } from 'react'

const NavFooter = ({socialPosition="bottom-right"}) => {
    
    const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-CA", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  let socialClass="";
  switch (socialPosition){
    case "top-left":
        socialClass="top-4 left-4";
        break;
    case "top-right":
        socialClass="top-4 right-4";
        break;
    case "bottom-left":
        socialClass="bottom-4 left-4";
        break;
    case "bottom-right":
        socialClass="bottom-4 right-4";
        break;

    default:
        socialClass="bottom-4 right-4";
        break;
  }

  return (
    <div>
        <div className="w-full absolute bottom-4 left-0 px-6 flex items-center justify-between text-white">
        <div className="font-[font2]">MONTREAL_{time}</div>
        <div className="flex gap-6">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
          <span className="hover:underline cursor-pointer">Ethics Report</span>
        </div>

        
      </div>
      <div className={` absolute  ${socialClass}  flex gap-2`}>
          {["FB","IG","IN","BE"].map((x)=>(
               <button key={x} className="rounded-full border-2 border-white h-10 w-12 text-white hover:text-[#c0e41f] hover:border-[#c7fa0f] " >
                <span className="font-[font2] font-semibold">{x}</span>
               </button>
          )
         

          )}
        </div>
    </div>
  )
}

export default NavFooter