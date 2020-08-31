import { Item } from "./item.model";

export interface ItemAPIResponse {
  status: number;
  results: Item[];
  resultsLength: number;
}
