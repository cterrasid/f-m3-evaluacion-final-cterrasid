(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/Ravenclaw.3ab23809.png"},22:function(e,a,t){e.exports=t.p+"static/media/Slytherin.9791ef71.png"},23:function(e,a,t){e.exports=t.p+"static/media/Hufflepuff.12d81696.png"},24:function(e,a,t){e.exports=t.p+"static/media/Gryffindor.ccab2c1d.png"},28:function(e,a,t){e.exports=t(47)},33:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=t(5),s=(t(33),t(27)),m=t(16),u=t(17),o=t(25),h=t(18),d=t(7),g=t(26),f=t(6),p=(t(34),function(e){var a=e.id,t=e.name,n=e.image,c=e.status,l=e.house,s=e.getHouseImage;return r.a.createElement(i.b,{to:"/card/".concat(a)},r.a.createElement("div",{className:"character__card-container"},r.a.createElement("h2",{className:"character__name"},t),r.a.createElement("img",{className:"character__picture",src:n,alt:t}),r.a.createElement("img",{className:"character__house-image",src:s(l),alt:l}),r.a.createElement("i",{className:c?"":"fas fa-skull isdead"})))}),E=(t(43),function(e){var a=e.character,t=e.queryName,n=e.getHouseImage;return r.a.createElement("ul",{className:"character__list"},a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{id:e.id,name:e.name,image:e.image,house:e.house,getHouseImage:n,status:e.alive}))}))}),N=function(e){var a=e.queryName,t=e.onChangeName;return r.a.createElement("form",{className:"filter-name"},r.a.createElement("label",{id:"filter-name"},"Find by ",r.a.createElement("strong",null,"name"),": "),r.a.createElement("input",{className:"input",type:"text",name:"filter-name",onChange:t,value:a,placeholder:"Ex: Harry Potter"}))},v=(t(44),function(e){var a=e.queryName,t=e.onChangeName,n=e.getHouseImage,c=e.character,l=e.loading;return r.a.createElement("div",null,r.a.createElement("header",null,"Character Finder"),l?r.a.createElement("p",{className:"loading"},"Loading..."):r.a.createElement("main",null,r.a.createElement(N,{queryName:a,onChangeName:t}),r.a.createElement(E,{character:c,queryName:a,getHouseImage:n})),r.a.createElement("footer",null,"By ",r.a.createElement("strong",null,"Clarette Terrasi D\xedaz "),"  2019"))}),y=(t(45),function(e){var a=e.detail,t=e.getHouseImage,c=a.house;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"character-detail__container"},r.a.createElement("h2",{className:"character-detail__name"},a.name),r.a.createElement("img",{className:"character-detail__picture",src:a.image,alt:a.name}),r.a.createElement("ul",{className:"characteristics"},r.a.createElement("li",{className:"character-detail__house"},r.a.createElement("p",null,r.a.createElement("strong",null,"House:")," ",""===a.house?"Unknown":a.house)),r.a.createElement("li",{className:"character-detail__yob"},r.a.createElement("p",null,r.a.createElement("strong",null,"Year of Birth:")," ",""===a.yearOfBirth?"Unknown":a.yearOfBirth)),r.a.createElement("li",{className:"character-detail__patronus"},r.a.createElement("p",null,r.a.createElement("strong",null,"Patronus:")," ",""===a.patronus?"Unknown":a.patronus)),r.a.createElement("li",{className:"character-detail__status"},r.a.createElement("p",null,r.a.createElement("strong",null,"Status:")," ",!0===a.alive?"Alive":"Dead"))),a.house?r.a.createElement("img",{className:"character-detail__house-image",src:t(c),alt:a.house}):""),r.a.createElement(i.b,{to:"/",className:"link"},"Go Back"))}),_=t(21),b=t.n(_),H=t(22),k=t.n(H),C=t(23),I=t.n(C),w=t(24),L=t.n(w),O=(t(46),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(o.a)(this,Object(h.a)(a).call(this,e))).state={characterList:[],isLoading:!0,queryName:""},t.handleNameFilter=t.handleNameFilter.bind(Object(d.a)(t)),t.getCardDetails=t.getCardDetails.bind(Object(d.a)(t)),t.getHouseImage=t.getHouseImage.bind(Object(d.a)(t)),t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"getCharacters",value:function(){var e=this;fetch("https://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(a){var t=a.map(function(e,a){return Object(s.a)({},e,{id:a+1})});e.setState({characterList:t,isLoading:!1})})}},{key:"handleNameFilter",value:function(e){var a=e.currentTarget.value;this.setState({queryName:a})}},{key:"getCardDetails",value:function(e){return this.state.characterList.find(function(a){return a.id===parseInt(e)})}},{key:"getHouseImage",value:function(e){return"Gryffindor"===e?L.a:"Hufflepuff"===e?I.a:"Slytherin"===e?k.a:"Ravenclaw"===e?b.a:void 0}},{key:"render",value:function(){var e=this,a=this.state,t=a.characterList,n=a.isLoading,c=a.queryName;return n?r.a.createElement("p",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(v,{onChangeName:e.handleNameFilter,getHouseImage:e.getHouseImage,queryName:c,character:t,loading:n})}}),r.a.createElement(f.a,{path:"/card/:id",render:function(a){return r.a.createElement(y,{detail:e.getCardDetails(a.match.params.id),getHouseImage:e.getHouseImage})}})))}}]),a}(n.Component));l.a.render(r.a.createElement(i.a,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e156d2b5.chunk.js.map