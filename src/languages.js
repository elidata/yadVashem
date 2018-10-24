import CoverPageLogoEnglish from './images/CoverPageLogoEnglish.png';
import CoverPageLogoHebrew from './images/CoverPageLogoHebrew.png';
import locationsImagesHertzelia from './images/LocationsImagesHertzelia.png';
import locationsImagesJerusalem from './images/LocationsImagesJerusalem.png';
import locationsImagesMeitar from './images/LocationsImagesMeitar.jpg';
import locationsImagesMigron from './images/LocationsImagesMigron.jpg';
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
            Hertzelia: {
                label: 'הרצליה',
                description: "הֶרְצְלִיָּה היא עיר חוף בשרון הדרומי, כ-10 קילומטר צפונית לתל אביב, על מישור החוף. גובהה נע בין 0 ל-66 מ' מעל פני הים.' 'הרצליה נוסדה כמושבה ב-13 בדצמבר 1924 ונקראת על שם בנימין זאב הרצל, חוזה מדינת ישראל",
                vocalSrc: clapping,
                id: 11
            },
            Jerusalem: {
                label: 'ירושלים',
                description: "עיר הבירה של מדינת ישראל והעיר הגדולה ביותר בה. נכון לשנת 2016, שכנו בה כ-882 אלף תושבים. בירושלים שוכנים מוסדות הממשל של ישראל: הכנסת, בית המשפט העליון,משכן הנשיא, בית ראש הממשלה ורוב משרדי הממשלה.",
                vocalSrc: clapping,
                id: 12
            },
            Meitar: {
                label: 'מיתר',
                description: "מיתר היא מועצה מקומית במחוז הדרום בישראל, היא שוכנת בשיפוליו הדרומיים של הר חברון כ-11111111118 קילומטרים צפונית- מזרחית לבאר ששבעת הוכרזה כמועצה מקומית ב1987",
                vocalSrc: clapping,
                id: 14
            },
            Migron: {
                label: 'מגרון',
                description: 'יישוב במועצה אזורית מטה בנימין, מקסים ומתאים למשפחות צעירות',
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
            Hertzelia: {
                label: 'hertzelia',
                description: 'Herzliya is an affluent city in the central coast of Israel, at the Northern part of the Tel Aviv District known for its robust start-up and entrepreneurial culture. In 2017 it had a population of 93,989. Named after Theodor Herzl, the founder of modern Zionism, Herzliya covers an area of 21.6 square kilometres (8.3 sq mi). At its western municipal boundaries is Herzliya Pituah, one of Israel\'s most affluent neighborhoods and home to numerous embassies, company headquarters, as well as prominent Israeli business people.',
                vocalSrc: clapping,
                id: 11
            },
            Jerusalem: {
                label: 'jerusalem',
                description: 'Jerusalem  is a city in the Middle East, located on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea. It is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity, and Islam. Both Israel and the Palestinian Authority claim Jerusalem as their capital, as Israel maintains its primary governmental institutions there and the State of Palestine ultimately foresees it as its seat of power; however, neither claim is widely recognized internationally.',
                vocalSrc: clapping,
                id: 12
            },
            Meitar: {
                label: 'meitar',
                description: 'Meitar is a small local council north-east of Beersheba, in Israel\'s Southern District. The town lies on Highway 60 just south of the Green Line on the southern edge of Mount Hebron, alongside the Yatir Forest. Metar is 19 km north of Beer-Sheva and is in between the two Bedouin towns of Hura and Laqiya. In 2017 it had a population of 7,749. With a land area of 16,696 dunams (~16.7 km²), Meitar is ranked very highly on the Israeli socio-economic scale, with a score of 9/10.',
                vocalSrc: clapping,
                id: 13
            },
            Migron: {
                label: 'migron',
                description: 'Migron is an Israeli settlement in the Binyamin Region of the West Bank, located within 2km of a former outpost by the same name, that was relocated to its present site on Sept. 2, 2012. The outpost was located 14 kilometers north of Jerusalem, it fell under the jurisdiction of the Mateh Binyamin Regional Council. It was the largest outpost of its kind, with a population of 300. The council says it was founded in 1999 and re-founded in 2001, on land registered before 1967 by the villagers of Burqa. The Israeli government contributed NIS 4.3 million from the Construction and Housing Ministry to build Migron. The international community considers Israeli settlements in the West Bank illegal under international law, but the Israeli government disputes this.',
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
            Hertzelia: {
                distance: 453,
                imgSrc: locationsImagesHertzelia,
                handicap: true,
                wheelchair: true
            },
            Jerusalem: {
                distance: 345,
                imgSrc: locationsImagesJerusalem,
                handicap: true,
                wheelchair: false
            },
            Meitar: {
                distance: 435,
                imgSrc: locationsImagesMeitar,
                handicap: false,
                wheelchair: false
            },
            Migron: {
                distance: 4533,
                imgSrc: locationsImagesMigron,
                handicap: true,
                wheelchair: true
            },

        },
    },
}
