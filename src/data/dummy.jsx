import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);

export const barChartData = [
  [
    { x: "USA", y: 46 },
    { x: "GBR", y: 27 },
    { x: "CHN", y: 26 },
  ],
  [
    { x: "USA", y: 37 },
    { x: "GBR", y: 23 },
    { x: "CHN", y: 18 },
  ],
  [
    { x: "USA", y: 38 },
    { x: "GBR", y: 17 },
    { x: "CHN", y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Gold",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x",
    yName: "y",
    name: "Silver",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x",
    yName: "y",
    name: "Bronze",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 },
  ],
  ["#FFFF99"],
  ["#FFA500"],
  ["#FF4040"],
];

export const rangeColorMapping = [
  { label: "1°C to 10°C", start: "1", end: "10", colors: colorMappingData[1] },

  {
    label: "11°C to 20°C",
    start: "11",
    end: "20",
    colors: colorMappingData[2],
  },

  {
    label: "21°C to 30°C",
    start: "21",
    end: "30",
    colors: colorMappingData[3],
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 },
  title: "Months",
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}°C",
  title: "Temperature",
};

export const FinancialPrimaryXAxis = {
  valueType: "DateTime",
  minimum: new Date("2016, 12, 31"),
  maximum: new Date("2017, 9, 30"),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: "Price",
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: "checkbox", width: "50" },
  {
    headerText: "Name",
    width: "150",
    template: customerGridImage,
    textAlign: "Center",
  },
  {
    field: "ProjectName",
    headerText: "Project Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "130",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },
  {
    field: "Weeks",
    headerText: "Weeks",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "Budget",
    headerText: "Budget",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "CustomerID",
    headerText: "Customer ID",
    width: "120",
    textAlign: "Center",
    isPrimaryKey: true,
  },
];

export const employeesGrid = [
  {
    headerText: "Employee",
    width: "150",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },
  {
    field: "Title",
    headerText: "Designation",
    width: "170",
    textAlign: "Center",
  },
  {
    headerText: "Country",
    width: "120",
    textAlign: "Center",
    template: gridEmployeeCountry,
  },

  {
    field: "HireDate",
    headerText: "Hire Date",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "ReportsTo",
    headerText: "Reports To",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "EmployeeID",
    headerText: "Employee ID",
    width: "125",
    textAlign: "Center",
  },
];

export const links = [
  {
    title: "Instituto",
    links: [
      {
        name: "Instituto",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Páginas",
    links: [
      {
        name: "Boletas",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "Alumnos",
        icon: <IoMdContacts />,
      },
      {
        name: "Carreras",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendario",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
    ],
  },
  {
    title: "Gráficos",
    links: [
      {
        name: "linea",
        icon: <AiOutlineStock />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
    ],
  },
];

export const cartData = [
  {
    image: product5,
    name: "butterscotch ice-cream",
    category: "Milk product",
    price: "$250",
  },
  {
    image: product6,
    name: "Supreme fresh tomato",
    category: "Vegetable Item",
    price: "$450",
  },
  {
    image: product7,
    name: "Red color candy",
    category: "Food Item",
    price: "$190",
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: "+$350",
    title: "Paypal Transfer",
    desc: "Money Added",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "green-600",
  },
  {
    icon: <BsShield />,
    amount: "-$560",
    desc: "Bill Payment",
    title: "Wallet",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <FiCreditCard />,
    amount: "+$350",
    title: "Credit Card",
    desc: "Money reversed",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",

    pcColor: "green-600",
  },
  {
    icon: <TiTick />,
    amount: "+$350",
    title: "Bank Transfer",
    desc: "Money Added",

    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <BsCurrencyDollar />,
    amount: "-$50",
    percentage: "+38%",
    title: "Refund",
    desc: "Payment Sent",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: "-$560",
    title: "Top Sales",
    desc: "Johnathan Doe",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "-$560",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+$560",
    title: "Most Commented",
    desc: "Ample Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const ordersGrid = [
  {
    headerText: "Imagen",
    textAlign: "Center",
  },
  {
    field: "OrderItems",
    headerText: "Item",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerText: "Cliente",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerText: "Monto total",
    textAlign: "Center",
  },
  {
    headerText: "Estado",
    field: "OrderItems",
    textAlign: "Center",
  },
  {
    field: "OrderID",
    headerText: "Orden ID",
    textAlign: "Center",
  },

  {
    field: "Quantity",
    headerText: "Cantidad",
    textAlign: "Center",
  },
];

export const customersData = [
  {
    CustomerID: 1036,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4",
    Location: "India",
  },
  {
    CustomerID: 1037,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9",
    Location: "India",
  },
  {
    CustomerID: 1038,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5",
    Location: "USA",
  },
  {
    CustomerID: 1039,
    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5",
    Location: "USA",
  },
];

export const employeesData = [
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "2021-07-23",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "2021-05-02",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "2021-01-02",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
];

export const ordersData = [
  {
    OrderID: 944895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Quantity: 10,
    Status: "complete",
    StatusBg: "#03C9D7",
    ProductImage: product3,
  },

  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Quantity: 20,
    Status: "complete",
    StatusBg: "#FB9678",
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Quantity: 2,
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Quantity: 2,
    Status: "complete",
    StatusBg: "#03C9D7",
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Quantity: 2,
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Quantity: 2,
    Status: "canceled",
    StatusBg: "red",
    ProductImage: product1,
  },
];
