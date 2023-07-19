import { ObjectId } from "mongoose";

export class Product {

  id?: any;
  name?: string;
  description?: string;
  price?: Number;
  published?: boolean;
  category?: string;
  img_id?:ObjectId
}
