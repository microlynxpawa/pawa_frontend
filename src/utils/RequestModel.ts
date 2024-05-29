export interface FormState<T, P> {
  data: T;
  loading: boolean;
  isChecked?: boolean;
  state?: Array<P>;
  error: {};
}

export type TNewClient = {
  email: string;
  password: string;
  address: string;
  address2: string;
  city: string;
  zip: string;
  state: string;
};

export type AddClientFormState = {
  data: TNewClient;
  loading: boolean;
  isChecked: boolean;
  state: string[];
  error: Record<string, any>;
};
