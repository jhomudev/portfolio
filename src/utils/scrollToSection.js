const scrollToSection = (elementRef) => {
  scrollTo({
    behavior: 'smooth',
    top: elementRef.current.offsetTop
  })
}

export default scrollToSection
