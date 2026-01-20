import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/app/pages/HomePage';
import { DestinationsPage } from '@/app/pages/DestinationsPage';
import { DestinationDetailPage } from '@/app/pages/DestinationDetailPage';
import { PackagesPage } from '@/app/pages/PackagesPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { BookingPage } from '@/app/pages/BookingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:id" element={<DestinationDetailPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:id" element={<DestinationDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}
