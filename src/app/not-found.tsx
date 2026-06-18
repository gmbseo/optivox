import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-narrow flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Page not found</h1>
        <p className="max-w-md text-muted-foreground text-pretty">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
