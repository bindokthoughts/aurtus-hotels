import { InRoomDiningData, ServiceMenu, MenuCategory, MenuItem } from '@/types/dining';

/**
 * Strips citation tags like `[cite: 2]` from text strings.
 */
export function sanitizeText(text: string | undefined): string {
  if (!text) return '';
  return text.replace(/\s*\[cite:\s*\d+\]/gi, '').trim();
}

/**
 * Formats price strings with currency symbol.
 * e.g., "249" -> "₹249"
 *       "899/499" -> "₹899 / ₹499"
 *       "MRP" -> "MRP"
 */
export function formatPrice(priceStr: string | undefined): string {
  const cleanPrice = sanitizeText(priceStr);
  if (!cleanPrice) return '';
  if (cleanPrice.toUpperCase() === 'MRP') return 'MRP';

  if (cleanPrice.includes('/')) {
    const parts = cleanPrice.split('/').map(p => p.trim());
    return parts.map(p => (isNaN(Number(p)) ? p : `₹${p}`)).join(' / ');
  }

  return isNaN(Number(cleanPrice)) ? cleanPrice : `₹${cleanPrice}`;
}

/**
 * Processes and cleans raw JSON data into clean InRoomDiningData object.
 */
export function processDiningData(rawData: unknown): InRoomDiningData {
  const data = rawData as InRoomDiningData;

  return {
    restaurant: sanitizeText(data.restaurant),
    menu_title: sanitizeText(data.menu_title),
    disclaimers: (data.disclaimers || []).map(d => sanitizeText(d)),
    service_menus: (data.service_menus || []).map((service: ServiceMenu) => ({
      service_name: sanitizeText(service.service_name),
      served_hours: sanitizeText(service.served_hours),
      categories: (service.categories || []).map((cat: MenuCategory) => ({
        category_name: sanitizeText(cat.category_name),
        items: (cat.items || []).map((item: MenuItem) => ({
          name: sanitizeText(item.name),
          price: formatPrice(item.price),
          description: item.description ? sanitizeText(item.description) : undefined,
        })),
      })),
    })),
  };
}
