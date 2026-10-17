// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"florence","repository":"europe","path":"italy/tuscany/florence","depth":3,"parent":"italy/tuscany","children":["fortezza-da-basso","il-prato","san-jacopino"]});
export const childModules = Object.freeze({"fortezza-da-basso":"./fortezza-da-basso/fortezza-da-basso.js","il-prato":"./il-prato/il-prato.js","san-jacopino":"./san-jacopino/san-jacopino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
