export namespace RequestModel {
  export interface FormState<T, P> {
    data: T;
    error: {};
    loading?: boolean; //Generic in all pages for lshowing loader while request is being processed.
    isChecked?: boolean; //Generic in all pages to check if a checkbox is checked or not.
    dropdownValues?: Array<P>; //Generic in all pages to load any dropdown values [values can be a request result]
  }
}

export namespace BusinessClientModel {
  export type TNewBusinessClient = {
    clientName: string;
    registeredAddress: string;
    officeAddress: string;
    officePhone1: string;
    officePhone2: string;
    emailId1: string;
    emailId2: string;
    registrationDate: string;
    registrationNumber: string;
    tinNumber: string;
    operatorId: string;
    testvalue?: any;
  };

  export type AddBusinessClientFormState = {
    data: TNewBusinessClient;
    loading: boolean;
    isChecked: boolean;
    state: string[];
    error: Record<string, any>;
  };
}

export namespace ClientModel {
  export type TNewClient = {
    title: string,
    clientName: string,
    gender: string,
    homeAddress: string,
    businessAddress: string,
    mobileNumber: string,
    officePhone: string,
    emailId: string,
    dateOfBirth: string,
    nationality: string,
    typeOfId: string,
    idNumber: string,
    tinNumber: string,
    operatorId: string,
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

export namespace GlAccountModel {
  export type TGlAccount = {
    ourBranchId: string;
    accountId: string;
    accountName: string;
    accountDescription: string;
    accountType: string;
    currencyId: string;
    openingBalance: string;
    currentBalance: string;
    unSupervisedCredit: string;
    unSupervisedDebit: string;
    creditTurnOver: string;
    debitTurnOver: string;
    doNotAllowCredit: string;
    doNotAllowDebit: string;
    isReconcilable: string;
    operatorId: string;
    testvalue?: any;
  };

  export type GlAccountFormState = {
    data: TGlAccount;
    loading: boolean;
    isChecked: boolean;
    state: string[];
    error: Record<string, any>;
  };
}

export namespace ProductModel{
  export type TProduct = {
    productId: string;
    productName: string;
    productTypeId: string;
    accountIdPrefix: string;
    currencyId: string;
    creditInterestRate: string;
    debitInterestRate: string;
    creditInterestProcedure: string;
    debitInterestProcedure: string;
    debitInterestDays: string;
    creditInterestDays: string;
    creditInterestStart: string;
    debitInterestStart: string;
    creditInterestFrequency: string;
    debitInterestFrequency: string;
    minimumBalance: string;
    accountPerCustomer: string;
    isChequeBookAllowed: string;
    doNotAllowCredit: string;
    doNotAllowDebit: string;
    canGoInCredit: string;
    canGoInDebit: string;
    enforceBioAuthentication: string;
    dormantProductId: string;
    dormantDay: string;
      isBlocked: string;
    operatorId: string;
  }

  export type ProductFormState = {
    data: TProduct;
    loading: boolean;
    isChecked: boolean;
    state: string[];
    error: Record<string, any>;
  }
}
