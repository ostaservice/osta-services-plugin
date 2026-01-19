export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, city, service, address, time } = req.body;

  const message = `حجز خدمة من Osta Services\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالمدينة: ${city}\nالخدمة: ${service}\nالعنوان: ${address}\nالوقت: ${time || "غير محدد"}\n\nخدمة 24 ساعة`;

  const whatsappLink =
    "https://wa.me/971568676036?text=" + encodeURIComponent(message);

  res.status(200).json({
    message: "Booking link generated",
    whatsapp_link: whatsappLink
  });
}
