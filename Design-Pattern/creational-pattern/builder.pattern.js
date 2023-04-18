class FootballPlayer {
  constructor(builder) {
    this.name = builder.name;
    this.age = builder.age;
    this.nationality = builder.nationality;
    this.position = builder.position;
    this.team = builder.team;
    this.stats = builder.stats;
  }

  toString() {
    let player = `Player: \n`;
    player += `- Name: ${this.name}\n`;
    player += `- Age: ${this.age}\n`;
    player += `- Nationality: ${this.nationality}\n`;
    player += `- Position: ${this.position}\n`;
    player += `- Team: ${this.team}\n`;
    player += `- Stats: ${JSON.stringify(this.stats)}\n`;

    return player;
  }
}

class FootballPlayerBuilder {
  constructor() {
    this.name = '';
    this.age = 0;
    this.nationality = '';
    this.position = '';
    this.team = '';
    this.stats = {};
  }

  builderName(name) {
    this.name = name;
    return this;
  }

  builderAge(age) {
    this.age = age;
    return this;
  }

  builderNationality(country) {
    this.nationality = country;
    return this;
  }

  builderPosition(position) {
    this.position = position;
    return this;
  }

  builderTeam(team) {
    this.team = team;
    return this;
  }

  builderStats(stats) {
    this.stats = stats;
    return this;
  }

  build() {
    return new FootballPlayer(this);
  }
}

const builderPattern = new FootballPlayerBuilder();

const cr7 = builderPattern
  .builderName('cr7')
  .builderAge(35)
  .builderNationality('Portugal')
  .builderTeam('Al Nassr')
  .builderPosition('FW')
  .builderStats({ goals: 15, assist: 2 })
  .build();

console.log(cr7.toString());
