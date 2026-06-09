export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Despre Muzeu", href: "/about" },
  { label: "Colecții", href: "/gallery" },
  { label: "Activități", href: "/activities" },
  { label: "Tur Virtual", href: "/virtual-tour" },
  { label: "Contact", href: "/contact" },
];