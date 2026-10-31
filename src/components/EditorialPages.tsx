import React, { useState } from 'react';
import {
  ChefHat,
  Award,
  ShieldCheck,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Lock,
  FileText,
  Clock,
  ArrowRight,
  Send,
  HelpCircle,
  AlertTriangle,
  Globe,
  Scale,
  Sparkles,
} from 'lucide-react';
import { editorialStaff } from '../data/articlesIndex';

interface EditorialPageProps {
  view: 'about' | 'standards' | 'editors' | 'privacy' | 'terms' | 'contact';
  onNavigateHome: () => void;
  onNavigate?: (view: string) => void;
}

export const EditorialPages: React.FC<EditorialPageProps> = ({
  view,
  onNavigateHome,
  onNavigate,
}) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    topic: 'Recipe Technical Question',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        topic: 'Recipe Technical Question',
        message: '',
      });
    }, 5000);
  };

  const currentTab = view;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn text-slate-800">
      {/* Top Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="text-yellow-700 hover:underline font-semibold flex items-center gap-1"
          >
            <span>‹ Home</span>
          </a>
          <span>/</span>
          <span className="text-slate-900 font-bold capitalize">
            {currentTab === 'about' && 'About Us'}
            {currentTab === 'contact' && 'Contact Us'}
            {currentTab === 'privacy' && 'Privacy Policy'}
            {currentTab === 'terms' && 'Terms of Use'}
            {currentTab === 'standards' && 'Editorial Standards'}
            {currentTab === 'editors' && 'Medical & Culinary Board'}
          </span>
        </div>

        {/* Quick Switcher Tabs */}
        {onNavigate && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              { id: 'about', label: 'About Us' },
              { id: 'contact', label: 'Contact Us' },
              { id: 'privacy', label: 'Privacy Policy' },
              { id: 'terms', label: 'Terms of Use' },
              { id: 'standards', label: 'Editorial Standards' },
              { id: 'editors', label: 'Review Board' },
            ].map((tab) => (
              <a
                key={tab.id}
                href={`/${tab.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(tab.id);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors block ${
                  currentTab === tab.id
                    ? 'bg-yellow-400 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* ========================================================
          1. ABOUT US PAGE (Healthline Style)
         ======================================================== */}
      {currentTab === 'about' && (
        <div className="space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
              About recipepots • Evidence-Based Cooking
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-headline text-slate-950 leading-tight">
              Culinary Science, Vessel Physics &amp; Nutrition Rigor
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              "DELICIOUS ONE-POT RECIPES &amp; KITCHEN GEAR GUIDES - PUBLISHED DAILY"
            </p>
          </div>

          {/* Core Mission Statement */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-gray-200 space-y-4">
            <h2 className="text-2xl font-bold font-serif-headline text-slate-900 flex items-center gap-2.5">
              <ChefHat className="w-6 h-6 text-yellow-600" />
              Our Core Mission: The Single-Vessel Revolution
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              At <strong>recipepots</strong>, we believe the evening meal should restore health and vitality, not create an ordeal of sink exhaustion and pan chaos. Traditional recipe websites often encourage unnecessary cookware proliferation—boiling pasta in one pot, sautéing mirepoix in another, searing protein in a skillet, and whisking sauces in a separate bowl.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Our culinary research lab rejects this multi-pan complexity. By leveraging thermal conduction physics, moisture condensation cycling, and starch-lipid emulsification, we formulate recipes where every ingredient achieves peak flavor inside <strong>one single cooking vessel</strong>—whether that is an enameled cast iron Dutch oven, an electric Instant Pot, a heavy-gauge sheet pan, or an oval ceramic slow cooker.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif-headline text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-600" />
              Our Four Culinary &amp; Dietary Pillars
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 hover:border-gray-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                  Pillar 1 • One-Pot Dinners
                </span>
                <h4 className="text-base font-bold text-slate-900">Vessel Conduction &amp; Deglazing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Harnessing the thermal inertia of cast iron and heavy tri-ply steel. We teach home cooks how to develop rich Maillard fond and capture every dissolved flavor molecule into silky gravies and emulsions without extra dishes.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 hover:border-gray-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                  Pillar 2 • Slow Cooker Classics
                </span>
                <h4 className="text-base font-bold text-slate-900">Gentle Low-and-Slow Braising</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Understanding how slow cooking tenderizes meat and blends herbs into deep, aromatic broths without boiling away natural moisture.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 hover:border-gray-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                  Pillar 3 • Quick Weeknight Meals
                </span>
                <h4 className="text-base font-bold text-slate-900">Speedy Skillet &amp; Sheet Pan Dinners</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lightning-fast 20-minute stir-fries and roasted sheet pan dinners that deliver incredible taste and virtually zero kitchen cleanup.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 hover:border-gray-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                  Pillar 4 • Healthy &amp; Special Diets
                </span>
                <h4 className="text-base font-bold text-slate-900">Balanced, Wholesome Nutrition</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wholesome keto options, vibrant Mediterranean legume stews, gluten-free dinners, and protein-packed family meals.
                </p>
              </div>
            </div>
          </div>

          {/* Test Kitchen Standards */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50 space-y-3">
            <h3 className="text-lg font-bold font-serif-headline text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              The recipepots Testing Standard
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Triple Kitchen Verification:</strong> Every recipe is tested across gas burners, induction cooktops, and electric ranges to ensure foolproof home results.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Clear, Practical Instructions:</strong> No robotic filler or generic fluff. Real cooking times, sensory cues (golden-brown sear, sizzling edges), and helpful substitution tips.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>High-Resolution Recipe Photography:</strong> High-definition photos accompany every guide so you know exactly what your dish looks like at every step.</span>
              </li>
            </ul>
          </div>

          {/* Editorial Masthead Callout */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif-headline text-slate-900">
              Meet Our Culinary Team
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {editorialStaff.map((staff, sIdx) => (
                <div key={sIdx} className="p-5 rounded-xl border border-gray-200 bg-white text-center space-y-2 hover:border-gray-300 transition-colors">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto border border-gray-200 shadow-xs"
                  />
                  <h4 className="text-sm font-bold text-slate-900">{staff.name}</h4>
                  <p className="text-[11px] text-yellow-700 font-semibold">{staff.role}</p>
                  <p className="text-xs text-slate-600 line-clamp-3">{staff.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. CONTACT US PAGE (Healthline Style with Direct Phone & Email)
         ======================================================== */}
      {currentTab === 'contact' && (
        <div className="space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
              Contact Us • Editorial &amp; Reader Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-headline text-slate-950">
              Get in Touch with recipepots
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              We welcome reader feedback, recipe questions, equipment inquiries, press requests, and home-cooking questions from food lovers worldwide.
            </p>
          </div>

          {/* Official Direct Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Phone & WhatsApp */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-3 hover:border-gray-300 hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-300 flex items-center justify-center">
                <Phone className="w-5 h-5 text-yellow-700" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Phone &amp; WhatsApp</h3>
                <p className="text-xs text-slate-500 mt-0.5">Direct Helpline for Editorial &amp; Support</p>
              </div>
              <a
                href="tel:03046308631"
                className="block text-xl font-bold text-slate-900 hover:text-yellow-700 transition-colors"
              >
                03046308631
              </a>
              <a
                href="https://wa.me/923046308631"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-700 hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Official Email */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-3 hover:border-gray-300 hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-300 flex items-center justify-center">
                <Mail className="w-5 h-5 text-yellow-700" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Official Email Desk</h3>
                <p className="text-xs text-slate-500 mt-0.5">Editorial Inquiries &amp; Reader Submissions</p>
              </div>
              <a
                href="mailto:mz751136000@gmail.com"
                className="block text-sm sm:text-base font-bold text-slate-900 hover:text-yellow-700 transition-colors break-all"
              >
                mz751136000@gmail.com
              </a>
              <a
                href="mailto:mz751136000@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-700 hover:underline"
              >
                <span>Send Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Operating Hours & Response */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-3 hover:border-gray-300 hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-gray-200 flex items-center justify-center">
                <Clock className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Support Hours</h3>
                <p className="text-xs text-slate-500 mt-0.5">Editorial Office Schedule</p>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Monday – Saturday: 08:00 – 19:00 EST
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Guaranteed Response &lt; 24h</span>
              </div>
            </div>
          </div>

          {/* Interactive Message Dispatch Form */}
          <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-slate-50 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-yellow-700" />
              <h2 className="text-xl sm:text-2xl font-bold font-serif-headline text-slate-900">
                Send a Message to the Editorial Team
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Have a question about a cooking temperature, ingredient substitution, or cookware tip? Our team will review and reply directly.
            </p>

            {contactSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-900">Message Received!</h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you for contacting recipepots. A culinary editor will reply to <strong>{formData.email || 'your email'}</strong> within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-yellow-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-slate-900 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email <span className="text-yellow-700">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-slate-900 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="03046308631"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-slate-900 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Topic <span className="text-yellow-700">*</span>
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-slate-900 text-sm focus:outline-none focus:border-yellow-500"
                    >
                      <option value="Recipe Technical Question">Recipe Question &amp; Cooking Tips</option>
                      <option value="Equipment Review Request">Kitchen Gear &amp; Cookware Question</option>
                      <option value="Dietary & Allergen Verification">Dietary &amp; Allergen Question</option>
                      <option value="General Feedback">General Reader Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject <span className="text-yellow-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Dutch Oven Beef Stew cooking time"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-slate-900 text-sm focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Message <span className="text-yellow-700">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide your question or comments..."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-slate-900 text-sm focus:outline-none focus:border-yellow-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    🔒 We respect your privacy. Your information is never sold or shared.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          3. PRIVACY POLICY PAGE (GDPR, CCPA, ADSENSE COMPLIANT)
         ======================================================== */}
      {currentTab === 'privacy' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
              Legal &amp; Privacy Policy
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-headline text-slate-950">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500">
              Effective Date: October 26, 2026 • Official recipepots Policy
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-2xs">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-4 h-4 text-yellow-600" /> 1. Introduction &amp; Scope
              </h2>
              <p>
                Welcome to <strong>recipepots</strong> ("we", "our", or "us"). We operate this digital culinary publication dedicated to delicious one-pot recipes and kitchen gear guides. This Privacy Policy informs you of our practices regarding data privacy, cookie usage, and your rights under applicable regulations including GDPR, CCPA/CPRA, and Google AdSense publisher policies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-yellow-600" /> 2. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-1.5 ml-1">
                <li><strong>Log Data &amp; Web Telemetry:</strong> Standard web server logs including IP addresses, browser types, timestamps, and page views to ensure site performance and security.</li>
                <li><strong>Local Storage:</strong> Functional preferences stored locally on your device (e.g. saved cookbook recipes and serving scale multiplier).</li>
                <li><strong>Voluntary Correspondence:</strong> Information provided when submitting inquiries through our Contact form (name, email, message).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-600" /> 3. Cookies &amp; Advertising Policies
              </h2>
              <p>
                Third-party vendors, including Google, use cookies to serve ads based on prior visits to our website. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to recipepots and/or other sites on the Internet.
              </p>
              <p>
                You may opt out of personalized advertising by visiting Google Ad Settings or through aboutads.info.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-600" /> 4. GDPR &amp; CCPA Rights
              </h2>
              <p>
                Users residing in the European Union (GDPR) and California (CCPA/CPRA) possess rights to access, rectify, delete, or port their personal information. <strong>recipepots does not sell or rent personal information to third parties.</strong>
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-gray-100">
              <h2 className="text-sm font-bold text-slate-900">5. Contact Information for Privacy Concerns</h2>
              <p>
                For questions regarding this policy or data inquiries, contact our desk:
              </p>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-gray-200 text-xs space-y-1">
                <p><strong>Website:</strong> recipepots</p>
                <p><strong>Email:</strong> <a href="mailto:mz751136000@gmail.com" className="text-yellow-700 hover:underline font-semibold">mz751136000@gmail.com</a></p>
                <p><strong>Telephone / WhatsApp:</strong> <a href="tel:03046308631" className="text-yellow-700 hover:underline font-semibold">03046308631</a></p>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* ========================================================
          4. TERMS OF USE PAGE
         ======================================================== */}
      {currentTab === 'terms' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
              Legal Governance
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-headline text-slate-950">
              Terms of Use
            </h1>
            <p className="text-xs text-slate-500">
              Effective Date: October 26, 2026 • Official recipepots Terms
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-2xs">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-yellow-600" /> 1. Agreement to Terms
              </h2>
              <p>
                By accessing or using <strong>recipepots</strong>, you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600" /> 2. Culinary &amp; Dietary Disclaimer
              </h2>
              <p>
                All recipes, cooking times, and nutritional macro estimates published on recipepots are provided for general educational, home-cooking, and informational purposes. Always adhere to certified food safety procedures and inspect ingredient labels for potential allergens.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-600" /> 3. Intellectual Property Rights
              </h2>
              <p>
                All editorial texts, recipe monographs, and recipe photo assets are protected under copyright law and remain the property of recipepots. Users may print or save recipe pages for personal, non-commercial home cooking use only.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-gray-100">
              <h2 className="text-sm font-bold text-slate-900">4. Legal Contact Information</h2>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-gray-200 text-xs space-y-1">
                <p><strong>Publication:</strong> recipepots</p>
                <p><strong>Email:</strong> <a href="mailto:mz751136000@gmail.com" className="text-yellow-700 hover:underline font-semibold">mz751136000@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:03046308631" className="text-yellow-700 hover:underline font-semibold">03046308631</a></p>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* ========================================================
          5. STANDARDS & PEER REVIEW
         ======================================================== */}
      {currentTab === 'standards' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
              Editorial Rigor
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-headline text-slate-950">
              Our Editorial Standards &amp; Testing Rigor
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              How our culinary team develops, kitchen-tests, and verifies every single-vessel recipe guide.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" /> 1. The Triple Kitchen Testing Protocol
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prior to publishing, every recipe is prepared on gas burners, induction surfaces, and electric radiant coil stoves to ensure consistent heat transfer regardless of the user's home equipment.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" /> 2. Nutritional Composition Analysis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Macronutrient profiles (calories, protein, carbohydrates, fats, fiber, sodium) are calibrated using USDA FoodData Central standards to give home cooks reliable dietary metrics.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          6. EDITORS & REVIEW BOARD
         ======================================================== */}
      {currentTab === 'editors' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
              The Masthead
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-headline text-slate-950">
              Culinary Review Board &amp; Team
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Meet the chefs, food writers, and nutritionists behind recipepots.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {editorialStaff.map((staff, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between space-y-4 hover:border-gray-300 transition-colors shadow-2xs"
              >
                <div>
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border border-gray-200 mb-4 shadow-xs"
                  />
                  <h3 className="text-base font-bold text-slate-900 text-center">{staff.name}</h3>
                  <p className="text-xs text-yellow-700 text-center font-semibold">{staff.role}</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed text-center">
                    {staff.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-center">
                  <span className="text-[11px] text-slate-500 font-medium">
                    🎓 {staff.credentials}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
