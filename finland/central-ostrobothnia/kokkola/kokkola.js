// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kokkola","repository":"europe","path":"finland/central-ostrobothnia/kokkola","depth":3,"parent":"finland/central-ostrobothnia","children":["hollihaka","mantykangas","neristan","pohjois-hakalahti"]});
export const childModules = Object.freeze({"hollihaka":"./hollihaka/hollihaka.js","mantykangas":"./mantykangas/mantykangas.js","neristan":"./neristan/neristan.js","pohjois-hakalahti":"./pohjois-hakalahti/pohjois-hakalahti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
