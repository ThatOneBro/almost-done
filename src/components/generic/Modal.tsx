"use client";

import { useEffect } from "react";
import { Modal as AntModal } from "antd";

import { usePrevious } from "~/hooks";

const Modal: React.FC<{
  title: string;
  setIsModalOpen: (open: boolean) => void;
  isModalOpen: boolean;
  handleOk?: () => void;
  onShow?: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
}> = ({
  title = "Modal",
  setIsModalOpen = (_open: boolean) => void 0,
  isModalOpen = false,
  handleOk = () => void 0,
  onShow = () => void 0,
  onCancel = () => void 0,
  children,
}) => {
  const wasOpen = usePrevious(isModalOpen);
  useEffect(() => {
    if (wasOpen === null) return;
    if (isModalOpen && !wasOpen) {
      onShow();
    }
  }, [isModalOpen]);

  const handleCancel = () => {
    setIsModalOpen(false);
    onCancel();
  };

  return (
    <>
      <AntModal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </AntModal>
    </>
  );
};

export default Modal;
