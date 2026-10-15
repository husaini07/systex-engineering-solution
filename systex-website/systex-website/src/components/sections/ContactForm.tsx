"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Mail, Send } from "lucide-react";
import {
  formatEnquiry,
  grades,
  interests,
  validateContact,
  type ContactPayload,
  type FieldErrors,
} from "@/lib/contact-schema";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const empty: ContactPayload = { name: "", company: "", grade: "", phone: "", email: "", interest: "", message: "", website: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  // Pre-select a package when arriving from the Services page (?package=...)
  useEffect(() => {
    const pkg = new URLSearchParams(window.location.search).get("package");
    if (!pkg) return;
    const match = interests.find((i) => i.toLowerCase().startsWith(pkg.toLowerCase()));
    if (match) setValues((v) => ({ ...v, interest: match }));
  }, []);

  useEffect(() => {
    if (status === "sent" || status === "fallback" || status === "error") statusRef.current?.focus();
  }, [status]);

  const set = (k: keyof ContactPayload) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        setValues(empty);
      } else if (json.errors) {
        setErrors(json.errors);
        setStatus("idle");
      } else if (json.fallback) {
        setStatus("fallback");
      } else {
        setServerError(json.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setStatus("fallback");
    }
  }

  const enquiryText = formatEnquiry(values);
  const waHref = whatsappLink(`Hello ${site.shortName}, I would like to make an enquiry.\n\n${enquiryText}`);
  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    `Website enquiry — ${values.company || "New project"}`,
  )}&body=${encodeURIComponent(enquiryText)}`;

  if (status === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CircleCheck className="mx-auto h-12 w-12 text-emerald-600" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold">Thank you — enquiry received.</h3>
        <p className="mx-auto mt-3 max-w-md text-ink-600">
          We will review your project details and respond within one working day. For urgent tenders, WhatsApp us on{" "}
          {site.contact.phoneDisplay}.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 font-semibold text-brand-700 underline-offset-4 hover:underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (
    k: keyof ContactPayload,
    label: string,
    input: React.ReactNode,
    opts: { required?: boolean; hint?: string } = { required: true },
  ) => (
    <div>
      <label htmlFor={`f-${k}`} className="block text-sm font-semibold text-ink-800">
        {label}
        {opts.required ? (
          <span className="text-red-600" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-ink-400"> (optional)</span>
        )}
      </label>
      <div className="mt-2">{input}</div>
      {opts.hint && !errors[k] && (
        <p id={`f-${k}-hint`} className="mt-1.5 text-xs text-ink-500">
          {opts.hint}
        </p>
      )}
      {errors[k] && (
        <p id={`f-${k}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
          <CircleAlert className="h-4 w-4" aria-hidden="true" /> {errors[k]}
        </p>
      )}
    </div>
  );

  const a11y = (k: keyof ContactPayload, hint = false) => ({
    id: `f-${k}`,
    name: k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `f-${k}-error` : hint ? `f-${k}-hint` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-note" className="space-y-6">
      {(status === "fallback" || status === "error") && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="rounded-xl border border-gold-400 bg-gold-300/15 p-5">
          <p className="font-semibold text-ink-900">
            {status === "error" ? serverError : "We couldn't send your enquiry automatically."}
          </p>
          <p className="mt-1 text-sm text-ink-600">
            Your details are still here. Send them in one tap using WhatsApp or email:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#128C7E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0f7a6e]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Send via WhatsApp
            </a>
            <a
              href={mailHref}
              className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 hover:border-brand-700"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Send via Email
            </a>
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {field("name", "Full name", <input type="text" autoComplete="name" className="field" value={values.name} onChange={set("name")} {...a11y("name")} />)}
        {field(
          "company",
          "Company name",
          <input type="text" autoComplete="organization" className="field" value={values.company} onChange={set("company")} {...a11y("company")} />,
        )}
        {field(
          "phone",
          "Phone / WhatsApp",
          <input type="tel" autoComplete="tel" inputMode="tel" className="field" value={values.phone} onChange={set("phone")} {...a11y("phone")} />,
        )}
        {field(
          "email",
          "Email address",
          <input type="email" autoComplete="email" className="field" value={values.email} onChange={set("email")} {...a11y("email")} />,
        )}
        {field(
          "grade",
          "CIDB grade",
          <select className="field" value={values.grade} onChange={set("grade")} {...a11y("grade")}>
            <option value="">Select grade</option>
            {grades.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>,
          { required: false },
        )}
        {field(
          "interest",
          "Support required",
          <select className="field" value={values.interest} onChange={set("interest")} {...a11y("interest")}>
            <option value="">Select a service</option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>,
        )}
      </div>

      {field(
        "message",
        "Project details",
        <textarea
          rows={6}
          className="field resize-y"
          value={values.message}
          onChange={set("message")}
          placeholder="Project name, discipline, location, current stage and key deadline (e.g. tender closing date)."
          {...a11y("message", true)}
        />,
        { required: true, hint: "The more detail you provide, the more specific our response." },
      )}

      {/* Honeypot — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-xs text-ink-500">
          Fields marked <span className="text-red-600">*</span> are required. Your details are used only to respond to
          this enquiry.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-brand-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send Enquiry <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
