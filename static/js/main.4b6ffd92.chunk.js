(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{322:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(9),i=n.n(s),r=n(43),c=n.n(r),o=(n(84),n(20)),l=n(21),h=n(23),d=n(22),u=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("signin")},children:"Sign Out"})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("signin")},children:"Sign In"}),Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("register")},children:"Register"})]})},m=n(77),p=n.n(m),b=n.p+"static/media/brain.b6394610.png",j=(n(85),function(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(p.a,{className:"Tilt br2 shadow-2",options:{max:50},style:{height:150,width:150},children:Object(a.jsx)("div",{className:"Tilt-inner pa3",children:Object(a.jsx)("img",{style:{height:"100px",width:"100px",paddingTop:"5px"},alt:"logo",src:b})})})})}),g=(n(86),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Git it a try"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(a.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(a.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://whispering-temple-56003.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):console.log("dundun")}))},a.state={signInEmail:"",signInPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{onClick:function(){return e.props.onRouteChange("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(i.a.Component),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://whispering-temple-56003.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(i.a.Component),O=(n(87),function(e){var t=e.imageUrl,n=e.box;return Object(a.jsx)("div",{className:"center ma",children:Object(a.jsxs)("div",{className:"absolute mt2",children:[Object(a.jsx)("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),Object(a.jsx)("div",{className:"bounding-box",style:{top:n.topRow,left:n.leftCol,bottom:n.bottomRow,right:n.rightCol}})]})})}),w=function(e){var t=e.name,n=e.entries;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(a.jsx)("div",{className:"white f1",children:n})]})},v=(n(88),n(78)),N=n.n(v),C={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",password:"",entries:0,joined:""}},y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):e.setState(C),e.setState({route:t})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://whispering-temple-56003.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://whispering-temple-56003.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state=C,e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(N.a,{className:"particles",params:{particles:{number:{value:50,density:{enable:!0,value_area:800}}}}}),Object(a.jsx)(u,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{}),Object(a.jsx)(w,{name:this.state.user.name,entries:this.state.user.entries}),Object(a.jsx)(g,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(a.jsx)(O,{box:this.state.box,imageUrl:this.state.imageUrl})]}):"signin"===this.state.route?Object(a.jsx)(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(a.jsx)(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(i.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,323)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};n(321);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){}},[[322,1,2]]]);
//# sourceMappingURL=main.4b6ffd92.chunk.js.map