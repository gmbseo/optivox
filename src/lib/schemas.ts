import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  businessName: z.string().min(2, "Please enter your business name."),
  website: z.string().refine((val) => val === "" || /^https?:\/\/.+/.test(val), {
    message: "Please enter a valid website URL.",
  }),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  businessGoals: z
    .string()
    .min(10, "Please describe your goals in at least 10 characters."),
  intent: z.enum(["audit", "consultation", "general"]).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
