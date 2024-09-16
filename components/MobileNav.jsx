import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { AlignJustify } from 'lucide-react';
import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import Socials from '@/components//Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav className='' linkStyles='text-2xl' containerStyles='flex flex-col items-center gap-y-6' />
          </div>
            <Socials containerStyles='flex gap-x-4'  iconsStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav