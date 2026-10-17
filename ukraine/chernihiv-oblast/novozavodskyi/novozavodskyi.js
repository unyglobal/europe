// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"novozavodskyi","repository":"europe","path":"ukraine/chernihiv-oblast/novozavodskyi","depth":3,"parent":"ukraine/chernihiv-oblast","children":["sherstyanka"]});
export const childModules = Object.freeze({"sherstyanka":"./sherstyanka/sherstyanka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
