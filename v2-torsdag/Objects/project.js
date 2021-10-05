const house = {
  address: "Postmästaregatan 33",
  city: "Örebro",
  size: 135,
  buildYear: 1978,
  gardenSize: 380,

  showAddress: function () {
    console.log(`${this.address} ${this.city}`);
  },

  getAge: function () {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year - this.buildYear;
  },

  getHouseGardenRatio: function () {
    let ratio = this.size / this.gardenSize;
    return `${Math.round(ratio * 100)}%`;
  },
};

house.showAddress();
console.log(house.getAge());
console.log(`Andelen hus på tomten är: ${house.getHouseGardenRatio()}`);
