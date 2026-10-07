'use client'
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
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
    const pathname = usePathname();
    const localActive = useLocale();

    // cambia el idioma manteniendo la página actual
    const onSelectChange = (nextLocale) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        })
    }

    return (
        <Select defaultValue={localActive} onValueChange={onSelectChange} disabled={isPending}>
            <SelectTrigger className="w-[60px]" aria-label="Language">
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
