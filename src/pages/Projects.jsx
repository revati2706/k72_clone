import Navbar from '../components/common/Nav/Navbar'
import Footer from '../components/common/Footer/Footer';
import ProjectCard from '../components/project/ProjectCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  useGSAP(() => {
    // select all project rows
    gsap.utils.toArray(".project-row").forEach((row) => {
      // animate each image inside row
      gsap.from(row.querySelectorAll(".project-img"), {
        scaleY: 0,               // start compressed
        transformOrigin: "top center",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
      });
    });
  });

  return (
    <div>
      <Navbar logoColor="black" />
      
      <div className="pt-[40vh] p-4">
        <h2 className="text-[12vw] font-[font2] uppercase mb-0">WORK</h2>
      </div>
      
      <div className="hero p-4 -mt-[80px]">
        <ProjectCard />
      </div>

      <Footer />
    </div>
  );
};

export default Projects;

