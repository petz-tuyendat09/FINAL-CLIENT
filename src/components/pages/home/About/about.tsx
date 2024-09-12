import { HeadphoneIcon, PawIcon, PaymentIcon, ReturnsIcon, TruckIcon } from "@/shared/ui/icons";
import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations('about');
    const products = [t('items.item1'), t('items.item2'), t('items.item3'), t('items.item4'), t('items.item5')];
    const services = [
        {
            icon: <TruckIcon color="red" width="25" />,
            title: t('freeShipping.title'),
            content: t('freeShipping.content')
        },
        {
            icon: <ReturnsIcon color="red" width="25" />,
            title: t('returns.title'),
            content: t('returns.content')
        },
        {
            icon: <PaymentIcon color="red" width="25" />,
            title: t('payment.title'),
            content: t('payment.content')
        },
        {
            icon: <HeadphoneIcon color="red" width="25" />,
            title: t('support.title'),
            content: t('support.content')
        }
    ]
    return (
        <div className="mt-[120px]">
            <div className="bg-peach px-[160px] py-[110px]">
                <div className="flex flex-row gap-[30px]">
                    <img src="./images/bg-about.webp" width="580px" />
                    <div>
                        <h1 className="text-[42px] leading-[54px] font-[900] text-[#3c3731]">{t('title')}</h1>
                        <div className="mt-[30px]"><img src="./images/bone-toy.svg" width="75px" /></div>
                        <h2 className="mt-[20px] text-[#958b7e] text-[18px] font-nunito">{t('desc')}</h2>
                        <p className="mt-[25px] text-[#958b7e] text-[17px] font-nunito">{t('selling')}</p>
                        <div className="flex flex-col gap-[20px] mt-[25px]">
                            {products.map((item, i) => (
                                <div className="flex flex-row items-center gap-[10px]" key={i}>
                                    <PawIcon width="22" color="#45c1c7" />
                                    <span className="text-[#958b7e] font-nunito">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mt-[80px]">
                    {services.map((item, i) => (
                        <div key={i} className="flex flex-row gap-[15px]">
                            <div className="bg-darkPeach w-[46px] h-[46px] rounded-[50%] flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <h1 className="text-[19px] font-[700] text-[#3c3731]">{item.title}</h1>
                                <p className="text-[14px] text-[#958b7e]">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}