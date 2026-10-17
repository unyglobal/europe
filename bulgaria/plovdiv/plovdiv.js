// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plovdiv","repository":"europe","path":"bulgaria/plovdiv","depth":2,"parent":"bulgaria","children":["asenovgrad","karlovo","parvomay","rakovski"]});
export const childModules = Object.freeze({"asenovgrad":"./asenovgrad/asenovgrad.js","karlovo":"./karlovo/karlovo.js","parvomay":"./parvomay/parvomay.js","rakovski":"./rakovski/rakovski.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
