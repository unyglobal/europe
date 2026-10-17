// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pest-county","repository":"europe","path":"hungary/pest-county","depth":2,"parent":"hungary","children":["abony","budaors","cegled","dabas","dunaharaszti","dunakeszi","erd","fot","god","godollo","gyal","lagymanyos","monor","nagykoros","naphegy","rakoskeresztur","szazhalombatta","szentendre","szigetszentmiklos","ujpalota","vac","vecses","veresegyhaz"]});
export const childModules = Object.freeze({"abony":"./abony/abony.js","budaors":"./budaors/budaors.js","cegled":"./cegled/cegled.js","dabas":"./dabas/dabas.js","dunaharaszti":"./dunaharaszti/dunaharaszti.js","dunakeszi":"./dunakeszi/dunakeszi.js","erd":"./erd/erd.js","fot":"./fot/fot.js","god":"./god/god.js","godollo":"./godollo/godollo.js","gyal":"./gyal/gyal.js","lagymanyos":"./lagymanyos/lagymanyos.js","monor":"./monor/monor.js","nagykoros":"./nagykoros/nagykoros.js","naphegy":"./naphegy/naphegy.js","rakoskeresztur":"./rakoskeresztur/rakoskeresztur.js","szazhalombatta":"./szazhalombatta/szazhalombatta.js","szentendre":"./szentendre/szentendre.js","szigetszentmiklos":"./szigetszentmiklos/szigetszentmiklos.js","ujpalota":"./ujpalota/ujpalota.js","vac":"./vac/vac.js","vecses":"./vecses/vecses.js","veresegyhaz":"./veresegyhaz/veresegyhaz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
