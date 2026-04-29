import { useEffect, useMemo, useState } from "react";

const projects = [
  { src: "/images/kitchen1.jpg", title: "Kitchen Electrical Installation", cat: "Domestic" },
  { src: "/images/kitchen2.jpg", title: "Under Cabinet Lighting", cat: "Lighting" },
  { src: "/images/kitchen3.jpg", title: "Full Kitchen Rewire", cat: "Domestic" },
  { src: "/images/kitchen4.jpg", title: "Finished Kitchen Lighting", cat: "Interior" },
  { src: "/images/rgb-controller.jpg", title: "RGB Smart Lighting Control", cat: "Smart Systems" },
  { src: "/images/led-drivers.jpg", title: "LED Driver Installation Setup", cat: "Electrical" },
  { src: "/images/led-wiring.jpg", title: "LED Control System Wiring", cat: "Electrical" },
  { src: "/images/sabre-van.jpg", title: "On-Site Project – Cotswolds", cat: "Commercial" },
  { src: "/images/server-rack.jpg", title: "Home Network & AV Rack Install", cat: "Smart Home" },
  { src: "/images/ev1.jpg", title: "Garden EV Charger Install", cat: "EV Charging" },
  { src: "/images/ev2.jpg", title: "Wall Mounted EV Charger", cat: "EV Charging" },
  { src: "/images/kitchen-finish.jpg", title: "Premium Kitchen Lighting Finish", cat: "Interior" },
  { src: "/images/stairs-led.jpg", title: "LED Stair Lighting", cat: "Lighting" },
  { src: "/images/driveway-ev.jpg", title: "Driveway EV Charging Setup", cat: "EV Charging" },
  { src: "/images/cylinder-install.jpg", title: "Hot Water Cylinder Electrical", cat: "Electrical" },
  { src: "/images/outdoor-install.jpg", title: "External Electrical Install", cat: "Commercial" },
  { src: "/images/shoe-lighting.jpg", title: "Bespoke LED Joinery Lighting", cat: "Interior" },
  { src: "/images/feature-ceiling.jpg", title: "LED Feature Ceiling Design", cat: "Lighting" },
  { src: "/images/garden-room.jpg", title: "Garden Room Lighting & Power", cat: "Domestic" },
  { src: "/images/landscape-lighting.jpg", title: "Landscape & Garden Lighting", cat: "Outdoor" }
];

const services = [
  {
    slug: "domestic",
    title: "Domestic",
    text: "Reliable electrical work for homes, extensions, kitchens, garden rooms and property upgrades.",
    detail: "Sabre Electrical delivers complete domestic electrical services including new installations, upgrades, consumer unit replacements, kitchen and extension wiring, garden rooms, outdoor power and lighting. We work closely with homeowners, builders and designers to ensure every installation is safe, compliant and finished to a high standard with minimal disruption."
  },
  {
    slug: "commercial",
    title: "Commercial",
    text: "Professional electrical installations, maintenance and support for commercial premises.",
    detail: "We support businesses with full electrical installations, maintenance contracts, lighting upgrades, emergency repairs and compliance testing. From offices and retail to workshops and hospitality, we provide dependable electrical solutions designed to keep your business running safely and efficiently."
  },
  {
    slug: "rewires",
    title: "Rewires",
    text: "Full and partial rewires completed neatly, safely and to current regulations.",
    detail: "Our rewire services cover full property rewires, partial upgrades and modernisation of outdated wiring systems. We carefully plan every project to reduce disruption while delivering safe, future-proof installations that meet current regulations and improve reliability throughout your property."
  },
  {
    slug: "lighting",
    title: "Lighting",
    text: "Interior, exterior, garden and feature lighting designed and installed with a premium finish.",
    detail: "We design and install high-quality lighting solutions including feature lighting, LED strip systems, garden and landscape lighting, security lighting and smart controls. Every installation is tailored to enhance your space while delivering efficiency, durability and a premium finish."
  },
  {
    slug: "eicrs",
    title: "EICR's",
    text: "Electrical Installation Condition Reports for landlords, homeowners and commercial properties.",
    detail: "Our EICR services provide a full assessment of your electrical installation to identify defects, wear and non-compliance. Ideal for landlords, homeowners and businesses, we deliver clear reports and practical recommendations to ensure your property remains safe and legally compliant."
  },
  {
    slug: "inspection-testing",
    title: "Inspection and testing",
    text: "Testing, fault finding and certification to keep your property safe and compliant.",
    detail: "We carry out detailed inspection and testing services including fault finding, certification, periodic inspections and system checks. Whether for safety, compliance or troubleshooting, we provide accurate diagnostics and clear solutions."
  },
  {
    slug: "emergency-work",
    title: "Emergency work",
    text: "Responsive electrical fault finding and urgent repair work when you need support quickly.",
    detail: "Our emergency call-out service covers urgent faults such as power loss, tripping circuits, damaged wiring and unsafe installations. We respond quickly to diagnose issues and restore safety and functionality as efficiently as possible."
  }
];

