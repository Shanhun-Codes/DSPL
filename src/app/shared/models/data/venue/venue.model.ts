import { Address } from '../shared/addres.model';

export interface Venue {
  id: string;
  name: string;
  address: Address;
  barType?: string;
  websiteLink?: string;
  capacity?: number;
  riskScore?: number;
  notes?: string;
  phone?: string;
  timezone?: string; // "America/Chicago"
  geo?: { lat: number; lng: number };
  amenities?: string[];
  contact?: {
    name?: string;
    email?: string;
  };
}
