import { useState } from "react";
import { motion } from "framer-motion";

interface ProductCardSelectWeightProps {
  selectedWeight: string;
  productWeight: string[];
  handleSelectWeigth: Function;
}

export default function ProductCardSelectWeight({
  selectedWeight,
  productWeight,
  handleSelectWeigth,
}: ProductCardSelectWeightProps) {
  const [selectingWeight, setSelectingWeight] = useState<boolean>(false);

  function handleExtendDiv() {
    setSelectingWeight((prevState) => !prevState);
  }

  return (
    <motion.div
      initial={false}
      animate={{
        height: selectingWeight ? "fit-content" : "33px", // Use string values for percentages
      }}
      transition={{
        type: "spring",
        stiffness: 20, // Độ cứng của lò xo (giá trị càng cao, bounce càng nhanh)
        damping: 6, // Lực cản (giá trị càng thấp, bounce càng nhiều)
        mass: 0.6, // Khối lượng của đối tượng (khối lượng lớn hơn sẽ làm chậm chuyển động)
      }}
      className="absolute right-4 top-8 flex flex-col gap-2 overflow-y-hidden text-white"
    >
      <button
        onClick={handleExtendDiv}
        className="button-color w-fit rounded-lg bg-button px-2 py-1"
      >
        <motion.p
          key={selectedWeight}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
        >
          {selectedWeight}
        </motion.p>
      </button>
      {productWeight.map((weigth) => (
        <button
          onClick={() => {
            handleSelectWeigth(weigth), handleExtendDiv();
          }}
          className="button-color w-fit rounded-lg px-2 py-1"
          key={weigth}
        >
          {weigth}
        </button>
      ))}
    </motion.div>
  );
}
