"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";

import { ProjectCreateContext } from "~/context/project";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <ProjectCreateContext.Provider value={{ setIsModalOpen, isModalOpen }}>
      <div>
        <Button type="primary" onClick={() => router.push("/project/create")}>
          Add Project
        </Button>
        {children}
      </div>
    </ProjectCreateContext.Provider>
  );
}

// Route: /project => page with button. Button.onClick => navigation to /project/create
// Route: /project/create => open modal
