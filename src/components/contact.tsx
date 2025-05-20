import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init("H7gTT_HYNPMcMEUK7");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formRef.current) return;
    
    try {
      const templateParams = {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
        to_email: 'jesusguerrapineda000@gmail.com'
      };
      
      const result = await emailjs.sendForm(
        'service_xixfqpp',
        'template_9q2cgy4',
        formRef.current,
        'H7gTT_HYNPMcMEUK7'
      );

      if (result.text === 'OK') {
        toast({
          title: t("contact.form.success"),
          description: t("contact.form.success"),
        });
        setFormData({ user_name: '', user_email: '', message: '' });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mt-48 -mr-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -mb-32 -ml-32 blur-3xl"></div>
      </div>
      
      <motion.div
        className="container-tight relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-center mb-4 relative inline-block">
            <span className="text-accent">{t("contact.title")}</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"></span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="transition-all duration-500 hover:translate-y-[-2px]">
                <Input
                  id="user_name"
                  name="user_name"
                  placeholder={t("contact.form.name")}
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="border-accent/20 focus:border-accent/50 transition-all"
                />
              </div>
              <div className="transition-all duration-500 hover:translate-y-[-2px]">
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder={t("contact.form.email")}
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="border-accent/20 focus:border-accent/50 transition-all"
                />
              </div>
              <div className="transition-all duration-500 hover:translate-y-[-2px]">
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.message")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[160px] border-accent/20 focus:border-accent/50 transition-all"
                />
              </div>
              {/* Hidden fields for the EmailJS template */}
              <input type="hidden" name="from_name" value={formData.user_name} />
              <input type="hidden" name="from_email" value={formData.user_email} />
              <input type="hidden" name="to_email" value="jesusguerrapineda000@gmail.com" />
              
              <Button
                type="submit"
                className="w-full relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                </span>
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-500">
                <h3 className="font-semibold text-lg mb-4">{t("contact.info.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <Mail className="w-5 h-5 mt-1 mr-3 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium">{t("contact.info.email")}</p>
                      <a href="mailto:jesusguerrapineda000@gmail.com" className="text-foreground hover:text-accent transition-colors">
                        jesusguerrapineda000@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <Phone className="w-5 h-5 mt-1 mr-3 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium">{t("contact.info.phone")}</p>
                      <a href="tel:+584246967674" className="text-foreground hover:text-accent transition-colors">
                        +57 302-409-4733
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-500">
                <h3 className="font-semibold text-lg mb-4">{t("contact.social.title")}</h3>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://www.linkedin.com/in/jesus-david-guerra-pineda-24a963273/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent group transition-colors"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/JesuGuerraP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent group transition-colors"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 group hover:border-accent/50"
                  onClick={() => window.open('/src/imagenes/Jesús david Guerra Pineda - CV (1).pdf', '_blank')}
                >
                  <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
                  <span className="group-hover:text-accent transition-colors">{t("about.download")}</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}