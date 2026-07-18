"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { form } from "@/content/contact";
import { site } from "@/content/site";

type FieldErrors = Partial<Record<"name" | "company" | "email" | "practice" | "roleLevel" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [practice, setPractice] = useState("");
  const [roleLevel, setRoleLevel] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const values = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      practice,
      roleLevel,
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""), // honeypot
    };

    const nextErrors: FieldErrors = {};
    if (!values.name) nextErrors.name = form.validation.name;
    if (!values.company) nextErrors.company = form.validation.company;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = form.validation.email;
    if (!values.practice) nextErrors.practice = form.validation.practice;
    if (!values.roleLevel) nextErrors.roleLevel = form.validation.roleLevel;
    if (values.message.length < 10) nextErrors.message = form.validation.message;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
          {form.success.heading}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone">{form.success.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users, present for bots */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{form.fields.name.label}</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder={form.fields.name.placeholder}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{form.fields.company.label}</Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder={form.fields.company.placeholder}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company ? (
            <p id="company-error" className="text-xs text-destructive">
              {errors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">{form.fields.email.label}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={form.fields.email.placeholder}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">
            {form.fields.phone.label}{" "}
            <span className="font-normal text-stone">(optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={form.fields.phone.placeholder}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="practice-select">{form.fields.practice.label}</Label>
          <Select value={practice} onValueChange={setPractice}>
            <SelectTrigger
              id="practice-select"
              className="w-full"
              aria-invalid={!!errors.practice}
            >
              <SelectValue placeholder={form.fields.practice.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {form.fields.practice.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.practice ? <p className="text-xs text-destructive">{errors.practice}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="role-level-select">{form.fields.roleLevel.label}</Label>
          <Select value={roleLevel} onValueChange={setRoleLevel}>
            <SelectTrigger
              id="role-level-select"
              className="w-full"
              aria-invalid={!!errors.roleLevel}
            >
              <SelectValue placeholder={form.fields.roleLevel.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {form.fields.roleLevel.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.roleLevel ? <p className="text-xs text-destructive">{errors.roleLevel}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{form.fields.message.label}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder={form.fields.message.placeholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="border-l border-destructive pl-4 text-sm text-destructive" role="alert">
          {form.error}{" "}
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
        {status === "submitting" ? form.submitting : form.submit}
      </Button>
    </form>
  );
}
