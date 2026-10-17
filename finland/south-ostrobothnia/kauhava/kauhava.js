// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kauhava","repository":"europe","path":"finland/south-ostrobothnia/kauhava","depth":3,"parent":"finland/south-ostrobothnia","children":["frantila","koppala","nahkala","perala","pukkila"]});
export const childModules = Object.freeze({"frantila":"./frantila/frantila.js","koppala":"./koppala/koppala.js","nahkala":"./nahkala/nahkala.js","perala":"./perala/perala.js","pukkila":"./pukkila/pukkila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
