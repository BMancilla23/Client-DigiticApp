import { BreadcrumbCustom } from "@/components/BreadcrumbCustom";
import { Meta } from "@/components/Meta";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const form = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      label: "Av. Principal 123, Lima, Perú",
    },
    {
      icon: PhoneIcon,
      label: "+51 999 999 999",
    },
    {
      icon: MailIcon,
      label: "contacto@example.com",
    },
    {
      icon: ClockIcon,
      label: "Lunes a Viernes: 9:00 - 18:00",
    },
  ];

  return (
    <>
      <Meta title="Contacto" />

      <section className="bg-white">
        <div className="container mx-auto flex items-center h-16">
          <BreadcrumbCustom
            items={[
              {
                label: "Inicio",
                href: "/",
              },
              {
                label: "Contacto",
                href: "/contact",
              },
            ]}
          />
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div className="flex flex-col gap-4 px-2">
              <h2 className="text-xl md:text-2xl font-bold">Contactanos</h2>

              <Form {...form}>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Nombre" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de teléfono</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Número de teléfono"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comentario</FormLabel>
                        <FormControl>
                          <Textarea
                            className="resize-none h-24"
                            placeholder="Comentario"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg">
                    Enviar
                  </Button>
                </form>
              </Form>
            </div>
            <div className="flex flex-col gap-4 px-2">
              <h2 className="text-xl md:text-2xl font-bold">
                Información de contacto
              </h2>
              {contactInfo.map(({ icon: Icon, label }, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div className="bg-gray-100 h-10 w-10 flex items-center justify-center text-gray-500 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            Encuéntranos en Google Maps
          </h2>
          <div className="max-w-[1000px] sm:h-[400px] lg:h-[200px] aspect-w-4 aspect-h-4 sm:aspect-w-16 sm:aspect-h-6 relative bg-gray-100 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27873.23171654137!2d-77.02230297246358!3d-11.989291273485453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce5e584063b5%3A0x426abbb513712540!2sMercado%20COVIDA!5e0!3m2!1ses!2spe!4v1731434425508!5m2!1ses!2spe"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
