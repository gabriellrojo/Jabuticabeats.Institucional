"use client";

import {
  SiInstagram,
  SiTiktok,
  SiSpotify,
  SiYoutube,
  SiWhatsapp,
} from "react-icons/si";

const PURPLE = "#6A1B9A";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-center py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Ícones oficiais – roxo e na horizontal */}
        <ul className="mb-[40px] flex items-center justify-center gap-8 text-[#6A1B9A]">
          <li>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex hover:opacity-80 transition-opacity"
            >
              <SiInstagram size={26} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="TikTok"
              className="inline-flex hover:opacity-80 transition-opacity"
            >
              <SiTiktok size={26} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Spotify"
              className="inline-flex hover:opacity-80 transition-opacity"
            >
              <SiSpotify size={26} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="YouTube"
              className="inline-flex hover:opacity-80 transition-opacity"
              title="YouTube"
            >
              {/* o vetor oficial já traz o triângulo “vazado” */}
              <SiYoutube size={26} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="WhatsApp"
              className="inline-flex hover:opacity-80 transition-opacity"
            >
              <SiWhatsapp size={26} />
            </a>
          </li>
        </ul>

        {/* e-mail clicável */}
        <a
          href="mailto:jabuticabeats@gmail.com"
          className="font-satoshi-regular text-[20px] text-[#6A1B9A] pt-10"
        >
          jabuticabeats@gmail.com
        </a>

        <p className="font-satoshi-regular mt-3 text-[20px] text-[#6A1B9A]">
          Copyright © {year} by Jabuticabeats. Todos os direitos reservados.
        </p>
      </div>

      <style jsx global>{`
        :root {
          --jb-purple: ${PURPLE};
        }
      `}</style>
    </footer>
  );
}