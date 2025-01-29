export const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 120 // Adjust this value to change the offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      
    }
  }