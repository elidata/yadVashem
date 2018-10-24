import CoverPageLogoEnglish from './images/CoverPageLogoEnglish.png';
import CoverPageLogoHebrew from './images/CoverPageLogoHebrew.png';
import locationsImagesHertzelia from './images/LocationsImagesHertzelia.png';
import locationsImagesJerusalem from './images/LocationsImagesJerusalem.png';
import locationsImagesChildensMemorial from './images/LocationsImagesChildensMemorial.jpg';
import locationsImagesCattleCar from './images/LocationsImagesCattleCar.jpg';
import clapping from './audio/clapping.mp3';
export let languages = {
    Hebrew: {
        path: 'He',
        coverPage: {
            title: 'סיור מודרך בקמפוס',
            imgSrc: CoverPageLogoHebrew
        },
        locationListPage: {
            placeHolderSearch: 'חפש'
        },
        locationsList: {
            HallOfNames: {
                label: 'היכל השמות',
                description: "בהיכל השמות נאספים שמותיהם ופרטיהם האישיים של מיליוני היהודים שנרצחו בשואה‮, ‬כפי שנרשמו בידי קרובים ומכרים על גבי דפי עד‮. ‬דפי העד הם מצבתם הסמלית והיחידה‮. ‬על מנת להשלים את המשימה הקדושה הזאת‮, ‬יד ושם פונה אל הציבור בבקשה לסייע באיסוף השמות‮, ‬ולמלא את החובה‮ - ‬לזכור ולא לשכוח‮.",
                vocalSrc: clapping,
                id: 11
            },
            HallOfRemembrance: {
                label: 'אוהל יזכור',
                description: "מבנה מרשים דמוי אוהל שקירותיו עשויים אבני בזלת ובו מתייחדים מבקרים עם זכר קרבנות השואה. על רצפתו חרוטים שמותיהם של עשרים ושניים מחנות ריכוז והשמדה, גאיות הריגה ומחנות-מעבר הידועים לשמצה, מבין מאות אתרי השמדה שהוקמו באירופה. במרכז אוהל יזכור בוערת אש התמיד, ובקרבתה מוצב לוח האבן תחתיו טמון אפר קרבנות אשר הובא ממחנות המוות.דריכל - אריה אלחנני. פסל אש התמיד - קוסו אלול. שער דרומי - דוד פולומבו. שער מערבי -בצלאל שץ",
                vocalSrc: clapping,
                id: 12
            },
            ChildensMemorial: {
                label: 'יד לילד',
                description: "אתר הנצחה מיוחד במינו החצוב כמבנה תת-קרקעי‮, ‬גל-עד לזכרם של כמיליון וחצי ילדים יהודים שנספו בשואה‮. ‬שמותיהם של ילדים שנרצחו‮, ‬גילם וארצות מולדתם מושמעים ברקע‮.‬                אדריכל‮ - ‬משה ספדיה ",
                vocalSrc: clapping,
                id: 14
            },
            CattleCar: {
                label: 'אנדרטת הקרון',
                description: 'קרון רכבת גרמני ששימש להובלת יהודים למחנות ההשמדה וניתן ליד ושם על ידי ממשלת פולין‮. ‬האנדרטה נבנתה כזיכרון לשילוחים אל מחנות ההשמדה‮. ‬על הקיר הסמוך לאנדרטה‮, ‬חרוטה עדותו של ניצול השואה אברהם קשפיצקי‮.‬‭ ‬אדריכל‮ - ‬משה ספדיה‮. ',
                vocalSrc: clapping,
                id: 13
            },


        },
        info: {
            goTo: 'לאן אתם מעוניינים להמשיך?',
        },
        navBar: {
            home: 'דף הבית',
            shareAMoment: "שתפו את החברים",
            map: "מפה של יד ושם",
            webSite: "אתר האינטרנט של יד ושם"
        },
        goTo:{
            meters:"מ'"
        },
        map:{
            title:'מפת יד ושם',
            back: 'חזור'
        },

    },
    English: {
        path: 'En',
        coverPage: {
            title: 'Campus Tour Guide',
            imgSrc: CoverPageLogoEnglish
        },
        locationListPage: {
            placeHolderSearch: 'search'
        },
        locationsList: {
            HallOfNames: {
                label: 'Hall of Names',
                description: 'The names and personal details of millions of victims have been recorded on Pages of Testimony, symbolic tombstones filled out by survivors in memory of their loved ones, and preserved in the Hall of Names. In an ongoing effort to collect more names before it is too late, Yad Vashem asks the public to assist in this sacred mission.',
                vocalSrc: clapping,
                id: 11
            },
            HallOfRemembrance: {
                label: 'HallOfRemembrance',
                description: "An imposing, tent-like basalt structure that allows visitors to pay their respects to the memories of the martyred dead. On the floor are the names of 22 Nazi murder sites - extermination and concentration camps, transit camps and killing sites - chosen from the hundreds of murder sites that existed throughout Europe. A memorial flame burns continuously, next to a crypt containing ashes of victims brought from the extermination camps. Architect- Aryeh Elhanani ,Eternal Flame- Kosso Eloul ,Southern gate- David Palombo Western gate: Bezalel Schatz ",
                vocalSrc: clapping,
                id: 12
            },
            ChildensMemorial: {
                label: 'ChildensMemorial',
                description: 'This unique memorial, hollowed out from an underground cavern, is a tribute to the approximately 1.5 million Jewish children who perished during the Holocaust. Walking through the memorial, the visitor will hear the names of murdered children, their ages and countries of origin in the background.Architect: Moshe Safdie',
                vocalSrc: clapping,
                id: 13
            },
            CattleCar: {
                label: 'CattleCar',
                description: 'The Memorial to the Deportees was established at Yad Vashem as a monument to the millions of Jews herded onto cattle-cars and transported from all over Europe to the extermination camps. An original German cattle-car given to Yad Vashem by the Polish authorities stands at the center of the memorial site.  On the adjacent wall, the testimony of survivor Avraham Krzepicki is inscribed. Architect: Moshe Safdie',
                vocalSrc: clapping,
                id: 14
            },

        },
        info: {
            goTo: 'Where do you want to go next?',
        },
        navBar: {
            home: 'Home',
            shareAMoment: "Share a moment",
            map: "Yad Vashem map",
            webSite: "Yad Vashem on the web"
        },
        goTo:{
            meters:'m'
        },
        map:{
            title:'Yad Vashem map',
            back: 'back'
        },

    },
    // object for things that stay the same between languages such as images
    Globals: {
        coverPage: {
        },
        locationsList: {
            HallOfNames: {
                distance: 453,
                imgSrc: locationsImagesHertzelia,
                handicap: true,
                wheelchair: true
            },
            HallOfRemembrance: {
                distance: 345,
                imgSrc: locationsImagesJerusalem,
                handicap: true,
                wheelchair: false
            },
            ChildensMemorial: {
                distance: 435,
                imgSrc: locationsImagesChildensMemorial,
                handicap: false,
                wheelchair: false
            },
            CattleCar: {
                distance: 4533,
                imgSrc: locationsImagesCattleCar,
                handicap: true,
                wheelchair: true
            },

        },
    },
}