const renewables = [
  {
    slug: "solar-pv",
    title: "Solar PV",
    text: "Solar PV installations and renewable energy solutions for homes and businesses.",
    detail: "We design and install solar PV systems to help reduce energy costs and reliance on the grid. Our solutions are tailored to your property, ensuring optimal performance, clean installation and long-term efficiency for both residential and commercial projects."
  },
  {
    slug: "ev-charging",
    title: "EV Charging",
    text: "Smart electric vehicle charger installations for domestic driveways and commercial sites.",
    detail: "We install EV charging points for homes and businesses, including smart chargers with app control, load balancing and future-ready systems. Every installation is carried out safely, neatly and positioned for practical everyday use."
  }
];

const reviews = [
  { name: "Google Review", text: "Excellent service, punctual and highly professional." },
  { name: "Google Review", text: "Top quality workmanship and great communication." },
  { name: "Google Review", text: "Would highly recommend Sabre Electrical." }
];

const serviceAreas = ["Cheltenham", "Gloucester", "Cotswolds", "Worcestershire", "Warwickshire", "Herefordshire", "Gloucestershire"];
const allPages = [...services, ...renewables];
const pageLookup = Object.fromEntries(allPages.map((item) => [item.slug, item]));
const baseUrl = "https://www.sabreelectrical.co.uk";

function getInitialPage() {
  const hash = window.location.hash.replace("#", "").replace("/", "");
  return pageLookup[hash] ? hash : "home";
}

