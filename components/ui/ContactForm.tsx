// components/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";

const SUBJECTS = [
  "General Inquiry",
  "Brand Identity",
  "UI/UX",
  "Packaging Design",
] as const;

type Subject = (typeof SUBJECTS)[number];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: Subject;
  message: string;
}

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setData((d) => ({ ...d, [key]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }
      setStatus("sent");
      setData(initial);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex items-center justify-center p-8 sm:p-12">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white">Message sent</h3>
          <p className="mt-2 text-sm text-white/70">
            Thanks for reaching out. We'll get back within one business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-orange-400 underline hover:text-orange-300"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-8 sm:p-10">
      {/* Row 1 — First + Last name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <LineField
          label="First Name"
          value={data.firstName}
          onChange={update("firstName")}
          required
        />
        <LineField
          label="Last Name"
          value={data.lastName}
          onChange={update("lastName")}
        />
      </div>

      {/* Row 2 — Email + Phone */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <LineField
          label="Email"
          type="email"
          value={data.email}
          onChange={update("email")}
          required
        />
        <LineField
          label="Phone Number"
          type="tel"
          value={data.phone}
          onChange={update("phone")}
          placeholder="+91"
        />
      </div>

      {/* Subject radios */}
      <fieldset className="mt-8">
        <legend className="mb-3 text-sm text-white/80">
          Select Subject?
        </legend>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {SUBJECTS.map((s) => (
            <label
              key={s}
              className="flex cursor-pointer items-center gap-2 text-sm text-white/90"
            >
              <span className="relative flex h-4 w-4 items-center justify-center">
                <input
                  type="radio"
                  name="subject"
                  value={s}
                  checked={data.subject === s}
                  onChange={() => setData((d) => ({ ...d, subject: s }))}
                  className="peer sr-only"
                />
                <span className="h-4 w-4 rounded-full border border-white/60 transition peer-checked:border-white" />
                <span className="pointer-events-none absolute h-2 w-2 rounded-full bg-white opacity-0 transition peer-checked:opacity-100" />
              </span>
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div className="mt-8">
        <label className="mb-2 block text-sm text-white/80">
          Message
        </label>
        <input
          type="text"
          value={data.message}
          onChange={update("message")}
          placeholder="Write your message.."
          className="w-full border-b border-white/30 bg-transparent pb-2 text-sm text-white
                     placeholder-white/40 outline-none transition
                     focus:border-white"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-white/10 px-8 py-3 text-sm font-medium text-white
                     ring-1 ring-white/15 backdrop-blur transition
                     hover:bg-white/15 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

/* ─── Underline-only input field ─── */
function LineField({
  label,
  type = "text",
  required,
  ...rest
}: {
  label: string;
  type?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/80">
        {label}
      </label>
      <input
        type={type}
        required={required}
        {...rest}
        className="w-full border-b border-white/30 bg-transparent pb-2 text-sm text-white
                   placeholder-white/40 outline-none transition
                   focus:border-white"
      />
    </div>
  );
}