/**
 * factory
 */
import { chevre, encodingFormat, errorCode, errors, invoice, monetaryAmount, pecorino, waiter } from '@cinerino/factory';

import * as cognito from './cognito';

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as AuthorizePointAwardActionFactory from './factory/action/authorize/award/point';
import * as MvtkAuthorizeActionFactory from './factory/action/authorize/discount/mvtk';
import * as ProgramMembershipOfferAuthorizeActionFactory from './factory/action/authorize/offer/programMembership';
import * as SeatReservationOfferAuthorizeActionFactory from './factory/action/authorize/offer/seatReservation';
import * as AuthorizeAccountPaymentActionFactory from './factory/action/authorize/paymentMethod/account';
import * as AuthorizeAnyPaymentActionFactory from './factory/action/authorize/paymentMethod/any';
import * as CreditCardAuthorizeActionFactory from './factory/action/authorize/paymentMethod/creditCard';
import * as UseMvtkActionFactory from './factory/action/consume/use/mvtk';
import * as ConfirmReservationActionFactory from './factory/action/interact/confirm/reservation';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as OrderActionFactory from './factory/action/trade/order';
import * as PayActionFactory from './factory/action/trade/pay';
import * as RefundActionFactory from './factory/action/trade/refund';
import * as GiveActionFactory from './factory/action/transfer/give';
import * as GivePointAwardActionFactory from './factory/action/transfer/give/pointAward';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as ReturnOrderActionFactory from './factory/action/transfer/return/order';
import * as ReturnPointAwardActionFactory from './factory/action/transfer/return/pointAward';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import AccountType from './factory/accountType';
import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import CreativeWorkType from './factory/creativeWorkType';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import { EventStatusType } from './factory/eventStatusType';
import { EventType } from './factory/eventType';
import IMultilingualString from './factory/multilingualString';
import * as OfferFactory from './factory/offer';
import * as SeatReservationOfferFactory from './factory/offer/seatReservation';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as OrganizationFactory from './factory/organization';
import CorporationOrganizationIdentifier from './factory/organizationIdentifier/corporation';
import OrganizationType from './factory/organizationType';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import PaymentMethodType from './factory/paymentMethodType';
import PaymentStatusType from './factory/paymentStatusType';
import * as PersonFactory from './factory/person';
import PersonType from './factory/personType';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as PropertyValueFactory from './factory/propertyValue';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import * as ReservationFactory from './factory/reservation';
import * as EventReservationFactory from './factory/reservation/event';
import { ReservationStatusType } from './factory/reservationStatusType';
import { ReservationType } from './factory/reservationType';
import * as WebAPIServiceFactory from './factory/service/webAPI';
import SortType from './factory/sortType';
import { UnitCode } from './factory/unitCode';

import * as CancelAccountTaskFactory from './factory/task/cancelAccount';
import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelPointAwardTaskFactory from './factory/task/cancelPointAward';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as ConfirmReservationTaskFactory from './factory/task/confirmReservation';
import * as GivePointAwardTaskFactory from './factory/task/givePointAward';
import * as ImportScreeningEventsTaskFactory from './factory/task/importScreeningEvents';
import * as PayAccountTaskFactory from './factory/task/payAccount';
import * as PayCreditCardTaskFactory from './factory/task/payCreditCard';
import * as PayMovieTicketTaskFactory from './factory/task/payMovieTicket';
import * as PlaceOrderTaskFactory from './factory/task/placeOrder';
import * as RefundAccountTaskFactory from './factory/task/refundAccount';
import * as RefundCreditCardTaskFactory from './factory/task/refundCreditCard';
import * as RefundMovieTicketTaskFactory from './factory/task/refundMovieTicket';
import * as RegisterProgramMembershipTaskFactory from './factory/task/registerProgramMembership';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as ReturnPointAwardTaskFactory from './factory/task/returnPointAward';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as SendOrderTaskFactory from './factory/task/sendOrder';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as UnRegisterProgramMembershipTaskFactory from './factory/task/unRegisterProgramMembership';

import * as TaskFactory from './factory/task';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as TransactionFactory from './factory/transaction';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';

export import chevre = chevre;
export import cognito = cognito;
export import pecorino = pecorino;
export import waiter = waiter;
export import errors = errors;
export import errorCode = errorCode;

