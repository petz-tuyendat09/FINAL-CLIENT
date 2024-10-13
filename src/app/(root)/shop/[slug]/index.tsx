'use client'
import React, { useEffect } from "react";
import { useGetProductsQuery } from "@/libs/features/services/product";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import "./index.css";
import SuggestedProducts from "@/components/pages/Details/SuggestedProducts";
export const Index = () => {
    const { slug } = useParams();
    const productSlug = Array.isArray(slug) ? slug[0] : slug;
    const {data, error, isLoading} = useGetProductsQuery({ productSlug });
    const [quantity, setQuantity] = useState(1);
    const [index, setIndex] = useState(0);
    const [maxQuantity, setMaxQuantity] = useState(0);
    const [option, setOption] = useState('');
    const handleQuantity = (action:string) => {
        if (action === 'increase') {
            if(quantity < maxQuantity) {
                setQuantity(quantity + 1);
            }
        }else {
            if(quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }
    const formatCurrency = (amount:any) => {
        return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ`;
    };
    const handleAddToCart = (name:string, id:string, price:number, salePercent:number) => {
        const cart_obj = {
            productName: name,
            productId: id, 
            productPrice: price,
            salePercent: salePercent,
            productOption: option ? option : data?.products[0]?.productOption[0]?.name
        }
        console.log(cart_obj);
    }

    useEffect(() => {
        const cursor = document.querySelector('.cursor') as HTMLElement;
        const zone = document.getElementById('this-zone');

        if (!cursor || !zone) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = zone.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                cursor.style.left = e.pageX + 'px';
                cursor.style.top = e.pageY + 'px';
                cursor.style.opacity = '1'; 
            } else {
                cursor.style.opacity = '0'; 
            }
        };

        zone.addEventListener('mousemove', handleMouseMove);

        return () => {
            zone.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return ( 
        <div className="mt-[110px] px-[20px] bg-[#F4F2EE]">
            {data?.products?.map((item, i) => (
                <div>
                    <div className="flex flex-row justify-between items-center" key={i}>
                        <div className="w-[32%]">
                            <h1 className="text-[40px] font-black leading-[40px]">{item.productName}</h1>
                            <div className="bg-black rounded-[25px] text-white w-[400px] mt-[50px] flex flex-row justify-between items-center pr-[30px]">
                                <div className="flex flex-row items-center gap-[5px] px-[30px] py-[12px]">
                                    <button onClick={() => handleQuantity('decrease')}>-</button>
                                    <input className="w-[20px] outline-none bg-black ml-[10px]" value={quantity} />
                                    <button onClick={() => {handleQuantity('increase'); setMaxQuantity(item?.productOption[index]?.productQuantity)}}>+</button>
                                </div>
                                <div>
                                    <p>{formatCurrency(item?.productOption[index]?.productPrice)}</p>
                                </div>
                                <div>
                                    {item?.productOption[index]?.productQuantity === 0 ? 
                                        <button className="text-[14px] font-[500]">OUT OF STOCK</button> : 
                                        <button className="text-[14px] tracking-[0.5px] hover:text-primary font-[500]" onClick={() => handleAddToCart(item.productName, item._id, item?.productOption[index]?.productPrice, item.salePercent)}>ADD TO CART</button>}
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-[10px] mr-[70px] mt-[20px]">
                                {item?.productOption?.map((option, i) => {
                                    return (
                                        option?.name && 
                                        <div key={i} onClick={() => {setIndex(i); setMaxQuantity(option?.productQuantity); setOption(option?.name)}}>
                                            <button className={`${index === i ? 'text-white bg-[#D36166]' : ''} border-2 border-[#D36166] rounded-[5px] px-[10px] py-[2px]`}>
                                                {option?.name}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="w-[38%]">
                            <Image src={item.productThumbnail} width="500" height="400" alt="" />
                        </div>
                        <div className="w-[30%]">
                            <div className="flex flex-row gap-[30px]">
                                <h6 className="text-[12px]">DESCRIPTION</h6>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item?.productDescription,
                                    }}
                                    className="text-[13px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[35%]">
                            <h1 className="text-[28px] font-[600] mb-[30px]">BỘ SƯU TẬP</h1>
                            <div className="flex flex-wrap gap-[10px]">
                                {item?.productImages.map((img, i) => {
                                    return (
                                        <Image src={img} width={150} height={300} alt="" key={i} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="w-[30%] text-[14px]">
                            Thức ăn cho mèo giàu chất dinh dưỡng là sản phẩm lý tưởng giúp chăm sóc sức khỏe và sự phát triển toàn diện của mèo cưng. Được chế biến từ các thành phần tự nhiên chất lượng cao, sản phẩm này cung cấp nguồn dinh dưỡng phong phú, đáp ứng nhu cầu của mèo ở mọi lứa tuổi. 
                            <br /><strong>Thành phần</strong>: Thức ăn chứa protein từ thịt gà, cá và các nguồn thực phẩm khác, giúp xây dựng và duy trì cơ bắp. Ngoài ra, sản phẩm còn bổ sung chất béo lành mạnh, vitamin A, D, E và khoáng chất như canxi, phốt pho để tăng cường hệ miễn dịch và hỗ trợ sức khỏe xương khớp. Các axit béo omega-3 và omega-6 trong công thức giúp cải thiện tình trạng da và lông, mang đến bộ lông bóng mượt. 
                            <br />Với thức ăn cho mèo giàu chất dinh dưỡng, bạn có thể yên tâm mang lại cho thú cưng một chế độ ăn uống lành mạnh, góp phần kéo dài tuổi thọ và cải thiện chất lượng cuộc sống của chúng. Hãy chọn sản phẩm này để chăm sóc sức khỏe cho mèo yêu của bạn!
                        </div>
                        <div className="w-[35%]">
                            <Image src={item.productThumbnail} width="500" height="400" alt="" />
                        </div>
                    </div>
                </div>
            ))}
            <div id="this-zone">
                <h1 className="text-[28px] font-[500]">SẢN PHẨM GỢI Ý</h1>
                <div>
                    <div>
                        <SuggestedProducts categoryId={data?.products[0]?.productCategory || ''} />
                    </div>
                </div>
                <div className="cursor"></div>
            </div>
        </div>
    );
}
