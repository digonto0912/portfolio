import './Dashboard.css';
import Footer from '../Footer/Footer';

const Dashboard = () => {

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/original-dev.html"
        title="ERA Group ERP Overview"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>

      <Footer />
    </div>
  );
};

export default Dashboard;
