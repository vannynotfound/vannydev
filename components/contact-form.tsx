"use client"

import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = {
  type: "success" | "error"
  message: string
} | null

type Web3FormsResponse = {
  success?: boolean
  message?: string
}

function isWeb3FormsResponse(value: unknown): value is Web3FormsResponse {
  return typeof value === "object" && value !== null
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<FormStatus>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const accessKey = formData.get("access_key")

    if (typeof accessKey !== "string" || !accessKey || accessKey.startsWith("YOUR-")) {
      setStatus({
        type: "error",
        message:
          "This form isn’t connected yet — email me directly at jovannydeleon2906@gmail.com.",
      })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const payload: unknown = await response.json()

      if (
        !response.ok ||
        !isWeb3FormsResponse(payload) ||
        payload.success !== true
      ) {
        setStatus({
          type: "error",
          message:
            isWeb3FormsResponse(payload) && typeof payload.message === "string"
              ? payload.message
              : "Something went wrong. Please email me directly instead.",
        })
        return
      }

      form.reset()
      setStatus({
        type: "success",
        message: "Thanks — your message is on its way. I’ll reply soon.",
      })
    } catch {
      setStatus({
        type: "error",
        message: "Couldn’t reach the server. Please email me directly instead.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      className="contact-form contact-form--shadcn"
      id="shadcn-contact-form"
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="access_key"
        value="90ec3b82-6184-4ba8-b42b-ff852efab3b1"
      />
      <input
        type="hidden"
        name="subject"
        value="New message from your portfolio"
      />
      <input type="hidden" name="from_name" value="VannyDev Portfolio" />
      <div className="field">
        <Label htmlFor="cf-name">Your name</Label>
        <Input
          type="text"
          id="cf-name"
          name="name"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          placeholder="Juan Dela Cruz"
        />
      </div>
      <div className="field">
        <Label htmlFor="cf-email">Your email</Label>
        <Input
          type="email"
          id="cf-email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="field">
        <Label htmlFor="cf-message">Message</Label>
        <Textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          placeholder="Tell me about your project…"
        />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-botcheck">Leave this empty</label>
        <input
          type="checkbox"
          id="cf-botcheck"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <Button
        type="submit"
        className="contact-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
      <p
        className={`form-status${status ? ` show ${status.type === "success" ? "ok" : "bad"}` : ""}`}
        role="status"
        aria-live="polite"
      >
        {status?.message}
      </p>
    </form>
  )
}
