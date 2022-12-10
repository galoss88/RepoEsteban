/* istanbul ignore file */
import { IconProps } from '../components/Icon';

export interface IContact {
  fullName: string;
  phone: string;
  email: string;
}

export interface IPagination {
  total: number;
  current: number;
  prev: number | null;
  next: number | null;
}

export type TQuotationStatus = 'pending' | 'accepted' | 'finalized' | 'cancelled';

export interface IQuotation {
  _id: string;
  dateTime: string;
  status: TQuotationStatus;
  eventTypeId: string;
  address: string;
  peopleQuantity: number;
  childrenQuantity: number;
  estimatedPrice: number;
  negotiatedPrice: number;
  menuId: string;
  extraServices: string[];
  contact: IContact;
}

export interface IQuotationPaginated {
  quotations: IQuotation[];
  pagination: IPagination;
}

export interface ISchedule {
  date: string;
  events: IQuotation[];
  isActive: boolean;
}

export interface IDetailProps {
  quotation: IQuotation;
}

export interface IDetailQuotation {
  label: string;
  value: string;
  icon: IconProps;
}

export interface IDisabledDate {
  _id: string;
  date: string;
}

export enum QuotationStatus {
  Pendiente = 'pending',
  Aceptado = 'accepted',
  Finalizado = 'finalized',
  Cancelado = 'cancelled',
}
