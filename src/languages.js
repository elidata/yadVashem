import React, { Component } from 'react';
import CoverPageLogoEnglish from './images/CoverPageLogoEnglish.png'
import CoverPageLogoHebrew from './images/CoverPageLogoHebrew.png'
import locationsImagesHertzelia from './images/LocationsImagesHertzelia.png'
import locationsImagesJerusalem from './images/LocationsImagesJerusalem.png'
import locationsImagesMeitar from './images/LocationsImagesMeitar.jpg'
import locationsImagesMigron from './images/LocationsImagesMigron.jpg'
export let languages = {
    Hebrew:{
        coverPage:{
            title:'סיור מודרך בקמפוס',
            imgSrc:CoverPageLogoHebrew
        },
        locationsList:{
            HeHertzelia:{
                lable:'הרצליה',
                description:"הֶרְצְלִיָּה היא עיר חוף בשרון הדרומי, כ-10 קילומטר צפונית לתל אביב, על מישור החוף. גובהה נע בין 0 ל-66 מ' מעל פני הים.' 'הרצליה נוסדה כמושבה ב-13 בדצמבר 1924 ונקראת על שם בנימין זאב הרצל, חוזה מדינת ישראל",
                distance: 476,
                imgSrc:locationsImagesHertzelia
            },
            HeJerusalem: {
                lable:'ירושלים',
                description:"עיר הבירה של מדינת ישראל והעיר הגדולה ביותר בה. נכון לשנת 2016, שכנו בה כ-882 אלף תושבים. בירושלים שוכנים מוסדות הממשל של ישראל: הכנסת, בית המשפט העליון,משכן הנשיא, בית ראש הממשלה ורוב משרדי הממשלה.",
                distance: 995,
                imgSrc:locationsImagesJerusalem
            },
            HeMeitar: {
                lable:'מיתר',
                description:"מיתר היא מועצה מקומית במחוז הדרום בישראל, היא שוכנת בשיפוליו הדרומיים של הר חברון כ-11111111118 קילומטרים צפונית- מזרחית לבאר ששבעת הוכרזה כמועצה מקומית ב1987",
                distance: 545,
                imgSrc:locationsImagesMeitar
            },
            HeMigron: {
                lable:'מגרון',
                description:'יישוב במועצה אזורית מטה בנימין, מקסים ומתאים למשפחות צעירות',
                distance: 45,
                imgSrc:locationsImagesMigron
            }
           
        },
        
    },
    English:{
        coverPage:{
            title:'Campus Tour Guide',
            imgSrc:CoverPageLogoEnglish
        },
        locationsList:{
            hertzelia:{
                lable:'hertzelia',
                description:'hertzelia',
                imgSrc:locationsImagesHertzelia
            },
            jerusalem: {
                lable:'jerusalem',
                description:'ggggggg',
                imgSrc:locationsImagesJerusalem
            },
            meitar: {
                lable: 'meitar',
                description:'hhhhh',
                imgSrc:locationsImagesMeitar
            },
            migron: {
                lable:'migron',
                description:'so this is migronn',
                imgSrc:locationsImagesMigron
            }
        
        }    
    }
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