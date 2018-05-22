/**
 * クレジットカード返金タスクファクトリー
 */
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    transactionId: string;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.RefundCreditCard;
    data: IData;
}

export type ITask = IExtendId<IAttributes>;
