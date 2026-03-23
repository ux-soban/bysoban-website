import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      {/* Icon box */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-lg"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            color: "#555555",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}
        >
          {label}
        </p>
        <p style={{ color: "#cccccc", fontSize: "0.88rem", fontWeight: 500 }}>{value}</p>
      </div>
    </div>
  );
}

function FormField({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          color: "#666666",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <span style={{ color: "#ff6b6b", fontSize: "0.72rem", fontWeight: 500, marginTop: "-4px" }}>
          ⚠ {error}
        </span>
      )}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  color: "#ffffff",
  fontSize: "0.88rem",
  padding: "12px 16px",
  outline: "none",
  width: "100%",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
};

function StyledInput({
  type = "text",
  placeholder,
  value,
  onChange,
  hasError,
}: {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  hasError?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      style={{
        ...inputBase,
        borderColor: hasError
          ? "rgba(255,100,100,0.6)"
          : focused
          ? "rgba(200,240,78,0.5)"
          : "rgba(255,255,255,0.08)",
        boxShadow: hasError
          ? "0 0 0 3px rgba(255,100,100,0.07)"
          : focused
          ? "0 0 0 3px rgba(200,240,78,0.07)"
          : "none",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function StyledSelect({
  placeholder,
  value,
  onChange,
  options,
}: {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          ...inputBase,
          borderColor: focused ? "rgba(200,240,78,0.5)" : "rgba(255,255,255,0.08)",
          boxShadow: focused ? "0 0 0 3px rgba(200,240,78,0.07)" : "none",
          appearance: "none",
          cursor: "pointer",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <option value="" disabled style={{ backgroundColor: "#141414", color: "#555555" }}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={{ backgroundColor: "#141414", color: "#ffffff" }}>
            {o}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <svg
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 5l4 4 4-4"
          stroke="#555555"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StyledTextarea({
  placeholder,
  value,
  onChange,
  hasError,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  hasError?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      rows={5}
      style={{
        ...inputBase,
        borderColor: hasError
          ? "rgba(255,100,100,0.6)"
          : focused
          ? "rgba(200,240,78,0.5)"
          : "rgba(255,255,255,0.08)",
        boxShadow: hasError
          ? "0 0 0 3px rgba(255,100,100,0.07)"
          : focused
          ? "0 0 0 3px rgba(200,240,78,0.07)"
          : "none",
        resize: "none",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export function ContactSection({ selectedPackage, onPackageChange }: { selectedPackage?: string; onPackageChange?: (pkg: string) => void }) {
  const [btnHovered, setBtnHovered] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", timeline: "", projectType: "", package: selectedPackage ?? "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; captcha?: string }>({});
  // Sync package when parent updates it (e.g. clicking Get Started from pricing)
  useEffect(() => {
    if (selectedPackage) {
      setForm((p) => ({ ...p, package: selectedPackage }));
    }
  }, [selectedPackage]);

  // Math CAPTCHA
  const [mathA, setMathA] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [mathB, setMathB] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathError, setMathError] = useState(false);
  const [mathFocused, setMathFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState("us");

  const refreshMath = () => {
    setMathA(Math.floor(Math.random() * 9) + 1);
    setMathB(Math.floor(Math.random() * 9) + 1);
    setMathAnswer("");
    setMathError(false);
  };

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1484517915473608756/ZjZWcNryr7qnBxny6pQK8wXXpu8Cuim2qsD0_ulTMtXMLGj5FLrPToSofTJRriamE6ad";

  const handleSubmit = async () => {
    // Validate fields
    const newErrors: { name?: string; email?: string; message?: string; captcha?: string } = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Validate math CAPTCHA
    if (!mathAnswer.trim()) {
      setMathError(true);
      setErrors((p) => ({ ...p, captcha: "Please answer the captcha" }));
      return;
    }
    if (parseInt(mathAnswer, 10) !== mathA + mathB) {
      setMathError(true);
      setErrors((p) => ({ ...p, captcha: "Wrong answer, please try again" }));
      refreshMath();
      return;
    }
    setErrors({});
    setMathError(false);

    setStatus("sending");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "📩 New Lead from BySoban Portfolio",
              color: 0xc8f04e,
              fields: [
                { name: "👤 Name", value: form.name, inline: true },
                { name: "📧 Email", value: form.email, inline: true },
                { name: " WhatsApp", value: form.whatsapp || "Not provided", inline: true },
                { name: "⏱️ Timeline", value: form.timeline || "Not specified", inline: true },
                { name: "🛠️ Project Type", value: form.projectType || "Not specified", inline: true },
                { name: "📦 Package", value: form.package || "Not specified", inline: true },
                { name: "💬 Message", value: form.message, inline: false },
              ],
              footer: { text: "BySoban Portfolio • Contact Form" },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
      setStatus("success");
      setForm({ name: "", email: "", whatsapp: "", timeline: "", projectType: "", package: "", message: "" });
      setMathAnswer("");
      refreshMath();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Green glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-80px",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(200,240,78,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-start">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#C8F04E" }} />
              <span
                style={{
                  color: "#C8F04E",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: "20px",
              }}
            >
              Let's build something
              <br />
              <span style={{ color: "#C8F04E" }}>great.</span>
            </h2>

            {/* Paragraph */}
            <p
              style={{
                color: "#666666",
                fontSize: "0.92rem",
                lineHeight: 1.7,
                marginBottom: "48px",
                maxWidth: "400px",
              }}
            >
              Whether you have a project in mind or just want to explore what's possible —
              I'm here to help turn your ideas into polished digital experiences.
            </p>

            {/* Info rows */}
            <div className="flex flex-col gap-6">
              <InfoRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="#C8F04E" strokeWidth="1.4" />
                    <path d="M2 7l7 4.5L16 7" stroke="#C8F04E" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                }
                label="Email"
                value="sobanbutt22@gmail.com"
              />
              <InfoRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="6.5" stroke="#C8F04E" strokeWidth="1.4" />
                    <path d="M9 5.5V9l2.5 2" stroke="#C8F04E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                label="Availability"
                value="Open for new projects"
              />
              <InfoRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 3h12v10H3z"
                      rx="1.5"
                      stroke="#C8F04E"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path d="M6 8h6M6 10.5h4" stroke="#C8F04E" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                }
                label="Response Time"
                value="Within 24 hours"
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Phone input dark theme overrides */}
            <style>{`
              .bysoban-phone .react-tel-input .form-control {
                background-color: rgba(255,255,255,0.04) !important;
                border: 1px solid rgba(255,255,255,0.08) !important;
                border-radius: 10px !important;
                color: #ffffff !important;
                font-size: 0.88rem !important;
                padding: 12px 16px 12px 52px !important;
                height: auto !important;
                width: 100% !important;
                transition: border-color 0.25s ease, box-shadow 0.25s ease !important;
              }
              .bysoban-phone .react-tel-input .form-control:focus {
                border-color: rgba(200,240,78,0.5) !important;
                box-shadow: 0 0 0 3px rgba(200,240,78,0.07) !important;
                outline: none !important;
              }
              .bysoban-phone .react-tel-input .flag-dropdown {
                background-color: transparent !important;
                border: none !important;
                border-radius: 10px 0 0 10px !important;
              }
              .bysoban-phone .react-tel-input .flag-dropdown.open,
              .bysoban-phone .react-tel-input .flag-dropdown:hover {
                background-color: transparent !important;
              }
              .bysoban-phone .react-tel-input .selected-flag,
              .bysoban-phone .react-tel-input .selected-flag:hover,
              .bysoban-phone .react-tel-input .selected-flag:focus {
                background-color: transparent !important;
                border-radius: 10px 0 0 10px !important;
              }
              .bysoban-phone .react-tel-input .country-list {
                background-color: #1a1a1a !important;
                border: 1px solid #333 !important;
                border-radius: 10px !important;
                margin-top: 4px !important;
              }
              .bysoban-phone .react-tel-input .country-list .country {
                color: #ffffff !important;
              }
              .bysoban-phone .react-tel-input .country-list .country:hover,
              .bysoban-phone .react-tel-input .country-list .country.highlight {
                background-color: #2a2a2a !important;
              }
              .bysoban-phone .react-tel-input .country-list .country-name {
                color: #ffffff !important;
              }
              .bysoban-phone .react-tel-input .country-list .dial-code {
                color: #C8F04E !important;
              }
              .bysoban-phone .react-tel-input .search {
                background-color: #1a1a1a !important;
                padding: 8px 10px !important;
                border-bottom: 1px solid #333 !important;
              }
              .bysoban-phone .react-tel-input .search-box {
                background-color: #2a2a2a !important;
                color: #ffffff !important;
                border: 1px solid #444 !important;
                border-radius: 6px !important;
                width: 100% !important;
                padding: 6px 10px !important;
              }
              .bysoban-phone .react-tel-input .search-box::placeholder {
                color: #888888 !important;
              }
              .bysoban-phone .react-tel-input .search-box:focus {
                outline: none !important;
                border-color: #C8F04E !important;
              }
              .bysoban-phone .react-tel-input .no-entries-message {
                color: #888888 !important;
                background-color: #1a1a1a !important;
              }
              .bysoban-phone .react-tel-input .form-control::placeholder {
                color: rgba(255,255,255,0.2) !important;
              }
            `}</style>

            {/* Row: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField label="Name" error={errors.name}>
                <StyledInput
                  placeholder="Your name"
                  value={form.name}
                  hasError={!!errors.name}
                  onChange={(v) => { setForm((p) => ({ ...p, name: v })); setErrors((p) => ({ ...p, name: undefined })); }}
                />
              </FormField>
              <FormField label="Email" error={errors.email}>
                <StyledInput
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  hasError={!!errors.email}
                  onChange={(v) => { setForm((p) => ({ ...p, email: v })); setErrors((p) => ({ ...p, email: undefined })); }}
                />
              </FormField>
            </div>

            {/* Row: Project Type + Package */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField label="Project Type">
                <StyledSelect
                  placeholder="Select project type"
                  value={form.projectType}
                  onChange={(v) => setForm((p) => ({ ...p, projectType: v }))}
                  options={[
                    "Mobile App Design",
                    "Website Design",
                    "Web App & SaaS",
                    "Wireframing",
                    "Prototyping",
                    "User Testing",
                    "Other",
                  ]}
                />
              </FormField>
              <FormField label="Package">
                <StyledSelect
                  placeholder="Select a package"
                  value={form.package}
                  onChange={(v) => {
                    setForm((p) => ({ ...p, package: v }));
                    if (onPackageChange) onPackageChange(v);
                  }}
                  options={["Starter — $149", "Growth — $349", "Premium — $799"]}
                />
              </FormField>
            </div>

            {/* Row: WhatsApp Number */}
            <FormField label="WhatsApp Number">
              <div className="bysoban-phone">
                <style>{`
                  .bysoban-phone .react-tel-input .flag-dropdown {
                    width: 80px !important;
                  }
                  .bysoban-phone .react-tel-input .selected-flag {
                    width: 80px !important;
                    padding-left: 20px !important;
                  }
                  .bysoban-phone .react-tel-input .form-control {
                    padding-left: 74px !important;
                  }
                  .bysoban-phone .react-tel-input .selected-flag .flag {
                    transform: scale(1.35);
                    transform-origin: center;
                  }
                  .bysoban-phone .react-tel-input .selected-flag .arrow {
                    border-top-width: 6px !important;
                    border-left-width: 5px !important;
                    border-right-width: 5px !important;
                    top: 52% !important;
                  }
                `}</style>
                <PhoneInput
                  country={phoneCountry}
                  value={form.whatsapp}
                  onChange={(v, countryData: any) => {
                    setForm((p) => ({ ...p, whatsapp: v }));
                    if (countryData?.countryCode) setPhoneCountry(countryData.countryCode);
                  }}
                  enableSearch
                  searchPlaceholder="Search country..."
                  inputProps={{ name: "whatsapp" }}
                />
              </div>
            </FormField>

            {/* Message */}
            <FormField label="Message" error={errors.message}>
              <StyledTextarea
                placeholder="Tell me about your project, goals, and timeline..."
                value={form.message}
                hasError={!!errors.message}
                onChange={(v) => { setForm((p) => ({ ...p, message: v })); setErrors((p) => ({ ...p, message: undefined })); }}
              />
            </FormField>

            {/* ── Math CAPTCHA ── */}
            <div
              className="flex items-center justify-between rounded-xl px-5 py-4"
              style={{
                backgroundColor: "rgba(200,240,78,0.04)",
                border: mathError ? "1px solid rgba(255,100,100,0.3)" : "1px solid rgba(200,240,78,0.12)",
                transition: "border-color 0.25s ease",
              }}
            >
              {/* Left: shield icon + label */}
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L3 5v4c0 3.3 2.5 6.1 6 7 3.5-.9 6-3.7 6-7V5L9 2z" stroke="#C8F04E" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M6.5 9l1.8 1.8 3.2-3.2" stroke="#C8F04E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col">
                  <span style={{ color: "#ffffff", fontSize: "0.82rem", fontWeight: 600 }}>
                    Quick check
                  </span>
                  <span style={{ color: "#555555", fontSize: "0.72rem" }}>
                    What is {mathA} + {mathB}?
                  </span>
                </div>
              </div>

              {/* Right: input + feedback */}
              <div className="flex items-center gap-3">
                {mathError && (
                  <span style={{ color: "#ff6b6b", fontSize: "0.75rem", fontWeight: 600 }}>
                    Try again
                  </span>
                )}
                <input
                  type="number"
                  placeholder=""
                  value={mathAnswer}
                  onChange={(e) => { setMathAnswer(e.target.value); setMathError(false); }}
                  onFocus={() => setMathFocused(true)}
                  onBlur={() => setMathFocused(false)}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: mathError
                      ? "1px solid rgba(255,100,100,0.5)"
                      : mathFocused
                      ? "1px solid rgba(200,240,78,0.5)"
                      : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    padding: "8px 0",
                    outline: "none",
                    width: "56px",
                    textAlign: "center",
                    transition: "border-color 0.25s ease",
                  }}
                />
              </div>
            </div>

            {/* Captcha error */}
            {errors.captcha && (
              <span style={{ color: "#ff6b6b", fontSize: "0.72rem", fontWeight: 500, marginTop: "-8px" }}>
                ⚠ {errors.captcha}
              </span>
            )}

            {/* Success / Error feedback */}
            {status === "success" && (
              <p style={{ color: "#C8F04E", fontSize: "0.85rem", fontWeight: 600 }}>
                ✅ Message sent! I'll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#ff6b6b", fontSize: "0.85rem", fontWeight: 600 }}>
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}

            {/* Submit */}
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  backgroundColor: btnHovered ? "#d4f55a" : "#C8F04E",
                  color: "#080808",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  padding: "13px 28px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  letterSpacing: "0.01em",
                  opacity: status === "sending" ? 0.7 : 1,
                  transition: "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  transform: btnHovered ? "translateY(-1px)" : "none",
                  boxShadow: btnHovered ? "0 6px 24px rgba(200,240,78,0.28)" : "none",
                }}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}