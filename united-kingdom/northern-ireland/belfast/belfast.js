// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belfast","repository":"europe","path":"united-kingdom/northern-ireland/belfast","depth":3,"parent":"united-kingdom/northern-ireland","children":["belfast-city-centre","cathedral-s-quarter"]});
export const childModules = Object.freeze({"belfast-city-centre":"./belfast-city-centre/belfast-city-centre.js","cathedral-s-quarter":"./cathedral-s-quarter/cathedral-s-quarter.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
