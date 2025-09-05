import React from 'react';
import { GraduationCap, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
          <Zap className="w-2.5 h-2.5 text-white" />
        </div>
      </div>
      {showText && (
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
          MyWork
        </div>
      )}
    </motion.div>
  );
};

export default Logo;