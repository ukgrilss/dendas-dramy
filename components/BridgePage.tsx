import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Sparkles, Tv, Star } from 'lucide-react';

const BridgePage: React.FC = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatingVariant = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariant = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(236, 72, 153, 0.7)",
        "0 0 0 10px rgba(236, 72, 153, 0)",
        "0 0 0 0 rgba(236, 72, 153, 0)",
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D0F35] via-[#4C1D95] to-[#831843] text-white overflow-hidden relative selection:bg-pink-500 selection:text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 max-w-lg mx-auto text-center"
      >
        {/* Header/Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-pink-200 shadow-lg">
            <Sparkles size={14} className="text-yellow-300" />
            Acesso Exclusivo Liberado
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight leading-tight">
          O Mundo dos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300 drop-shadow-sm">
            Doramas Premium
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-200 text-lg mb-8 font-medium">
          Assista às melhores histórias de amor e drama com qualidade incrível.
        </motion.p>

        {/* Dynamic Image Container */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full aspect-video mb-8 group"
        >
          <motion.div 
            variants={floatingVariant}
            animate="animate"
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            
            <img 
              src="https://i.postimg.cc/c1p08ffW/image.png" 
              alt="Dorama Preview" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                 <Play fill="white" className="text-white ml-1" size={32} />
              </div>
            </div>

            {/* Floating Tags */}
            <div className="absolute bottom-3 left-3 z-20 flex gap-2">
               <span className="bg-black/60 backdrop-blur-md text-xs px-2 py-1 rounded-md flex items-center gap-1">
                 <Tv size={10} /> HD 4K
               </span>
               <span className="bg-pink-600/80 backdrop-blur-md text-xs px-2 py-1 rounded-md flex items-center gap-1">
                 <Heart size={10} fill="currentColor" /> Romance
               </span>
            </div>
          </motion.div>

          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-20 -z-10 rounded-full transform translate-y-4" />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.a
            href="https://www.dramy.com.br/"
            variants={pulseVariant}
            animate="animate"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full block group overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 p-[2px] shadow-2xl shadow-pink-500/30"
          >
            <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-transparent rounded-xl h-full transition-colors group-hover:bg-white/5">
              <span className="text-2xl font-bold uppercase tracking-wider text-white">
                10 Minutos Grátis
              </span>
              <Play fill="currentColor" className="text-white animate-pulse" size={24} />
            </div>
            
            {/* Shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
          </motion.a>
        </motion.div>

        {/* Trust Indicators / Social Proof (Optional add-on for better conversion) */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                className="w-8 h-8 rounded-full border-2 border-purple-900 object-cover" 
                src={`https://picsum.photos/seed/${100+i}/50/50`} 
                alt="User" 
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-purple-900 bg-white text-purple-900 flex items-center justify-center text-xs font-bold">
              +1k
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-purple-200">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
            </div>
            <span>Amado por dorameiras</span>
          </div>
        </motion.div>

        <motion.footer variants={itemVariants} className="mt-12 text-xs text-purple-300/60">
          © {new Date().getFullYear()} Dramy App. Todos os direitos reservados.
        </motion.footer>

      </motion.div>
    </div>
  );
};

export default BridgePage;