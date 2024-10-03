import { motion } from "framer-motion";

export default function NoActionModal({ modalText }: { modalText: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0">
      <div className="flex h-full w-full items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mb-8 rounded-full bg-black px-6 py-2 text-white"
        >
          <p>{modalText}</p>
        </motion.div>
      </div>
    </div>
  );
}
