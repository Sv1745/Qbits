import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  type: string;
}

export default function EventCard({ title, date, description, type }: EventCardProps) {
  return (
    <div className="bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Calendar className="w-5 h-5 text-[#ffdd00] mr-2" />
        <span className="text-purple-300 text-sm">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <span className="inline-block bg-[#8000ff]/20 text-[#ffdd00] text-xs px-3 py-1 rounded-full mb-3">
        {type}
      </span>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}