// Beliebige Anzahl an Parametern mit Rest-Parameter (...)
 function listTags(...tags) {
   tags.forEach((tag) => {
     console.log(tag);
   });
 }
 listTags("a", "b", "c");
