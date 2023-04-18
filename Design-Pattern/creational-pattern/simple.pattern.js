// without pattern
const serviceLogistic = (cargoVolume) => {
  switch (cargoVolume) {
    case '10': {
      return {
        name: 'Truck 10',
        doors: '4',
        price: '10 VND',
      };
    }
    case '20': {
      return {
        name: 'Truck 20',
        doors: '6',
        price: '50 VND',
      };
    }
  }
};

console.log(serviceLogistic(20));

// with simple pattern
class LogisticServices {
  constructor(name = 'Ford', price = '10 VND', customerInfo = {}) {
    this.name = name;
    this.price = price;
    this.customerInfo = customerInfo;
  }

  static getCustomer = (cargoVolume) => {
    switch (cargoVolume) {
      case '10':
        return new LogisticServices();
      case '20':
        return new LogisticServices('Truch 20', '50 VND');
    }
  };
}

console.log(LogisticServices.getCustomer('20'));

// simple pattern votiating Open/Close principle => make factory pattern
