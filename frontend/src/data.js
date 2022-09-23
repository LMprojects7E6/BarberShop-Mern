export const currency = "€";

export const dataTableCustomer = [
  {
    _id: {
      $oid: "632cf5b6f5ccdb70f3b80180",
    },
    price: "€52,69",
    date: "2022-10-03T12:00:00",
  },
  {
    _id: {
      $oid: "632cf5b6f5ccdb70f3b80181",
    },
    date: "2022-10-24T20:00:00",
    price: "€30,87",
  },
  {
    _id: {
      $oid: "632cf5b6f5ccdb70f3b80182",
    },
    date: "2022-10-05T14:00:00",
    price: "€37,22",
  },
  {
    _id: {
      $oid: "632cf5b6f5ccdb70f3b80183",
    },
    date: "2022-10-12T13:00:00",
    price: "€23,57",
  },
  {
    _id: {
      $oid: "632cf5b6f5ccdb70f3b80184",
    },
    date: "2022-10-14T13:00:00",
    price: "€25,57",
  },
  {
    _id: {
      $oid: "632cf5b6f5ccdb70f3b80185",
    },
    date: "2022-10-15T13:00:00",
    price: "€31,57",
  },
  {
    _id: {
      $oid: "632cf5b6f5ccdb70f3b80186",
    },
    date: "2022-10-16T13:00:00",
    price: "€31,57",
  },
  {
    _id: {
      $oid: "632d1e6e5195c175fbdfdcf1",
    },
    price: 100,
    date: {
      $date: {
        $numberLong: "1656829800000",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "632d1e735195c175fbdfdcf8",
    },
    price: 50,
    date: {
      $date: {
        $numberLong: "1656829800000",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "632d1e775195c175fbdfdcff",
    },
    price: 30,
    date: {
      $date: {
        $numberLong: "1656829800000",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "632d398fb0b548bc90724119",
    },
    price: 30,
    date: {
      $date: {
        $numberLong: "1656829800000",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "632d3d39b0b548bc90724122",
    },
    price: 30,
    date: {
      $date: {
        $numberLong: "1656829800000",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "632d69405f78c31c2dee38a2",
    },
    price: 140,
    date: {
      $date: {
        $numberLong: "1656829800000",
      },
    },
    __v: 0,
  },
];

export const dataUsersEmployees = [
  {
    _id: {
      $oid: "632cf60565b88ef0037c6c7b",
    },
    first_name: "AdminName",
    last_name: "AdminLast",
    email: "admin@gmail.com",
    password: "$2b$10$NofdnxxNa/pC45Q59TsxW.e6Ihy2qD5mnG5GxSg6fRSs4EMg5vkVC",
    role: "admin",
    appointments: [],
    __v: 0,
  },

  {
    _id: {
      $oid: "632cf64765b88ef0037c6c81",
    },
    first_name: "EmployeeName",
    last_name: "EmployeeLast",
    email: "employee@gmail.com",
    password: "$2b$10$9RWY5m.0fnXbIfFz62oIQOBPW5dHZE6hQ2.5kcIl9fJxt6nOdz2Hm",
    role: "employee",
    appointments: [
      {
        $oid: "632d1e6e5195c175fbdfdcf1",
      },
      {
        $oid: "632d1e735195c175fbdfdcf8",
      },
      {
        $oid: "632d1e775195c175fbdfdcff",
      },
      {
        $oid: "632d398fb0b548bc90724119",
      },
      {
        $oid: "632d3d39b0b548bc90724122",
      },
      {
        $oid: "632d3d4eb0b548bc90724129",
      },
      {
        $oid: "632d69405f78c31c2dee38a2",
      },
    ],
  },

  {
    _id: {
      $oid: "6329750aff4bff78034e97f9",
    },
    first_name: "Ermanno",
    last_name: "Everard",
    email: "eeverard5@elpais.com",
    password: "84PJXjjUZB",
    role: "employee",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97fa",
    },
    first_name: "Nataniel",
    last_name: "Burrows",
    email: "nburrows6@skype.com",
    password: "pHiaIbSzdkAH",
    role: "employee",
  },

  {
    _id: {
      $oid: "6329750aff4bff78034e97fd",
    },
    first_name: "Norry",
    last_name: "Beri",
    email: "nberi9@tripod.com",
    password: "QS8yot",
    role: "employee",
  },

  {
    _id: {
      $oid: "6329750aff4bff78034e9801",
    },
    first_name: "Marylee",
    last_name: "Rawlings",
    email: "mrawlingsd@nih.gov",
    password: "s5gGhj0B",
    role: "employee",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97ff",
    },
    first_name: "Claudia",
    last_name: "Wastie",
    email: "cwastieb@usgs.gov",
    password: "c6sN5sF5",
    role: "employee",
  },
];

export const dataUsersCustomers = [
  ,
  {
    _id: {
      $oid: "6329750aff4bff78034e9800",
    },
    first_name: "Donia",
    last_name: "Cuss",
    email: "dcussc@feedburner.com",
    password: "5g4E1ZuuZrMu",
    role: "customer",
  },

  {
    _id: {
      $oid: "6329750aff4bff78034e9802",
    },
    first_name: "Amos",
    last_name: "Brealey",
    email: "abrealeye@phoca.cz",
    password: "lGM3eSfUime6",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e9803",
    },
    first_name: "Gibb",
    last_name: "Weekly",
    email: "gweeklyf@typepad.com",
    password: "GSMaCXxjn",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97fe",
    },
    first_name: "Tiffy",
    last_name: "Burgher",
    email: "tburghera@usda.gov",
    password: "zea9DtJk4T",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97fb",
    },
    first_name: "Evania",
    last_name: "Bagnall",
    email: "ebagnall7@nytimes.com",
    password: "y9M5066FK",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97fc",
    },
    first_name: "Mallory",
    last_name: "Rimes",
    email: "mrimes8@w3.org",
    password: "xAllsiXSTzod",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97f5",
    },
    first_name: "Leeanne",
    last_name: "Flippini",
    email: "lflippini1@cornell.edu",
    password: "GfL9kuj7Zb",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97f6",
    },
    first_name: "Tally",
    last_name: "Wrate",
    email: "twrate2@sina.com.cn",
    password: "D115MiDA",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97f7",
    },
    first_name: "Alvy",
    last_name: "O'Concannon",
    email: "aoconcannon3@purevolume.com",
    password: "NMHNPwlTwv",
    role: "customer",
  },
  {
    _id: {
      $oid: "6329750aff4bff78034e97f8",
    },
    first_name: "Kippie",
    last_name: "Bryce",
    email: "kbryce4@sfgate.com",
    password: "OHvFYVis",
    role: "customer",
  },
  {
    _id: {
      $oid: "632cf61c65b88ef0037c6c7e",
    },
    first_name: "CustomerName",
    last_name: "CustomerLast",
    email: "customer@gmail.com",
    password: "$2b$10$61GaTt49ZUWvLqS7tq9syOeIw/DSmOmpHytxCNPbvRXyaTMPzPsK6",
    role: "customer",
    appointments: [
      {
        $oid: "632d1e6e5195c175fbdfdcf1",
      },
      {
        $oid: "632d1e735195c175fbdfdcf8",
      },
      {
        $oid: "632d1e775195c175fbdfdcff",
      },
      {
        $oid: "632d398fb0b548bc90724119",
      },
      {
        $oid: "632d3d39b0b548bc90724122",
      },
      {
        $oid: "632d3d4eb0b548bc90724129",
      },
      {
        $oid: "632d69405f78c31c2dee38a2",
      },
    ],
    __v: 0,
  },
];
