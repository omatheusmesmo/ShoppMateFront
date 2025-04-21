import { ItemResponseDTO } from './item.interface';
import { ShoppingListResponseDTO } from '../../list/interfaces/shopping-list.interface';

export interface ListItemRequestDTO {
  listId: number;
  itemId: number;
  quantity: number;
}

export interface ListItemResponseDTO {
  idListItem: number;
  shoppingList: ShoppingListResponseDTO;
  item: ItemResponseDTO;
  quantity: number;
  purchased: boolean;
}
