import Form from "./components/Form";
import Balance from "./components/Balance";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";
function App() {
  return (
      <Layout>
        <Balance/>
        <Form/>
        <Transactions/>
      </Layout>
  );
}

export default App;
