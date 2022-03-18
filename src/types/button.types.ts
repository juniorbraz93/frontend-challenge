export interface IButtonProps {
  data: {id: React.Key | null | undefined};
  loading: boolean | null | undefined;
  onPressAddItem: (arg0: any, arg1: string) => void;
  setItem: any;
}
