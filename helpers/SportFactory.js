const Factory = function () {
    this.createSport = function (type, data) {
        let _Sport;
        switch (type) {
            case 'Football':
                _Sport = new Football(data);
                break;
            case 'Baseball':
                _Sport = new Baseball(data);
                break;

            default:
                _Sport = new Football(data);
                break;
        }

        _Sport.type = type;

        _Sport.drawHTML = function () {
            this.makeSportContent()
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }
        return _Sport;
    }
}

function run() {
    const Sports = [];
    const _Sport_Factory = new Factory();

    Sports.push(_Sport_Factory.createSport('Football', 'football data'));
    Sports.push(_Sport_Factory.createSport('Baseball', 'Baseball data'));

    for (let i of Sports) {
        console.log(i.makeSportContent());
    }
}


const Football = function (data) {
    this.data = data
    this.makeSportContent = function () {
        return `html Football ${this.data}`;
    }
};

const Baseball = function (data) {
    this.data = data
    this.makeSportContent = function () {
        return `html Football ${this.data}`;
    }
};

const AmericanFootball = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html AmericanFootball ${data}`;
    }
}
const BasketBall = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html BasketBall ${data}`;
    }
}
const Cricket = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html Cricket ${data}`;
    }
}
const Futsal = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html Futsal ${data}`;
    }
}
const Handball = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html Handball ${data}`;
    }
}
const IceHockey = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html IceHockey ${data}`;
    }
}
const TableTennis = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html TableTennis ${data}`;
    }
}
const Tennis = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html Tennis ${data}`;
    }
}
const Valleyball = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html Valleyball ${data}`;
    }
}
const Esports = function () {
    this.makeSportContent = function (data) {
        console.log(data);
        return `html Esports ${data}`;
    }
}



