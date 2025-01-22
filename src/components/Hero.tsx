'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="w-full px-4 py-24 flex flex-col md:flex-row items-center justify-center gap-20 bg-[#FEE5EB]">
      {/* Profile image with enlarged circle and glow */}
      <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg animate-pulseGlow mb-8">
        <Image
          src="/me.jpg" // Correct path for an image in the public folder
          alt="Profile"
          width={300} // Specify width
          height={300} // Specify height
          className="object-cover absolute top-[-80px] left-0 right-0 bottom-0"
          priority
        />
        {/* Glow circle with border */}
        <div className="absolute inset-0 border-4 border-[#FB6F92] rounded-full animate-pulseGlow"></div>
      </div>

      {/* Text content */}
      <div className="text-left md:text-left">
        <h1 className="text-black max-w-[800px] font-Poppins mx-auto text-3xl">
          Hi, I am
          <span className="block text-[#ED366B] text-6xl font-Lobster">
            Shyam Kumar Gupta
          </span>
        </h1>
        <p className="text-black max-w-[800px] font-Poppins mx-auto text-lg">
        A passionate web developer with expertise in HTML, CSS, JavaScript, React.js,
         Node.js, and MongoDB. I specialize in building dynamic, user-friendly web 
         applications with a focus on performance, scalability, and secure coding
          practices. With hands-on experience in full-stack development and data 
          visualization, I thrive on solving complex challenges and delivering seamless
           user experiences through innovative solutions.
        </p>
      </div>
    </section>
  )
}
