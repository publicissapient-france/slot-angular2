export class XkeSlotStore {
    slots:Array<XkeSlotModel> = [
        new XkeSlotModel('Rising Architect', ['Pablo Lopez', 'Xavier Bucchiotty'], 15),
        new XkeSlotModel('Build rock SOLID code', ['Clément Heliou', 'Ilja Kempf', 'Pierre-Jean Vardanega', 'Sarah Buisson'], 5),
        new XkeSlotModel('What\'s new at Google I/O and WWDC', ['Jérémie Martinez', 'Simone Civetta'], 7),
        new XkeSlotModel('Scaling Culture - L\'agilité à grande échelle en vraie', ['Nicolas Lochet'], 9),
        new XkeSlotModel('Présentation de CloudUnit, un PaaS Java s\'appuyant sur Docker développé par Treeptik', ['Jean-Louis Rigau'], 2),
        new XkeSlotModel('Le cadrage Agile timeboxé', ['Gwénaël Bonhommeau'], 1),
        new XkeSlotModel('Breizhcamp et la suite', ['Sameh Ben Fredj'], 17),
        new XkeSlotModel('Rex : LV Live', ['David Caramelo'], 5),
        new XkeSlotModel('Brace yourselves, Angular 2 is comming !', ['Alexandre Hebert', 'Dmytro Podyachiy', 'Djordje Lukic'], 14),
        new XkeSlotModel('BDD in action by exemple for dummies', ['Clément Rochas', 'Diego Lemos'], 8),
        new XkeSlotModel('iM-1 / The Mower World & First AI', [], 9),
        new XkeSlotModel('Docker Swarm', ['Ivan Beauvais','Jean-Eudes Couignoux','Jean-Louis Rigau','Jonathan Raffre','Roksolana Ivanyshyn'], 11)
    ];
}


export class XkeSlotModel {
    name:string;
    watch:boolean = false;
    speakers:Array<string>;
    attendees:int = 0;

    constructor(name:string, speakers:Array<string>, attendees:number) {
        this.name = name;
        this.speakers = speakers;
        this.attendees = attendees;
    }

    rsvp() {
        return fetch('/rsvp')
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    this.attendees++;
                    return response;
                }
                throw new Error(response.statusText)
            })
            .then(response => response.json());
    }
}
