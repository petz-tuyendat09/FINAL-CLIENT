import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";
import { Product } from "@/types/Product";
import { useState } from "react";
import { motion } from "framer-motion";
interface ProductCartButtonProps {
  Product?: Product;
}
export default function ProductButton({ Product }: ProductCartButtonProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [isDecrease, setIsDecrease] = useState<boolean>(false);

  function handleDecrease() {
    quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);
    setIsDecrease(true);
  }

  function handleIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setIsDecrease(false);
  }

  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 translate-y-2 gap-2 opacity-0 transition delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button additionClass="gap-1 text-base">
        <Icon onClick={handleDecrease} icon="ic:round-minus" />
        <motion.div
          key={quantity}
          initial={{ opacity: 0, y: isDecrease ? -10 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100, // Độ cứng của lò xo (giá trị càng cao, bounce càng nhanh)
            damping: 5, // Lực cản (giá trị càng thấp, bounce càng nhiều)
            mass: 0.6, // Khối lượng của đối tượng (khối lượng lớn hơn sẽ làm chậm chuyển động)
          }}
        >
          {quantity}
        </motion.div>
        <Icon onClick={handleIncrease} icon="ic:round-plus" />
        <Icon icon="mdi:cart-outline" />
      </Button>
      <Button additionClass="gap-1 text-base">
        <p className="w-20">Mua ngay</p>
        <Icon icon="fa-solid:shopping-bag" />
      </Button>
    </div>
  );
}
