import React, { Component } from 'react';
import CoverPageLogoEnglish from './images/CoverPageLogoEnglish.png'
import CoverPageLogoHebrew from './images/CoverPageLogoHebrew.png'
import locationsImagesHertzelia from './images/LocationsImagesHertzelia.png'
import locationsImagesJerusalem from './images/LocationsImagesJerusalem.png'
import locationsImagesMeitar from './images/LocationsImagesMeitar.jpg'
import locationsImagesMigron from './images/LocationsImagesMigron.jpg'
export let languages = {
    Hebrew:{
        path:'He',
        coverPage:{
            title:'סיור מודרך בקמפוס',
            imgSrc:CoverPageLogoHebrew
        },
        locationsList:{
            Hertzelia:{
                lable:'הרצליה',
                description:"הֶרְצְלִיָּה היא עיר חוף בשרון הדרומי, כ-10 קילומטר צפונית לתל אביב, על מישור החוף. גובהה נע בין 0 ל-66 מ' מעל פני הים.' 'הרצליה נוסדה כמושבה ב-13 בדצמבר 1924 ונקראת על שם בנימין זאב הרצל, חוזה מדינת ישראל",
            },
            Jerusalem: {
                lable:'ירושלים',
                description:"עיר הבירה של מדינת ישראל והעיר הגדולה ביותר בה. נכון לשנת 2016, שכנו בה כ-882 אלף תושבים. בירושלים שוכנים מוסדות הממשל של ישראל: הכנסת, בית המשפט העליון,משכן הנשיא, בית ראש הממשלה ורוב משרדי הממשלה.",
            },
            Meitar: {
                lable:'מיתר',
                description:"מיתר היא מועצה מקומית במחוז הדרום בישראל, היא שוכנת בשיפוליו הדרומיים של הר חברון כ-11111111118 קילומטרים צפונית- מזרחית לבאר ששבעת הוכרזה כמועצה מקומית ב1987",
            },
            Migron: {
                lable:'מגרון',
                description:'יישוב במועצה אזורית מטה בנימין, מקסים ומתאים למשפחות צעירות',
            }
           
        },
        
    },
    English:{
        path: 'En',
        coverPage:{
            title:'Campus Tour Guide',
            imgSrc:CoverPageLogoEnglish
        },
        locationsList:{
            Hertzelia:{
                lable:'hertzelia',
                description:'hertzelia kjfdkl;asfj;s jklf;djs;ldajf;kaj fjlkj;dslkjf;laf iroewrwuiroewi dfoiewuroirui',
            },
            Jerusalem: {
                lable:'jerusalem',
                description:'ggggggg jdjf;lksru liulkdjlcmns jdlclkamxkj fsldmx,j ifjkx,ndifjs fjknxnkxj fknkclxhjf d',
            },
            Meitar: {
                lable: 'meitar',
                description:<p>'hhhhh'<br/>'hjdlhahjkdakkk'</p>,
            },
            Migron: {
                lable:'migron',
                description:'so this is migronn',
            }
        
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
                handicap:true
            },
            Jerusalem: {
                 distance: 345,
                imgSrc:locationsImagesJerusalem,
                handicap:true
            },
            Meitar: {
                 distance: 435,
                imgSrc:locationsImagesMeitar,
                handicap:false
            },
            Migron: {
                 distance: 4533,
                imgSrc:locationsImagesMigron,
                handicap:true
            }
        
        }    
    },
}
export class LanguageButtons extends Component{
    render(){
      return(
        <div dir = {this.props.direction}>
          <h1>{this.props.languageNow.coverPage.title}</h1>
          <button onClick = {this.props.turnEnglish} >English</button>
          <button onClick = {this.props.turnHebrew} >עברית</button>
        </div>
      );
    }
  }