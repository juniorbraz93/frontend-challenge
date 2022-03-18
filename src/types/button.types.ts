export interface IButtonProps {
  id(id: any): string;
  quantity: any;
  image: any;
  name: any;
  country: any;
  type: any;
  volume: any;
  size: any;
  priceNonMember: any;
  priceMember: any;
  data: {id: React.Key | null | undefined};
  loading: boolean | null | undefined;
  onPressAddItem: (arg0: any, arg1: string) => void;
  setItem: any;
}
