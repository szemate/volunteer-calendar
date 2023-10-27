function conditionalClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default conditionalClasses;
