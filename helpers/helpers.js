//initialize Sport array 
const sports = {}

const getData = async () => {
    try {
        const response = await fetch('http://localhost:8000/data', { method: 'GET' })
        const data = await response.json();
        if (response.status === 200) {
            return data;
        }
    } catch (err) {
        console.log(err);
    }
};

const CreateSportObjects = async () => {
    //fetching data
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
    return sports
}


function createNavBar() {
    const navHTML = document.querySelector('.nav-bar');
}


function LIVE() {
    this.sportData = []
    this.navBar = '';
    this.selectedSport = ''
    this._SPORT_NAV_CONTAINER = document.querySelector('.sport-nav-bar-wrapper')

    this.fetchData = async () => {
        this.sportData = await CreateSportObjects();
    }

    this.drawNavBar = () => {
        let navBox = ""
        for (const i in this.sportData) {
            console.log(i);
            navBox += `
            <div class="sport-nav-bar-item" sport-id>
                <div class="sport-nav-bar-img"></div>
                <div class="sport-nav-text"><span>${i}</span><span>${i.length}</span></div>
            </div>`
        }
        this._SPORT_NAV_CONTAINER.innerHTML = navBox;
    }

    this.initialiveLIVE = async () => {
        await this.fetchData();
        this.drawNavBar();
    }

}



const _LIVE = new LIVE();
_LIVE.initialiveLIVE();

function Sport(sportName) {

    this.data = []
    this.name = sportName
    this.matchInfo = {}

    this.addData = (data) => {
        this.data.push(data)
    }
    this.addMatchInfo = (info) => {
        this.matchInfo = info
    }
    this.updateData = (updatedData) => {
        if (isObjectEquivalent(this.data, updatedData)) {
            console.log('equalData');
        } else {
            this.data = updatedData;
        }
    }
    this.updateInfo = (UpdatedInfo) => {
    }
}




function isObjectEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
