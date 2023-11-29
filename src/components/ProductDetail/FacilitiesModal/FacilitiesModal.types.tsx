export interface FacilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: {
    airConditioner: boolean;
    bathFacility: boolean;
    bathtub: boolean;
    cookware: boolean;
    diningTable: boolean;
    hairDryer: boolean;
    homeTheater: boolean;
    internet: boolean;
    pc: boolean;
    refrigerator: boolean;
    sofa: boolean;
    toiletries: boolean;
    tv: boolean;
  };
}
