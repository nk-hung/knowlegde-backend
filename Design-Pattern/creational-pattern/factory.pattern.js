// << Interface >>
// create service
class Car {
  constructor({ name = 'Ferari', brake = 'ABS', customerInfo = {} }) {
    this.name = name;
    this.brake = brake;
    this.customerInfo = customerInfo;
  }
}

// interface Deliver Factory
class DeliverService {
  deliverClass = null;
  getTransport = (customerInfo) => {
    return new this.deliverClass(customerInfo);
  };
}

// concreteCreatorA
class CarService extends DeliverService {
  deliverClass = Car;
}
// return ConcreteProduct
const carService = new CarService();

console.log(
  'cart Service:::',
  carService.getTransport({ customerInfo: { doors: 4, price: '10 VND' } })
);

// Truck Interface

class Truck {
  constructor({ name = 'Container', brake = 'hand', customerInfo = {} }) {
    this.name = name;
    this.brake = brake;
    this.customerInfo = customerInfo;
  }
}

class TruckService extends DeliverService {
  deliverClass = Truck;
}

const truckService = new TruckService();

console.log(
  'truck Service:::',
  truckService.getTransport({
    name: 'mini',
    customerInfo: { fan: 14, price: '100 VND' },
  })
);
