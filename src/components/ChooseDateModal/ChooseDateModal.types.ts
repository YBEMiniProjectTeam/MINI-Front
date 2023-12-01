export interface DisclosureProps {
  isOpen: boolean;
  onClose: () => void;
  setSelectedDate: React.Dispatch<React.SetStateAction<string[] | null>>;
  isFromSearchResult: boolean;
  personCount?: number;
  setPersonCount?: React.Dispatch<React.SetStateAction<number>>;
  refetch?: any;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}
