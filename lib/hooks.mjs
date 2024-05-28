export function initialize() {
  console.log("Hooks initialized.");
}

export function resolve(specifier, context, next) {
  console.log(`Hooks resolving ${specifier}.`);
  return next(specifier);
}
