// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"willenhall","repository":"europe","path":"united-kingdom/england/willenhall","depth":3,"parent":"united-kingdom/england","children":["chapel-green","little-london","spring-bank","summerford-place","the-manor","wellington-place"]});
export const childModules = Object.freeze({"chapel-green":"./chapel-green/chapel-green.js","little-london":"./little-london/little-london.js","spring-bank":"./spring-bank/spring-bank.js","summerford-place":"./summerford-place/summerford-place.js","the-manor":"./the-manor/the-manor.js","wellington-place":"./wellington-place/wellington-place.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
