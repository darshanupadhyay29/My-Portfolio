"use client"

import  Head  from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
    
    const skills = ["/express.png", "/firebase.png", "/git.png", "/javascript.png", "/mongoDb.png", "/nextjs.png", "/node.png", "/postgres.png", "/react.png", "/reactNative.png", "/tailwind.png", "/typescript.png"];
    
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.2, // Delay between each image animation
     },
   },
 };

 const floatingEffect = {
   hidden: { opacity: 0, scale: 0.8 },
   visible: { opacity: 1, scale: 1 },
   hover: { scale: 1.2, rotate: 10 }, // Scale up and rotate slightly on hover
   floating: {
     y: [0, -10, 0, 10, 0], // Move up and down
     transition: {
       duration: 4, // Duration of the floating cycle
       repeat: Infinity, // Repeat endlessly
       ease: "easeInOut",
     },
   },
 };
    
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My personal portfolio" />
      </Head>

      {/* Navbar */}
      <nav className="p-5 bg-gray-800 fixed right-0">
        <ul className="flex justify-end gap-4">
          <li>
            <ScrollLink
              to="about" // ID of the target section
              smooth={true}
              duration={800} // Duration of the scroll (ms)
              offset={-80} // Offset to account for fixed navbar height
              className="hover:text-gray-400 cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-gray-400 cursor-pointer"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-gray-400 cursor-pointer"
            >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-gray-400 cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-20 text-center">
        <motion.h1
          className="text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-red-500 animate-gradient-text pb-3"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Darshan Upadhyay
        </motion.h1>
        <motion.h1
          className="text-5xl font-bold mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Full-stack developer
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          crafting seamless experiences with expertise in both frontend and
          backend development.
        </motion.p>
      </header>

      {/* Links Section */}
      <section className="flex justify-center gap-6 py-3">
        <Link
          href="https://www.linkedin.com/in/darshan-upadhyay-664176247"
          target="_blank"
          className="hover:text-gray-400"
        >
          <img src="/linkedIn.png" alt="LinkedIn" height={40} width={40}></img>
        </Link>
        <Link
          href="https://github.com/darshanupadhyay29"
          target="_blank"
          className="hover:text-gray-400"
        >
          <img src="/github2.png" alt="GitHub" height={40} width={40}></img>
        </Link>
        <Link
          href="https://x.com/DARSHANUPA95530"
          target="_blank"
          className="hover:text-gray-400"
        >
          <img src="/x.png" alt="X" height={40} width={40}></img>
        </Link>
        <Link
          href="https://leetcode.com/u/darshanupadhyay29"
          target="_blank"
          className="hover:text-gray-400"
        >
          <img src="/leetcode.png" alt="Leetcode" height={45} width={45}></img>
        </Link>
        <Link
          href="mailto:dbdarshanupadhyay@gmail.com"
          className="hover:text-gray-400"
        >
          <img className="mt-1" src="/gmail.png" alt="Gmail" height={40} width={40}></img>
        </Link>
      </section>

      {/* About Me Section */}
      <section id="about" className="p-10 text-center bg-gray-800">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <img
          src="/profilepic.png"
          alt="My Picture"
          className="w-40 h-40 mb-5 rounded-full mx-auto mt-5"
        />
        <p className="text-gray-400">
          hey! I'm Darshan. I make websites and apps. I work with technologies
          like react,node.js,next.js.
          <br />
          Education : B-tech in Computer Science from IIST College, RGPV
          university(2021-2025) with CGPA : 7.4/10.
          <br />
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technologies
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-8 grid-cols-2 sm:grid-cols-4"
        >
          {skills.map((i, index) => (
            <motion.img
              key={index}
              src={i}
              alt={`skill-${index}`}
              className="w-20 h-20 mx-auto"
              variants={floatingEffect}
              initial="visible"
              animate="floating" // Apply floating effect
              whileHover="hover" // Apply hover effect
            />
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-10 text-center bg-gray-800">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h2>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <h4>
              Full Stack Development Intern -{" "}
              <b>Developer Bazaar Technologies</b> (July'2024 - Oct'2024)
            </h4>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-gray-400 text-center w-[300px] leading-relaxed">
              Engineered and maintained a scalable job portal platform using
              React.js,Node.js,Tailwind CSS,Firebase;optimized database queries
              and enhanced overall system performance.Integrated gridlines api
              for PAN card verification.Integrated payment gateway using
              razorpay.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-5 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
          {/* project-1 Socio-commerce */}
          <div className="flex flex-col items-center">
            <img
              height={400}
              width={400}
              src="/Socio-commerce.png"
              alt="Socio-commerce image"
              className="transition-transform duration-300 hover:scale-110 p-4"
            />
            <div className="flex items-center space-x-2">
              <text className="font-bold text-lg">Soci-O-Commerce</text>|{" "}
              <Link
                href="https://github.com/darshanupadhyay29/socio_commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 transition-transform duration-300 hover:text-white"
              >
                GitHub
              </Link>
              |{" "}
              <Link
                className="text-purple-600 transition-transform duration-300 hover:text-white"
                href="https://socio-commerce.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Link>
            </div>

            <p className="text-gray-400 text-center w-[300px]  leading-relaxed mt-4">
              Socio-O-Commerce is a social media platform with an integrated
              marketplace section for selling and buying products as well.
            </p>
            <div className="flex gap-6">
              <img src="/react.png" alt="react" height={20} width={30}></img>
              <img src="/node.png" alt="react" height={20} width={30}></img>
              <img src="/mongoDb.png" alt="react" height={20} width={30}></img>
              <img src="/express.png" alt="react" height={20} width={30}></img>
            </div>
          </div>
          {/* Project-2 Healthy-wealth */}
          <div className="flex flex-col items-center">
            <img
              height={400}
              width={400}
              src="/hw.png"
              alt="Healthy Wealth image"
              className="transition-transform duration-300 hover:scale-110 p-4"
            />
            <div className="flex items-center space-x-2">
              <text className="font-bold text-lg">Healthy Wealth</text>|{" "}
              <Link
                href="https://github.com/darshanupadhyay29/Healthy-Wealth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 transition-transform duration-300 hover:text-white"
              >
                GitHub
              </Link>
              |{" "}
              <Link
                className="text-purple-600 transition-transform duration-300 hover:text-white"
                href="https://healthy-wealth.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Link>
            </div>
            <p className="text-gray-400 text-center w-[300px] leading-relaxed mt-4">
              Healthy Wealth is a web application to Keep track of your finances
              with help of AI.
            </p>
            <div className="flex gap-6 p-4">
              <img src="/nextjs.png" alt="react" height={20} width={30}></img>
              <img src="/tailwind.png" alt="react" height={20} width={30}></img>
              <img src="/postgres.png" alt="react" height={20} width={30}></img>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-5 bg-gray-800 text-center text-gray-400">
        Indore - Madhya Pradesh (India)
        <br />
        Gmail - dbdarshanupadhyay@gmail.com
      </footer>
    </div>
  );
}
