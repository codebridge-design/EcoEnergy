import ContactForm from '../../components/ContactForm/ContactForm';
import { Building2 } from 'lucide-react';
import sustainabilityImg from '../../assets/sustainability-img.jpeg';
import styles from './Contacts.module.css';

export default function Contacts() {
    const formOneFields = [
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
        { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Your Company Inc.' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'john@company.com' },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 123-4567' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your needs...' },
    ];
    return (
        <div className={`${styles.page} container`}>
            <h1>Get in Touch</h1>
            <p>Ready to make the switch to renewable energy? We're here to help you every step of the way.</p>

            <ContactForm
                heading="For Business Owners"
                subheading="Transform your business with sustainable energy solutions. Reduce costs and boost your eco-friendly credentials."
                icon={<Building2 />}
                fields={formOneFields}
                buttonText="Submit Inquiry"
                imageUrl={sustainabilityImg}
            />
        </div>
    );
}
