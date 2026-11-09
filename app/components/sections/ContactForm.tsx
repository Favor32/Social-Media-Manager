"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full rounded-xl border border-chocolate/30 bg-paper px-4 py-3 text-chocolate transition-colors placeholder:text-muted/60 focus:border-copper focus:outline-none focus-visible:outline-none focus:ring-1 focus:ring-copper";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    // Without JavaScript the form still posts directly to Formspree.
    <form
      action={site.formEndpoint}
      method="POST"
      onSubmit={onSubmit}
      className="rounded-3xl bg-cream p-8 text-chocolate md:p-10"
    >
      <div>
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-none`}
        />
      </div>

      {/* Hidden spam trap: real visitors never see or fill this. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-dark mt-8 w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite" className="mt-4 min-h-6 text-sm">
        {status === "sent" && (
          <p className="text-copper">
            Thank you. Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-copper">
            Your message could not be sent. Please try again, or email{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>{" "}
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
