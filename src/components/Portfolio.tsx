"use client";
import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

const projects = [
    {
        title:"Promtopia",
        desc:"In this dynamic web app, users can explore prompts and even contribute their own by signing in with their Google accounts. The seamless authentication process is powered by Google Cloud Console, ensuring a secure and smooth user experience. All prompts and user data are stored and managed efficiently with MongoDB, making the app scalable.",
        devStack:"Next JS, Node JS, MongoDB and Tailwind CSS",
        link:"https://lnkd.in/dWuhZhNc",
        git:"https://lnkd.in/dfzsha7m",
        src:"/assets/Capture.png",
    },
    {
        title:"Gamify",
        desc:"A website built with React and Material UI!  Its designed with three key sections: a left bar for navigation, a feed for dynamic content, and a right bar for additional information. This project highlights my skills in creating responsive, user-friendly interfaces.",
        devStack:"React JS and Material UI",
        link:"https://lnkd.in/dzbvfUuP",
        git:"https://lnkd.in/dS5746gK",
        src:"/assets/Capture1.png",
    },
    {
        title:"Nexcent",
        desc:"This project involved implementing React Router for seamless navigation and handling various UI components. The hands-on experience allowed me to deepen my understanding of React's core principles and routing capabilities. In this, I used Bootstrap for styling, ensuring a responsive and professional layout.",
        devStack:"Figma, React JS and Bootstrap",
        link:"https://lnkd.in/d-f9hMpp",
        git:"https://lnkd.in/dAuU82P3",
        src:"/assets/Capture2.png",
    },
    {
        title:"Manage",
        desc:"I built a fully responsive landing page using HTML, CSS, and the incredibly powerful Tailwind CSS framework. This project was a fantastic learning experience and allowed me to dive deep into the utility-first approach that Tailwind CSS offers.",
        devStack:"HTML, CSS, JS and Tailwind CSS",
        link:"",
        git:"",
        src:"/assets/Capture3.png",
    },
    {
        title:"Bootcamp",
        desc:"I created a fully responsive bootcamp website with the power of Bootstrap. It was a great experience for me to build this project.",
        devStack:"HTML, CSS and Bootstrap",
        link:"https://lnkd.in/dQHjkR7i",
        git:"https://lnkd.in/dYKZDchZ",
        src:"/assets/Capture4.png",
    }
]

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
        <h1 className="text-orange-400 text-6xl max-w-[320px] mx-auto font-semibold my-12">
            Port<span className="w-[0] text-white">folio</span>
        </h1>
        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{opacity: 0, y: 75}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{ duration: 0.5, delay: 0.25}}
                className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
            > 
                <div className="space-y-2 max-w-[550px]">
                    <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                    <h2 className="text-4xl">{project.title}</h2>
                    <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                    <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                    <div className="w-64 h-[1px] bg-gray-400 my-4">
                        <a href={project.link} className="mr-6">Link</a>
                        <a href={project.git}>Git</a>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <Image 
                      src={project.src} 
                      alt={project.title} 
                      width={550} 
                      height={350} 
                      className="h-[350px] w-auto object-cover border rounded border-gray-700"
                    /> 
                </div>
            </motion.div>
        ))}
        </div>
    </div>
  )
}

export default Portfolio
