export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  category_name: string;
  items: MenuItem[];
}

export interface ServiceMenu {
  service_name: string;
  served_hours: string;
  categories: MenuCategory[];
}

export interface InRoomDiningData {
  restaurant: string;
  menu_title: string;
  disclaimers: string[];
  service_menus: ServiceMenu[];
}
