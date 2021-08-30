



const Sport_Strategy = function () {
    this.sportName = ""
}

Sport_Strategy.prototype = {
    setStrategy: function (sportName) {
        this.sportName = sportName
    },
    makeSportContent: function (data) {
        return this.sportName.makeSportContent(data);
    },
    updateSportContent: function (data) {
        return this.sportName.updateSportContent(data);
    }
}

// const Football = function () {
//     this.makeSportContent = function (data) {
//         console.log(data);
//         return "$45.95";
//     }
// };

// const BasketBall = function () {
//     this.makeSportContent = function (data) {
//         let header = `
//             <div class="live-sport-header-title">
//                 BasketBall
//             </div>
//             <div class="live-sport-header-options">
//                 <div>Which team will win the match?</div>
//             </div>
//         `;
//         let body = ''
//         for (let i of data) {
//             const { attr, Games } = i;
//             const { EventLeagueEN, } = attr;
//             body += `
//             <div class="eventLeagueHeader">
//                 <div class="event-title">${EventLeagueEN}</div>
//                 <div class="odd-titles">
//                     <div class="odd-title">1</div>
//                     <div class="odd-title">2</div>
//                 </div>
//             </div>
//             <div class="game-row">
//             `
//             if (Games.G) {
//                 for (let j of Games.G) {
//                     const { attr, R } = j;
//                     body +=
//                         `
//                 <div class="team-holder">
//                     <div class="first-row">
//                         <div class="star">str</div>
//                         <div class="team-names">
//                             <div class="a-team">Tri State</div>
//                             <div class="b-team">Trilogy</div>
//                         </div>
//                         <div class="team-score">
//                             <div class="team-score-a">1</div>
//                             <div class="team-score-b">0</div>
//                         </div>
//                     </div>
//                 <div class="second-row">
//                     <div>3></div>
//                     <div>1stp . < 0 min.</div> </div> 
//                 </div>
//                 <div class="odds-holder">
//                 `
//                     for (let k of R) {
//                         const { attr } = k;
//                         const { O0 } = attr
//                         body +=
//                             `
//                         <div class="point-selection">${O0}</div>
//                         `
//                     }
//                     body += `</div></div></div>`
//                 }
//             }
//         }

//         // let body =
//         //     `
//         //     <div class="selectSportData">
//         //         <div class="eventLeagueHeader">
//         //             <div class="event-title">BIG3</div>
//         //             <div class="odd-titles">
//         //                 <div class="odd-title">1</div>
//         //                 <div class="odd-title">2</div>
//         //             </div>
//         //         </div>
//         //         <div class="game-row">
//         //             <div class="team-holder">
//         //                 <div class="first-row">
//         //                     <div class="star">str</div>
//         //                     <div class="team-names">
//         //                         <div class="a-team">Tri State</div>
//         //                         <div class="b-team">Trilogy</div>
//         //                     </div>
//         //                     <div class="team-score">
//         //                         <div class="team-score-a">1</div>
//         //                         <div class="team-score-b">0</div>
//         //                     </div>
//         //                 </div>
//         //                 <div class="second-row">
//         //                     <div>3></div>
//         //                     <div>1stp . < 0 min.</div> </div> </div> <div class="odds-holder">
//         //                             <div class="point-selection">1.71</div>
//         //                             <div class="point-selection">2.10</div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         // `

//         document.querySelector('.live-sport-header').innerHTML = header
//         document.querySelector('.live-matches-container').innerHTML = body
//         return { header, body };
//     },
//         this.updateSportContent = function (data) {
//             console.log(data);
//         }
// };


