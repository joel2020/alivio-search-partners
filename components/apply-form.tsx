"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { applyForm } from "@/content/positions";
import { site } from "@/content/site";

type FieldErrors = Partial<Record<"name" | "email" | "linkedin" | "note", string>>;

export function ApplyForm({ positionSlug, positionTitle }: { positionSlug: string; positionTitle: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = {
      position: positionSlug,
      positionTitle,
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      linkedin: String(data.get("linkedin") ?? "").trim(),
      resume: String(data.get("resume") ?? "").trim(),
      note: String(data.get("note") ?? "").trim(),
      website: String(data.get("website") ?? ""), // honeypot
    };

    const nextErrors: FieldErrors = {};
    if (!values.name) nextErrors.name = applyForm.validation.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = applyForm.validation.email;
    if (!values.linkedin && !values.resume) nextErrors.linkedin = applyForm.validation.linkedin;
    if (values.note.length < 10) nextErrors.note = applyForm.validation.note;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-t border-line pt-4" role="status">
        <p className="font-display text-headline-sm mt-6 font-medium text-ink">
          {applyForm.success.heading}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone">{applyForm.success.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="apply-website">Website</label>
        <input id="apply-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="apply-name">{applyForm.fields.name.label}</Label>
          <Input
            id="apply-name"
            name="name"
            autoComplete="name"
            placeholder={applyForm.fields.name.placeholder}
            aria-invalid={!!errors.name}
          />
          {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="apply-email">{applyForm.fields.email.label}</Label>
          <Input
            id="apply-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={applyForm.fields.email.placeholder}
            aria-invalid={!!errors.email}
          />
          {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="apply-phone">
            {applyForm.fields.phone.label} <span className="font-normal text-stone">(optional)</span>
          </Label>
          <Input
            id="apply-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={applyForm.fields.phone.placeholder}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="apply-linkedin">{applyForm.fields.linkedin.label}</Label>
          <Input
            id="apply-linkedin"
            name="linkedin"
            type="url"
            placeholder={applyForm.fields.linkedin.placeholder}
            aria-invalid={!!errors.linkedin}
          />
          {errors.linkedin ? <p className="text-xs text-destructive">{errors.linkedin}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="apply-resume">{applyForm.fields.resume.label}</Label>
        <Input id="apply-resume" name="resume" type="url" placeholder={applyForm.fields.resume.placeholder} />
        <p className="text-xs text-stone">{applyForm.fields.resume.hint}</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="apply-note">{applyForm.fields.note.label}</Label>
        <Textarea
          id="apply-note"
          name="note"
          rows={4}
          placeholder={applyForm.fields.note.placeholder}
          aria-invalid={!!errors.note}
        />
        {errors.note ? <p className="text-xs text-destructive">{errors.note}</p> : null}
      </div>

      {status === "error" ? (
        <p className="border-l border-destructive pl-4 text-sm text-destructive" role="alert">
          {applyForm.error}{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-2">
            {site.email}
          </a>
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-12 w-full bg-ink px-8 text-sm text-paper hover:bg-terra sm:w-auto"
      >
        {status === "submitting" ? applyForm.submitting : applyForm.submit}
      </Button>
    </form>
  );
}
