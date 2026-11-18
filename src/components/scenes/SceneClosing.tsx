"use client";

import Image from "next/image";
import { useState } from "react";

import { DemoRequestModal } from "@/components/contact/DemoRequestModal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

import { SceneShell } from "./SceneShell";

export function SceneClosing() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <SceneShell
      id="demo"
      className="md:min-h-[90svh]"
      aria-labelledby="close-title"
    >
      <div className="container-page flex flex-col items-center py-6 text-center md:py-16">
        <Image
          src={siteConfig.brand.logoLight}
          alt=""
          width={180}
          height={62}
          className="mb-8 h-auto w-24 opacity-90 md:mb-10 md:w-36"
          data-close-logo
          aria-hidden
        />

        <h2
          id="close-title"
          data-close-title
          className="font-display text-scene font-semibold text-balance text-ivory"
        >
          El futuro de la gestión.
          <span className="mt-2 block">Todo conectado.</span>
        </h2>

        <p
          data-close-sub
          className="mt-5 max-w-lg text-pretty text-sub text-muted md:mt-6"
        >
          Descubre una nueva forma de trabajar, gestionar y comunicarte con
          tus comunidades.
        </p>

        <div data-close-ctas className="mt-8 flex justify-center sm:mt-10">
          <Magnetic className="block w-full max-w-[17.5rem]">
            {siteConfig.demoRequestUrl ? (
              <Button
                as="a"
                href={siteConfig.demoRequestUrl}
                variant="primary"
                className="w-full"
              >
                Contacta con nosotros
              </Button>
            ) : (
              <Button
                type="button"
                variant="primary"
                className="w-full"
                onClick={() => setDemoOpen(true)}
              >
                Contacta con nosotros
              </Button>
            )}
          </Magnetic>
        </div>
      </div>

      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </SceneShell>
  );
}
