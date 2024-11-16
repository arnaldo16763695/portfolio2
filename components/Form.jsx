"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

const Form = () => {
  const t = useTranslations('Form-contact')
  return (
    <form className="flex flex-col gap-y-4">
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder={t('name')} />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder={t('email')} />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea  */}
      <div className="relative flex items-center">
        <Textarea  placeholder={t('send-your-email')} />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className='flex items-center max-w-[166px] gap-x-1'>{t('send')}
        <ArrowRightIcon size={20}/>
      </Button>
    
    </form>
  );
};

export default Form;
