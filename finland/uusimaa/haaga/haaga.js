// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haaga","repository":"europe","path":"finland/uusimaa/haaga","depth":3,"parent":"finland/uusimaa","children":["huopalahti"]});
export const childModules = Object.freeze({"huopalahti":"./huopalahti/huopalahti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
