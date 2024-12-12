const { createContext } = require("react");

const MyContext = createContext({
  isDashboardOpen: false,
  toggleDashboard: () => {},
});

export default MyContext;
