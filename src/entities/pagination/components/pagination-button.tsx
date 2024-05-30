import { Button } from "@mantine/core";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

export const PaginationButton = ({
  children,
  onClick,
  isActive = false,
  disabled = false,
}: IProps): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size="xs"
      className={`
      duration-150 border text-xs shadow-sm border-gray-300 flex items-center justify-center
      ${
        isActive
          ? "text-white bg-navy hover:bg-navy-500"
          : "bg-white text-navy hover:bg-gray-100 hover:text-gray-900"
      } `}
    >
      {children}
    </Button>
  );
};
