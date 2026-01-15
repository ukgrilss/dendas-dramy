import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, Zap, Lock, Unlock } from 'lucide-react';

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
      rotate: [0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariant = {
    animate: {
      scale: [1, 1.03, 1],
      boxShadow: [
        "0 0 0 0 rgba(168, 85, 247, 0.7)",
        "0 0 0 10px rgba(168, 85, 247, 0)",
        "0 0 0 0 rgba(168, 85, 247, 0)",
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative selection:bg-purple-500 selection:text-white font-sans">
      {/* Abstract Background - Darker and more "Tech/Secure" */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/40 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 max-w-md mx-auto text-center"
      >
        {/* Header/Badge - Verified Status */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-sm font-semibold text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck size={16} />
            Conexão Segura Estabelecida
          </span>
        </motion.div>

        {/* Main Title - Generic Access */}
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Acesso <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Liberado
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-slate-400 text-lg mb-10 leading-relaxed">
          Seu conteúdo exclusivo já está disponível. Clique abaixo para iniciar.
        </motion.p>

        {/* Dynamic Abstract Card (No specific images) */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full aspect-[16/9] mb-10 group"
        >
          <motion.div 
            variants={floatingVariant}
            animate="animate"
            className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900"
          >
            {/* Generic Tech/Cinema Background Image */}
            <img 
              src="https://i.postimg.cc/c1p08ffW/image.png" 
              alt="Preview Content"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

            {/* Central Play/Unlock Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 rounded-full"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center border border-white/10 shadow-lg relative z-10">
                   <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
               <span className="bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[10px] uppercase tracking-wider px-2 py-1 rounded text-slate-300 flex items-center gap-1">
                 <Zap size={10} className="text-yellow-400" /> Premium
               </span>
               <span className="bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[10px] uppercase tracking-wider px-2 py-1 rounded text-slate-300 flex items-center gap-1">
                 <Lock size={10} className="text-emerald-400" /> Verificado
               </span>
            </div>
            
            {/* Progress Bar Visual */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-full opacity-80 z-20"></div>
          </motion.div>

          {/* Glow effect behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-500/10 blur-3xl rounded-full -z-10" />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.a
            href="https://www.dramy.com.br/"
            variants={pulseVariant}
            animate="animate"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full block group overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] shadow-lg shadow-purple-500/20"
          >
            <div className="relative flex items-center justify-center gap-3 px-6 py-4 bg-slate-900/40 backdrop-blur-sm rounded-xl h-full transition-all group-hover:bg-white/5">
              <span className="text-xl font-bold uppercase tracking-widest text-white">
                Acessar Agora
              </span>
              <Unlock className="text-white/80" size={20} />
            </div>
            
            {/* Shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
          </motion.a>
        </motion.div>

        {/* Generic Social Proof */}
        <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center gap-3 opacity-60">
           <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${i===1 ? 'from-blue-400 to-blue-600' : i===2 ? 'from-purple-400 to-purple-600' : 'from-emerald-400 to-emerald-600'}`}></div>
              </div>
            ))}
           </div>
           <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             +1.2k usuários ativos agora
           </p>
        </motion.div>

        <motion.footer variants={itemVariants} className="mt-16 text-[10px] text-slate-600 uppercase tracking-widest">
          Copyright © {new Date().getFullYear()} • Todos os direitos reservados
        </motion.footer>

      </motion.div>
    </div>
  );
};

export default BridgePage;