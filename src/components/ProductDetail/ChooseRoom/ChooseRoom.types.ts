export interface ChooseRoomProps {
  room: {
    id: number;
    name: string;
    price: number;
    capacity: number;
    capacity_max: number;
    stock_quantity: number;
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
  };
}