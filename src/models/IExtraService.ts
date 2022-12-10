export enum PricingType {
  UNIQUE = 'Precio único',
  PER_ADULT = 'Por adulto',
  PER_PERSON_INCLUDING_CHILDREN = 'Por persona, incluyendo niños',
}

export interface IExtraService {
  _id: string;
  name: string;
  price: number;
  pricingType: string;
  createdAt: string;
  updatedAt: string;
}