// const DUMMY_DATA = [
//     {
//         "attr": {
//             "ID": "02H43X911",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "St. Paul Saints Game 2 - Toledo Mud Hens Game 2",
//             "EventDate": "2021-08-29",
//             "EventTime": "22:05:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ Minor League Baseball",
//             "LiveScore": "1:2",
//             "LivePeriod": "3",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "St. Paul Saints Game 2 - Toledo Mud Hens Game 2",
//             "PrID": "5139006",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "Triple A Minor League",
//             "CrestHomeCountry": "",
//             "CrestHomeID": "",
//             "CrestAwayCountry": "",
//             "CrestAwayID": "",
//             "mcntr": 17
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X911G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X911G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "2.60",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X911G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "1.45",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X7",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "Σικάγο Καμπς - ΣΙΚ Γουάιτ Σοξ",
//             "EventDate": "2021-08-29",
//             "EventTime": "20:55:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "1:3",
//             "LivePeriod": "7",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Chi Cubs - Chi White Sox",
//             "PrID": "8374010",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3627",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3644",
//             "mcntr": 14
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X7G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X7G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "7.75",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X7G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "1.08",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X680",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΣΙΝ Ρεντς - ΜΙΑ Μάρλινς",
//             "EventDate": "2021-08-29",
//             "EventTime": "19:57:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "0:2",
//             "LivePeriod": "15",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Cin Reds - Mia Marlins",
//             "PrID": "8374012",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3633",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3639",
//             "mcntr": 5
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X680G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X680G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "5.75",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X680G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "1.13",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X4",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "Τάμπα Μπέϊ Ρείς - ΜΠΑ Οριόλες",
//             "EventDate": "2021-08-29",
//             "EventTime": "19:51:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "10:4",
//             "LivePeriod": "13",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Tb Rays - Bal Orioles",
//             "PrID": "8374009",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3653",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3652",
//             "mcntr": 10
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X4G4004X18D5",
//                         "N": "Συνολικά Runs",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Total Runs"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X4G4004X18D5-over",
//                                 "RV": "1",
//                                 "N": "Πάνω 18.5",
//                                 "O0": "4.40",
//                                 "NEN": "Over 18.5"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X4G4004X18D5-under",
//                                 "RV": "1",
//                                 "N": "Κάτω 18.5",
//                                 "O0": "1.17",
//                                 "NEN": "Under 18.5"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X3",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΣΦ Τζάιαντς - ΑΤΛ Μπρέιβς",
//             "EventDate": "2021-08-29",
//             "EventTime": "20:10:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "0:3",
//             "LivePeriod": "11",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Sf Giants - Atl Braves",
//             "PrID": "8374023",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3634",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3656",
//             "mcntr": 16
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X3G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X3G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "10.25",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X3G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "1.05",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X29",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΧΙΟΥ Άστρος - ΤΕΞ Ρέιντζερς",
//             "EventDate": "2021-08-29",
//             "EventTime": "21:18:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "0:3",
//             "LivePeriod": "5",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Hou Astros - Tex Rangers",
//             "PrID": "8374026",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3655",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3647",
//             "mcntr": 16
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X29G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X29G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "3.35",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X29G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "1.31",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X23",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΣΤΛ Κάρντιναλς - ΠΙΤ Πάιρατς",
//             "EventDate": "2021-08-29",
//             "EventTime": "19:55:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "3:1",
//             "LivePeriod": "13",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Stl Cardinals - Pit Pirates",
//             "PrID": "8374008",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3632",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3637",
//             "mcntr": 12
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X23G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X23G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "1.14",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X23G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "5.51",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X22",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΑΡΙ Ντάιαμοντμπακς - ΦΙΛ Φίλις",
//             "EventDate": "2021-08-29",
//             "EventTime": "19:51:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "1:5",
//             "LivePeriod": "11",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Ari Diamondbacks - Phi Phillies",
//             "PrID": "8374006",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3640",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3635",
//             "mcntr": 2
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X22G4023X1D5",
//                         "N": "Συνολικά Runs (7ο Inning)",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Total Runs (7th Inning)"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X22G4023X1D5-over",
//                                 "RV": "1",
//                                 "N": "Πάνω 1.5",
//                                 "O0": "3.40",
//                                 "NEN": "Over 1.5"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X22G4023X1D5-under",
//                                 "RV": "1",
//                                 "N": "Κάτω 1.5",
//                                 "O0": "1.29",
//                                 "NEN": "Under 1.5"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X19",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΟΥΑ Νάσιοναλς - ΝΥ Μετς",
//             "EventDate": "2021-08-29",
//             "EventTime": "19:56:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "3:4",
//             "LivePeriod": "11",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Was Nationals - Ny Mets",
//             "PrID": "8374014",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "5930",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3629",
//             "mcntr": 12
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X19G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X19G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "5.51",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X19G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "1.14",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X1781",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "Chinandega Game 2 - Matagalpa Game 2",
//             "EventDate": "2021-08-29",
//             "EventTime": "21:32:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "Νικαράγουα CNBS",
//             "LiveScore": "3:0",
//             "LivePeriod": "7",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Chinandega Game 2 - Matagalpa Game 2",
//             "PrID": "12304006",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "Nicaragua CNBS",
//             "CrestHomeCountry": "",
//             "CrestHomeID": "",
//             "CrestAwayCountry": "",
//             "CrestAwayID": "",
//             "mcntr": 10
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X1781G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X1781G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "1.19",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X1781G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "4.30",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X17",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΜΙΛ Μπρούερς - ΜΙΝ Τουίνς",
//             "EventDate": "2021-08-29",
//             "EventTime": "20:55:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "6:0",
//             "LivePeriod": "7",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Mil Brewers - Min Twins",
//             "PrID": "8374013",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3630",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3649",
//             "mcntr": 16
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X17G102",
//                         "N": "Ποιά ομάδα θα κερδίσει το μάτς;",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Which team will win the match?"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X17G102-1",
//                                 "RV": "1",
//                                 "N": "1",
//                                 "O0": "1.01",
//                                 "NEN": "1"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X17G102-2",
//                                 "RV": "1",
//                                 "N": "2",
//                                 "O0": "16.50",
//                                 "NEN": "2"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     {
//         "attr": {
//             "ID": "02H43X11",
//             "isEnabled": "1",
//             "isLive": "1",
//             "EventName": "ΤΟΡ Μπλου Τζέις - NTI Τάιγκερς",
//             "EventDate": "2021-08-29",
//             "EventTime": "19:59:00",
//             "EventSport": "Μπέιζμπολ",
//             "EventLeague": "ΗΠΑ MLB",
//             "LiveScore": "2:0",
//             "LivePeriod": "11",
//             "HasLiveStream": "0",
//             "StreamSrc": "",
//             "HasLiveCourt": "1",
//             "StreamAllowedDomains": "0",
//             "CTMRvis": "0",
//             "CTMRv": "0",
//             "FTMRv": "00:00:00",
//             "EventNameEN": "Tor Blue Jays - Det Tigers",
//             "PrID": "8374011",
//             "BrID": "",
//             "EventSportEN": "Baseball",
//             "EventLeagueEN": "MLB",
//             "CrestHomeCountry": "0",
//             "CrestHomeID": "3642",
//             "CrestAwayCountry": "0",
//             "CrestAwayID": "3648",
//             "mcntr": 2
//         },
//         "Games": {
//             "G": [
//                 {
//                     "attr": {
//                         "GameID": "02H43X11G4023X1D5",
//                         "N": "Συνολικά Runs (7ο Inning)",
//                         "GameIsVisible": "1",
//                         "CP": "9",
//                         "Columns": "0",
//                         "Mainbet": "0",
//                         "UsePlayerNames": "0",
//                         "NEN": "Total Runs (7th Inning)"
//                     },
//                     "R": [
//                         {
//                             "attr": {
//                                 "RID": "02H43X11G4023X1D5-over",
//                                 "RV": "1",
//                                 "N": "Πάνω 1.5",
//                                 "O0": "3.25",
//                                 "NEN": "Over 1.5"
//                             }
//                         },
//                         {
//                             "attr": {
//                                 "RID": "02H43X11G4023X1D5-under",
//                                 "RV": "1",
//                                 "N": "Κάτω 1.5",
//                                 "O0": "1.32",
//                                 "NEN": "Under 1.5"
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     }
// ]

// const _UPS = new UPS();
// const _Fedex = new Fedex();
// const _Helpers = new Helpers();


// _Helpers.setStrategy(_UPS);
// console.log('upds strategy: ' + _Helpers.calculate(package));
// _Helpers.setStrategy(_Fedex);
// console.log('upds strategy: ' + _Helpers.calculate(package));


