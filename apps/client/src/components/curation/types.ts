export interface Curation {
  code: number;
  data: CurationsData[];
  status: string;
}

export interface CurationsData {
  id: number;
  isShow: boolean;
  spotList: Spot[];
  title: string;
}

export interface Spot {
  address: string;
  curation_image: string;
  description: string;
  featured_image: string;
  id: number;
  isParking: boolean;
  member: string;
  openingHour: string;
  subTitle: string;
  tagList: Tag[];
  title: string;
}

interface Tag {
  id: number;
  name: string;
}
