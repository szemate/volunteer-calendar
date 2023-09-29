function conditions(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default conditions;
