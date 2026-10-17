// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huddersfield","repository":"europe","path":"united-kingdom/england/huddersfield","depth":3,"parent":"united-kingdom/england","children":["aspley","hillhouse","newtown","shearing-cross"]});
export const childModules = Object.freeze({"aspley":"./aspley/aspley.js","hillhouse":"./hillhouse/hillhouse.js","newtown":"./newtown/newtown.js","shearing-cross":"./shearing-cross/shearing-cross.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
