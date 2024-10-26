import { message } from "antd";

interface ModalProps {
  content: React.ReactNode;
  duration?: number;
  className?: string;
}

export const successModal = ({
  content,
  duration = 5,
  className = "custom-message",
}: ModalProps): void => {
  message.success({
    content,
    duration,
    className,
  });
};

export const errorModal = ({
  content,
  duration = 5,
  className = "custom-message",
}: ModalProps): void => {
  message.error({
    content,
    duration,
    className,
  });
};
