import Image from "next/image";
import Link from "next/link";
import heroPortrait from "../../public/rei-aliaj2.png";

import { ContactForm } from "@/components/contact-form";
import {
  ArrowUpRightIcon,
  BotIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  SparkIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  caseStudies,
  contactDetails,
  technicalServices,
  whyWorkWithMe,
} from "@/lib/site-data";

const heroHighlights = [
  "Shopify solutions & Design",
  "Custom apps and automation",
  "11+ years in web development",
] as const;

const aiAssistantFeatures = [
  "Responds in real time to questions about products, shipping, policies, and store information.",
  "Guides shoppers toward the right product and helps move them closer to purchase.",
  "Can be trained on your catalog, FAQs, collections, policies, and store-specific knowledge.",
  "Works as a dedicated product offer for Shopify stores that want smarter sales support.",
] as const;

const personalNotes = [
  {
    title: "Born in 1994",
    detail: "My path into web started early, and I have been working professionally since I was 18.",
  },
  {
    title: "Informatics background",
    detail: "I studied informatics, which shaped the way I think about systems, structure, and problem solving.",
  },
  {
    title: "Long Shopify focus",
    detail: "For many years I have been focused heavily on Shopify and ecommerce execution.",
  },
  {
    title: "Based in Tirana",
    detail: "I live in Tirana, Albania and work remotely with agencies, founders, and ecommerce teams.",
  },
  {
    title: "Family life",
    detail: "I am a husband and a father of two daughters, which keeps me grounded and focused.",
  },
  {
    title: "Freelance career",
    detail: "Most of my career has been built as a freelancer helping different agencies, clients, and growing stores.",
  },
] as const;

const footerContacts = [
  {
    label: "WhatsApp",
    value: contactDetails.whatsapp,
    href: contactDetails.whatsappHref,
    Icon: WhatsAppIcon,
  },
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    Icon: MailIcon,
  },
  {
    label: "Address",
    value: contactDetails.address,
    href: contactDetails.mapsHref,
    Icon: MapPinIcon,
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/rei-aliaj-28a951172",
    href: contactDetails.linkedin,
    Icon: LinkedInIcon,
  },
] as const;

