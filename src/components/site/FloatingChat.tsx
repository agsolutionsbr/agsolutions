import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingChat() {
  return (
    <motion.a
      href="https://wa.me/5511961836889"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-success text-background px-5 py-3.5 font-semibold text-sm shadow-elegant"
      style={{ boxShadow: "0 0 0 1px oklch(0.72 0.18 155 / 0.5), 0 15px 50px -10px oklch(0.72 0.18 155 / 0.6)" }}
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Fale com a AG Solutions</span>
    </motion.a>
  );
}
