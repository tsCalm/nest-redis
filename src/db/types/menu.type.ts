export type Menu = {
  id: number;
  name: string;
  price: number;
};

export type MenuCreateInput = Omit<Menu, 'id'>;
export type MenuUpdateInput = Partial<MenuCreateInput>;
