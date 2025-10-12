import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";

interface CardProps {
  image: string;
  heading: string;
  description: string;
  className?: string;       // Optional wrapper class
  imageClassName?: string;  // Optional image class
}

const Card: React.FC<CardProps> = ({
  image,
  heading,
  description,
  className = "",
  imageClassName = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        className={`relative bg-gray-900 text-gray-100 rounded-lg border-1 border-gray-700 shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 ${className}`}
        onClick={() => setIsExpanded(true)}
        layoutId={`card-container-${image}`}
      >
        <motion.img
          src={image}
          alt={heading}
          className={`w-full object-cover ${imageClassName}`}
          layoutId={`card-image-${image}`}
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{heading}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="absolute top-2 right-2 bg-gray-800 p-1 rounded-full shadow hover:bg-gray-700">
          <FiSearch size={20} className="text-gray-200" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setIsExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={image}
              alt={heading}
              className="object-contain max-w-full max-h-full rounded-lg shadow-lg"
              layoutId={`card-image-${image}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
