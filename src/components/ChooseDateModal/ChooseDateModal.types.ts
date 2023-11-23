export interface DisclosureProps {
    isOpen: boolean;
    onClose: () => void;
    setSelectedDate: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    isFromSearchResult: boolean;
    personCount?: number;
    setPersonCount?: React.Dispatch<React.SetStateAction<number>>;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}