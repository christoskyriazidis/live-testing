const Sport_Strategy = function () {
    this.sportName = ""
}

Sport_Strategy.prototype = {
    setStrategy: function (sportName) {
        this.sportName = sportName
    },
    makeSportContent: function (package) {
        return this.sportName.makeSportContent(package);
    }
}

const Football = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return "$45.95";
    }
};

const BasketBall = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        let header = `
        <div class="live-sport-header-title">
            BasketBall
        </div>
        <div class="live-sport-header-options">
            <div>Which team will win the match?</div>
        </div>`;
        for(let i of data){

        }


        let body =
            `
            <div class="selectSportData">
                <div class="eventLeagueHeader">
                    <div class="event-title">BIG3</div>
                    <div class="odd-titles">
                        <div class="odd-title">1</div>
                        <div class="odd-title">2</div>
                    </div>
                </div>
                <div class="game-row">
                <div class="team-holder">
                    <div class="first-row">
                        <div class="star">str</div>
                        <div class="team-names">
                            <div class="a-team">Tri State</div>
                            <div class="b-team">Trilogy</div>
                        </div>
                        <div class="team-score">
                            <div class="team-score-a">1</div>
                            <div class="team-score-b">0</div>
                        </div>
                    </div>
                    <div class="second-row">
                        <div>3></div>
                        <div>1stp . < 0 min.</div> </div> </div> <div class="odds-holder">
                                <div class="point-selection">1.71</div>
                                <div class="point-selection">2.10</div>
                        </div>
                    </div>
                </div>
        
        `



        return "$43.20";
    }
};


const DUMMY_DATA = []
const _Sport_Strategy = new Sport_Strategy();
const _BasketBall = new BasketBall();
_Sport_Strategy.setStrategy(_BasketBall)

console.log(_Sport_Strategy.makeSportContent(DUMMY_DATA));
// const _UPS = new UPS();
// const _Fedex = new Fedex();
// const _Helpers = new Helpers();


// _Helpers.setStrategy(_UPS);
// console.log('upds strategy: ' + _Helpers.calculate(package));
// _Helpers.setStrategy(_Fedex);
// console.log('upds strategy: ' + _Helpers.calculate(package));


