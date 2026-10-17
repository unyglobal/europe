// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haukipudas","repository":"europe","path":"finland/north-ostrobothnia/haukipudas","depth":3,"parent":"finland/north-ostrobothnia","children":["holma","niemelantorma","simppula"]});
export const childModules = Object.freeze({"holma":"./holma/holma.js","niemelantorma":"./niemelantorma/niemelantorma.js","simppula":"./simppula/simppula.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
