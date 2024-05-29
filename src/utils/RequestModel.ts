export namespace RequestModel {
  export interface FormState<T, P> {
    data: T;
    error: {};
    loading?: boolean; //Generic in all pages for lshowing loader while request is being processed.
    isChecked?: boolean; //Generic in all pages to check if a checkbox is checked or not.
    dropdownValues?: Array<P>; //Generic in all pages to load any dropdown values [values can be a request result]
  }
}

export namespace ClientModel {
  export type TNewClient = {
    email: string;
    password: string;
    address: string;
    address2: string;
    city: string;
    zip: string;
    state: string;
    testvalue?: any;
  };

  export type AddClientFormState = {
    data: TNewClient;
    loading: boolean;
    isChecked: boolean;
    state: string[];
    error: Record<string, any>;
  };
}

export namespace SignupModel {
  export type TSignup = {};
}

export namespace AuthModel {
  export type TAuth = {
    firstName?: string;
    lastName?: string;
    middleName?: string;
    emailAddress: string;
    typeOfID?: string;
    idNumber?: string;
    mobilePhone?: string;
    password?: string;
  };
}
