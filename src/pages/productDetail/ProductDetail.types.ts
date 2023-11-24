export interface Accomodation {
  id: number;
  name: string;
  type: string;
  description: string;
  region: string;
  district: string;
  accomodation_image: { url: string }[];
}
