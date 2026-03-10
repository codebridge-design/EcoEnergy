import ContactForm from '../../components/ContactForm/ContactForm';
import { Building2, House, Handshake } from 'lucide-react';
import sustainabilityImg from '../../assets/sustainability-img.jpeg';
import contact2 from '../../assets/contact2.jpeg';
import contact3 from '../../assets/contact3.jpeg';
import styles from './Contacts.module.css';

export default function Contacts() {
    const formOneFields = [
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
        { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Your Company Inc.', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'john@company.com', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 123-4567', required: true },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your needs...', required: false },
    ];
    const formSecondFields = [
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Jane Smith', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@email.com', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 123-4567', required: true },
        { name: 'address', label: 'Property Address', type: 'text', placeholder: '123 Main St, City, State', required: true },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about home energy needs...', required: false },
    ];
    const formThirdFields = [
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Alex Johnson', required: true },
        { name: 'organization', label: 'Organization', type: 'text', placeholder: 'Your Organization', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'alex@organization.com', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 123-4567', required: true },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your collaboration ideas...', required: false },
    ];
    return (
        <div className={`${styles.page} ${styles.container}`}>
            <section className={styles.pageHeader}>
                <h1>Get in Touch</h1>
                <p>Ready to make the switch to renewable energy? We're here to help you every step of the way.</p>
            </section>

            <ContactForm
                heading="For Business Owners"
                subheading="Transform your business with sustainable energy solutions. Reduce costs and boost your eco-friendly credentials."
                icon={<Building2 />}
                fields={formOneFields}
                buttonText="Submit Inquiry"
                imageUrl={sustainabilityImg}
            />

            <ContactForm
                heading="For Homeowners"
                subheading="Power your home with clean, renewable energy. Save on electricity bills and increase your property value."
                icon={<House />}
                fields={formSecondFields}
                buttonText="Submit Inquiry"
                imageUrl={contact2}
            />

            <ContactForm
                heading="For Potential Collaborators"
                subheading="Let's work together to expand the reach of renewable energy. Partner with us for a sustainable future."
                icon={<Handshake />}
                fields={formThirdFields}
                buttonText="Submit Partnership Inquiry"
                imageUrl={contact3}
            />
        </div>
    );
}
