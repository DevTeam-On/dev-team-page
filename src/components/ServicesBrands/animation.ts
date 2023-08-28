export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

export const itemImage = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
