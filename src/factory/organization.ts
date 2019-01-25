import AccountType from './accountType';
import IMultilingualString from './multilingualString';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import { IPlace } from './place';

/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass: string;
}

/**
 * ムビチケショップ情報インターフェース
 */
export interface IMovieTicketInfo {
    /**
     * ムビチケ興行会社コード
     */
    kgygishCd: string;
    /**
     * ムビチケサイトコード
     */
    stCd: string;
}

export interface ICreditCardPaymentAccepted {
    paymentMethodType: PaymentMethodType.CreditCard;
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
}

export interface IAccountPaymentAccepted<T extends AccountType> {
    paymentMethodType: PaymentMethodType.Account;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
}

/**
 * 利用可能決済インターフェース
 */
export type IPaymentAccepted<T extends PaymentMethodType> =
    T extends PaymentMethodType.Pecorino ? IAccountPaymentAccepted<AccountType> :
    T extends PaymentMethodType.Account ? IAccountPaymentAccepted<AccountType> :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentAccepted :
    never;

export type POSType = 'POS';

/**
 * POSインターフェース
 */
export interface IPOS {
    typeOf: POSType;
    id: string;
    name: string;
}

/**
 * サービス提供エリアインターフェース
 */
export type IAreaServed = IPlace;

/**
 * 組織インターフェース
 */
export interface IOrganization {
    id: string;
    identifier?: string;
    name: IMultilingualString;
    legalName?: IMultilingualString;
    /**
     * 組織タイプ
     */
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: string;
    image?: string;
    paymentAccepted?: IPaymentAccepted<PaymentMethodType>[];
    /**
     * GMO情報
     */
    gmoInfo?: IGMOInfo;
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS?: IPOS[];
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: IAreaServed[];
}
