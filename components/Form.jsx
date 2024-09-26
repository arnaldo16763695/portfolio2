"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder='Name' />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea  */}
      <div className="relative flex items-center">
        <Textarea  placeholder='Escribe tu mensaje' />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className='flex items-center max-w-[166px] gap-x-1'>Enviar
        <ArrowRightIcon size={20}/>
      </Button>
    
    </form>
  );
};

export default Form;
