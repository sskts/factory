import * as cinerino from '@cinerino/factory';

import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IExtendId } from '../autoGenerated';
import * as OrderFactory from '../order';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import * as OwnershipInfoFactory from '../ownershipInfo';
import { IPerson } from '../person';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type ICustomerContact = cinerino.transaction.placeOrder.ICustomerContact;
/**
 * 販売者インターフェース
 */
export type ISeller = OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;
/**
 * agent interface
 * 購入者インターフェース
 */
export type IAgent = IPerson;
export type IPassportBeforeStart = cinerino.transaction.placeOrder.IPassportBeforeStart;
export type IStartParamsWithoutDetail = cinerino.transaction.placeOrder.IStartParamsWithoutDetail;
/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.PlaceOrder, IAgent, undefined, IObject> {
    /**
     * 販売者
     */
    seller: ISeller;
}
/**
 * 取引結果インターフェース
 */
export interface IResult {
    /**
     * 注文データ
     */
    order: OrderFactory.IOrder;
    /**
     * 購入者に与えられる所有権リスト
     */
    ownershipInfos: OwnershipInfoFactory.IOwnershipInfo<OwnershipInfoFactory.IGoodType>[];
}
export type IError = cinerino.transaction.placeOrder.IError;
export type IObject = cinerino.transaction.placeOrder.IObject;

export interface IPotentialActions {
    order: IOrderActionAttributes;
}

/**
 * 注文取引インターフェース
 */
export type ITransaction = IExtendId<IAttributes>;
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export type ISearchConditions = cinerino.transaction.placeOrder.ISearchConditions;
