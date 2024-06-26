export namespace RequestModel {
  export interface FormState<T, P> {
    data: T;
    error: {};
    loading?: boolean; //Generic in all pages for lshowing loader while request is being processed.
    isChecked?: boolean; //Generic in all pages to check if a checkbox is checked or not.
    dropdownValues?: Array<P>; //Generic in all pages to load any dropdown values [values can be a request result]
    title?: Array<P>;
    gender?: Array<P>;
    typeOfId?: Array<P>;
    boolArray?: Array<P>;
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
  };

  export function getDefaultBusinessClientData(): TNewBusinessClient {
    return {
      clientName: "",
      registeredAddress: "",
      officeAddress: "",
      officePhone1: "",
      officePhone2: "",
      emailId1: "",
      emailId2: "",
      registrationDate: "",
      registrationNumber: "",
      tinNumber: "",
    };
  }
}

export namespace GLSettingsModel {
  export type TNewGLSettings = {
    productId: string;
    ourBranchId: string;
    settingId: Number;
    gLAccountId: string;
    createdBy: string;
  };

  export function getDefaulGLSettingsData(): TNewGLSettings {
    return {
      productId: "",
      ourBranchId: "",
      settingId: 0,
      gLAccountId: "",
      createdBy: "",
    };
  }
}

export namespace ClientModel {
  export type TNewClient = {
    title: string;
    clientName: string;
    gender: string;
    homeAddress: string;
    businessAddress: string;
    mobileNumber: string;
    officePhone: string;
    emailId: string;
    dateOfBirth: string;
    nationality: string;
    typeOfId: string;
    idNumber: string;
    tinNumber: string;
  };

  export function getDefaultClientData(): TNewClient {
    return {
      title: "",
      clientName: "",
      gender: "",
      homeAddress: "",
      businessAddress: "",
      mobileNumber: "",
      officePhone: "",
      emailId: "",
      dateOfBirth: "",
      nationality: "",
      typeOfId: "",
      idNumber: "",
      tinNumber: "",
    };
  }
}

export namespace SignupModel {
  export type TSignup = {
    firstName: string;
    lastName: string;
    middleName: string;
    emailAddress: string;
    typeOfID: string;
    idNumber: string;
    mobilePhone: string;
  };

  export function getDefaultSignupData(): TSignup {
    return {
      firstName: "",
      lastName: "",
      middleName: "",
      emailAddress: "",
      typeOfID: "",
      idNumber: "",
      mobilePhone: "",
    };
  }
}

export namespace LoginModel {
  export type TLogin = {
    emailAddress: string;
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
    openingBalance: Number;
    currentBalance: Number;
    unSupervisedCredit: Number;
    unSupervisedDebit: Number;
    creditTurnOver: Number;
    debitTurnOver: Number;
    doNotAllowCredit: string;
    doNotAllowDebit: Number;
    isReconcilable: string;
    operatorId: string;
  };

  export function getDefaulGLAccountData(): TGlAccount {
    return {
      ourBranchId: "",
      accountId: "",
      accountName: "",
      accountDescription: "",
      accountType: "",
      currencyId: "",
      openingBalance: 0,
      currentBalance: 0,
      unSupervisedCredit: 0,
      unSupervisedDebit: 0,
      creditTurnOver: 0,
      debitTurnOver: 0,
      doNotAllowCredit: "",
      doNotAllowDebit: 0,
      isReconcilable: "",
      operatorId: "",
    };
  }
}

export namespace ProductModel {
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
  };
}

export namespace AccountModel {
  export type TAccount = {
    ourBranchId: string;
    accountId: string;
    accountName: string;
    clientId: string;
    productId: string;
    dateOpened: string;
    operatingMode: string;
    authenticationId: string
  };

  export type AccountFormState = {
    data: TAccount;
    loading: boolean;
    isChecked: boolean;
    state: string[];
    error: Record<string, any>;
  };
}
