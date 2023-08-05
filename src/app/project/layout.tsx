"use client";

import { useRouter } from "next/navigation";
import { Button } from "antd";

import ModalProvider from "~/components/generic/ModalProvider";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <ModalProvider>
      <div>
        <Button type="primary" onClick={() => router.push("/project/create")}>
          Add Project
        </Button>
        {children}
      </div>
    </ModalProvider>
  );
}
