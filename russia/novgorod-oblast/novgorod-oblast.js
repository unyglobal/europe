// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"novgorod-oblast","repository":"europe","path":"russia/novgorod-oblast","depth":2,"parent":"russia","children":["borovichi","chudovo","pestovo","staraya-russa","valday","velikiy-novgorod"]});
export const childModules = Object.freeze({"borovichi":"./borovichi/borovichi.js","chudovo":"./chudovo/chudovo.js","pestovo":"./pestovo/pestovo.js","staraya-russa":"./staraya-russa/staraya-russa.js","valday":"./valday/valday.js","velikiy-novgorod":"./velikiy-novgorod/velikiy-novgorod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
