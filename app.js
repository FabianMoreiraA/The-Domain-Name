let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function domainGenerator (pronoun, adj, noun) {
  for (
    let pn = 0; pn < pronoun.length; pn++ ) 
    {
    for (let aj = 0; aj < adj.length; aj++) 
        {
      for (let nn = 0; nn < noun.length; nn++) 
          {
        console.log(
          pronoun[pn] + adj[aj] + noun[nn] + ".com"
        );
      }
    }
  }
};
domainGenerator(pronoun, adj, noun);