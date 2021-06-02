export interface ButtonProps {
  text?: any;
  isLoading?: boolean;
  backgroundColor?: string;
  textColor?: string;
  id?: number;
  onClick: () => void;
  className?: string;
}