export default function Home() {
  return (
    <main>
      <div className="landing-stage">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="seamless-sheen" />
          <div className="landing-fade" />
          <div className="ambient-orb ambient-orb-a left-[-6rem] top-[3rem] h-[14rem] w-[14rem] md:left-[6%] md:top-[8rem] md:h-[22rem] md:w-[22rem]" />
          <div className="ambient-orb ambient-orb-b right-[-5rem] top-[18rem] h-[12rem] w-[12rem] md:right-[8%] md:top-[18rem] md:h-[18rem] md:w-[18rem]" />
          <div className="ambient-orb ambient-orb-a left-[8%] top-[48rem] h-[12rem] w-[12rem] md:left-[12%] md:top-[46rem] md:h-[18rem] md:w-[18rem]" />
          <div className="ambient-orb ambient-orb-c right-[4%] top-[70rem] h-[14rem] w-[14rem] md:right-[10%] md:top-[72rem] md:h-[20rem] md:w-[20rem]" />
          <div className="ambient-orb ambient-orb-b left-[18%] top-[104rem] h-[13rem] w-[13rem] md:left-[24%] md:top-[108rem] md:h-[18rem] md:w-[18rem]" />
          <div className="ambient-orb ambient-orb-a right-[10%] top-[132rem] h-[11rem] w-[11rem] md:right-[16%] md:top-[136rem] md:h-[18rem] md:w-[18rem]" />
          <div className="ambient-orb ambient-orb-c left-[3%] top-[156rem] h-[10rem] w-[10rem] md:left-[8%] md:top-[160rem] md:h-[16rem] md:w-[16rem]" />
          <div className="ambient-orb ambient-orb-b right-[2%] top-[178rem] h-[11rem] w-[11rem] md:right-[6%] md:top-[184rem] md:h-[17rem] md:w-[17rem]" />
          <div className="ambient-orb ambient-orb-a left-[12%] top-[202rem] h-[10rem] w-[10rem] md:left-[18%] md:top-[208rem] md:h-[16rem] md:w-[16rem]" />
          <div className="ambient-orb ambient-orb-c right-[8%] top-[224rem] h-[12rem] w-[12rem] md:right-[14%] md:top-[230rem] md:h-[18rem] md:w-[18rem]" />
          <div className="ambient-orb ambient-orb-b left-[6%] top-[246rem] h-[10rem] w-[10rem] md:left-[12%] md:top-[252rem] md:h-[15rem] md:w-[15rem]" />
        </div>

      <header className="site-header px-6 pb-4 pt-6 md:px-10 md:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="font-display text-sm font-semibold uppercase tracking-[0.32em] text-white/88"
            >
              Rei Aliaj
            </Link>

            <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.3em] text-white/42 lg:flex">
              <a href="#services" className="transition-colors hover:text-white/84">
                Services
              </a>
              <a
                href="#ai-assistant"
                className="transition-colors hover:text-white/84"
              >
                AI Assistant
              </a>
              <a href="#work" className="transition-colors hover:text-white/84">
                Case Studies
              </a>
              <a href="#about" className="transition-colors hover:text-white/84">
                About Me
              </a>
              <a href="#contact" className="transition-colors hover:text-white/84">
                Contact
              </a>
            </nav>

    
          </div>

          <div className="mt-5 flex flex-wrap gap-3 lg:hidden">
            {[
              ["Services", "#services"],
              ["AI Assistant", "#ai-assistant"],
              ["Work", "#work"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="ghost-pill rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.26em] text-white/62 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative z-10 px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-10"
      >
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(225,230,242,0.22),transparent_70%)] blur-3xl md:h-[26rem] md:w-[26rem]" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <div className="relative z-10">
            <p className="eyebrow fade-in-1">Shopify Technical Partner</p>
            <h1 className="fade-in-2 mt-6 max-w-3xl font-display text-[clamp(3.3rem,8vw,6.8rem)] leading-[0.92] tracking-[-0.06em] text-white">
              Hello I am
              <span className="block">Rei Aliaj</span>
            </h1>
            <p className="fade-in-3 mt-7 max-w-xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              I’m a Shopify developer and designer with several years of experience helping stores grow and optimize their performance.
            </p>

            <div className="fade-in-4 mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#work" className="button-primary">
                View My Work
              </a>
              <a href="#contact" className="button-secondary">
                Get in Touch
              </a>
            </div>

            <div className="fade-in-4 mt-14 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="ghost-note rounded-[20px] px-4 py-4 text-sm leading-7 text-[var(--muted-strong)]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,220,234,0.24),transparent_68%)] blur-[90px]" />
            <div className="hero-frame relative mx-auto overflow-hidden rounded-[32px] px-6 pt-10 sm:px-10">
 
              <div className="relative z-10 mx-auto max-w-[38rem]">
                <Image
                  src={heroPortrait}
                  alt="Portrait of Rei Aliaj"
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="hero-portrait h-auto w-full object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell relative z-10 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">01 / Services</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Shopify Services
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
              From design and UX to custom apps, SEO, and full rebuilds, I help
              Shopify stores improve how they look, work, and scale over time.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {technicalServices.map((service) => (
              <article
                key={service.title}
                className="glass-panel service-card flex min-h-[19rem] flex-col rounded-[28px] p-6 sm:p-7"
              >
                <p className="eyebrow">{service.label}</p>
                <h3 className="mt-4 font-display text-[1.7rem] leading-tight tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--muted-strong)]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/72" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ai-assistant"
        className="section-shell relative z-10 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center">
          <div>
            <div className="ghost-pill inline-flex items-center gap-3 rounded-full px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/58">
              <BotIcon className="h-4 w-4" />
              AI Sales Assistant
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
              I Created an AI sales assistant built specifically for Shopify stores
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
              This is a dedicated product I offer: an advanced AI chat assistant
              that understands the store, answers customer questions in real
              time, and helps people move toward the right purchase with less
              friction.
            </p>

            <div className="mt-8 space-y-4">
              {aiAssistantFeatures.map((feature) => (
                <div
                  key={feature}
                  className="ghost-note flex items-start gap-3 rounded-[22px] px-4 py-4 text-sm leading-7 text-[var(--muted-strong)]"
                >
                  <SparkIcon className="mt-1 h-4 w-4 shrink-0 text-white/72" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel overflow-hidden rounded-[32px] p-4 sm:p-5">
            <div className="ghost-note rounded-[24px] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/42">
                    Live store assistant
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-[-0.04em] text-white">
                    Store-trained sales chat
                  </h3>
                </div>
                <div className="rounded-full border border-emerald-200/18 bg-emerald-200/8 px-3 py-1 text-[0.68rem] uppercase tracking-[0.26em] text-emerald-100/70">
                  Real time
                </div>
              </div>

              <div className="space-y-4 py-6">
                <div className="ghost-chat-strong ml-auto max-w-[85%] rounded-[22px] rounded-br-md px-4 py-3 text-sm leading-7 text-white">
                  I need a product for dry skin and I want something under 200$.
                </div>
                <div className="ghost-chat max-w-[92%] rounded-[22px] rounded-bl-md px-4 py-3 text-sm leading-7 text-[var(--muted-strong)]">
                  I can help with that. Here is our collection for dryskin
                  www.skincare.com/dryskin/
                </div>
                <div className="ghost-chat-strong ml-auto max-w-[82%] rounded-[22px] rounded-br-md px-4 py-3 text-sm leading-7 text-white">
                  Which one of the products you suggest ?
                </div>
                <div className="ghost-chat max-w-[92%] rounded-[22px] rounded-bl-md px-4 py-3 text-sm leading-7 text-[var(--muted-strong)]">
                  Yeah i would go for NutriCare is the best rated version in our store
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="ghost-note rounded-[20px] p-4">
                  <p className="eyebrow">Use cases</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                    Product guidance, pre-sale support, objections, and
                    purchasing assistance.
                  </p>
                </div>
                <div className="ghost-note rounded-[20px] p-4">
                  <p className="eyebrow">Setup</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                    Store-aware logic, training data preparation, and technical
                    implementation for Shopify.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-shell relative z-10 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">02 / Case Studies</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                My Selected Work
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
              I have created and worked on 80+ websites across my freelance
              career in different technologies. Here are two Shopify projects
              that show the kind of technical and operational work I do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {caseStudies.map((project) => (
              <article
                key={project.slug}
                className="glass-panel project-card overflow-hidden rounded-[30px] p-4 sm:p-5"
              >
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-transparent">
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} homepage`}
                    width={1440}
                    height={1080}
                    className="h-auto w-full"
                  />
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_13rem]">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {project.cardResult}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <div className="ghost-note rounded-[20px] p-4">
                      <p className="eyebrow">Current Revenue</p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {project.revenue}
                      </p>
                    </div>
                    <div className="ghost-note rounded-[20px] p-4">
                      <p className="eyebrow">Delivery</p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {project.timeframe}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-white/48 transition-colors hover:text-white"
                  >
                    Visit live store
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-white transition-colors hover:text-[var(--muted-strong)]"
                  >
                    View case study
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="glass-panel mt-8 rounded-[28px] p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.3em] text-white/38">
              Career snapshot
            </p>
            <p className="mt-4 max-w-4xl font-display text-3xl leading-tight tracking-[-0.04em] text-white md:text-[2.3rem]">
              80+ websites delivered across freelance work for agencies, brands,
              and direct clients using Shopify and other web technologies.
            </p>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="section-shell relative z-10 px-6 py-20 pb-28 md:px-10 md:py-24 md:pb-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <p className="eyebrow">03 / Why Work With Me</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
              Senior technical support without agency layers
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--muted)]">
              I work directly with brands and agencies that need someone who can
              understand the technical side, move fast, communicate clearly, and
              still keep pricing practical and affordable.
            </p>
            <div className="ghost-note mt-8 rounded-[24px] p-5">
              <p className="eyebrow">Affordable pricing matters</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                Because I work as a freelancer, you get direct access to the
                person doing the work, without paying for extra layers that slow
                projects down.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyWorkWithMe.map((item, index) => (
              <div
                key={item.title}
                className={`glass-panel rounded-[24px] p-5 ${
                  index === whyWorkWithMe.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="ghost-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm tracking-[0.2em] text-white/82">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell relative z-10 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="glass-panel rounded-[32px] p-7 sm:p-9">
            <p className="eyebrow">04 / About Me</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
              A more personal note
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>
                I am Rei Aliaj. I was born in 1994 and I studied informatics. I
                started working in the website area when I was 18 years old, and
                for a long time now I have been focused heavily on Shopify.
              </p>
              <p>
                Most of my career has been built through freelance work, helping
                different agencies, clients, and ecommerce businesses solve real
                problems and launch stores that are easier to manage and grow.
              </p>
              <p>
                I live in Tirana, Albania. I am a husband and a father of two
                daughters, and that family life is a big part of who I am. It
                keeps me practical, responsible, and focused on doing solid work
                that actually helps people.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {personalNotes.map((item) => (
              <div
                key={item.title}
                className="ghost-note rounded-[24px] p-5"
              >
                <p className="eyebrow">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell relative z-10 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
            <div className="glass-panel rounded-[30px] p-6 sm:p-7">
              <p className="eyebrow">05 / Get In Touch</p>
              <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Let&apos;s improve your Shopify store
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
                If you need technical Shopify help, custom solutions, app work,
                or a reliable partner for ongoing improvements, send me the
                details and I will get back to you.
              </p>

              <div className="mt-8 space-y-3">
                {footerContacts.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="ghost-note flex items-center gap-4 rounded-[22px] px-4 py-4 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="ghost-icon flex h-11 w-11 items-center justify-center rounded-full text-white/80">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm leading-7 text-[var(--muted-strong)]">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm
              email={contactDetails.email}
              whatsappNumber={contactDetails.whatsapp}
              whatsappHref={contactDetails.whatsappHref}
            />
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 pb-10 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl border-t border-white/8 pt-8">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.32em] text-white/78">
                Rei Aliaj
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Shopify technical solutions, apps, automation, storefront
                engineering, and AI sales assistant setup.
              </p>
            </div>
            <p className="text-sm text-[var(--muted)]">
              (c) 2026 Rei Aliaj. All rights reserved.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {footerContacts.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="ghost-note flex items-center gap-4 rounded-[22px] px-4 py-4 transition-colors hover:bg-white/[0.02]"
              >
                <span className="ghost-icon flex h-11 w-11 items-center justify-center rounded-full text-white/80">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm leading-7 text-[var(--muted-strong)]">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
