import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-24">
      <motion.div
        className="w-12 h-12 border-4 border-dashed rounded-full border-gray-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
      <div className="ml-4 text-lg font-medium text-gray-400">Loading...</div>
    </div>
  );
}
