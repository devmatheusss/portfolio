import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export function GreetingMessage() {
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    // Após 3 segundos, altera o estado para mostrar "Hello"
    const timeout = setTimeout(() => {
      setShowHello(prev => !prev);
    }, 3000);

    // Limpa o timeout ao desmontar o componente
    return () => clearTimeout(timeout);
  }, [showHello]);

  return (
    <AnimatePresence mode="wait">
      {!showHello ? (
        <motion.h1
          key="ola"
          className="font-bold text-[120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Olá
        </motion.h1>
      ) : (
        <motion.h1
          key="hello"
          className="font-bold text-[120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Hello
        </motion.h1>
      )}
    </AnimatePresence>
  )
}
