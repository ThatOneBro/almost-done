"use client";

import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export const ModalContext = createContext<{
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}>({ setIsModalOpen: () => void 0, isModalOpen: false });
