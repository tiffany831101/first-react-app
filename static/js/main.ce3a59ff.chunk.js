(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(25),c=a.n(o),s=(a(32),a(2)),r=a(3),m=a(5),i=a(4),u=a(6),d=a(7),h=(a(19),a(58)),p=a(13),b=a.n(p),f=function(e){function t(e){var a;return Object(s.a)(this,t),console.log(e),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={post:{}},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;b.a.get("https://cors-anywhere.herokuapp.com/http://45.55.26.18:3310/posts/"+t.params.id).then(function(t){e.setState({post:t.data})})}},{key:"render",value:function(){var e=this.state.post,t=this.props,a=t.match;t.history;return l.a.createElement("div",null,l.a.createElement(h.a,{className:"btn btn-primary mt-2",to:"/"},"Back"),l.a.createElement("h3",null,e.title),l.a.createElement("div",null,"id:",a.params.id),l.a.createElement("p",null,"Author\uff1a",e.author),l.a.createElement("p",null,"Content\uff1a",e.body))}}]),t}(l.a.Component),g=a(61),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={post:{}},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://45.55.26.18:3310/posts/"+this.props.id).then(function(t){console.log(t),e.setState({post:t.data})})}},{key:"render",value:function(){return console.log(this.props),l.a.createElement(g.a,{to:"/posts/".concat(this.props.id)})}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={authorValue:"",titleValue:"",bodyValue:"",postId:null},console.log(a.state.postId),a.handleChangeAuthor=a.handleChangeAuthor.bind(Object(d.a)(Object(d.a)(a))),a.handleChangeTitle=a.handleChangeTitle.bind(Object(d.a)(Object(d.a)(a))),a.handleChangeBody=a.handleChangeBody.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChangeAuthor",value:function(e){this.setState({authorValue:e.target.value})}},{key:"handleChangeBody",value:function(e){this.setState({bodyValue:e.target.value})}},{key:"handleChangeTitle",value:function(e){this.setState({titleValue:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;b.a.post("http://45.55.26.18:3310/posts",{title:this.state.titleValue,author:this.state.authorValue,body:this.state.bodyValue}).then(function(e){t.setState({postId:e.data.id})}).catch(function(e){console.log(e)}),e.preventDefault()}},{key:"render",value:function(){var e=this.state.postId;return console.log(this.state.postId),l.a.createElement("div",{className:"container-fluid"},!e&&l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",{className:"mt-2"},"Author:"),l.a.createElement("input",{className:"form-control col-md-3",type:"text",placeholder:"Default input",value:this.state.authorValue,onChange:this.handleChangeAuthor}),l.a.createElement("p",{className:"mt-2"},"Title:"),l.a.createElement("input",{className:"form-control col-md-3",type:"text",placeholder:"Default input",value:this.state.titleValue,onChange:this.handleChangeTitle}),l.a.createElement("p",{className:"mt-2"},"Body:"),l.a.createElement("textarea",{className:"form-control col-md-6",type:"text",placeholder:"Default input",rows:"10",value:this.state.bodyValue,onChange:this.handleChangeBody}),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"Submit")),l.a.createElement("div",null,e&&l.a.createElement(E,{id:this.state.postId})))}}]),t}(n.Component),_=a(62),v=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.location;console.log(e);var t=e.pathname;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light py-0"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item "+("/"===t&&"active")},l.a.createElement(h.a,{className:"nav-link",name:"home",to:"/"},"HOME")),l.a.createElement("li",{className:"nav-item "+("/about"===t&&"active")},l.a.createElement(h.a,{className:"nav-link",name:"about",to:"/about"},"ABOUT")),l.a.createElement("li",{className:"nav-item "+("/posts"===t&&"active")},l.a.createElement(h.a,{className:"nav-link",name:"posts",to:"/posts"},"POST")))))}}]),t}(l.a.Component),N=Object(_.a)(v),x=(n.Component,function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row d-flex justify-content-between mt-2 p-3 mx-0"},l.a.createElement("div",{className:"left__side"},l.a.createElement("h3",{className:"nav__title"},"Medium")),l.a.createElement("div",{className:"right__side d-flex justify-content-around col-md-5 align-items-end"},l.a.createElement("div",{className:"mt-1 h-75"},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement("div",{className:"h-75"},l.a.createElement("p",{className:"mx-0 d-flex"},"Become a member")),l.a.createElement("div",{className:"h-75"},l.a.createElement("p",{className:"text__green"},"Sign in")),l.a.createElement("div",null,l.a.createElement("button",{className:"mt-2 text__green h-75"},"Get started"))))}}]),t}(l.a.Component)),j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid banner_box"},l.a.createElement("div",{className:"banner__bg"},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-6 px-4 py-4"},l.a.createElement("div",{className:"banner__title"},l.a.createElement("h2",null,"Welcome to Medium, where words matter.")),l.a.createElement("div",{className:"banner__body"},l.a.createElement("p",null,"We\u2019ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.")),l.a.createElement("div",{className:"d-flex mt-5 banner__button col-lg-8 col-md-8 justify-content-around"},l.a.createElement("button",{className:"col-lg-5 col-md-5"},"Get started"),l.a.createElement("button",{className:"col-lg-5 col-md-5"},"Learn more")))),l.a.createElement("div",{className:"mt-5 d-flex justify-content-between post__bottom__intro col-lg-8 col-md-12 py-3 flex-wrap"},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-12"},l.a.createElement("h5",null,"Feature For Members")),l.a.createElement("div",{className:"col-lg-2 col-md-12 col-12"},l.a.createElement("p",null,"More>"))))}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={post:e},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.post.posts.state.posts;return console.log(e),l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid mt-5 d-flex justify-content-between flex-wrap"},l.a.createElement("div",{className:"col-lg-8"},e.map(function(e){if(e.id>3)return l.a.createElement("div",{key:e.id,className:"post__box col-12 d-flex justify-content-between mb-3"},l.a.createElement("div",{className:"col-lg-8 post__box__content"},l.a.createElement("div",{className:"post__title post__box__content"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.title)),l.a.createElement("div",{className:"post__body"},l.a.createElement("p",{className:"card-title text-white post__box__content"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.body)),l.a.createElement("p",{className:"post__author"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.author)))),l.a.createElement("div",{className:"post__image col-lg-4"},l.a.createElement("img",{src:"https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",className:"img-fluid",alt:"Responsive image"})))})),l.a.createElement("div",{className:"col-lg-4 col-md-12 col-12"},l.a.createElement("div",{className:"bottom__right__title text-center"},l.a.createElement("h5",{className:"mt-3 py-4"},"Popular on Medium")),l.a.createElement("div",{className:"bottom__right__body d-flex justify-content-betweeen mb-4"},l.a.createElement("div",{className:"body__num col-lg-2 col-md-2"},"01"),l.a.createElement("div",{className:"body__content col-lg-10 col-md-10"},l.a.createElement("div",{className:"col-12 body__content__title"},"Google Employees: Our Executives Engaged in Abuse. Don\u2019t Let Kink and Polyamory "),l.a.createElement("div",{className:"col-12 body__content__author mt-2"},"Liz Fong-Jones"))),l.a.createElement("div",{className:"bottom__right__body d-flex justify-content-betweeen mb-4"},l.a.createElement("div",{className:"body__num col-lg-2 col-md-2"},"02"),l.a.createElement("div",{className:"body__content col-lg-10 col-md-10"},l.a.createElement("div",{className:"col-12 body__content__title"},"Google Employees: Our Executives Engaged in Abuse. Don\u2019t Let Kink and Polyamory "),l.a.createElement("div",{className:"col-12 body__content__author mt-2"},"Liz Fong-Jones"))),l.a.createElement("div",{className:"bottom__right__body d-flex justify-content-betweeen mb-4"},l.a.createElement("div",{className:"body__num col-lg-2 col-md-2"},"03"),l.a.createElement("div",{className:"body__content col-lg-10 col-md-10"},l.a.createElement("div",{className:"col-12 body__content__title"},"Google Employees: Our Executives Engaged in Abuse. Don\u2019t Let Kink and Polyamory "),l.a.createElement("div",{className:"col-12 body__content__author mt-2"},"Liz Fong-Jones"))),l.a.createElement("div",{className:"bottom__right__body d-flex justify-content-betweeen mb-4"},l.a.createElement("div",{className:"body__num col-lg-2 col-md-2"},"04"),l.a.createElement("div",{className:"body__content col-lg-10 col-md-10"},l.a.createElement("div",{className:"col-12 body__content__title"},"Google Employees: Our Executives Engaged in Abuse. Don\u2019t Let Kink and Polyamory "),l.a.createElement("div",{className:"col-12 body__content__author mt-2"},"Liz Fong-Jones"))))))}}]),t}(l.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"col-lg-12 col-md-12 col-12 about__header"},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-6"},l.a.createElement("p",{className:"about__header__title"},"Welcome to Medium, where words matter."))),l.a.createElement("div",{className:"about__header__img col-lg-12 col-md-12 col-12"},l.a.createElement("img",{src:"https://images.pexels.com/photos/9816/pexels-photo-9816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",alt:""})),l.a.createElement("div",{className:"about__header__info col-lg-12 col-md-12 col-12"},l.a.createElement("div",{className:"about__header__info d-flex justify-content-center col-lg-8 col-md-8 col-8 mx-auto"},l.a.createElement("p",{className:"text-center"},"Ideas and perspectives you won\u2019t find anywhere else.")),l.a.createElement("div",{className:"about__header__info d-flex justify-content-center col-lg-10 col-md-10 col-10 mx-auto"},l.a.createElement("p",{className:"text-center"},"Medium taps into the brains of the world\u2019s most insightful writers, thinkers, and storytellers to bring you the smartest takes on topics that matter. So whatever your interest, you can always find fresh thinking and unique perspectives."))))}}]),t}(l.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"px-0 d-flex col-lg-8 col-md-8 col-12 white flex-wrap about__banner_left justify-content-center"},[1,2,3,4,5,6].map(function(e){return l.a.createElement("div",{className:"col-lg-5 col-md-5 col-12 about__banner_box mx-3 mt-4"},l.a.createElement("img",{className:"mt-3",src:"https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",alt:""}),l.a.createElement("p",{className:"mt-2"},"this is about tech"),l.a.createElement("div",{className:"col-lg-12 col-md-12 px-0 d-flex about__banner_box__bottom"},l.a.createElement("div",{className:"avator"}),l.a.createElement("div",{className:"mx-2"},l.a.createElement("p",{className:"my-0"},"Tiffany"),l.a.createElement("p",{className:"my-0"},"7 min read"))))})),l.a.createElement("div",{className:"col-lg-4 col-md-4 col-4 float-right about__banner_right mt-5"},l.a.createElement("h5",{className:"col-lg-10 col-md-10 col-10 text-center mx-auto"},"MORE WRITING ON TECH"),l.a.createElement("p",{className:"mt-5 mx-auto col-lg-10 col-md-10 col-10 text-center"},"The physics of flying dragons Lesser-known causes of climate change How to control machines with your thoughts Killer robots and the moral dilemma of automation How Pinterest hooks users The driverless economy Bitcoin for five-year-olds Why you should encrypt your entire life Machine learning and AI The finer points of JavaScript Silicon Valley\u2019s industry dominance App development tutorials The future of biotech Virtual reality films Why quantum computing matters The history of hashtags Apple\u2019s next move When VR will go mainstream What happened to Google Glass Samsung\u2019s weird emojis Do\u2019s and Don\u2019ts of web typography")))}}]),t}(l.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"px-0 d-flex col-lg-8 col-md-8 col-12 white flex-wrap about__banner_left justify-content-center"},[1,2,3,4,5,6].map(function(e){return l.a.createElement("div",{className:"col-lg-5 col-md-5 col-12 about__banner_box mx-3 mt-4"},l.a.createElement("img",{className:"mt-3",src:"https://images.pexels.com/photos/886465/pexels-photo-886465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",alt:""}),l.a.createElement("p",{className:"mt-2"},"this is about business"),l.a.createElement("div",{className:"col-lg-12 col-md-12 px-0 d-flex about__banner_box__bottom"},l.a.createElement("div",{className:"avator"}),l.a.createElement("div",{className:"mx-2"},l.a.createElement("p",{className:"my-0"},"Tiffany"),l.a.createElement("p",{className:"my-0"},"7 min read"))))})),l.a.createElement("div",{className:"col-lg-4 col-md-4 col-4 float-right about__banner_right mt-5"},l.a.createElement("h5",{className:"col-lg-10 col-md-10 col-10 text-center mx-auto"},"MORE WRITING ON TECH"),l.a.createElement("p",{className:"mt-5 mx-auto col-lg-10 col-md-10 col-10 text-center"},"The physics of flying dragons Lesser-known causes of climate change How to control machines with your thoughts Killer robots and the moral dilemma of automation How Pinterest hooks users The driverless economy Bitcoin for five-year-olds Why you should encrypt your entire life Machine learning and AI The finer points of JavaScript Silicon Valley\u2019s industry dominance App development tutorials The future of biotech Virtual reality films Why quantum computing matters The history of hashtags Apple\u2019s next move When VR will go mainstream What happened to Google Glass Samsung\u2019s weird emojis Do\u2019s and Don\u2019ts of web typography")))}}]),t}(l.a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"px-0 d-flex col-lg-8 col-md-8 col-12 white flex-wrap about__banner_left justify-content-center"},[1,2,3,4,5,6].map(function(e){return l.a.createElement("div",{className:"col-lg-5 col-md-5 col-12 about__banner_box mx-3 mt-4"},l.a.createElement("img",{className:"mt-3",src:"https://images.pexels.com/photos/260907/pexels-photo-260907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",alt:""}),l.a.createElement("p",{className:"mt-2"},"this is about public"),l.a.createElement("div",{className:"col-lg-12 col-md-12 px-0 d-flex about__banner_box__bottom"},l.a.createElement("div",{className:"avator"}),l.a.createElement("div",{className:"mx-2"},l.a.createElement("p",{className:"my-0"},"Tiffany"),l.a.createElement("p",{className:"my-0"},"7 min read"))))})),l.a.createElement("div",{className:"col-lg-4 col-md-4 col-4 float-right about__banner_right mt-5"},l.a.createElement("h5",{className:"col-lg-10 col-md-10 col-10 text-center mx-auto"},"MORE WRITING ON PUBLIC"),l.a.createElement("p",{className:"mt-5 mx-auto col-lg-10 col-md-10 col-10 text-center"},"The physics of flying dragons Lesser-known causes of climate change How to control machines with your thoughts Killer robots and the moral dilemma of automation How Pinterest hooks users The driverless economy Bitcoin for five-year-olds Why you should encrypt your entire life Machine learning and AI The finer points of JavaScript Silicon Valley\u2019s industry dominance App development tutorials The future of biotech Virtual reality films Why quantum computing matters The history of hashtags Apple\u2019s next move When VR will go mainstream What happened to Google Glass Samsung\u2019s weird emojis Do\u2019s and Don\u2019ts of web typography")))}}]),t}(l.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"px-0 d-flex col-lg-8 col-md-8 col-12 white flex-wrap about__banner_left justify-content-center"},[1,2,3,4,5,6].map(function(e){return l.a.createElement("div",{className:"col-lg-5 col-md-5 col-12 about__banner_box mx-3 mt-4"},l.a.createElement("img",{className:"mt-3",src:"https://images.pexels.com/photos/1012982/pexels-photo-1012982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",alt:""}),l.a.createElement("p",{className:"mt-2"},"this is about cultural"),l.a.createElement("div",{className:"col-lg-12 col-md-12 px-0 d-flex about__banner_box__bottom"},l.a.createElement("div",{className:"avator"}),l.a.createElement("div",{className:"mx-2"},l.a.createElement("p",{className:"my-0"},"Tiffany"),l.a.createElement("p",{className:"my-0"},"7 min read"))))})),l.a.createElement("div",{className:"col-lg-4 col-md-4 col-4 float-right about__banner_right mt-5"},l.a.createElement("h5",{className:"col-lg-10 col-md-10 col-10 text-center mx-auto"},"MORE WRITING ON CULTURAL"),l.a.createElement("p",{className:"mt-5 mx-auto col-lg-10 col-md-10 col-10 text-center"},"The physics of flying dragons Lesser-known causes of climate change How to control machines with your thoughts Killer robots and the moral dilemma of automation How Pinterest hooks users The driverless economy Bitcoin for five-year-olds Why you should encrypt your entire life Machine learning and AI The finer points of JavaScript Silicon Valley\u2019s industry dominance App development tutorials The future of biotech Virtual reality films Why quantum computing matters The history of hashtags Apple\u2019s next move When VR will go mainstream What happened to Google Glass Samsung\u2019s weird emojis Do\u2019s and Don\u2019ts of web typography")))}}]),t}(l.a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"px-0 d-flex col-lg-8 col-md-8 col-12 white flex-wrap about__banner_left justify-content-center"},[1,2,3,4,5,6].map(function(e){return l.a.createElement("div",{className:"col-lg-5 col-md-5 col-12 about__banner_box mx-3 mt-4"},l.a.createElement("img",{className:"mt-3",src:"https://images.pexels.com/photos/103127/pexels-photo-103127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",alt:""}),l.a.createElement("p",{className:"mt-2"},"this is about LIFE"),l.a.createElement("div",{className:"col-lg-12 col-md-12 px-0 d-flex about__banner_box__bottom"},l.a.createElement("div",{className:"avator"}),l.a.createElement("div",{className:"mx-2"},l.a.createElement("p",{className:"my-0"},"Tiffany"),l.a.createElement("p",{className:"my-0"},"7 min read"))))})),l.a.createElement("div",{className:"col-lg-4 col-md-4 col-4 float-right about__banner_right mt-5"},l.a.createElement("h5",{className:"col-lg-10 col-md-10 col-10 text-center mx-auto"},"MORE WRITING ON LIFE"),l.a.createElement("p",{className:"mt-5 mx-auto col-lg-10 col-md-10 col-10 text-center"},"The physics of flying dragons Lesser-known causes of climate change How to control machines with your thoughts Killer robots and the moral dilemma of automation How Pinterest hooks users The driverless economy Bitcoin for five-year-olds Why you should encrypt your entire life Machine learning and AI The finer points of JavaScript Silicon Valley\u2019s industry dominance App development tutorials The future of biotech Virtual reality films Why quantum computing matters The history of hashtags Apple\u2019s next move When VR will go mainstream What happened to Google Glass Samsung\u2019s weird emojis Do\u2019s and Don\u2019ts of web typography")))}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={tab:"TECH"},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState({tab:e.target.name})}},{key:"render",value:function(){var e=this,t=this.state.tab;return l.a.createElement("div",null,l.a.createElement("div",{className:"mt-5 about__banner col-lg-12 col-md-12 col-12 mb-5"},l.a.createElement("div",{className:"d-flex justify-content-between about__banner__nav flex-nowrap"},["TECH","CULTURAL","PUBLIC","BUSINESS","LIFE"].map(function(a){return l.a.createElement("div",{className:"col-lg-2 col-md-2 col-2 text-center"},l.a.createElement("a",{name:a,className:"text-center "+(t===a&&"active"),onClick:e.handleClick},a))}))),l.a.createElement("div",{className:"col-lg-12 col-md-12 col-12 about__banner__info mt-3"},"TECH"===t&&l.a.createElement(k,null),"BUSINESS"===t&&l.a.createElement(C,null),"PUBLIC"===t&&l.a.createElement(T,null),"CULTURAL"===t&&l.a.createElement(S,null),"LIFE"===t&&l.a.createElement(I,null)))}}]),t}(l.a.Component),A=a(60),L=a(59),V=function(e){function t(e){var a;return Object(s.a)(this,t),console.log(e),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={posts:[],postId:null},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://cors-anywhere.herokuapp.com/http://45.55.26.18:3310/posts/").then(function(t){e.setState({posts:t.data})})}},{key:"handleClick",value:function(){this.setState({postId:null})}},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.postId;return console.log(t),l.a.createElement("div",null,!a&&l.a.createElement("div",{className:"mx-0 mt-3 row d-flex flex-wrap justify-content-between"},t.map(function(e){return e.id<6&&e.id%4==1?l.a.createElement("div",{key:e.id,className:"col-lg-4 col-md-6 col-12"},l.a.createElement("div",{className:"post__image"},l.a.createElement("img",{src:"https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",className:"img-fluid",alt:"Responsive image"})),l.a.createElement("div",{className:"post__title"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.title)),l.a.createElement("div",{className:"post__body"},l.a.createElement("h4",{className:"card-title text-white"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.body)),l.a.createElement("p",{className:"post__author"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.author)))):2==e.id?l.a.createElement("div",{className:"col-lg-4 col-md-4 col-12"},t.map(function(e){if(e.id<6&&e.id%4!==1)return l.a.createElement("div",{className:"middle__box d-flex mb-2"},l.a.createElement("div",{className:"post__image col-lg-6 col-md-6 col-4"},l.a.createElement("img",{src:"https://images.pexels.com/photos/1059116/pexels-photo-1059116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",className:"img-fluid",alt:"Responsive image"})),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-6"},l.a.createElement("div",{className:"post__title text-center"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.title)),l.a.createElement("div",{className:"post__body"},l.a.createElement("h4",{className:"card-title text-white text-center mb-0"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.body)),l.a.createElement("p",{className:"post__author text-center"},l.a.createElement(h.a,{to:"/posts/".concat(e.id)},e.author)))))})):void 0})),l.a.createElement(j,null),l.a.createElement(O,{posts:this}))}}]),t}(n.Component),D=function(e){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(W,null))},G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={tab:"home"},a.handleTabChange=a.handleTabChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleTabChange",value:function(e){e.preventDefault(),this.setState({tab:e.target.name})}},{key:"render",value:function(){var e=this.state.tab;return console.log(e),l.a.createElement(A.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(N,null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(L.a,{exact:!0,path:"/",component:V}),l.a.createElement(L.a,{path:"/about",component:D}),l.a.createElement(L.a,{path:"/posts/:id",component:f}),l.a.createElement(L.a,{exact:!0,path:"/posts",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.ce3a59ff.chunk.js.map