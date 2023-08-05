"use client";

import { useState } from "react";
import { ModalContext } from "~/context/modal";

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ setIsModalOpen, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
