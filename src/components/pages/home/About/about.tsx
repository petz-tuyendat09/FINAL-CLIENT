import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations('about');
    return (
        <div className="mt-[120px]">
            <div className="bg-peach px-[200px] py-[100px]">
                <div>
                    <img src="./images/bg-about.webp" width="600px" />
                    <div>
                        <h1>{t('title')}</h1>
                        <img src="./images/bone-toy.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}