"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";

import Modal from "~/components/generic/Modal";
import ProjectCreateForm from "~/components/project/ProjectCreateForm";
import { ModalContext } from "~/context/modal";

import styles from "~/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectCreate() {
  const { setIsModalOpen, isModalOpen } = useContext(ModalContext);
  const router = useRouter();

  useEffect(() => {
    setIsModalOpen(true);

    return () => {
      setIsModalOpen(false);
    };
  }, [setIsModalOpen]);

  const onCancel = () => {
    router.push("/project");
  };

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Modal
          title="Create Project"
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          onCancel={onCancel}
        >
          <ProjectCreateForm />
        </Modal>
      </main>
    </>
  );
}
