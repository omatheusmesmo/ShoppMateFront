import { ShoppingListResponseDTO, UserResponseDTO } from '../../list/interfaces/shopping-list.interface';

export interface ListPermissionRequestDTO {
  idList: number;
  idUser: number;
  permission: 'READ' | 'WRITE';
}

export interface ListPermissionResponseDTO {
  id: number;
  shoppingListResponseDTO: ShoppingListResponseDTO;
  userResponseDTO: UserResponseDTO;
  permission: 'READ' | 'WRITE';
}
