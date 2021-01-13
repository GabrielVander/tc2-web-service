import {ProductModel} from "../repository/model";

export const getAll = () => ProductModel.find({});

export const add = (product) => ProductModel.create(product);

export const getById = (id) => ProductModel.findById(id);

export const deleteById = (id) => ProductModel.deleteOne({ _id: id });