export default function SabreElectricalWebsite() {
  const [page, setPage] = useState(getInitialPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPage = useMemo(() => pageLookup[page] || null, [page]);

  useEffect(() => {
    const title = currentPage ? `${currentPage.title} | Sabre Electrical Ltd` : "Sabre Electrical Ltd | Electricians & Renewables";
    const description = currentPage ? currentPage.text : "Premium domestic, commercial and renewable electrical services across Gloucestershire, Worcestershire, Warwickshire and beyond.";
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentPage ? `${baseUrl}/#/${currentPage.slug}` : baseUrl);
  }, [currentPage]);

  useEffect(() => {
    const onHashChange = () => setPage(getInitialPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goTo = (target) => {
    setMenuOpen(false);
    if (target === "home") {
      window.location.hash = "";
      setPage("home");
    } else {
      window.location.hash = `/${target}`;
      setPage(target);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage) {
    return (
      <div className="font-sans text-gray-900 bg-white min-h-screen">
        <Header goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-10 md:p-20">
            <div className="max-w-5xl mx-auto">
              <button type="button" onClick={() => goTo("home")} className="mb-8 px-5 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20">
                ← Back to Home
              </button>
              <p className="uppercase tracking-[0.3em] text-sm mb-3 text-orange-400">Sabre Electrical Services</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">{currentPage.title}</h1>
              <p className="text-xl text-white/80 max-w-3xl">{currentPage.detail}</p>
            </div>
          </section>

          <section className="max-w-6xl mx-auto p-10 md:p-20 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-6">Professional {currentPage.title} Services</h2>
              <p className="text-lg text-gray-600 mb-6">We combine careful planning, tidy workmanship and clear communication so every job is completed safely and professionally.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Fully qualified", "Clean workmanship", "Clear communication", "Reliable support"].map((item) => (
                  <div key={item} className="p-5 rounded-2xl border shadow-sm">✓ {item}</div>
                ))}
              </div>
            </div>
            <aside className="bg-gray-100 p-8 rounded-3xl shadow-xl h-fit">
              <h3 className="text-2xl font-semibold mb-4">Request a Quote</h3>
              <p className="text-gray-600 mb-6">Speak to Sabre Electrical about {currentPage.title.toLowerCase()}.</p>
              <a href="mailto:hello@sabreelectrical.co.uk" className="block w-full py-3 rounded-2xl bg-gray-900 text-white font-semibold text-center">Email Us</a>
              <a href="tel:01242350994" className="block w-full py-3 rounded-2xl border border-gray-900 mt-3 font-semibold text-center">Call 01242 350 994</a>
            </aside>
          </section>

          <section className="bg-gray-100 p-10 md:p-20">
            <div className="max-w-6xl mx-auto">
              <SectionHeading eyebrow="Related Services" title="Explore More Services" text="Browse our other electrical and renewable services." />
              <div className="grid md:grid-cols-3 gap-6">
                {allPages.filter((item) => item.slug !== currentPage.slug).slice(0, 6).map((item) => (
                  <button key={item.slug} type="button" onClick={() => goTo(item.slug)} className="p-6 rounded-3xl bg-white border shadow text-left hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section id="home" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-10 md:p-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-3 text-orange-400">Trusted Electrical Specialists</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Sabre Electrical Ltd</h1>
            <p className="text-lg opacity-90 mb-8">Premium electrical and renewable energy services across Gloucestershire, Worcestershire, Warwickshire and beyond.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-gray-900 rounded-2xl font-semibold shadow text-center">Get a Quote</a>
              <a href="tel:01242350994" className="px-6 py-3 border border-white rounded-2xl text-center">Call 01242 350 994</a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-white/90">
              <li>✓ Family-run trusted business</li>
              <li>✓ Domestic, commercial and renewables specialists</li>
              <li>✓ Rewires, lighting, EICRs and testing</li>
              <li>✓ Solar PV and EV charging solutions</li>
              <li>✓ Clean professional workmanship</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 md:px-20 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Metric value="10+" label="Years Experience" />
          <Metric value="1000+" label="Projects Completed" />
          <Metric value="5★" label="Rated Service" />
        </div>
      </section>

      <section id="about" className="bg-white p-10 md:p-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-orange-600 font-semibold mb-3">About Sabre Electrical</p>
            <h2 className="text-4xl font-bold mb-6">A Trusted Family-Run Electrical Company</h2>
            <p className="text-lg mb-4">Sabre Electrical Ltd is a trusted, family-run electrical company delivering high-quality electrical services across Gloucestershire, Worcestershire, Warwickshire, Herefordshire and the wider Cotswolds.</p>
            <p className="text-gray-600 mb-4">Founded and operated with a strong focus on reliability, professionalism and attention to detail, we provide tailored electrical solutions for both domestic and commercial clients. Every project we undertake is approached with care, precision and a commitment to achieving the highest possible standards.</p>
            <p className="text-gray-600 mb-4">With years of hands-on industry experience, we understand the importance of delivering work that is not only technically sound but also carried out with minimal disruption and clear communication throughout.</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-600 mb-4">We believe great service goes beyond just completing the job. From the initial enquiry through to completion, we prioritise clear communication, punctuality and respect for your property.</p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Honest and transparent advice</li>
              <li>✓ Clean, tidy and organised workmanship</li>
              <li>✓ Reliable timelines and clear updates</li>
              <li>✓ Friendly, professional service</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Quality & Compliance</h3>
            <p className="text-gray-600 mb-4">Sabre Electrical is a NAPIT registered company, demonstrating compliance with industry regulations and recognised standards. This ensures that all work is carried out safely, correctly and in line with current electrical regulations.</p>
            <p className="text-gray-600">We also maintain the appropriate insurances and processes to provide complete peace of mind on every project.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Complete Electrical Services</h3>
            <p className="text-gray-600 mb-4">We provide a full range of electrical services including installations, rewires, lighting, inspection and testing, fault finding, maintenance and renewable energy solutions such as Solar PV and EV charging.</p>
            <p className="text-gray-600 mb-4">No job is too big or too small, and we work with a trusted network of suppliers and partners to deliver projects of all sizes efficiently and professionally.</p>
            <p className="text-gray-600">Whether you are upgrading your home, managing a commercial property or investing in renewable energy, Sabre Electrical is here to provide dependable, high-quality electrical solutions.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Built on Trust, Quality and Reputation</h3>
          <p className="text-gray-600">As a family-run business, we take pride in building long-term relationships with our clients. We treat every property with respect, keep our workspace clean and ensure every job is completed to a standard we would expect in our own homes.</p>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto p-10 md:p-20">
        <SectionHeading eyebrow="Electrical Services" title="Our Services" text="Choose an individual service to view more details." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <button key={service.slug} type="button" onClick={() => goTo(service.slug)} className="p-8 rounded-3xl shadow-xl border hover:shadow-2xl transition block text-left bg-white">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section id="renewables" className="bg-gray-900 text-white p-10 md:p-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Renewables" title="Solar PV & EV Charging" text="Modern renewable energy services for efficient homes, future-ready businesses and electric vehicle owners." dark />
          <div className="grid md:grid-cols-2 gap-6">
            {renewables.map((item) => (
              <button key={item.slug} type="button" onClick={() => goTo(item.slug)} className="p-8 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/15 transition block text-left">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/75">{item.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-10 md:p-20">
        <h2 className="text-4xl font-bold text-center mb-10">Service Areas</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {serviceAreas.map((area) => (
            <div key={area} className="p-5 rounded-2xl border shadow-sm">{area}</div>
          ))}
        </div>
      </section>

      <section className="bg-white p-10 md:p-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Google Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.text} className="p-8 rounded-3xl shadow-xl border">
                <p>“{review.text}”</p>
                <div className="mt-4 font-semibold">★★★★★ {review.name}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">Connect this to your Google Business Profile or replace with selected real reviews before launch.</p>
        </div>
      </section>

      <section id="gallery" className="bg-gray-100 p-10 md:p-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Recent Work" title="Project Gallery" text="A selection of recent domestic, commercial, lighting and renewables projects." />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article key={`${project.src}-${project.title}`} className="group overflow-hidden rounded-3xl bg-white shadow-xl border">
                <img src={project.src} alt={project.title} loading="lazy" className="h-72 w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-6">
                  <p className="text-sm text-orange-600 font-semibold">{project.cat}</p>
                  <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-10 md:p-20">
        <h2 className="text-4xl font-bold text-center mb-10">SEO Landing Pages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Electrician Cheltenham", "Solar PV Gloucestershire", "EV Charging Cotswolds"].map((area) => (
            <div key={area} className="p-6 rounded-3xl border shadow">{area}</div>
          ))}
        </div>
      </section>

      <section className="bg-white p-10 md:p-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Find Us</h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border h-96">
            <iframe title="Sabre Electrical Google Map" src="https://www.google.com/maps?q=Sabre%20Electrical%20Ltd&output=embed" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 p-10 md:p-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Request a Quote</h2>
            <p className="text-lg mb-4">Tell us what you need help with and we’ll get back to you as soon as possible.</p>
            <p className="text-gray-600">Domestic, commercial, inspection, testing and renewables enquiries are all welcome.</p>
          </div>
          <form action="https://formspree.io/f/xqewrrzd" method="POST" className="bg-white p-8 rounded-3xl shadow-xl space-y-4">
            <input type="hidden" name="form-name" value="quote" />
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <input name="name" placeholder="Your name" className="w-full p-4 rounded-2xl border" required />
            <input name="email" type="email" placeholder="Your email" className="w-full p-4 rounded-2xl border" required />
            <input name="phone" placeholder="Phone number" className="w-full p-4 rounded-2xl border" />
            <select name="service" className="w-full p-4 rounded-2xl border" defaultValue="Domestic">
              {[...services, ...renewables].map((item) => (
                <option key={item.slug} value={item.title}>{item.title}</option>
              ))}
            </select>
            <textarea name="message" placeholder="Tell us about the job" rows="5" className="w-full p-4 rounded-2xl border" required />
            <button type="submit" className="w-full py-3 rounded-2xl bg-gray-900 text-white font-semibold">Send Enquiry</button>
            <p className="text-sm text-gray-500">Or call <a href="tel:01242350994" className="underline">01242 350 994</a> / email <a href="mailto:hello@sabreelectrical.co.uk" className="underline">hello@sabreelectrical.co.uk</a></p>
          </form>
        </div>
      </section>

      <section className="bg-gray-900 text-white p-10 md:p-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-lg opacity-90">Speak with Sabre Electrical today for premium workmanship and fast reliable service.</p>
          </div>
          <div className="flex flex-col sm:flex-row md:justify-end gap-4">
            <a href="#contact" className="px-6 py-3 bg-white text-gray-900 rounded-2xl font-semibold text-center">Request Quote</a>
            <a href="tel:01242350994" className="px-6 py-3 border border-white rounded-2xl text-center">Call Now</a>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

function Header({ goTo, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <button type="button" onClick={() => goTo("home")} className="flex items-center gap-3 text-left" aria-label="Go to homepage">
          <img src="/logo.png" alt="Sabre Electrical Logo" className="h-12 w-auto" />
        </button>
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center" aria-label="Main navigation">
          <button type="button" onClick={() => goTo("home")}>Home</button>
          <a href="#about">About</a>
          <Dropdown title="Services" items={services} goTo={goTo} />
          <Dropdown title="Renewables" items={renewables} goTo={goTo} />
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:block px-4 py-2 rounded-2xl bg-gray-900 text-white font-semibold">Get Quote</a>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden px-4 py-2 rounded-2xl border" aria-expanded={menuOpen} aria-controls="mobile-menu">
          Menu
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t bg-white p-6 space-y-3">
          <button type="button" onClick={() => goTo("home")} className="block w-full text-left py-2">Home</button>
          <a href="#about" onClick={closeMenu} className="block py-2">About</a>
          <p className="pt-3 text-sm font-semibold text-orange-600">Services</p>
          {services.map((item) => (
            <button key={item.slug} type="button" onClick={() => goTo(item.slug)} className="block w-full text-left py-2 pl-4">{item.title}</button>
          ))}
          <p className="pt-3 text-sm font-semibold text-orange-600">Renewables</p>
          {renewables.map((item) => (
            <button key={item.slug} type="button" onClick={() => goTo(item.slug)} className="block w-full text-left py-2 pl-4">{item.title}</button>
          ))}
          <a href="#gallery" onClick={closeMenu} className="block py-2">Gallery</a>
          <a href="#contact" onClick={closeMenu} className="block py-2">Contact</a>
        </div>
      )}
    </header>
  );
}

function Dropdown({ title, items, goTo }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" onClick={() => setOpen((value) => !value)} className="flex items-center gap-1" aria-expanded={open}>
        {title}<span>▾</span>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-60 bg-white border rounded-2xl shadow-lg overflow-hidden">
          {items.map((item) => (
            <button key={item.slug} type="button" onClick={() => goTo(item.slug)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <div className="text-center mb-10">
      <p className={`uppercase tracking-[0.25em] text-sm font-semibold mb-3 ${dark ? "text-orange-400" : "text-orange-600"}`}>{eyebrow}</p>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className={`mt-4 max-w-2xl mx-auto ${dark ? "text-white/70" : "text-gray-600"}`}>{text}</p>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border">
      <div className="text-4xl font-bold text-orange-600">{value}</div>
      <p>{label}</p>
    </div>
  );
}

function LaunchChecklist() {
  return (
    <section className="bg-orange-50 p-10 md:p-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Launch Setup</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-6 rounded-3xl bg-white border shadow-sm">Google Analytics and Search Console IDs can be added during deployment.</div>
          <div className="p-6 rounded-3xl bg-white border shadow-sm">Create `/sitemap.xml` with home plus all service URLs.</div>
          <div className="p-6 rounded-3xl bg-white border shadow-sm">Create `/robots.txt` allowing search engines and pointing to the sitemap.</div>
          <div className="p-6 rounded-3xl bg-white border shadow-sm">Connect the domain `sabreelectrical.co.uk` to the hosting provider.</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="p-8 text-center text-sm text-gray-500 border-t">
      <p>© 2026 Sabre Electrical Ltd. All rights reserved.</p>
      <p className="mt-2">sabreelectrical.co.uk · Launch-ready for hosting, forms, analytics and SEO indexing.</p>
    </footer>
  );
}

export const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.sabreelectrical.co.uk/</loc></url>
  ${allPages.map((item) => `<url><loc>https://www.sabreelectrical.co.uk/#/${item.slug}</loc></url>`).join("\n  ")}
</urlset>`;

export const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://www.sabreelectrical.co.uk/sitemap.xml`;
