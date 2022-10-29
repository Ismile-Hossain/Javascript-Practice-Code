// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
console.log(document);
console.log(document.all);
console.log(document.all[1]);
console.log(document.head);
console.log(document.all[7]);
console.log(document.body);
console.log(document.all.length);
console.log(document.domain);
console.log(document.URL);
console.log(document.doctype);
console.log(document.charset);
console.log(document.contentType);
console.log(document.body.className);
console.log(document.body.classList);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].id);
console.log(document.forms[0].className);
console.log(document.forms[0].action);
console.log(document.forms[0].method);
console.log(document.links);
console.log(document.scripts);
console.log(document.scripts[3]);
console.log(document.scripts[3].getAttribute('src'));

let scripts =  Array.from(document.scripts);

scripts.forEach((script)=>console.log(script));

scripts.forEach((script)=>console.log(script.getAttribute('src')));