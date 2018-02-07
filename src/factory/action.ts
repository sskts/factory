/**
 * action factory
 * アクションファクトリー
 * @namespace action
 */

import { IExtendId } from './autoGenerated';
import OrganizationType from './organizationType';
import PersonType from './personType';

/**
 * アクションへの関係者インターフェース
 * 関係者を表現する最低限のインターフェース
 * 継承先にて、インターフェースが強化される可能性あり
 * @export
 * @interface
 * @memberof action
 */
export interface IParticipant {
    typeOf: OrganizationType | PersonType;
    id: string;
}

/**
 * アクションタイプ
 * @export
 * @enum
 * @memberof action
 */
export enum ActionType {
    AuthorizeAction = 'AuthorizeAction',
    OrderAction = 'OrderAction',
    PayAction = 'PayAction',
    PrintAction = 'PrintAction',
    ReturnAction = 'ReturnAction',
    SendAction = 'SendAction',
    UseAction = 'UseAction'
}

/**
 * アクションステータス
 * @export
 * @enum
 * @memberof action
 */
export enum ActionStatusType {
    ActiveActionStatus = 'ActiveActionStatus',
    CompletedActionStatus = 'CompletedActionStatus',
    FailedActionStatus = 'FailedActionStatus',
    PotentialActionStatus = 'PotentialActionStatus',
    CanceledActionStatus = 'CanceledActionStatus'
}

/**
 * アクション目的インターフェース
 */
export interface IPurpose {
    typeOf: string;
}

/**
 * アクション属性
 * @export
 * @interface
 * @memberof action
 */
export interface IAttributes<TObject, TResult> {
    /**
     * アクションタイプ
     */
    typeOf: ActionType;
    /**
     * アクション状態
     */
    actionStatus: ActionStatusType;
    /**
     * アクション主体者
     */
    agent: IParticipant;
    /**
     * アクション受取者
     */
    recipient?: IParticipant;
    /**
     * アクション結果
     */
    result?: TResult;
    /**
     * アクション失敗時のエラー結果
     */
    error?: any;
    /**
     * アクション対象
     */
    object: TObject;
    /**
     * 開始日時
     */
    startDate: Date;
    /**
     * 終了日時
     */
    endDate?: Date;
    /**
     * 目的
     */
    purpose?: IPurpose;
}

export type IAction<TObject, TResult> = IExtendId<IAttributes<TObject, TResult>>;
