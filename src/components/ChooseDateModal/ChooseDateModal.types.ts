export interface DisclosureProps {
    isOpen: boolean;
    onClose: () => void;
    setSelectedDate: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}