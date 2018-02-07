/**
 * sskts-factory
 * @module
 */

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as CreditCardAuthorizeActionFactory from './factory/action/authorize/creditCard';
import * as MvtkAuthorizeActionFactory from './factory/action/authorize/mvtk';
import * as seatReservationAuthorizeActionFactory from './factory/action/authorize/seatReservation';
import * as UseMvtkActionFactory from './factory/action/consume/use/mvtk';
import * as OrderActionFactory from './factory/action/trade/order';
import * as PayActionFactory from './factory/action/trade/pay';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as ReturnOrderActionFactory from './factory/action/transfer/return/order';
import * as ReturnPayActionFactory from './factory/action/transfer/return/pay';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';

import * as ClientEventFactory from './factory/clientEvent';
import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import CreativeWorkType from './factory/creativeWorkType';
import * as IndividualScreeningEventFactory from './factory/event/individualScreeningEvent';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import EventStatusType from './factory/eventStatusType';
import EventType from './factory/eventType';
import IMultilingualString from './factory/multilingualString';
import * as SeatReservationOfferFactory from './factory/offer/seatReservation';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as CorporationOrganizationFactory from './factory/organization/corporation';
import * as MovieTheaterOrganizationFactory from './factory/organization/movieTheater';
import CorporationOrganizationIdentifier from './factory/organizationIdentifier/corporation';
import OrganizationType from './factory/organizationType';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import PaymentMethodType from './factory/paymentMethodType';
import * as PersonFactory from './factory/person';
import PersonType from './factory/personType';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as EventReservationFactory from './factory/reservation/event';
import ReservationStatusType from './factory/reservationStatusType';
import * as TaskFactory from './factory/task';
import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelMvtkTaskFactory from './factory/task/cancelMvtk';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as CreateOrderTaskFactory from './factory/task/createOrder';
import * as CreateOwnershipInfosTaskFactory from './factory/task/createOwnershipInfos';
import * as ReturnCreditCardSalesTaskFactory from './factory/task/returnCreditCardSales';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as SendEmailNotificationTaskFactory from './factory/task/sendEmailNotification';
import * as SettleCreditCardTaskFactory from './factory/task/settleCreditCard';
import * as SettleMvtkTaskFactory from './factory/task/settleMvtk';
import * as SettleSeatReservationTaskFactory from './factory/task/settleSeatReservation';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';
import * as TransactionScopeFactory from './factory/transactionScope';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';
import * as URLFactory from './factory/url';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import errors = errors;
export import errorCode = ErrorCode;

export import actionStatusType = ActionFactory.ActionStatusType;
export import actionType = ActionFactory.ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export import authorizeActionPurpose = AuthorizeActionFactory.AuthorizeActionPurpose;
        export import creditCard = CreditCardAuthorizeActionFactory;
        export import mvtk = MvtkAuthorizeActionFactory;
        export import seatReservation = seatReservationAuthorizeActionFactory;
    }

    export namespace trade {
        // tslint:disable-next-line:no-shadowed-variable
        export import order = OrderActionFactory;
        export import pay = PayActionFactory;
    }

    export namespace transfer {
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
            export import pay = ReturnPayActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import order = ReturnOrderActionFactory;
        }

        export namespace send {
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

export namespace paymentMethod {
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
    }
}
export import clientEvent = ClientEventFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieCreativeWorkFactory;
}
export import creativeWorkType = CreativeWorkType;
export namespace event {
    export import individualScreeningEvent = IndividualScreeningEventFactory;
    export import screeningEvent = ScreeningEventFactory;
}
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export type multilingualString = IMultilingualString;
export namespace offer {
    export import seatReservation = SeatReservationOfferFactory;
}
export import order = OrderFactory;
export import orderStatus = OrderStatus;
export namespace organization {
    export import corporation = CorporationOrganizationFactory;
    export import movieTheater = MovieTheaterOrganizationFactory;
}
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
export import person = PersonFactory;
export import personType = PersonType;
export import placeType = PlaceType;
export namespace reservation {
    // tslint:disable-next-line:no-shadowed-variable
    export import event = EventReservationFactory;
}
export import reservationStatusType = ReservationStatusType;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import ITask = TaskFactory.ITask;
    export import cancelCreditCard = CancelCreditCardTaskFactory;
    export import cancelMvtk = CancelMvtkTaskFactory;
    export import cancelSeatReservation = CancelSeatReservationTaskFactory;
    export import createOrder = CreateOrderTaskFactory;
    export import createOwnershipInfos = CreateOwnershipInfosTaskFactory;
    export import returnCreditCardSales = ReturnCreditCardSalesTaskFactory;
    export import returnOrder = ReturnOrderTaskFactory;
    export import sendEmailNotification = SendEmailNotificationTaskFactory;
    export import settleCreditCard = SettleCreditCardTaskFactory;
    export import settleMvtk = SettleMvtkTaskFactory;
    export import settleSeatReservation = SettleSeatReservationTaskFactory;
}
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionScope = TransactionScopeFactory;
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import url = URLFactory;
