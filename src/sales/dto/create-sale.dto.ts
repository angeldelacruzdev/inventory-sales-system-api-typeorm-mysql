import { Product } from './../../entities/product.entity';

export class CreateSaleDto {
  person: any;
  user: any;
  total: any;
  discount: any;
  cash: any;
  createdAt: Date;
  updatedAt: Date;
  products?: Product[];
  pruductsIds?: [];
  sales_products?: [];
  customer?:number
}
