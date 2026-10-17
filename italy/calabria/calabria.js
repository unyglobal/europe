// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"calabria","repository":"europe","path":"italy/calabria","depth":2,"parent":"italy","children":["castrovillari","catanzaro","corigliano-scalo","cosenza","crotone","gioia-tauro","lamezia-terme","nicastro","palmi","quattromiglia","reggio-calabria","rossano-stazione","sambiase","san-giovanni-in-fiore","siderno","vibo-valentia"]});
export const childModules = Object.freeze({"castrovillari":"./castrovillari/castrovillari.js","catanzaro":"./catanzaro/catanzaro.js","corigliano-scalo":"./corigliano-scalo/corigliano-scalo.js","cosenza":"./cosenza/cosenza.js","crotone":"./crotone/crotone.js","gioia-tauro":"./gioia-tauro/gioia-tauro.js","lamezia-terme":"./lamezia-terme/lamezia-terme.js","nicastro":"./nicastro/nicastro.js","palmi":"./palmi/palmi.js","quattromiglia":"./quattromiglia/quattromiglia.js","reggio-calabria":"./reggio-calabria/reggio-calabria.js","rossano-stazione":"./rossano-stazione/rossano-stazione.js","sambiase":"./sambiase/sambiase.js","san-giovanni-in-fiore":"./san-giovanni-in-fiore/san-giovanni-in-fiore.js","siderno":"./siderno/siderno.js","vibo-valentia":"./vibo-valentia/vibo-valentia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
