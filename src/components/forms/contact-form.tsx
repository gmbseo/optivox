"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";

type ContactFormProps = {
  defaultIntent?: "audit" | "consultation" | "general";
};

export function ContactForm({ defaultIntent = "audit" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      intent: defaultIntent,
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Production: connect to your CRM, email API, or form backend
    console.info("Contact form submission:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="size-12 text-accent" aria-hidden="true" />
        <h3 className="text-xl font-semibold">Thank you—we&apos;ll be in touch soon.</h3>
        <p className="text-muted-foreground text-pretty">
          We&apos;ve received your request. A member of our team will review your visibility
          and reach out within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <input type="hidden" {...register("intent")} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && (
            <p className="text-sm text-destructive" role="alert">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            placeholder="Your business"
            {...register("businessName")}
            aria-invalid={!!errors.businessName}
          />
          {errors.businessName && (
            <p className="text-sm text-destructive" role="alert">{errors.businessName.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@business.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive" role="alert">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-destructive" role="alert">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="website">Website (optional)</Label>
        <Input
          id="website"
          type="url"
          placeholder="https://yourbusiness.com"
          {...register("website")}
          aria-invalid={!!errors.website}
        />
        {errors.website && (
          <p className="text-sm text-destructive" role="alert">{errors.website.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="businessGoals">Business Goals</Label>
        <Textarea
          id="businessGoals"
          rows={4}
          placeholder="What are you hoping to achieve? More calls, map rankings, website leads..."
          {...register("businessGoals")}
          aria-invalid={!!errors.businessGoals}
        />
        {errors.businessGoals && (
          <p className="text-sm text-destructive" role="alert">{errors.businessGoals.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isSubmitting ? "Sending..." : "Request Free Google Visibility Audit"}
      </Button>

      <p className="text-xs text-muted-foreground text-pretty">
        By submitting, you agree to be contacted about your visibility audit. We never sell
        your information.
      </p>
    </form>
  );
}
