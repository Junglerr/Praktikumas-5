interface Tourist {
    id: number;
    firstName: string;
    languages: Array<string>;
    goals: Array<number>;
    family: Array<number>;
    gender: string;
}

interface Guide {
    firstName: string;
    company: string;
    languages: Array<string>;
    places: Array<number>;
    gender: string;
}

interface VisitedPlaces {
    id: number;
    title: string;
}

interface GuidesWithTourists {
    guide_name: string;
    tourists: Array<string>;
}

const tourists: Array<Tourist> = [
    {
        id: 1,
        firstName: "John",
        languages: ["en", "no"],
        goals: [1, 7],
        family: [5],
        gender: 'm',
    },
    {
        id: 2,
        firstName: "Angelina",
        languages: ["rus"],
        goals: [1, 2, 3, 4],
        family: [],
        gender: 'f',
    },
    {
        id: 3,
        firstName: "Robert",
        languages: ["esp"],
        goals: [1, 2, 3, 5, 8],
        family: [],
        gender: 'm',
    },
    {
        id: 4,
        firstName: "James",
        languages: ["eng", "lv"],
        goals: [4, 8],
        family: [],
        gender: 'm',
    },
    {
        id: 5,
        firstName: "Linda",
        languages: ["lt", "rus", "eng", "fr"],
        goals: [2, 3, 4, 5, 6, 7],
        family: [1],
        gender: 'f',
    },
    {
        id: 6,
        firstName: "Susan",
        languages: ["fr"],
        goals: [2, 3, 4, 5, 6],
        family: [7],
        gender: 'f',
    },
    {
        id: 7,
        firstName: "Thomas",
        languages: ["fr"],
        goals: [2, 3, 4, 5, 6],
        family: [6],
        gender: 'm',
    },
];

const tourGuides: Array<Guide> = [
    {
        firstName: "Ineta",
        company: "Novaturas",
        languages: ["en", "fr", "esp"],
        places: [1, 3, 5, 8],
        gender: 'f',
    },
    {
        firstName: "Skirmantas",
        company: "Tez Tour",
        languages: ["lt", "rus"],
        places: [1, 3, 4],
        gender: 'm',
    },
    {
        firstName: "Agnė",
        company: "AirGuru",
        languages: ["lt", "en", "lv"],
        places: [2, 6],
        gender: 'f',
    },
    {
        firstName: "Ernestas",
        company: "Novaturas",
        languages: ["lt", "lv"],
        places: [1, 2, 6],
        gender: 'm',
    },
];

const VisitedPlaces: Array<VisitedPlaces> = [
    {
        id: 1,
        title: "Trakų pilis",
    },
    {
        id: 2,
        title: "Gedimino pilis",
    },
    {
        id: 3,
        title: "Lajų pilis",
    },
    {
        id: 4,
        title: "Kirkilų apžvalgos bokštas",
    },
    {
        id: 5,
        title: "Ilzenbergo dvaras",
    },
    {
        id: 6,
        title: "Etnokosmologijos muziejus",
    },
    {
        id: 7,
        title: "Baterija ,,Memel Nord",
    },
    {
        id: 8,
        title: "Klinčių kerjerai",
    },
];

const guidesWithTourists: Array<GuidesWithTourists> = [
    {
        guide_name: "Ineta",
        tourists: [""],
    },
    {
        guide_name: "Skirmantas",
        tourists: [""],
    },
    {
        guide_name: "Agnė",
        tourists: [""],
    },
    {
        guide_name: "Ernestas",
        tourists: [""],
    }
];

interface GenParams {
    languages: Array<string>;
}

function getAllLanguages<T extends GenParams>(people: Array<T>): Array<string> {
    const langs: Array<string> = [];
    people.forEach((person) => {
        person.languages.forEach((lang) => {
            if(!langs.includes(lang)) langs.push(lang);
        });
    });
    return langs;
}

const guideLng = getAllLanguages(tourGuides);

document.getElementById('guides')?.append(guideLng.toString());

let htmlResult: string = "";
tourists.forEach((item: Tourist) => {
    htmlResult += `${item.languages},`;
});

document.getElementById('tourists')?.append(htmlResult);

function reSort(langs: Array<string>): Array<string> {
    let xd = langs.sort((a, b) => a > b ? -1 : 1);
    return xd;
}

const sorted = reSort(tourists[0].languages);

document.getElementById('sorted')?.append(guideLng.toString());

let pos: number = 0;

function byCompany(tourGuides: Array<Guide>, tourists: Array<Tourist>): Array<Tourist> {
    const found = tourGuides.filter((guide) => {
    if(guide.company.startsWith('N')){
        document.getElementById('novaturas')?.append(guide.firstName + ' ');
        return true;
    }
    else if(guide.company.startsWith('T')){
        document.getElementById('teztour')?.append(guide.firstName + ' ');
        return true;
    }
    else if(guide.company.startsWith('A')){
        document.getElementById('airguru')?.append(guide.firstName + ' ');
        return true;
    }
    else return false;
});
return result;
}
const result = byCompany(tourGuides, tourists);

function getByGender(tourGuides: Array<Guide>, tourists: Array<Tourist>): Array<string> {
    const males = new Array();
    const females = new Array();

    const malesG = tourGuides.map(item => {
        if(item.gender === 'm'){
            males.push(item.firstName + '(g) ');
        }
    });
    const femalesG = tourGuides.map(item => {
        if(item.gender === 'f'){
            females.push(item.firstName + '(g) ');
        }
    });
    const malesT = tourists.map(item => {
        if(item.gender === 'm'){
            males.push(item.firstName + '(t) ');
        }
    });
    const femalesT = tourists.map(item => {
        if(item.gender === 'f'){
            females.push(item.firstName + '(t) ');
        }
    });

    document.getElementById('men')?.append(males.toString());
    document.getElementById('women')?.append(females.toString());
    
    return results;
}
const results = getByGender(tourGuides, tourists);

function getClients(tourGuides: Array<Guide>, tourists: Array<Tourist>): Array<Tourist> {
    tourGuides.forEach(guide => {
        tourists.forEach(tourist => {
            const isFoundLanguages = guide.languages.some(guideLanguage => tourist.languages.includes(guideLanguage));
            const isFoundPlaces = guide.places.some(guidePlace => tourist.goals.includes(guidePlace));
            if (isFoundPlaces && isFoundLanguages) {
                const index = guidesWithTourists.findIndex(g => g.guide_name === guide.firstName);
                if(index !== 1) {
                    guidesWithTourists[index].tourists.push(tourist.firstName);
                }
            }
        });
    });
    let htmlResult5: string = "";
    guidesWithTourists.forEach((guide: GuidesWithTourists) => [
        htmlResult5 += `${guide.guide_name}: [${guide.tourists}] \n`
    ]);
    document.getElementById('guidesandtourists')?.append(htmlResult5);
    return results5;
}
const results5 = getClients(tourGuides, tourists);
