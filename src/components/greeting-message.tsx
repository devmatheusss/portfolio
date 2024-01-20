import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function GreetingMessage() {
  const [showHello, setShowHello] = useState(false)
  const [message, setMessage] = useState<'Hello' | 'Olá'>('Hello')
  const greeting = [
    {
      id: "hello",
      label: "Hello"
    },
    {
      id: "ola",
      label: "Olá"
    },
  ]

  useEffect(() => {
    // Após 3 segundos, alterna entre "Hello" e "Olá"
    const timeout = setTimeout(() => {
      setMessage(message === 'Hello' ? 'Olá' : 'Hello')
    }, 3000)

    // Limpa o timeout ao desmontar o componente
    return () => clearTimeout(timeout)
  }, [message])

  return (
    <AnimatePresence mode="wait">
      {message === 'Olá' ? (
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
