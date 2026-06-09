export const navbarStyles = {
  header:
    "fixed top-0 left-0 z-50 w-full transition-all duration-500",

  container:
    "mx-auto flex max-w-7xl items-center justify-between px-8 py-5",

  logo:
    "text-xl font-bold text-white",

  desktopNav:
    "hidden gap-8 text-white md:flex",

  desktopLink:
    "transition duration-300 hover:text-[#d4b483]",

  languageSwitcher:
    "hidden text-white md:block",

  mobileMenuButton:
    "text-3xl text-white md:hidden",

  mobileOverlay:
    "fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#2f241c]",

  mobileCloseButton:
    "absolute right-8 top-8 text-4xl text-white",

  mobileLinksContainer:
    "flex flex-col items-center gap-8",

  mobileLink:
    "text-2xl font-semibold text-white transition duration-300 hover:text-[#d4b483]",
};