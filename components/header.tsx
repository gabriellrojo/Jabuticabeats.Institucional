"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/sobre", label: "Sobre" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const spring = { type: "spring" as const, stiffness: 420, damping: 36, mass: 0.7 };

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3">
          <Image src="/images/header-logo.png" alt="Jabuticabeats" width={220} height={120} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[20px] font-satoshi-regular text-[#975FB8] hover:text-[#6A1B9A] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 hover:bg-neutral-50 transition-colors"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <motion.span className="relative block h-5 w-5" initial={false} aria-hidden>
            {/* top */}
            <motion.span
              className="absolute left-0 right-0 h-0.5 bg-black rounded-full"
              style={{ top: 2 }}
              animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={spring}
            />
            {/* mid */}
            <motion.span
              className="absolute left-0 right-0 h-0.5 bg-black rounded-full"
              style={{ top: 9 }}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            {/* bottom */}
            <motion.span
              className="absolute left-0 right-0 h-0.5 bg-black rounded-full"
              style={{ top: 16 }}
              animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={spring}
            />
          </motion.span>
        </button>
      </div>

      {/* Mobile: tela inteira branca */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              id="mobile-menu"
              ref={panelRef}
              className="absolute inset-0 h-full w-full bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={spring}
            >
              {/* Topo laranja com texto branco */}
              <div className="p-4 flex items-center justify-between bg-[#F05E2C] text-white">
                <span className="font-satoshi-regular text-[16px]">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="h-12 w-12 inline-flex items-center justify-center rounded-lg hover:bg-white/10 text-2xl leading-none"
                  aria-label="Fechar menu"
                  title="Fechar"
                >
                  ×
                </button>
              </div>

              {/* Itens iguais ao desktop + borda inferior roxa (exceto no último) */}
              <nav className="p-4 bg-white">
                <ul className="flex flex-col">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...spring, delay: i * 0.04 }}
                      className="border-b border-[#E1D1EB] last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-4 text-[20px] font-satoshi-regular
                                   text-[#975FB8] hover:text-[#6A1B9A]
                                   hover:bg-[#6A1B9A]/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
