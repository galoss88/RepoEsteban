/* istanbul ignore file */
export interface ISalad {
  _id: string;
  description: string;
  name: string;
  img_url: string;
  isActive: boolean;
}

export type ISaladListState = {
  status: 'idle' | 'loading' | 'failed';
  saladList: ISalad[];
};
