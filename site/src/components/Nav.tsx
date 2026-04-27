const MENU_ITEMS = [
  { label: "Catering", href: "#catering" },
  { label: "Studio", href: "#studio" },
  { label: "Vesna in the Kitchen", href: "#kitchen" },
  { label: "Menu Builder", href: "#menu-builder" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav
      className="fixed left-0 right-0 top-0 flex items-center justify-between"
      style={{ padding: "28px 48px", zIndex: 100 }}
    >
      <a
        href="#home"
        className="font-display text-muted no-underline"
        style={{ fontSize: "13px", letterSpacing: "0.25em" }}
      >
        Sir Henry Collective &nbsp;·&nbsp; Sinds 1994
      </a>

      <div className="hidden gap-10 lg:flex">
        {MENU_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link relative font-serif uppercase text-muted no-underline"
            style={{ fontSize: "11px", letterSpacing: "0.25em" }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
