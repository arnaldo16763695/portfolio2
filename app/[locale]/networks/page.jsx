import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import {
  Cable,
  Wifi,
  Router,
  Server,
  ShieldCheck,
  Wrench,
  Home,
  Building2,
  Award,
  Briefcase,
  Code2,
  Send,
  MapPin,
} from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { Link, getPathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NetworkDiagram from "@/components/NetworkDiagram";
import { whatsappLink } from "@/app/lib/data";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Networks.meta" });
  const path = (l) => getPathname({ locale: l, href: "/networks" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: path(locale),
      languages: { en: path("en"), es: path("es"), fr: path("fr") },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: path(locale),
    },
  };
}

const services = [
  { key: "cabling", icon: Cable },
  { key: "wifi", icon: Wifi },
  { key: "routing", icon: Router },
  { key: "servers", icon: Server },
  { key: "security", icon: ShieldCheck },
  { key: "support", icon: Wrench },
];

const audiences = [
  { key: "homes", icon: Home },
  { key: "business", icon: Building2 },
];

const steps = ["diagnosis", "proposal", "install", "support"];

const reasons = [
  { key: "vit", icon: Briefcase },
  { key: "ccna", icon: Award },
  { key: "dev", icon: Code2 },
];

const NetworksPage = () => {
  const t = useTranslations("Networks");
  const whatsappHref = whatsappLink(t("whatsapp-message"));

  return (
    <section>
      {/* hero  */}
      <div className="container mx-auto pt-12 xl:pt-20 mb-24 xl:mb-32">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          <div className="text-center xl:text-left">
            <div className="flex items-center justify-center xl:justify-start gap-x-4 text-primary text-sm uppercase font-semibold tracking-[4px] mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              {t("hero.eyebrow")}
            </div>
            <h1 className="h1 xl:text-[56px] xl:leading-[64px] mb-6 max-w-[600px] mx-auto xl:mx-0">{t("hero.title")}</h1>
            <p className="subtitle max-w-[520px] mx-auto xl:mx-0">{t("hero.subtitle")}</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center xl:justify-start mb-10">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button className="gap-x-2">{t("hero.whatsapp")}<RiWhatsappFill size={20} /></Button>
              </a>
              <Link href="/contact">
                <Button variant="secondary" className="gap-x-2">{t("hero.cta")}<Send size={18} /></Button>
              </Link>
            </div>
            {/* credenciales  */}
            <ul className="flex flex-wrap gap-2 justify-center xl:justify-start">
              {["network-head", "ccna", "it-years", "coverage"].map((key) => (
                <li key={key} className="text-sm font-medium px-3 py-1 rounded-full bg-tertiary dark:bg-secondary/40 border">
                  {t(`hero.credentials.${key}`)}
                </li>
              ))}
            </ul>
          </div>
          {/* diagrama  */}
          <div className="flex justify-center">
            <NetworkDiagram
              labels={{
                title: t("diagram.title"),
                server: t("diagram.server"),
                pc: t("diagram.pc"),
                wifi: t("diagram.wifi"),
                camera: t("diagram.camera"),
              }}
            />
          </div>
        </div>
      </div>

      {/* servicios  */}
      <div className="container mx-auto mb-24 xl:mb-32">
        <h2 className="section-title mb-4 text-center mx-auto">{t("services.title")}</h2>
        <p className="subtitle text-center max-w-[600px] mx-auto mb-12">{t("services.subtitle")}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, icon: Icon }) => (
            <Card key={key} className="p-6">
              <CardHeader className="p-0 mb-4">
                <div className="w-14 h-14 rounded-xl bg-tertiary dark:bg-secondary/40 flex items-center justify-center text-primary mb-4">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <CardTitle className="text-xl">{t(`services.items.${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base">{t(`services.items.${key}.description`)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10">
          {t("services.more")}{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
            {t("services.more-link")}
          </a>
        </p>
      </div>

      {/* para quién  */}
      <div className="py-24 bg-tertiary dark:bg-secondary/40 mb-24 xl:mb-32">
        <div className="container mx-auto">
          <h2 className="section-title mb-12 text-center mx-auto">{t("audience.title")}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {audiences.map(({ key, icon: Icon }) => (
              <Card key={key} className="p-8 flex gap-x-6 items-start">
                <Icon size={40} strokeWidth={1.2} className="text-primary shrink-0" />
                <div>
                  <h3 className="h4 mb-2">{t(`audience.${key}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`audience.${key}.description`)}</p>
                </div>
              </Card>
            ))}
          </div>
          {/* zona de atención  */}
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left max-w-[1000px] mx-auto mt-12">
            <MapPin size={32} strokeWidth={1.5} className="text-primary shrink-0" />
            <div>
              <h3 className="h4 mb-2">{t("coverage.title")}</h3>
              <p className="text-muted-foreground">{t("coverage.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* proceso  */}
      <div className="container mx-auto mb-24 xl:mb-32">
        <h2 className="section-title mb-12 text-center mx-auto">{t("process.title")}</h2>
        <ol className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((key, index) => (
            <li key={key} className="relative pl-16">
              <span className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                {index + 1}
              </span>
              <h3 className="h4 mb-2">{t(`process.steps.${key}.title`)}</h3>
              <p className="text-muted-foreground">{t(`process.steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* por qué conmigo  */}
      <div className="container mx-auto mb-24 xl:mb-32">
        <h2 className="section-title mb-12 text-center mx-auto">{t("why.title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map(({ key, icon: Icon }) => (
            <div key={key} className="flex flex-col gap-y-3 text-center md:text-left items-center md:items-start">
              <Icon size={32} strokeWidth={1.5} className="text-primary" />
              <h3 className="h4">{t(`why.items.${key}.title`)}</h3>
              <p className="text-muted-foreground">{t(`why.items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* cta  */}
      <div className="py-24 bg-tertiary dark:bg-secondary/40">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="h2 max-w-xl mb-4">{t("cta.title")}</h2>
          <p className="subtitle max-w-xl">{t("cta.description")}</p>
          <div className="flex flex-col md:flex-row gap-3">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button className="gap-x-2">{t("hero.whatsapp")}<RiWhatsappFill size={20} /></Button>
            </a>
            <Link href="/contact"><Button variant="secondary">{t("cta.button")}</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworksPage;
