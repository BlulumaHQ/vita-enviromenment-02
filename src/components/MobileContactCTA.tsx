import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const MobileContactCTA = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-5 right-5 z-50 md:hidden bg-accent text-accent-foreground px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 font-semibold text-sm hover:brightness-110 transition"
    >
      <MessageSquare size={16} />
      Get a Quote
    </Link>
  );
};

export default MobileContactCTA;
