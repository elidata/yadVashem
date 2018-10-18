import CoverPageLogoEnglish from './images/CoverPageLogoEnglish.png'
import CoverPageLogoHebrew from './images/CoverPageLogoHebrew.png'
import locationsImagesHertzelia from './images/LocationsImagesHertzelia.png'
import locationsImagesJerusalem from './images/LocationsImagesJerusalem.png'
import locationsImagesMeitar from './images/LocationsImagesMeitar.jpg'
import locationsImagesMigron from './images/LocationsImagesMigron.jpg'
import clapping from './audio/clapping.mp3';
export let languages = {
    Hebrew:{
        path:'He',
        coverPage:{
            title:'סיור מודרך בקמפוס',
            imgSrc:CoverPageLogoHebrew
        },
        locationListPage:{
            placeHolderSearch: 'חפש'
        },
        locationsList:{
            Hertzelia:{
                label:'הרצליה',
                description:"הֶרְצְלִיָּה היא עיר חוף בשרון הדרומי, כ-10 קילומטר צפונית לתל אביב, על מישור החוף. גובהה נע בין 0 ל-66 מ' מעל פני הים.' 'הרצליה נוסדה כמושבה ב-13 בדצמבר 1924 ונקראת על שם בנימין זאב הרצל, חוזה מדינת ישראל",
                vocalSrc:clapping,
                id:21
            },
            Jerusalem: {
                label:'ירושלים',
                description:"עיר הבירה של מדינת ישראל והעיר הגדולה ביותר בה. נכון לשנת 2016, שכנו בה כ-882 אלף תושבים. בירושלים שוכנים מוסדות הממשל של ישראל: הכנסת, בית המשפט העליון,משכן הנשיא, בית ראש הממשלה ורוב משרדי הממשלה.",
                vocalSrc:clapping,
                id:22
            },
            Meitar: {
                label:'מיתר',
                description:"מיתר היא מועצה מקומית במחוז הדרום בישראל, היא שוכנת בשיפוליו הדרומיים של הר חברון כ-11111111118 קילומטרים צפונית- מזרחית לבאר ששבעת הוכרזה כמועצה מקומית ב1987",
                vocalSrc:clapping,
                id:24
            },
            Migron: {
                label:'מגרון',
                description:'יישוב במועצה אזורית מטה בנימין, מקסים ומתאים למשפחות צעירות',
                vocalSrc:clapping,
                id:23
            },
            
            
        },
        info:{
            goTo: 'לאן אתם מעוניינים להמשיך?',
            goToDistanceText:'אתר זה נמצא במרחק של',
            goToDistanceinfo:'מטרים מכם.'
        },
        navBar:{
            home:'דף הבית',
            shareAMoment:"שתפו את החברים",
            map:"מפה של יד ושם",
            webSite:"אתר האינטרנט של יד ושם"
        },
        
    },
    English:{
        path: 'En',
        coverPage:{
            title:'Campus Tour Guide',
            imgSrc:CoverPageLogoEnglish
        },
        locationListPage:{
            placeHolderSearch: 'search'
        },
        locationsList:{
            Hertzelia:{
                label:'hertzelia',
                description:'hertzelia kjfdkl;asfj;s jklf;djs;ldajf;kaj fjlkj;dslkjf;laf iroewrwuiroewi dfoiewuroirui',
                vocalSrc:clapping,
                id:11
            },
            Jerusalem: {
                label:'jerusalem',
                description:'ggggggg jdjf;lksru liulkdjlcmns jdlclkamxkj fsldmx,j ifjkx,ndifjs fjknxnkxj fknkclxhjf d',
                vocalSrc:clapping,
                id:12
            },
            Meitar: {
                label: 'meitar',
                description:'hhhhhhjdlhahjkdakkk',
                vocalSrc:clapping,
                id:13
            },
            Migron: {
                label:'migron',
                description:'so this is migronn',
                vocalSrc:clapping,
                id:14
            }
        
        },
        info:{
            goTo: 'Where do you want to go next?',
            goToDistanceText:'The site is',
            goToDistanceinfo:'meters from you.'
        },
        navBar:{
            home:'Home',
            shareAMoment:"Share a moment",
            map:"Yad Vashem map",
            webSite:"Yad Vashem on the web"
        }    
    },
    // object for things that stay the same between languages such as images
    Globals:{
        coverPage:{
        },
        locationsList:{
            Hertzelia:{
                 distance: 453,
                imgSrc:locationsImagesHertzelia,
                handicap:true,
                wheelchair:true
            },
            Jerusalem: {
                 distance: 345,
                imgSrc:locationsImagesJerusalem,
                handicap:true,
                wheelchair:false
            },
            Meitar: {
                 distance: 435,
                imgSrc:locationsImagesMeitar,
                handicap:false,
                wheelchair:false
            },
            Migron: {
                 distance: 4533,
                imgSrc:locationsImagesMigron,
                handicap:true,
                wheelchair:true
            }
        
        }    
    },
}
