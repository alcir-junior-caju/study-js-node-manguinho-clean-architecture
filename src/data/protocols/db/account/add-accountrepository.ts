import { AccountModel, AddAccountModel } from "../../../usecases/add-account";

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
