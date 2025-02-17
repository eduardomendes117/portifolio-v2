"use client";

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Card = () => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 p-3">
      <div className="aspect-video w-full relative overflow-hidden rounded-t-2xl">
        <Image
          src="/images/netflixpage1.png"
          alt="Netflix Project Preview"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Project</h3>
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-white/5 p-2 transition-all duration-300 group-hover:bg-white/10">
              <ArrowUpRight 
                className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-45"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-sm font-medium text-purple-400">
            • Next.js
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-400">
            • Tailwind css
          </span>
        </div>
      </div>

      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Project link overlay */}
      <a 
        href="#" 
        className="absolute inset-0" 
        aria-label="View project"
      />
    </div>
  );
};

export default Card;