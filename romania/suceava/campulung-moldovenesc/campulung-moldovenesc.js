// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"campulung-moldovenesc","repository":"europe","path":"romania/suceava/campulung-moldovenesc","depth":3,"parent":"romania/suceava","children":["capu-satului","parau-malului","parau-mesteacanului","parau-morii","valea-caselor","valea-stanii"]});
export const childModules = Object.freeze({"capu-satului":"./capu-satului/capu-satului.js","parau-malului":"./parau-malului/parau-malului.js","parau-mesteacanului":"./parau-mesteacanului/parau-mesteacanului.js","parau-morii":"./parau-morii/parau-morii.js","valea-caselor":"./valea-caselor/valea-caselor.js","valea-stanii":"./valea-stanii/valea-stanii.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
