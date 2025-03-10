'use client'

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const LocalSwicher = () => {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const onSelectChange = (e) => {
        // console.log(e)
        const nextLocale = e;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        })
    }
    return (

        // <select defaultValue={localActive} className="rounded w-12" name="" id="" onChange={onSelectChange}>
        //     <option value="en">En</option>
        //     <option value="es">Es</option>
        //     <option value="fr">Fr</option>
        // </select>

        <Select defaultValue={localActive} onValueChange={onSelectChange}>
            <SelectTrigger className="w-[60px]">
                <SelectValue placeholder={localActive} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">En</SelectItem>
                <SelectItem value="es">Es</SelectItem>
                <SelectItem value="fr">Fr</SelectItem>
            </SelectContent>
        </Select>

    )
}

export default LocalSwicher