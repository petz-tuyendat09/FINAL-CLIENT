import { MenuIcon } from '@/shared/ui/icons/MenuIcon';
import { useTranslations } from 'next-intl';
import './Header.css';
import { CartIcon } from '@/shared/ui/icons/CartIcon';
import { UserIcon } from '@/shared/ui/icons/UserIcon';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { CSelect } from '@/shared/ui/CSelect/CSelect';
export default function Header() {
    const t = useTranslations('nav');
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const languages = [
        {
            value: 'en',
            label: (
                <div className="flex flex-row gap-[10px] items-center">
                    <img src='./images/american-flag.webp' width="20px" height="15px" />
                    <span>EN</span>
                </div>
            )
        },
        {
            value: 'vi',
            label: (
                <div className="flex flex-row gap-[10px] items-center">
                    <img src='./images/vietnam-flag.webp' width="20px" height="15px" />
                    <span>VI</span>
                </div>
            )
        }
    ]

    const handleLng = (value: any) => {
        const newLocale = value;

        if (!router || !pathname) {
            return;
        }
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length > 0) {
            segments[0] = newLocale;
        } else {
            segments.push(newLocale);
        }

        const newPathname = `/${segments.join('/')}`;
        router.push(newPathname);
    }
    return (
        <>
            <div className='px-[30px] py-[10px]'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <img src='./images/logo.png' width='130px' />
                    </div>
                    <div className='flex flex-row gap-[10px] absolute right-[30px]'>
                        <div className='flex flex-row gap-[10px] mt-[5px]'>
                            <div className='mt-[5px]'>
                                <CSelect options={languages} handleChange={handleLng} />
                            </div>
                            <div className='border border-black p-[10px] w-[40px] h-[40px] flex items-center justify-center rounded-[50%] menu-item-hover'>
                                <UserIcon />
                            </div>
                            <div className='border border-black p-[12px] w-[40px] h-[40px] flex items-center justify-center rounded-[50%] menu-item-hover'>
                                <CartIcon />
                            </div>
                        </div>
                        <div className={`bg-black rounded-[40px] transition-all duration-300 ease-in-out flex flex-col items-center ${isMenuOpen ? 'w-[200px] h-[200px] px-[20px] py-[25px]' : 'w-[140px] h-[55px] justify-center menu-item-hover'}`}>
                            <div className={`flex flex-row items-center justify-between ${isMenuOpen ? 'w-[150px]' : 'w-[140px] h-[55px] p-[12px]'}`}>
                                <button className='bg-white py-[5px] rounded-[40px] px-[15px] font-[600]' onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
                                <MenuIcon className="ml-[15px]" />
                            </div>
                            {
                                isMenuOpen && 
                                <ul className='text-white text-left w-[150px] text-[22px] mt-[20px] font-[500] px-[10px]'>
                                    <li><Link href="" className='hover:text-[#aa8453]'>Home</Link></li>
                                    <li><Link href="" className='hover:text-[#aa8453]'>Shop</Link></li>
                                    <li><Link href="" className='hover:text-[#aa8453]'>Adopted</Link></li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}