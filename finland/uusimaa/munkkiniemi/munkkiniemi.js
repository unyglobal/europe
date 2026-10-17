// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"munkkiniemi","repository":"europe","path":"finland/uusimaa/munkkiniemi","depth":3,"parent":"finland/uusimaa","children":["vanha-munkkiniemi"]});
export const childModules = Object.freeze({"vanha-munkkiniemi":"./vanha-munkkiniemi/vanha-munkkiniemi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
