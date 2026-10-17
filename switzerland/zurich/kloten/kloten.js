// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kloten","repository":"europe","path":"switzerland/zurich/kloten","depth":3,"parent":"switzerland/zurich","children":["kloten-chaseren","kloten-geissberg","kloten-horainli","kloten-hostrass","kloten-kloten-zentrum"]});
export const childModules = Object.freeze({"kloten-chaseren":"./kloten-chaseren/kloten-chaseren.js","kloten-geissberg":"./kloten-geissberg/kloten-geissberg.js","kloten-horainli":"./kloten-horainli/kloten-horainli.js","kloten-hostrass":"./kloten-hostrass/kloten-hostrass.js","kloten-kloten-zentrum":"./kloten-kloten-zentrum/kloten-kloten-zentrum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
