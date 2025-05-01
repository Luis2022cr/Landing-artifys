
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {

  const formattedMessage = message ? encodeURIComponent(message) : '';
  const phoneUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <>
     
        <a
          href={phoneUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-4 bg-green-500 text-white p-3 rounded-full flex items-center justify-center cursor-pointer z-40"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
    </>
  );
};

export default WhatsAppButton;