export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import ISortOrder = ActionFactory.ISortOrder;
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export namespace award {
            // tslint:disable-next-line:no-shadowed-variable
            export import point = AuthorizePointAwardActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import account = AuthorizeAccountPaymentActionFactory;
            export import any = AuthorizeAnyPaymentActionFactory;
            export import creditCard = CreditCardAuthorizeActionFactory;
            /**
             * @alias account
             * @deprecated Use account
             */
            // tslint:disable-next-line:no-shadowed-variable
            export import pecorino = account;
        }
        export namespace discount {
            export import mvtk = MvtkAuthorizeActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = ProgramMembershipOfferAuthorizeActionFactory;
            export import seatReservation = SeatReservationOfferAuthorizeActionFactory;
        }
    }

    export namespace interact {
        export namespace confirm {
            // tslint:disable-next-line:no-shadowed-variable
            export import reservation = ConfirmReservationActionFactory;
        }
        export namespace register {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = RegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = RegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = RegisterProgramMembershipActionFactory;
        }
        export namespace unRegister {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = UnRegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = UnRegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = UnRegisterProgramMembershipActionFactory;
        }
    }

    export namespace trade {
        // tslint:disable-next-line:no-shadowed-variable
        export import order = OrderActionFactory;
        export import pay = PayActionFactory;
        export import refund = RefundActionFactory;
    }

    export namespace transfer {
        export namespace give {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = GiveActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = GiveActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import pointAward = GivePointAwardActionFactory;
        }

        export namespace print {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = PrintActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = PrintActionFactory.IAttributes;
            export import IRecipient = PrintActionFactory.IRecipient;
            export import ticket = PrintTicketActionFactory;
        }

        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import order = ReturnOrderActionFactory;
            export import pointAward = ReturnPointAwardActionFactory;
        }

        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
            // tslint:disable-next-line:no-shadowed-variable
            export import order = SendOrderActionFactory;
        }
    }

    export namespace consume {
        export namespace use {
            export import mvtk = UseMvtkActionFactory;
        }
    }
}

