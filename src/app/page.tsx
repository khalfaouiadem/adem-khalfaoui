"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="font-sans bg-blue-100 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center py-20 bg-blue-100"
      >
        <Image
          src="/image/image-portfolio.jpg"
          alt="My Photo"
          width={150}
          height={150}
          className="rounded-full border-4 border-white mb-6 shadow-lg"
        />

        {/* Effet Typewriter avec bloc blanc */}
        <div className="bg-white px-6 py-3 rounded-lg shadow-md mb-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 min-h-[60px]">
            <Typewriter
              options={{
                strings: [
                  "Adem Khalfaoui",
                  "Fullstack Developer",
                  "React | Next.js | Java | Flutter",
                  " Passionate about building clean and modern web & Mobile applications.",
                  "Managament of Oracle database that using container ",
                  "Deploying and Devops Cloud Providers AWS & GCP &GC",
                  "Creation Of ERP System",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </h1>
        </div>

        <p className="text-xl text-gray-700 max-w-xl mb-6">
          Enjoy your visit to my portfolio! Feel free to explore my projects and skills.
        </p>

        {/* Download CV */}
        <a
          href="/uploads/cv.pdf"
          download="Adem-Khalfaoui-CV.pdf"
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Download CV
        </a>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 sm:px-20 bg-blue-200 text-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "JavaScript", type: "Language", url: "/image/javascript.png" },
            { name: "TypeScript", type: "Language", url: "/image/Typescript.png" },
            { name: "React.js", type: "Framework", url: "/image/React.png" },
            { name: "Next.js", type: "Framework", url: "/image/next.jpg" },
            { name: "Tailwind CSS", type: "Tool", url: "/image/tailwindcss.png" },
            { name: "Java", type: "Language", url: "/image/java.jpeg" },
            { name: "Spring Boot", type: "Framework", url: "/image/spring.jpeg" },
            { name: "Flutter", type: "Framework", url: "/image/Flutter.png" },
            { name: "Git & GitHub", type: "Tool", url: "/image/GitHub.png" },
            { name: "APIs Integration", type: "Google Colab", url: "/image/Apisintegration.jpeg" },
            { name: "Angular Version 17", type: "Framework", url: "/image/angular.png" },
            { name: "Python", type: "Google Colab", url: "/image/Python.jpeg" },
            { name: "MySQL", type: "Database", url: "/image/mysql.png" },
            { name: "MongoDB", type: "Database", url: "/image/MongoDb.png" },
            { name: "Oracle", type: "Database", url: "/image/Orcale.png" },
            { name: "Software Engineering", type: "Bachelor degree in ISI Kef 2024", url: "/image/degree.jpeg" },
            { name: "Cloud Computing", type: "Specialty", url: "/image/cloud.jpeg" },
            { name: "Processus Scrum", type: "Method", url: "/image/ProcessusScrum.jpeg" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              {skill.url && (
                <Image
                  src={skill.url}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="mb-2"
                />
              )}
              <p className="text-gray-500 text-center">{skill.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 sm:px-20 bg-blue-100">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Management of Ressource Humain", link: "https://www.linkedin.com/in/adem-kh", img: "/Projects/Tunisie.png" },
            { name: "Management of Ressource Humain", link: "https://www.linkedin.com/in/adem-kh", img: "/Projects/tt.png" },
            { name: "E-learning Platform CNI Tunis", link: "https://github.com/khalfaouiadem", img: "/Projects/Cni.png" },
            { name: "RELIF ORGANISATION PROJECT", link: "https://github.com/khalfaouiadem", img: "/Projects/bot.jpeg" },
            { name: "ChatBot Mobile App", link: "#", img: "/Projects/Relif.jpeg" },
          ].map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={project.img}
                alt={project.name}
                width={400}
                height={250}
                className="object-cover w-full h-52"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8">
        &copy; 2025 Adem Khalfaoui. All rights reserved.
      </footer>
    </div>
  );
}
