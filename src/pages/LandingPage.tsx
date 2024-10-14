import Header from "../components/Header";
import { InfiniteLooper } from "../components/infiniteCarousel/InfiniteCarousel";
import laptopImage from "../assets/laptop.webp";
import HTMLimg from "../assets/HTML.png";
import CSSimg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.png";
import whyusImg from "../assets/whyus.png";
import dockerImg from "../assets/docker.png";
import { GiSkills } from "react-icons/gi";
import { SiBookstack, SiFuturelearn } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedin } from "react-icons/fa";
import Register from "../components/registerDialog/Register";

export default function LandingPage() {
  const skills = [
    { name: "HTML", image: HTMLimg },
    { name: "CSS", image: CSSimg },
    { name: "JavaScript", image: jsImg },
    { name: "React", image: reactImg },
    { name: "Node.js", image: nodeImg },
    { name: "Docker", image: dockerImg },
  ];

  return (
    <main>
      <Header />
      {/* intro Section */}
      <section
        className="w-screen h-[calc(100vh-10.5rem)] text-white flex flex-col pt-28 items-center gap-12 bg-black"
        style={{
          backgroundImage: `url(${laptopImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl">We are working professionals</h1>
        <p className="text-2xl">
          We teach you tech with our experience in real world projects
        </p>
      </section>

      {/* Skills Section */}
      <section className="p-3 bg-black">
        <h1 className="text-center text-4xl text-white font-bold mb-4 p-4">
          Skills we provide
        </h1>
        <div className="p-4 ">
          <InfiniteLooper speed={10} direction="right">
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" p-3  bg-white text-white rounded-lg mr-6 flex items-center flex-col justify-center"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-40 w-40 object-contain"
                  loading="lazy"
                />
                <p className="text-black p-3 font-semibold">{skill.name}</p>
              </div>
            ))}
          </InfiniteLooper>
        </div>
      </section>
      {/*why us section */}
      <section className="p-3 bg-black">
        <h1 className="text-center text-4xl text-white font-bold mb-4 p-4">
          Why choose us?
        </h1>
        <div className="text-white flex justify-center  items-center">
          <div className="text-2xl flex flex-col gap-16">
            <p className="flex items-center ">
              <GiSkills fontSize={36} /> &nbsp; You'll get direct training from
              working professionals
            </p>
            <p className="flex">
              <SiFuturelearn fontSize={36} />
              &nbsp; We'll provide you mock interviews from working
              professionals
            </p>
            <p className="flex">
              <SiBookstack fontSize={36} />
              &nbsp; We'll provide you learning materials, roadmap and more...
            </p>
            <p className="flex">
              <IoMdMail fontSize={36} />
              &nbsp; For more details please Register &nbsp;{" "}
              <Register>
                <span className="text-sky-400 cursor-pointer">here</span>
              </Register>
            </p>
          </div>

          <img
            src={whyusImg}
            alt="why us"
            className="h-[30%] w-[30%] object-cover"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-950 border-t border-white text-white text-center p-6">
        <h1 className="text-3xl font-semibold mb-4">
          Sindhu Products & Services
        </h1>
        <p className="mb-4 text-gray-400">
          Sindhu Products offers premium web development services, ranging from
          custom website designs to full-stack development. We specialize in
          creating digital solutions that not only look great but perform
          exceptionally in the real world. Our tutorials and resources help
          developers and enthusiasts build practical skills through hands-on
          experience.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <FaFacebookF className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaGoogle className="text-2xl" />
          <FaLinkedin className="text-2xl" />
        </div>
        <p className="text-gray-500 text-sm mt-4">
          &copy; 2024 Sindhu Products & Services. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
