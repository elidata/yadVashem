import React, { Component } from 'react';
import CoverPageLogoEnglish from './CoverPageLogoEnglish.png'
import CoverPageLogoHebrew from './CoverPageLogoHebrew.png'

export let languages = {
    Hebrew:{
        coverPage:{
            title:'סיור מודרך בקמפוס',
            imgSrc:CoverPageLogoHebrew
        },
        locations:{
            hertzelia:{
                lable:'הרצליה',
                description:"הֶרְצְלִיָּה היא עיר חוף בשרון הדרומי, כ-10 קילומטר צפונית לתל אביב, על מישור החוף. גובהה נע בין 0 ל-66 מ' מעל פני הים. הרצליה נוסדה כמושבה ב-13 בדצמבר 1924 ונקראת על שם בנימין זאב הרצל, חוזה מדינת ישראל.",
                distance: 476,
                imgSrc:''
            },
            jerusalem: {
                lable:'ירושלים',
                description:"עיר הבירה של מדינת ישראל והעיר הגדולה ביותר בה. נכון לשנת 2016, שכנו בה כ-882 אלף תושבים. בירושלים שוכנים מוסדות הממשל של ישראל: הכנסת, בית המשפט העליון,משכן הנשיא, בית ראש הממשלה ורוב משרדי הממשלה.",
                distance: 995,
                imgSrc:''
            },
            meitar: {
                lable:'מיתר',
                description:"מיתר היא מועצה מקומית במחוז הדרום בישראל, היא שוכנת בשיפוליו הדרומיים של הר חברון כ-11111111118 קילומטרים צפונית- מזרחית לבאר ששבעת הוכרזה כמועצה מקומית ב1987",
                distance: 545,
                imgSrc:''
            },
            migron: {
                lable:'מגרון',
                description:'יישוב במועצה אזורית מטה בנימין, מקסים ומתאים למשפחות צעירות',
                distance: 45,
                imgSrc:''
            }
           
        },
        
    },
    English:{
        coverPage:{
            title:'Campus Tour Guide',
            imgSrc:CoverPageLogoEnglish
        },
        locations:{
            hertzelia:{
                lable:'hertzelia',
                description:'hertzelia',
                stars: 4
            },
            jerusalem: {
                lable:'jerusalem',
                description:'ggggggg',
                stars: 5
            },
            meitar: {
                lable: 'meitar',
                description:'hhhhh',
                stars:5
            },
            migron: {
                lable:'migron',
                description:'so this is migronnn pa pa pa pa p ap pa pa pa good morning!',
                stars: 3.5
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
          {/* <img src = "data:image/png;base64,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"></img> */}
        </div>
      );
    }
  }