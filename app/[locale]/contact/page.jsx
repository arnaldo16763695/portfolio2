import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall, PhoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations('Contact')
  return (
    <section>
      <div className="container mx-auto">
        {/* text illustrations  */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary "></span>
              {t('say-hello')} 🖐
            </div>
            <h1 className="h1 max-w-md mb-8">{t('lest-work')}</h1>
            <p className="subtitle max-w-[400px]">
              {t('contact-description')}{" "}
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light     dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* info text & form   */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}

          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail  */}

            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>arnaldoespinoza1@hotmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Punto Fijo, Falcón, Venezuela.</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneIcon size={18} className="text-primary" />
              <div>+58 4144786040</div>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
