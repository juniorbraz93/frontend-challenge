export interface IBodyProps {
  id: number;
  image: string;
  name: string;
  country: string;
  type: string;
  volume: string;
  priceNonMember: number;
  priceMember: number;
  quantity: number;
}

export interface ISetItemProps {
  data: any;
  key?: string;
}
