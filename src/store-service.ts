import {Http} from 'angular2/http';

export class StoreService {
    slots:Array<any> = [
        { "title": "Be data driven : monter son data lab", "speakers": ["Julien Buret"], "attendees": 15 },
        { "title": "Apache mesos, ou comment exploiter les ressources de votre data center", "speakers": ["Jean-pascal Thiery"], "attendees": 5 },
        { "title": "Swift dans la vraie vie", "speakers": ["Simone Civetta", "Fabien Mirault"], "attendees": 7 },
        { "title": "Les algorithmes du machine learning", "speakers": ["Alban Phélip", "Yoann Benoit"], "attendees": 9 },
        { "title": "Dessine moi un nuage", "speakers": ["Aurélien maury", "Séven le Mesle"], "attendees": 2 },
        { "title": "Kafka par la face nord", "speakers": ["Xavier Bucchiotty", "Matthieu Blanc"], "attendees": 1 },
        { "title": "Le nouvel ops", "speakers": ["Séven le Mesle"], "attendees": 17 },
        { "title": "Du javascript au métal, le web «natif»", "speakers": ["Paali Tandia"], "attendees": 5 },
        { "title": "A la découverte des mécanismes internes de cassandra", "speakers": ["Matthieu Nantern"], "attendees": 14 },
        { "title": "Cqrs + eventsourcing : en direct !", "speakers": ["Pierre-jean Vardanega", "Sebastian le Merdy"], "attendees": 8 },
        { "title": "Scaling culture", "speakers": ["Nicolas Lochet"], "attendees": 9 },
        { "title": "Double loop tdd", "speakers": ["Pierre-jean Vardanega", "Diego lemos"], "attendees": 6 },
        { "title": "Brace yourselves, angular 2 is coming!", "speakers": ["Alexandre Hebert", "Dmytro Podyachiy"], "attendees": 14 },
        { "title": "Le challenge des microservices", "speakers": ["Nicolas Jozwiak"], "attendees": 1 }
    ];

    getSlots() {
        return this.slots;
    }
}

//export class StoreService {
//    slots:Array<any> = [];
//
//    constructor(http:Http) {
//        http.request('slots.json')
//            // .map(res => res.json()) // syntaxe alternative
//            .subscribe(slots => this.slots = slots.json());
//    }
//
//    getSlots() {
//        return this.slots;
//    }
//}