import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import './index.css';
import numeral from "numeral";
import { Product } from "@/types/Product";

interface DetailModalProps {
  selectedData: Product | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}


export default function DetailModal({ selectedData, isOpen, onOpenChange }: DetailModalProps) {
  const [stars, setStars] = useState(0);
  const [productWeight, setProductWeight] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  const [weightIndex, setWeightIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
    if (selectedData) {
      const stars = Number((selectedData.productRating / selectedData.ratingCount).toFixed(1));
      const productWeight = selectedData.productWeight;
      const productQuantity = selectedData.productQuantity;
      setStars(stars);
      setProductQuantity(productQuantity);
      setProductWeight(productWeight);
    }
  }, [selectedData]);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleIncreaseQuantity = () => {
    if (quantity < productQuantity) {
      setQuantity(quantity + 1);
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="max-w-[600px]"
      >
        <ModalContent>
          {(onClose: any) => (

            <div className="flex flex-col py-[20px]">
              <ModalBody>
                {selectedData &&
                  <div className="flex flex-row gap-[20px]">
                    <div className="w-[35%]"><Image src={selectedData.productThumbnail} width={250} height={300} alt="" className="rounded-[20px]" /></div>
                    <div className="w-[65%]">
                      <h1 className="text-[20px] font-[500] text-[rgb(61 71 80)]">{selectedData.productName}</h1>
                      <div className="flex flex-row gap-[40px] items-center mt-[5px]">
                        <div className="flex flex-row gap-[5px] items-center rate-stars relative">
                          <span>{stars}</span>
                          <Icon icon="twemoji:star" />
                        </div>
                        <div className="flex flex-row gap-[5px] items-center">
                          <span>{selectedData.ratingCount}</span>
                          <span className="text-[#6c7fd8] text-[14px]">Reviews</span>
                        </div>
                      </div>
                      <p className="text-[#777] font-quicksand text-[15px] mt-[10px]">{selectedData.productDescription}</p>
                      <div className="mt-[10px]">
                        <span className="text-[#686e7d] font-[700] text-[17px]">{numeral(selectedData.productPrice).format('0,0')}đ</span>
                      </div>
                      <div className="flex flex-row gap-[5px] mt-[10px]">
                        {productWeight?.map((item: any, i: any) => {
                          return (
                            <div key={i}>
                              <button className={`${weightIndex === i ? 'bg-[#6c7fd8] text-white' : 'bg-white text-[#777]'} font-[500] tracking-[0.5px] border border-[#e4e4e4] py-[2px] px-[15px] rounded-[20px] text-[14px]`} onClick={() => setWeightIndex(i)}>{item}</button>
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex flex-row gap-[5px] mt-[20px]">
                        <div className="flex flex-row gap-[5px] border border-[#cfcfcf] w-[100px] h-[40px] rounded-[10px] items-center justify-center">
                          <div className="text-[32px] cursor-pointer" onClick={() => handleDecreaseQuantity()}>-</div>
                          <input type="number" className="w-[30px] outline-none text-center" value={quantity} />
                          <div className="text-[19px] cursor-pointer" onClick={() => handleIncreaseQuantity()}>+</div>
                        </div>
                        <Button className="bg-white border-2 border-[#6c7fd8] text-[#6c7fd8] hover:text-white hover:bg-[#6c7fd8]" onPress={onClose}>
                          <Icon icon="uil:cart" />
                          <span>Add To Cart</span>
                        </Button>
                      </div>
                    </div>
                  </div>}
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
