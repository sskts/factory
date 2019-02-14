import * as cinerino from '@cinerino/factory';

import * as OrganizationFactory from './organization';

export type ProgramMembershipType = 'ProgramMembership';

/**
 * 会員プログラム特典インターフェース
 */
export enum Award {
    /**
     * ポイント口座決済
     */
    PecorinoPayment = 'PecorinoPayment'
}

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
export interface IProgramMembership {
    id?: string;
    /**
     * プログラムのホスト組織
     */
    hostingOrganization?: OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<cinerino.organizationType>>;
    typeOf: ProgramMembershipType;
    /**
     * 会員番号
     * Cognitoのusernameに相当
     */
    membershipNumber?: string;
    /**
     * プログラム名
     */
    programName: string;
    /**
     * 特典リスト
     */
    award: Award[];
    /**
     * 会員プログラムに対するオファー
     * このオファーに対して注文取引を成立させると、ユーザーに会員プログラムが所有権として付与されます。
     */
    offers?: cinerino.offer.IOffer[];
    url?: string;
}
