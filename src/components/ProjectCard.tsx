"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  demo: string;
  github: string;
};

const ProjectCard = ({ title, description, image, demo, github }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white"
    >
      {/* Gambar project */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Konten project */}
      <div className="absolute backdrop-blur-md bottom-0 p-2 w-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-3">{description}</p>
        <div className="flex gap-3">
          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-2 bg-[#7B8AEA] hover:bg-blue-500 transition-colors px-3 py-1.5 rounded-lg text-sm"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1.5 rounded-lg text-sm"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
