export type Product = {
  images: string;
  name: string;
  price: number;
  location: string;
  timeago: string;
};

export type SearchBarProps = {
  selected: string;
  onSearch?: (q: string) => void;
};

export type ProductCardProps = {
  product: Product;
  onDetail?: (p: Product) => void;
};

export type DropDownProps = {
  selected: string;
  onSelect: (value: string) => void;
  options?: string[];
}; //component props의 타입 지정

export type ModalProps = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
}; // 모달 컴포넌트

export type ModalLikeProps = {
  onLikeChange?: (count: number) => void;
}; // 모달 관심 컴포넌트

export type ModalChatProps = {
  chatCount: number;
}; // 모달 채팅 컴포넌트
