/**
 * 決済方法としてのPecorino口座承認アクションファクトリー
 */
import * as pecorinoFactory from '@pecorino/factory';

import AccountType from '../../../accountType';
import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { ITransaction } from '../../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    PecorinoPayment = 'PecorinoPayment'
}

/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    transactionId: string;
    amount: number;
}

export type IPecorinoTransaction = pecorinoFactory.transaction.withdraw.ITransaction<AccountType.Point>
    | pecorinoFactory.transaction.transfer.ITransaction<AccountType.Point>;

export interface IResult {
    price: number;
    amount: number;
    pecorinoTransaction: IPecorinoTransaction;
    pecorinoEndpoint: string;
}

export type IPurpose = ITransaction;

export type IError = any;

/**
 * Pecorino承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
