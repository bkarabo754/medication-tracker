import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-24">
      <motion.div
        className="w-12 h-12 border-4 border-dashed rounded-full border-white"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
      <div className="ml-4 text-lg font-medium text-white">Loading...</div>
    </div>
  );
}
