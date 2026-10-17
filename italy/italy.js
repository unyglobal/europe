// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"italy","repository":"europe","path":"italy","depth":1,"parent":"","children":["abruzzo","aosta-valley","apulia","basilicate","calabria","campania","emilia-romagna","friuli-venezia-giulia","lazio","liguria","lombardy","molise","piedmont","sardinia","sicily","the-marches","trentino-alto-adige","tuscany","umbria","veneto"]});
export const childModules = Object.freeze({"abruzzo":"./abruzzo/abruzzo.js","aosta-valley":"./aosta-valley/aosta-valley.js","apulia":"./apulia/apulia.js","basilicate":"./basilicate/basilicate.js","calabria":"./calabria/calabria.js","campania":"./campania/campania.js","emilia-romagna":"./emilia-romagna/emilia-romagna.js","friuli-venezia-giulia":"./friuli-venezia-giulia/friuli-venezia-giulia.js","lazio":"./lazio/lazio.js","liguria":"./liguria/liguria.js","lombardy":"./lombardy/lombardy.js","molise":"./molise/molise.js","piedmont":"./piedmont/piedmont.js","sardinia":"./sardinia/sardinia.js","sicily":"./sicily/sicily.js","the-marches":"./the-marches/the-marches.js","trentino-alto-adige":"./trentino-alto-adige/trentino-alto-adige.js","tuscany":"./tuscany/tuscany.js","umbria":"./umbria/umbria.js","veneto":"./veneto/veneto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
