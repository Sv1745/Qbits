import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end transform transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-[#ffdd00] hover:text-white transition-colors"
        >
          Learn More <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}