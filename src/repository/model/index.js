import {model} from "mongoose";
import {ProductSchema} from "../schema";

export const ProductModel = model('product', ProductSchema);
