export interface DisclosureProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}