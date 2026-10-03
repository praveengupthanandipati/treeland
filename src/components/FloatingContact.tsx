import { WHATSAPP_HREF } from '../data/site'
import { WhatsappIcon } from './Icons'

// Site-wide floating WhatsApp button (bottom right)
const FloatingContact = () => (
  <a
    href={WHATSAPP_HREF}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-fab"
    aria-label="Chat with us on WhatsApp"
  >
    <WhatsappIcon />
  </a>
)

export default FloatingContact
