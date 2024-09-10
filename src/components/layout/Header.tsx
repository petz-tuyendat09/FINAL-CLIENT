import { useTranslations } from 'next-intl';
export default function Header () {
    const t = useTranslations('nav');
    return (
        <>{t('title')}</>
    );
}