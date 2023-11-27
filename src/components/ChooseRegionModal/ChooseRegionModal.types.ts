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

export interface Region {
    id: number;
    name: string;
}

export interface District {
    id: number;
    name: string;
}