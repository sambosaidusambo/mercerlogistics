const cart = {
  trackingid: "string",
  receiver: {
    userid: id,
    name: String,
    email: String,
    phone: number,
    address: {
      country: String,
      state: String,
      LGA: String,
      homeaddress: String,
      postalcode: number,
    },
    items: [
      {
        name: string,
        dimenstionorsize: any,
        priceinnaira: number,
        merchantorvendor: string,
      },
    ],
    route: [
      {
        from: String,
        to: string,
        bundle: {
          in: id,
          outTo: id,
        },
      },
    ],
  },
};