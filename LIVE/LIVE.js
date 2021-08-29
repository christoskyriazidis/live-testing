function LIVE(selectedSport) {
    this.initialiveLIVE();
    this.sportData = []
    this.navBar = '';
    this.selectedSportId = selectedSport
    this._SPORT_NAV_CONTAINER = document.querySelector('.sport-nav-bar-wrapper');
}

//Auto initialize LIVE when creating new Object.
LIVE.prototype.initialiveLIVE = async function () {
    await this.CreateSportObjects();
    this.drawNavBar();
    this.NavigationHandler();
    this.RenderSelectedSport();
}

LIVE.prototype.CreateSportObjects = async function () {
    const data = await getData();
    const sports = {};

    for (let match of data.root.CalendarEvent) {
        const { attr, Games } = match
        const { isEnabled, isLive, EventSportEN } = attr;

        if (isEnabled && isLive) {
            if (EventSportEN in sports) {
                sports[EventSportEN].push({ attr, Games });
            } else {
                sports[EventSportEN] = [{ attr, Games }];
            }
        }
    }
    this.sportData = sports
}

LIVE.prototype.drawNavBar = function () {
    let navBox = ""
    for (const i in this.sportData) {
        navBox += `
            <div class="sport-nav-bar-item" sport-id="${Math.floor(Math.random() * 200000 + 1)}">
                <div class="sport-nav-bar-img esports-img"></div>
                <div class="sport-nav-text"><span>${i}</span><span>${i.length}</span></div>
            </div>`
    }
    this._SPORT_NAV_CONTAINER.innerHTML = navBox;
}

LIVE.prototype.SetSelectedSportId = function (sportId) {
    this.selectedSportId = sportId;
    this.NavigationHandler();
}

LIVE.prototype.NavigationHandler = function () {
    const sportId = this.selectedSportId
    //fetch/print data 
    $('.sport-nav-bar-item').removeClass('active-nav-bar-item');
    $(`[sport-id="${sportId}"]`).addClass('active-nav-bar-item');
    window.history.pushState({ sportId }, `${sportId}`, `#/sport/${sportId}`);
}

LIVE.prototype.RenderSelectedSport = function () {
    const _Sport_Strategy = new Sport_Strategy();
    const _BasketBall = new BasketBall();
    _Sport_Strategy.setStrategy(_BasketBall)
    _Sport_Strategy.makeSportContent(this.sportData['Football']);
}

