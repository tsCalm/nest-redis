import { Injectable } from '@nestjs/common';
import { MenuCreateInput, MenuUpdateInput } from '../db/types/Menu.type';
import { MenuMemoryDatabase } from '../db';

@Injectable()
export class MenuService {
  findAll() {
    return MenuMemoryDatabase.findAll();
  }

  findOne(id: number) {
    return MenuMemoryDatabase.findOne(id);
  }

  create(menuCreateInput: MenuCreateInput) {
    return MenuMemoryDatabase.create(menuCreateInput);
  }

  update(id: number, menuUpdateInput: MenuUpdateInput) {
    return MenuMemoryDatabase.update(id, menuUpdateInput);
  }

  delete(id: number) {
    return MenuMemoryDatabase.delete(id);
  }
}
