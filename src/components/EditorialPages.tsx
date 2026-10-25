import React, { useState } from 'react';
import {
  ChefHat,
  Award,
  ShieldCheck,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Lock,
  FileText,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { editorialStaff } from '../data/articlesIndex';

interface EditorialPageProps {
  view: 'about' | 'standards' | 'editors' | 'privacy' | 'terms' | 'contact';
  onNavigateHome: () => void;
}

export const EditorialPages: React.FC<EditorialPageProps> = ({ view, onNavigateHome }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <button onClick={onNavigateHome} className="text-[#ffd700] hover:underline">
          Home Feed
        </button>
        <span>/</span>
        <span className="capitalize text-slate-200">{view}</span>
      </div>

      {/* VIEW: ABOUT */}
      {view === 'about' && (
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#0b2721] border border-[#5fdee7] text-xs font-mono text-[#5fdee7] font-bold">
              THE recipepots MISSION
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-editorial text-white">
              Culinary Science Meets Weeknight Sanity
            </h1>
            <p className="text-base sm:text-lg text-[#5fdee7] leading-relaxed">
              We are an independent culinary journal dedicated to one-pot dinners, slow cooker classics, quick weeknight meals, and scientifically calibrated diets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b2721] border border-[#ffd700]/30 space-y-4">
            <h2 className="text-xl font-bold font-editorial text-white flex items-center gap-2">
              <ChefHat className="w-6 h-6 text-[#ffd700]" />
              Why Single-Vessel Cooking?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              The modern kitchen should not be a site of evening exhaustion. Traditional cooking paradigms promote excessive pan proliferation: one pot for blanching, one skillet for searing, one saucepan for reduction, and a mountain of dishes.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              At <strong>recipepots</strong>, our recipe laboratory reimagines dinner through heat transfer thermodynamics, starch emulsification, and moisture cycling. By understanding how heavy enameled cast iron, pressurized multi-cookers, and low-temperature stoneware function, we create restaurant-caliber meals in a single pan.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#081c18] border border-slate-700/80 space-y-2">
              <div className="text-2xl font-black text-[#ffd700]">100%</div>
              <h3 className="text-sm font-bold text-white">Kitchen Tested</h3>
              <p className="text-xs text-slate-400">Every recipe is executed multiple times in real home kitchens.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#081c18] border border-slate-700/80 space-y-2">
              <div className="text-2xl font-black text-[#5fdee7]">1,200+</div>
              <h3 className="text-sm font-bold text-white">Word Monograph Standard</h3>
              <p className="text-xs text-slate-400">No fluffy filler stories; deep technical culinary science and prep instructions.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#081c18] border border-slate-700/80 space-y-2">
              <div className="text-2xl font-black text-[#ffd700]">0%</div>
              <h3 className="text-sm font-bold text-white">Dishes Fatigue</h3>
              <p className="text-xs text-slate-400">Engineered for minimum cleanup and maximum nutrient retention.</p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: STANDARDS & PEER REVIEW */}
      {view === 'standards' && (
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#0b2721] border border-[#5fdee7] text-xs font-mono text-[#5fdee7] font-bold">
              EDITORIAL RIGOR &amp; INTEGRITY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-editorial text-white">
              Editorial Standards &amp; Peer Review Protocol
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Our commitment to culinary precision, food safety verification, and transparent nutritional reporting.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#0b2721] border border-[#ffd700]/30 space-y-2">
              <h3 className="text-lg font-bold text-[#ffd700] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> 1. The Quadruple Test Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Before any recipe is published on recipepots, it undergoes testing on four distinct heating mediums: standard natural gas range, commercial induction, electric radiant coil, and convection ovens. This ensures recipes deliver identical outcomes regardless of appliance variance.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0b2721] border border-[#ffd700]/30 space-y-2">
              <h3 className="text-lg font-bold text-[#ffd700] flex items-center gap-2">
                <Award className="w-5 h-5" /> 2. Nutritional Biochemistry Analysis
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Macronutrient breakdowns (calories, protein, carbohydrates, fats, fiber, sodium) are calculated using standardized USDA FoodData Central databases and lab-verified conversion tables.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0b2721] border border-[#ffd700]/30 space-y-2">
              <h3 className="text-lg font-bold text-[#ffd700] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> 3. Food Safety &amp; Critical Temperature Logging
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All poultry, meat, and seafood recipes specify internal core temperatures measured via calibrated digital thermometers (e.g., 165°F for poultry, 203°F for collagen-rich pork shoulder, 130°F for salmon) conforming to international food safety regulations.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: CULINARY EDITORS */}
      {view === 'editors' && (
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#0b2721] border border-[#ffd700] text-xs font-mono text-[#ffd700] font-bold">
              THE MASTHEAD
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-editorial text-white">
              Culinary Editors &amp; Gastronomy Board
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Meet the culinary technologists, chefs, and nutrition researchers behind recipepots.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {editorialStaff.map((staff, idx) => (
              <div
                key={idx}
                className="yellow-hover-box rounded-2xl p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#ffd700] mb-4 shadow-lg"
                  />
                  <h3 className="text-lg font-bold text-white text-center">{staff.name}</h3>
                  <p className="text-xs text-[#ffd700] text-center font-mono">{staff.role}</p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed text-center">
                    {staff.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-700/60 text-center">
                  <span className="text-[10px] font-mono text-[#5fdee7]">
                    🎓 {staff.credentials}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: CONTACT */}
      {view === 'contact' && (
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#0b2721] border border-[#ffd700] text-xs font-mono text-[#ffd700] font-bold">
              DIRECT DESK
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-editorial text-white">
              Contact Editorial Staff
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Have questions regarding recipe chemistry, gear calibrations, or editorial feedback? Reach our editorial desk directly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Official Contact Cards */}
            <div className="p-5 rounded-2xl bg-[#0b2721] border border-[#ffd700]/30 space-y-2">
              <Phone className="w-6 h-6 text-[#ffd700]" />
              <h3 className="text-sm font-bold text-white">Phone &amp; WhatsApp</h3>
              <p className="text-xs text-slate-400">Direct Editorial Inquiry Hotline</p>
              <a
                href="tel:03046308631"
                className="block text-sm font-bold font-mono text-[#5fdee7] hover:underline"
              >
                03046308631
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b2721] border border-[#ffd700]/30 space-y-2">
              <Mail className="w-6 h-6 text-[#ffd700]" />
              <h3 className="text-sm font-bold text-white">Official Email Desk</h3>
              <p className="text-xs text-slate-400">Editorial &amp; Recipe Submissions</p>
              <a
                href="mailto:mz751136000@gmail.com"
                className="block text-sm font-bold font-mono text-[#5fdee7] hover:underline break-all"
              >
                mz751136000@gmail.com
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b2721] border border-[#ffd700]/30 space-y-2">
              <Clock className="w-6 h-6 text-[#ffd700]" />
              <h3 className="text-sm font-bold text-white">Operating Hours</h3>
              <p className="text-xs text-slate-400">Editorial Research Hours</p>
              <p className="text-xs font-mono text-slate-200">
                Monday – Friday: 08:00 – 18:00 EST
              </p>
            </div>
          </div>

          {/* Interactive Contact Message Form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b2721] border border-[#ffd700]/30 shadow-xl">
            <h2 className="text-xl font-bold font-editorial text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#ffd700]" />
              Send a Direct Message to the Test Kitchen
            </h2>

            {contactSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                <p className="text-xs text-slate-300">
                  Thank you for contacting recipepots. Our culinary team will review your query and reply within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Chef / Reader Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#081c18] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#ffd700]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#081c18] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#ffd700]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Inquiry Topic</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Dutch Oven Beef Stew cooking temperature clarification"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#081c18] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#ffd700]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Detailed Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include equipment specifics or recipe title..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#081c18] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#ffd700]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#ffd700] text-[#081c18] font-bold text-sm yellow-hover-btn flex items-center gap-2"
                >
                  <span>Submit Inquiry to Editors</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIEW: PRIVACY POLICY & GDPR */}
      {view === 'privacy' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#0b2721] border border-[#5fdee7] text-xs font-mono text-[#5fdee7] font-bold">
              GDPR &amp; CCPA COMPLIANCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-editorial text-white">
              Privacy Policy &amp; Data Governance
            </h1>
            <p className="text-xs text-slate-400 font-mono">Effective Date: October 24, 2026</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b2721] border border-slate-800 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#ffd700]" /> 1. Commitment to User Privacy
            </h3>
            <p>
              At recipepots, we prioritize reader transparency. We collect minimal telemetry necessary to deliver fast, responsive culinary guides and maintain browser bookmark preferences via local storage.
            </p>
            <h3 className="text-base font-bold text-white">2. Cookies &amp; Tracking Technologies</h3>
            <p>
              We utilize technical cookies necessary for caching meal-scaling preferences and anonymous session performance monitoring. Users may toggle cookie preferences via our consent manager at any time.
            </p>
            <h3 className="text-base font-bold text-white">3. Third-Party Networks &amp; Compliance</h3>
            <p>
              We adhere strictly to Google AdSense program policies, the California Consumer Privacy Act (CCPA), and the European General Data Protection Regulation (GDPR). We do not sell personally identifiable information to third-party data brokers.
            </p>
          </div>
        </div>
      )}

      {/* VIEW: TERMS OF SERVICE */}
      {view === 'terms' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#0b2721] border border-[#ffd700] text-xs font-mono text-[#ffd700] font-bold">
              LEGAL TERMS
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-editorial text-white">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-400 font-mono">Effective Date: October 24, 2026</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b2721] border border-slate-800 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#ffd700]" /> 1. Culinary &amp; Dietary Disclaimer
            </h3>
            <p>
              The culinary monographs, cooking temperatures, and macronutrient calculations on recipepots are provided for educational and culinary inspiration. While reviewed by food science specialists, individual caloric and dietary needs vary. Readers with severe allergies (including celiac disease or nut sensitivities) must verify ingredient labels.
            </p>
            <h3 className="text-base font-bold text-white">2. Intellectual Property Rights</h3>
            <p>
              All technical infographics, photographic compositions, and long-form editorial texts published on recipepots are protected under international copyright law. Unauthorized automated scraping or wholesale republication is prohibited without prior written consent.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
