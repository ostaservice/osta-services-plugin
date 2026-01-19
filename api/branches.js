export default function handler(req, res) {
  const branches = [
    { city: "Dubai", address: "Zabeel, Dubai", phone: "0568676036" },
    { city: "Al Ain", address: "Al Ain", phone: "0568676036" },
    { city: "Ajman", address: "Emirates City B9, Ajman", phone: "0568676036" },
    { city: "Umm Al Quwain", address: "Umm Al Quwain", phone: "0568676036" }
  ];
  res.status(200).json(branches);
}
