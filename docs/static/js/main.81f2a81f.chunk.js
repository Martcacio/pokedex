(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),o=s(3),i=s.n(o),a=(s(9),s(10),s(0));var p=function(e){var t=e.data.types.map((function(t){return Object(a.jsx)("li",{id:e.data.id,pokeType:"types",class:"pokeList",children:t})}));return Object(a.jsxs)("article",{class:"PokeCard",children:[Object(a.jsx)("img",{src:e.data.url}),Object(a.jsx)("h2",{class:"pokename",children:e.data.name}),Object(a.jsx)("ul",{children:t})]})};s(12);var c=function(e){console.log(e.data);var t=e.data.map((function(t){return Object(a.jsx)("li",{id:e.id,class:"pokeList",children:Object(a.jsx)(p,{data:t})})}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{class:"title",children:"Mi PokeLista"}),Object(a.jsx)("ul",{class:"cards",children:t})]})},u=s(4);var l=function(){return Object(a.jsx)(c,{data:u})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.81f2a81f.chunk.js.map