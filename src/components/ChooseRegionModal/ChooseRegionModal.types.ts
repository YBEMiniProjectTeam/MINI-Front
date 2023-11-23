export interface DisclosureProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDistrict: string;
    setSelectedDistrict: React.Dispatch<React.SetStateAction<string>>;
}

export interface SideTabProps {
    isSelected: boolean;
}

export interface DistrictListProps {
    isSelected: boolean;
}