export import accountType = AccountType;
export import encodingFormat = encodingFormat;
export namespace paymentMethod {
    export type ISearchConditions<T extends PaymentMethodType> =
        T extends PaymentMethodType.CreditCard ? CreditCardFactory.ISearchConditions :
        // T extends PaymentMethodType.MovieTicket ? MovieTicketFactory.ISearchConditions :
        never;
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
        // export import movieTicket = MovieTicketFactory;
    }
}
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieCreativeWorkFactory;
}
export import creativeWorkType = CreativeWorkType;
export namespace event {
    export import screeningEvent = ScreeningEventFactory;
    export import screeningEventSeries = ScreeningEventSeriesFactory;
}
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export import invoice = invoice;
export import monetaryAmount = monetaryAmount;
export type multilingualString = IMultilingualString;
export namespace offer {
    export import OfferType = OfferFactory.OfferType;
    export import IOffer = OfferFactory.IOffer;
    export import seatReservation = SeatReservationOfferFactory;
}
export import order = OrderFactory;
export import orderStatus = OrderStatus;
// export namespace organization {
//     export type ISearchConditions<T extends OrganizationType> =
//         T extends OrganizationType.Corporation ? CorporationOrganizationFactory.ISearchConditions :
//         T extends OrganizationType.MovieTheater ? MovieTheaterOrganizationFactory.ISearchConditions :
//         OrganizationFactory.ISearchConditions<T>;
//     export type IAttributes<T extends OrganizationType> =
//         T extends OrganizationType.Corporation ? CorporationOrganizationFactory.IAttributes :
//         T extends OrganizationType.MovieTheater ? MovieTheaterOrganizationFactory.IAttributes :
//         OrganizationFactory.IAttributes<T>;
//     export type IOrganization<T extends OrganizationType> =
//         T extends OrganizationType.Corporation ? CorporationOrganizationFactory.IOrganization :
//         T extends OrganizationType.MovieTheater ? MovieTheaterOrganizationFactory.IOrganization :
//         OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<T>>;
//     export type IAreaServed<T extends OrganizationType> =
//         T extends OrganizationType.MovieTheater ? MovieTheaterOrganizationFactory.IAreaServed :
//         OrganizationFactory.IAreaServed;
//     export import IPaymentAccepted = OrganizationFactory.IPaymentAccepted;
//     export import IPOS = OrganizationFactory.IPOS;
//     export import corporation = CorporationOrganizationFactory;
//     export import movieTheater = MovieTheaterOrganizationFactory;
// }
export namespace organizationIdentifier {
    export import corporation = CorporationOrganizationIdentifier;
}
export import organizationType = OrganizationType;
export import ownershipInfo = OwnershipInfoFactory;
export import priceCurrency = PriceCurrency;
export namespace place {
    export import movieTheater = MovieTheaterPlaceFactory;
}
export import paymentMethodType = PaymentMethodType;
export import paymentStatusType = PaymentStatusType;
export import person = PersonFactory;
export import personType = PersonType;
export import placeType = PlaceType;
export import programMembership = ProgramMembershipFactory;
export import propertyValue = PropertyValueFactory;
export import quantitativeValue = QuantitativeValueFactory;
export namespace reservation {
    export import IReservation = ReservationFactory.IReservation;
    export import ISeat = ReservationFactory.ISeat;
    export import ITicket = ReservationFactory.ITicket;
    export import IUnderName = ReservationFactory.IUnderName;
    export import TicketType = ReservationFactory.TicketType;
    // tslint:disable-next-line:no-shadowed-variable
    export import event = EventReservationFactory;
}
export import reservationStatusType = ReservationStatusType;
export import reservationType = ReservationType;
export namespace service {
    export import webAPI = WebAPIServiceFactory;
}
export import seller = OrganizationFactory;
export namespace task {
    export type IData<T extends TaskName | string> =
        T extends TaskName.CancelAccount ? CancelAccountTaskFactory.IData :
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.IData :
        T extends TaskName.CancelPointAward ? CancelPointAwardTaskFactory.IData :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IData :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IData :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IData :
        T extends TaskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.IData :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IData :
        T extends TaskName.RefundAccount ? RefundAccountTaskFactory.IData :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.IData :
        T extends TaskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.IData :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IData :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IData :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IData :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IData :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends TaskName.PayAccount ? PayAccountTaskFactory.IData :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.IData :
        T extends TaskName.PayMovieTicket ? PayMovieTicketTaskFactory.IData :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IData :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IData :
        TaskFactory.IData;
    export type IAttributes<T extends TaskName | string> =
        T extends TaskName.CancelAccount ? CancelAccountTaskFactory.IAttributes :
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.IAttributes :
        T extends TaskName.CancelPointAward ? CancelPointAwardTaskFactory.IAttributes :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IAttributes :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IAttributes :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IAttributes :
        T extends TaskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.IAttributes :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IAttributes :
        T extends TaskName.RefundAccount ? RefundAccountTaskFactory.IAttributes :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.IAttributes :
        T extends TaskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.IAttributes :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IAttributes :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IAttributes :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IAttributes :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends TaskName.PayAccount ? PayAccountTaskFactory.IAttributes :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.IAttributes :
        T extends TaskName.PayMovieTicket ? PayMovieTicketTaskFactory.IAttributes :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IAttributes :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IAttributes :
        TaskFactory.IAttributes;
    export type ITask<T extends TaskName | string> =
        T extends TaskName.CancelAccount ? CancelAccountTaskFactory.ITask :
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.ITask :
        T extends TaskName.CancelPointAward ? CancelPointAwardTaskFactory.ITask :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.ITask :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.ITask :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.ITask :
        T extends TaskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.ITask :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.ITask :
        T extends TaskName.RefundAccount ? RefundAccountTaskFactory.ITask :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.ITask :
        T extends TaskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.ITask :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.ITask :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.ITask :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.ITask :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.ITask :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends TaskName.PayAccount ? PayAccountTaskFactory.ITask :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.ITask :
        T extends TaskName.PayMovieTicket ? PayMovieTicketTaskFactory.ITask :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.ITask :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.ITask :
        TaskFactory.ITask;
    export type ISearchConditions<T extends TaskName | string> = TaskFactory.ISearchConditions<T>;
    export type IExecutionResult = TaskFactory.IExecutionResult;
}
export import sortType = SortType;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export type ISortOrder = TransactionFactory.ISortOrder;
    export type ISearchConditions<T extends TransactionType> =
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ISearchConditions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ISearchConditions :
        never;
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IStartParams :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IStartParams :
        never;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IResult :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IPotentialActions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IPotentialActions :
        never;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IAttributes :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ITransaction :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ITransaction :
        never;
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import unitCode = UnitCode;
