'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Pesan dari ${formData.get('name')} — Senja Coffee`);
    const body = encodeURIComponent(`Nama: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`);
    window.location.href = `mailto:halo@senjacoffee.id?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return sent ? (
    <div className="form-success" role="status"><span className="success-mark">✓</span><h3>Email siap dikirim.</h3><p>Aplikasi email kamu sudah dibuka dengan pesan yang terisi. Kirim dari sana agar tim Senja bisa membalasmu.</p><button className="text-button" onClick={() => setSent(false)}>Tulis pesan lain ↗</button></div>
  ) : (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Nama kamu<input name="name" autoComplete="name" placeholder="Nama lengkap" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="kamu@email.com" required /></label>
      <label>Cerita sedikit<textarea name="message" rows="4" placeholder="Ada yang ingin ditanyakan atau diceritakan?" required /></label>
      <button className="button button-dark" type="submit">Kirim pesan <span aria-hidden="true">↗</span></button>
    </form>
  );
}
