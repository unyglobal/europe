// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"drzetowo-grabowo","repository":"europe","path":"poland/west-pomerania/drzetowo-grabowo","depth":3,"parent":"poland/west-pomerania","children":["szczecin-drzestowo","zelechowa"]});
export const childModules = Object.freeze({"szczecin-drzestowo":"./szczecin-drzestowo/szczecin-drzestowo.js","zelechowa":"./zelechowa/zelechowa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
