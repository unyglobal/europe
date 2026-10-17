// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pestlorinc","repository":"europe","path":"hungary/budapest/pestlorinc","depth":3,"parent":"hungary/budapest","children":["ganztelep","szent-imre-kertvaros"]});
export const childModules = Object.freeze({"ganztelep":"./ganztelep/ganztelep.js","szent-imre-kertvaros":"./szent-imre-kertvaros/szent-imre-kertvaros.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
