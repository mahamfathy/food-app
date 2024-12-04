import { ICategory } from '../../categories/interfaces/ICategory';
import { ITag } from './ITag';

export interface IRecipe {
  id: number;
  name: string;
  imagePath: string;
  description: string;
  price: string;
  creationDate: string;
  modificationDate: string;
  category: ICategory[];
  tag: ITag[];
}
