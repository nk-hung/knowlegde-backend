class FootballPlayer {
  constructor(name, club, goals) {
    this.name = name;
    this.club = club;
    this.goals = goals;
  }

  score() {
    goals++;
  }

  // copy existing object without making you code dependent on their class
  clone() {
    return new FootballPlayer(this.name, this.club, this.goals);
  }
}

FootballPlayer.prototype.stats = {
  minusesPlayed: 0,
};

// create new prototype
const prototypePattern = new FootballPlayer('CR7', 'Al Nassr', '15');

// create concretePrototype
const cr7 = prototypePattern.clone();
cr7.stats = { minusesPlayed: 10 };

// create concretePrototype
const m10 = prototypePattern.clone();
m10.name = 'm10';
m10.club = 'psg';
m10.goals = '12';
