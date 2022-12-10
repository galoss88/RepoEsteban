import { createAsyncThunk } from "@reduxjs/toolkit";
import { IItem } from "..";
import { createItem } from "../../../api/product";

type CreateItemProps = {
  list: IItem[];
  product: IItem
}

export const createItemAsync = createAsyncThunk('product/create', async({list, product}: CreateItemProps) => {
  const data = await createItem(list, product);
  return data;
})