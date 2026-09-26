import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

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
import { DONATE_URL, ORG } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Engera USA" },
      {
        name: "description",
        content:
          "Get in touch with Engera USA about donating, volunteering, partnerships or our health facilities in Ethiopia.",
      },
      { property: "og:title", content: "Contact — Engera USA" },
      {
        property: "og:description",
        content: "Questions about our work in the Gurage Zone and Oromia? Send us a message.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [topic, setTopic] = useState("general");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    // No backend connected yet: hand off to email so nothing is silently lost.
    const data = new FormData(form);
    const body = `Topic: ${topic}\n\n${String(data.get("message") ?? "")}\n\n— ${String(
      data.get("name") ?? "",
    )} (${String(data.get("email") ?? "")})`;
    window.location.href = `mailto:${ORG.email}?subject=${encodeURIComponent(
      `Website enquiry: ${topic}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app to send the message.");
    form.reset();
    setTopic("general");
    setSubmitting(false);
  };

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16 lg:px-8">
          <div className="max-w-3xl border-l-4 border-accent pl-6 md:pl-8">
            <p className="eyebrow text-accent">Contact</p>
            <h1 className="display-xl mt-4 text-4xl text-primary md:text-5xl">
              Start a conversation with us
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Questions about the facilities, giving, volunteering or partnerships — the form on
              this page reaches the right person fastest.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <form onSubmit={handleSubmit} className="border border-border bg-card p-7 shadow-card md:p-9">
            <h2 className="font-display text-2xl text-primary">Send a message</h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="topic">What's this about?</Label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger id="topic">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General enquiry</SelectItem>
                  <SelectItem value="donating">Donating</SelectItem>
                  <SelectItem value="volunteering">Volunteering</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="press">Press &amp; media</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} required />
            </div>

            <Button type="submit" variant="donate" className="mt-7" disabled={submitting}>
              Send message
            </Button>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Your message opens in your email app and is sent to {ORG.email}.
            </p>
          </form>

          <div className="space-y-8">
            <div className="rule-accent">
              <p className="eyebrow text-accent">Email</p>
              <p className="mt-2 font-display text-xl text-primary">{ORG.email}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                The quickest route to the right person is the form on this page.
              </p>
            </div>


            <div className="rule-accent">
              <p className="eyebrow text-accent">Sister organization</p>
              <a
                href={ORG.sister}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm text-muted-foreground hover:text-accent"
              >
                engera.org
              </a>
            </div>

            <div className="border border-border bg-primary p-7 text-primary-foreground">
              <h2 className="font-display text-2xl">Ready to give?</h2>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Donations go straight to the facilities and the staff who run them.
              </p>
              <Button asChild variant="donate" className="mt-6">
                <a href={DONATE_URL} target="_blank" rel="noreferrer">
                  Donate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
