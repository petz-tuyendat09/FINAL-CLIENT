import { motion } from "framer-motion";

export default function AuthModal({ modalText }: { modalText: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-6 py-2 text-white"
    >
      <p>{modalText}</p>
    </motion.div>
  );
}
