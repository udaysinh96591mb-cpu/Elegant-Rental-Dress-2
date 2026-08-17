export const WHATSAPP_PHONE = '917877993251';
export const DISPLAY_PHONE = '+91 7877993251';
export const STORE_EMAIL = 'elegantrentaldress0604@gmail.com';
export const INSTAGRAM_HANDLE = '@elegant_rentaldress';
export const INSTAGRAM_URL = 'https://www.instagram.com/elegant_rentaldress/';
export const STORE_ADDRESS = 'Shop no F-1&2 Khatushyam Plaza, Near Turtle School, Jagatpura, Jaipur, Rajasthan 302017';
export const MAPS_URL = 'https://maps.google.com/?q=Khatushyam+Plaza+Jagatpura+Jaipur';

/**
 * Generate customized WhatsApp booking and enquiry URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = `Hi Elegant Rental Dress 👋\nI'm interested in renting an outfit from your collection.\nPlease share available designs, prices and booking details.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export function getOutfitWhatsAppUrl(outfitName: string, code: string, date?: string, size?: string): string {
  let msg = `Hi Elegant Rental Dress 👋\nI'm interested in *${outfitName}* (Code: ${code}).`;
  if (date) msg += `\n📅 Event Date: ${date}`;
  if (size) msg += `\n👗 Size / Fit: ${size}`;
  msg += `\nPlease share current availability, rental terms and booking details.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}

export function getAppointmentWhatsAppUrl(data: { name: string; phone: string; date: string; time: string; outfitInterest: string }): string {
  const msg = `Hi Elegant Rental Dress 👋\nI would like to schedule a Store Visit & Trial at your Jagatpura showroom.\n\n👤 Name: ${data.name}\n📱 Phone: ${data.phone}\n📅 Preferred Date: ${data.date}\n⏰ Preferred Time: ${data.time}\n✨ Interested in: ${data.outfitInterest}\n\nPlease confirm my trial slot!`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Check whether store is currently open based on IST (UTC+5:30)
 * Mon - Sat: 11:00 AM - 8:30 PM
 * Sun: 12:00 PM - 7:00 PM
 */
export function getStoreStatus(): { isOpen: boolean; text: string; hours: string } {
  // Current time in IST
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));
  
  const day = istTime.getDay(); // 0 = Sunday, 1 = Monday...
  const hour = istTime.getHours();
  const minute = istTime.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  if (day === 0) {
    // Sunday: 12:00 PM (720 min) to 7:00 PM (1140 min)
    const openTime = 12 * 60;
    const closeTime = 19 * 60;
    const isOpen = timeInMinutes >= openTime && timeInMinutes <= closeTime;
    return {
      isOpen,
      text: isOpen ? 'Open Today Until 7:00 PM' : 'Closed • Opens Sunday at 12:00 PM',
      hours: 'Sunday: 12:00 PM - 7:00 PM'
    };
  } else {
    // Mon-Sat: 11:00 AM (660 min) to 8:30 PM (1230 min)
    const openTime = 11 * 60;
    const closeTime = 20 * 60 + 30;
    const isOpen = timeInMinutes >= openTime && timeInMinutes <= closeTime;
    return {
      isOpen,
      text: isOpen ? 'Open Today Until 8:30 PM' : 'Closed • Opens 11:00 AM',
      hours: 'Mon - Sat: 11:00 AM - 8:30 PM'
    };
  }
}
