/* istanbul ignore file */
export interface IDessert {
  _id: string;
  description: string;
  name: string;
  img_url: string;
  isActive: boolean;
}

export type IDessertListState = {
  status: 'idle' | 'loading' | 'failed';
  dessertList: IDessert[];
};
