"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[718],{718:(it,M,l)=>{l.r(M),l.d(M,{UsersModule:()=>rt});var d=l(177),x=l(7301),m=l(2791),a=l(9417),t=l(7705),O=l(2142),b=l(5794),u=l(8696);function v(n,s){if(1&n){const o=t.RV6();t.j41(0,"ngx-dropzone-image-preview",37),t.bIt("removed",function(){const i=t.eBV(o).$implicit,c=t.XpG();return t.Njj(c.onRemove(i))}),t.k0s()}2&n&&t.Y8G("file",s.$implicit)("removable",!0)}function k(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Username is required."),t.k0s())}function F(n,s){if(1&n&&(t.j41(0,"div",38),t.DNE(1,k,2,0,"small",39),t.k0s()),2&n){const o=t.XpG();let r;t.R7$(1),t.Y8G("ngIf",null==(r=o.createAdminForm.get("userName"))?null:r.hasError("required"))}}function y(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Email is required."),t.k0s())}function w(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Email must be in email-format ."),t.k0s())}function E(n,s){if(1&n&&(t.j41(0,"div",38),t.DNE(1,y,2,0,"small",39),t.DNE(2,w,2,0,"small",39),t.k0s()),2&n){const o=t.XpG();let r,e;t.R7$(1),t.Y8G("ngIf",null==(r=o.createAdminForm.get("email"))?null:r.hasError("required")),t.R7$(1),t.Y8G("ngIf",null==(e=o.createAdminForm.get("email"))?null:e.hasError("email"))}}function j(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Country is required."),t.k0s())}function I(n,s){if(1&n&&(t.j41(0,"div",38),t.DNE(1,j,2,0,"small",39),t.k0s()),2&n){const o=t.XpG();let r;t.R7$(1),t.Y8G("ngIf",null==(r=o.createAdminForm.get("country"))?null:r.hasError("required"))}}function R(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Phone Number is required."),t.k0s())}function N(n,s){if(1&n&&(t.j41(0,"div",38),t.DNE(1,R,2,0,"small",39),t.k0s()),2&n){const o=t.XpG();let r;t.R7$(1),t.Y8G("ngIf",null==(r=o.createAdminForm.get("phoneNumber"))?null:r.hasError("required"))}}function U(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Password is required."),t.k0s())}function A(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Password must contain capital letters, small letters, numbers and special characters."),t.k0s())}function z(n,s){if(1&n&&(t.j41(0,"div",38),t.DNE(1,U,2,0,"small",39),t.DNE(2,A,2,0,"small",39),t.k0s()),2&n){const o=t.XpG();let r,e;t.R7$(1),t.Y8G("ngIf",null==(r=o.createAdminForm.get("password"))?null:r.hasError("required")),t.R7$(1),t.Y8G("ngIf",null==(e=o.createAdminForm.get("password"))?null:e.hasError("pattern"))}}function $(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Confirm Password is required."),t.k0s())}function S(n,s){1&n&&(t.j41(0,"small"),t.EFF(1,"Confirm Password must be stronger."),t.k0s())}function G(n,s){if(1&n&&(t.j41(0,"div",38),t.DNE(1,$,2,0,"small",39),t.DNE(2,S,2,0,"small",39),t.k0s()),2&n){const o=t.XpG();let r,e;t.R7$(1),t.Y8G("ngIf",null==(r=o.createAdminForm.get("confirmPassword"))?null:r.hasError("required")),t.R7$(1),t.Y8G("ngIf",null==(e=o.createAdminForm.get("confirmPassword"))?null:e.hasError("pattern"))}}let T=(()=>{class n{constructor(o,r,e){this._UserService=o,this._ToastrService=r,this._Router=e,this.hidePassword=!0,this.hideConfirmPassword=!0,this.files=[],this.createAdminForm=new a.gE({userName:new a.MJ(null,a.k0.required),email:new a.MJ(null,[a.k0.required,a.k0.email]),phoneNumber:new a.MJ(null,a.k0.required),country:new a.MJ(null,a.k0.required),password:new a.MJ(null,[a.k0.required,a.k0.pattern("^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$")]),confirmPassword:new a.MJ(null,[a.k0.required,a.k0.pattern("^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$")]),profileImage:new a.MJ(null)}),this.resMessage=""}onSelect(o){this.files.push(...o.addedFiles),this.imgSrc=this.files[0]}onRemove(o){this.files.splice(this.files.indexOf(o),1)}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}onCreateAdmin(o){let r=new FormData;Object.keys(o.value).forEach(e=>{r.append(e,o.value[e])}),this.files.length>0&&r.append("profileImage",this.files[0]),this._UserService.createAdmin(r).subscribe({next:e=>{this.resMessage=e.message},error:e=>{if(e.error.message&&!e.error.additionalInfo)this._ToastrService.error(e.error.message,"Error");else{const i=new Map(Object.entries(e.error.additionalInfo.errors));for(let[c,g]of i)this._ToastrService.error(JSON.stringify(g),c)}},complete:()=>{this._ToastrService.success(this.resMessage,"Success"),this._Router.navigateByUrl("/dashboard/admin/users")}})}static{this.\u0275fac=function(r){return new(r||n)(t.rXU(O.D),t.rXU(b.tw),t.rXU(m.Ix))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-create-admin"]],decls:70,vars:13,consts:[[1,"container-fluid","w-100","center-div"],[1,"col-md-12","radius-16"],[1,"create-admin-form","center-div"],[1,"form","d-flex",3,"formGroup","ngSubmit"],[1,"logo","text-center"],["src","assets/img/logo.svg","alt","logo"],[1,"text-container"],[1,"auth-header"],[1,"auth-paragraph"],[1,"row","my-2"],[1,"col-md-12","d-flex","justify-content-center","align-content-center"],[1,"dropzone-container",3,"change"],[1,"fa-solid","fa-cloud-upload"],["ngProjectAs","ngx-dropzone-preview","class","dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-6"],[1,"form__group"],[1,"input-group"],[1,"input-group-text"],[1,"fa-solid","fa-user"],["type","text","placeholder","User name","aria-label","username","formControlName","userName","aria-describedby","basic-addon1",1,"form-control"],["class","error-text",4,"ngIf"],[1,"fa-solid","fa-envelope"],["type","email","placeholder","Enter your email","aria-label","email","formControlName","email","aria-describedby","basic-addon1",1,"form-control"],[1,"fa-solid","fa-earth-americas"],["type","text","placeholder","Country","formControlName","country","aria-label","country","aria-describedby","basic-addon1",1,"form-control"],[1,"fa-solid","fa-mobile-screen-button"],["type","text","placeholder","Phone number","formControlName","phoneNumber","aria-label","phoneNumber","aria-describedby","basic-addon1",1,"form-control"],[1,"row","mb-3"],[1,"fa-solid","fa-lock"],["placeholder","Password","aria-label","password","formControlName","password","aria-describedby","basic-addon1",1,"form-control","password",3,"type"],[1,"eye-icon"],[1,"fa-solid",3,"click"],["placeholder","Confirm password","aria-label","confirmPassword","formControlName","confirmPassword","aria-describedby","basic-addon1",1,"form-control","password",3,"type"],[1,"fa-solid",3,"ngClass","click"],[1,"col-md-7","m-auto"],["type","submit",1,"w-100","light-green-btn"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],1,"dropzone-preview",3,"file","removable","removed"],[1,"error-text"],[4,"ngIf"]],template:function(r,e){if(1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),t.bIt("ngSubmit",function(){return e.onCreateAdmin(e.createAdminForm)}),t.j41(4,"div",4),t.nrm(5,"img",5),t.k0s(),t.j41(6,"div",6)(7,"h3",7),t.EFF(8,"Create new admin"),t.k0s(),t.j41(9,"p",8),t.EFF(10,"Please enter the new admin's details"),t.k0s()(),t.j41(11,"div",9)(12,"div",10)(13,"ngx-dropzone",11),t.bIt("change",function(c){return e.onSelect(c)}),t.j41(14,"ngx-dropzone-label"),t.EFF(15,"Drop photo "),t.nrm(16,"i",12),t.k0s(),t.DNE(17,v,1,2,"ngx-dropzone-image-preview",13),t.k0s()()(),t.j41(18,"div",14)(19,"div",15)(20,"div",16)(21,"div",17)(22,"span",18),t.nrm(23,"i",19),t.k0s(),t.nrm(24,"input",20),t.k0s(),t.DNE(25,F,2,1,"div",21),t.k0s()(),t.j41(26,"div",15)(27,"div",16)(28,"div",17)(29,"span",18),t.nrm(30,"i",22),t.k0s(),t.nrm(31,"input",23),t.k0s(),t.DNE(32,E,3,2,"div",21),t.k0s()()(),t.j41(33,"div",14)(34,"div",15)(35,"div",16)(36,"div",17)(37,"span",18),t.nrm(38,"i",24),t.k0s(),t.nrm(39,"input",25),t.k0s(),t.DNE(40,I,2,1,"div",21),t.k0s()(),t.j41(41,"div",15)(42,"div",16)(43,"div",17)(44,"span",18),t.nrm(45,"i",26),t.k0s(),t.nrm(46,"input",27),t.k0s(),t.DNE(47,N,2,1,"div",21),t.k0s()()(),t.j41(48,"div",28)(49,"div",15)(50,"div",16)(51,"div",17)(52,"span",18),t.nrm(53,"i",29),t.k0s(),t.nrm(54,"input",30),t.j41(55,"span",31)(56,"i",32),t.bIt("click",function(){return e.togglePasswordVisibility()}),t.k0s()()(),t.DNE(57,z,3,2,"div",21),t.k0s()(),t.j41(58,"div",15)(59,"div",16)(60,"div",17)(61,"span",18),t.nrm(62,"i",29),t.k0s(),t.nrm(63,"input",33),t.j41(64,"span",31)(65,"i",34),t.bIt("click",function(){return e.hideConfirmPassword=!e.hideConfirmPassword}),t.k0s()()(),t.DNE(66,G,3,2,"div",21),t.k0s()()(),t.j41(67,"div",35)(68,"button",36),t.EFF(69,"Submit"),t.k0s()()()()()()),2&r){let i,c,g,p,_,h;t.R7$(3),t.Y8G("formGroup",e.createAdminForm),t.R7$(14),t.Y8G("ngForOf",e.files),t.R7$(8),t.Y8G("ngIf",(null==(i=e.createAdminForm.get("userName"))?null:i.invalid)&&(null==(i=e.createAdminForm.get("userName"))?null:i.touched)),t.R7$(7),t.Y8G("ngIf",(null==(c=e.createAdminForm.get("email"))?null:c.invalid)&&(null==(c=e.createAdminForm.get("email"))?null:c.touched)),t.R7$(8),t.Y8G("ngIf",(null==(g=e.createAdminForm.get("country"))?null:g.invalid)&&(null==(g=e.createAdminForm.get("country"))?null:g.touched)),t.R7$(7),t.Y8G("ngIf",(null==(p=e.createAdminForm.get("phoneNumber"))?null:p.invalid)&&(null==(p=e.createAdminForm.get("phoneNumber"))?null:p.touched)),t.R7$(7),t.Y8G("type",e.hidePassword?"password":"text"),t.R7$(2),t.HbH(e.hidePassword?"fa-eye-slash":"fa-eye"),t.R7$(1),t.Y8G("ngIf",(null==(_=e.createAdminForm.get("password"))?null:_.invalid)&&(null==(_=e.createAdminForm.get("password"))?null:_.touched)),t.R7$(6),t.Y8G("type",e.hideConfirmPassword?"password":"text"),t.R7$(2),t.Y8G("ngClass",e.hideConfirmPassword?"fa-eye-slash":"fa-eye"),t.R7$(1),t.Y8G("ngIf",(null==(h=e.createAdminForm.get("confirmPassword"))?null:h.invalid)&&(null==(h=e.createAdminForm.get("confirmPassword"))?null:h.touched))}},dependencies:[d.YU,d.Sq,d.bT,a.qT,a.me,a.BC,a.cb,a.j4,a.JD,u.s3,u.Gt,u.bB],styles:['.light-green-btn[_ngcontent-%COMP%]{color:#fff;background-color:#4aa35a;border:none;border-radius:8px;height:2.5rem}.center-div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.radius-16[_ngcontent-%COMP%]{border-radius:16px}.radius-8[_ngcontent-%COMP%]{border-radius:8px}.auth-padding[_ngcontent-%COMP%]{padding:2rem 1rem}.error-text[_ngcontent-%COMP%]{color:#d9534f;font-size:12px;margin-top:5px}.password[_ngcontent-%COMP%]{padding-right:3rem!important}body[_ngcontent-%COMP%]{font-family:Inter,sans-serif!important}.auth-header[_ngcontent-%COMP%]{color:#494949;font-size:25px;font-weight:700;line-height:30.26px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.auth-paragraph[_ngcontent-%COMP%]{color:#49494999;font-size:16px;font-weight:400;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;margin-bottom:.5rem}.green-text[_ngcontent-%COMP%]{color:#4aa35a;font-size:16px;font-weight:500;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.grey-text[_ngcontent-%COMP%]{color:#3a3a3d;font-size:16px;font-weight:500;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.form[_ngcontent-%COMP%]{width:100%;padding:1.5rem 3.5rem;flex-direction:column;row-gap:.5rem}.form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{margin:unset;position:relative}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border:none}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   .fa-solid[_ngcontent-%COMP%]{border-right:1px solid #8391a1;padding-right:1rem}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#000;font-size:15px;font-weight:500;line-height:18.75px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;background-color:#f8f9fa;border:none;padding:1rem;position:relative}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80%;width:1px;background-color:#8391a1;top:10%;left:0}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#8391a1}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active{box-shadow:2px 1px 1px #8391a1b3,0 1px #0000004d;border-color:#8391a1}.form__group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%]{position:absolute;right:2%;width:1.5rem;top:50%;transform:translate(-50%,-50%);z-index:1000;text-align:center;cursor:pointer}.form__group[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{margin:unset}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]{height:100%;background-color:#fff}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#49494999}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{row-gap:.2rem}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:225px;height:-moz-fit-content;height:fit-content}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .auth-paragraph[_ngcontent-%COMP%]{margin:0}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%]{font-size:22px}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .auth-paragraph[_ngcontent-%COMP%]{font-size:12px}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .dropzone-container[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .dropzone-container[_ngcontent-%COMP%]   ngx-dropzone-image-preview[_ngcontent-%COMP%]{min-height:unset!important;min-width:unset!important;max-width:unset!important;height:95%!important;width:95%!important;margin:0 auto!important;border-radius:50%!important}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .dropzone-container[_ngcontent-%COMP%]     img{max-height:none!important;width:100%!important;height:100%!important;border-radius:50%!important}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]     ngx-dropzone-remove-badge{top:10px!important;right:13px!important}.container-fluid[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   ngx-dropzone-label[_ngcontent-%COMP%]{font-size:12px!important}']})}}return n})();var Y=l(1060),f=l(5351);let D=(()=>{class n{constructor(o,r){this.dialogRef=o,this.data=r,this.data.imagePath=this.data.imagePath?"https://upskilling-egypt.com:3006/"+this.data.imagePath:"assets/img/default-avatar.avif"}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(r){return new(r||n)(t.rXU(f.CP),t.rXU(f.Vh))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-view-user"]],decls:25,vars:14,consts:[[1,"card",2,"width","33rem"],[1,"row","p-2","g-0","align-items-center"],[1,"mt-2","card-title","text-center"],[1,"col-md-4","text-center"],["alt","avatar",1,"img-fluid","rounded-start",3,"src"],[1,"col-md-8"],[1,"card-body"],[1,"card-text"],[1,"btn","btn-danger",3,"click"]],template:function(r,e){1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"h3",2),t.EFF(3),t.k0s(),t.nrm(4,"hr"),t.j41(5,"div",3),t.nrm(6,"img",4),t.k0s(),t.j41(7,"div",5)(8,"div",6)(9,"p",7),t.EFF(10),t.k0s(),t.j41(11,"p",7),t.EFF(12),t.k0s(),t.j41(13,"p",7),t.EFF(14),t.k0s(),t.j41(15,"p",7),t.EFF(16),t.k0s(),t.j41(17,"p",7),t.EFF(18),t.nI1(19,"date"),t.k0s(),t.j41(20,"p",7),t.EFF(21),t.nI1(22,"date"),t.k0s(),t.j41(23,"button",8),t.bIt("click",function(){return e.onNoClick()}),t.EFF(24,"Close"),t.k0s()()()()()),2&r&&(t.R7$(3),t.SpI("#",e.data.id,""),t.R7$(3),t.Y8G("src",e.data.imagePath,t.B4B),t.R7$(4),t.SpI("User name: ",e.data.userName,""),t.R7$(2),t.SpI("Email: ",e.data.email,""),t.R7$(2),t.SpI("Phone: ",e.data.phoneNumber,""),t.R7$(2),t.SpI("Country: ",e.data.country,""),t.R7$(2),t.SpI(" Creation date: ",t.i5U(19,8,e.data.creationDate,"dd/MM/yyyy HH:mm a")," "),t.R7$(3),t.SpI(" Modification date: ",t.i5U(22,11,e.data.modificationDate,"dd/MM/yyyy HH:mm a")," "))},dependencies:[d.vh]})}}return n})();var B=l(9631),C=l(882),V=l(6440),J=l(8834),P=l(1806),X=l(9213),L=l(7250),H=l(6600),q=l(9183);function Z(n,s){1&n&&(t.j41(0,"tr")(1,"td",31),t.nrm(2,"img",32),t.k0s()(),t.j41(3,"tr")(4,"td",33),t.EFF(5,"No Data!"),t.k0s()())}function W(n,s){if(1&n){const o=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.nrm(4,"img",36),t.k0s(),t.j41(5,"td",37),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.k0s(),t.j41(11,"td"),t.EFF(12),t.k0s(),t.j41(13,"td")(14,"button",38)(15,"mat-icon"),t.EFF(16,"more_horiz"),t.k0s()(),t.j41(17,"mat-menu",null,39)(19,"button",40),t.bIt("click",function(){const i=t.eBV(o).$implicit,c=t.XpG(3);return t.Njj(c.viewUser(i))}),t.j41(20,"mat-icon",41),t.EFF(21,"visibility"),t.k0s(),t.j41(22,"span",41),t.EFF(23,"View"),t.k0s()(),t.j41(24,"button",42),t.bIt("click",function(){const i=t.eBV(o).$implicit,c=t.XpG(3);return t.Njj(c.deleteUser(i))}),t.j41(25,"mat-icon",43),t.EFF(26,"delete"),t.k0s(),t.j41(27,"span"),t.EFF(28,"Delete"),t.k0s()()()()()}if(2&n){const o=s.$implicit,r=s.even,e=t.sdS(18),i=t.XpG(3);t.HbH(r?"bg-white":"bg-light"),t.R7$(2),t.JRh(o.userName),t.R7$(2),t.Y8G("src",o.imagePath?i.imagePath+o.imagePath:"assets/img/default-avatar.avif",t.B4B),t.R7$(2),t.SpI(" ",o.email," "),t.R7$(2),t.JRh(o.phoneNumber),t.R7$(2),t.JRh(o.country),t.R7$(2),t.JRh(o.group.name),t.R7$(2),t.Y8G("matMenuTriggerFor",e)}}function K(n,s){if(1&n&&(t.qex(0),t.DNE(1,W,29,9,"tr",35),t.bVm()),2&n){const o=t.XpG(2);t.R7$(1),t.Y8G("ngForOf",o.listData)}}function Q(n,s){if(1&n&&(t.qex(0),t.DNE(1,K,2,1,"ng-container",34),t.bVm()),2&n){const o=t.XpG(),r=t.sdS(74);t.R7$(1),t.Y8G("ngIf",o.listData.length>0)("ngIfElse",r)}}function tt(n,s){1&n&&(t.j41(0,"div",44)(1,"mat-progress-spinner",45)(2,"p",46),t.EFF(3,"Loading data, please wait..."),t.k0s()()())}const et=function(){return[5,10,25,100]},nt=[{path:"",component:(()=>{class n{constructor(o,r,e){this._UserService=o,this._ToastrService=r,this.dialog=e,this.listData=[],this.pageSize=10,this.pageNumber=1,this.searchVal="",this.email="",this.country="",this.roleId=[1,2],this.searchBy="userName",this.searchLabel="Search by name",this.searchPlaceholder="Abc",this.searchIcon="person",this.imagePath="https://upskilling-egypt.com:3006/",this.loading=!1}ngOnInit(){this.getUsers()}updateSearchPlaceholder(){"userName"===this.searchBy?(this.searchLabel="Search by name",this.searchIcon="person",this.searchPlaceholder="Abc"):"email"===this.searchBy?(this.searchLabel="Search by email",this.searchIcon="email",this.searchPlaceholder="Abc@gmail.com"):"country"===this.searchBy&&(this.searchLabel="Search by country",this.searchIcon="public",this.searchPlaceholder="Egypt")}getUsers(){this.loading=!0,this._UserService.getAllUsers({pageSize:this.pageSize,pageNumber:this.pageNumber,[this.searchBy]:this.searchVal,groups:this.roleId}).subscribe({next:r=>{this.loading=!1,this.listData=r.data,this.tableRes=r,console.log(this.tableRes)},error:r=>{this.loading=!1,this._ToastrService.error("Failed to load users","Error")}})}handlePageEvent(o){this.pageSize=o.pageSize,this.pageNumber=o.pageIndex,this.getUsers(),console.log(o)}viewUser(o){const r=JSON.parse(JSON.stringify(o));this.dialog.open(D,{data:r}).afterClosed().subscribe(i=>{console.log(i)}),this._UserService.getUsersById(o.id).subscribe({next:i=>{console.log(i)},error:()=>{},complete:()=>{}})}deleteUser(o){this.dialog.open(Y.c,{data:{text:"user",userName:o.userName}}).afterClosed().subscribe(e=>{e&&this._UserService.deleteUsers(o.id).subscribe({next:()=>{},error:()=>{this._ToastrService.error("Failed to delete user","Error")},complete:()=>{this._ToastrService.success(`${o.userName} has been deleted successfully!`,"Success"),this.getUsers()}})})}clearFilter(){this.searchVal="",this.searchBy="userName",this.searchLabel="Search by name",this.searchIcon="person",this.searchPlaceholder="Abc",this.roleId=[1,2],this.getUsers()}static{this.\u0275fac=function(r){return new(r||n)(t.rXU(O.D),t.rXU(b.tw),t.rXU(f.bZ))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-users"]],decls:78,vars:16,consts:[[1,"container-fluid"],[1,"row","radius-16","first","px-5","my-4"],[1,"col-md-12","d-flex","justify-content-between","align-items-center"],[1,"col-md-6","text-containter"],[1,"animated-text"],[1,"image-container"],["src","assets/img/eating2.svg","alt",""],[1,"row","second","d-flex","justify-content-between"],[1,"col-md-3","text-end"],["type","button","routerLink","create-admin",1,"light-green-btn"],[1,"row","third"],[1,"my-3","mx-auto","d-flex","column-gap-2"],[1,"col-md-2"],[1,"w-100"],[3,"ngModel","ngModelChange","selectionChange"],["value","userName"],["value","email"],["value","country"],[1,"col-md-4"],[1,"w-100","example-full-width"],["matPrefix",""],["matInput","","name","search",3,"ngModel","placeholder","ngModelChange","keydown.enter"],[3,"value"],[1,"col-md-1",2,"width","fit-content"],[1,"w-100","btn","btn-outline-secondary",3,"click"],[1,"table"],[2,"min-width","8rem !important"],["noData",""],[4,"ngIf"],["aria-label","Select page",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["class","loader-container",4,"ngIf"],["colspan","8",1,"text-center","p-0","pb-2","pt-5"],["src","assets/img/no-data.svg","alt","No Data"],["colspan","8",1,"text-center","p-3"],[4,"ngIf","ngIfElse"],[3,"class",4,"ngFor","ngForOf"],["width","50px","height","50px","alt","img",2,"border-radius","50%",3,"src"],[1,"text-truncate"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"text-success"],["mat-menu-item","",1,"text-danger",3,"click"],[1,"text-danger"],[1,"loader-container"],["mode","indeterminate","color","primary","diameter","50"],[1,"loading-text"]],template:function(r,e){1&r&&(t.j41(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t.EFF(5,"Users "),t.j41(6,"span",4),t.EFF(7,"item!"),t.k0s()(),t.j41(8,"p"),t.EFF(9," You can now add your items that any user can order it from the Application and you can edit "),t.k0s()(),t.j41(10,"div",5),t.nrm(11,"img",6),t.k0s()()(),t.j41(12,"div",7)(13,"div",3)(14,"h3"),t.EFF(15,"Users table details"),t.k0s(),t.j41(16,"p"),t.EFF(17,"You can check all details"),t.k0s()(),t.j41(18,"div",8)(19,"button",9),t.EFF(20," Add new admin "),t.k0s()()(),t.j41(21,"div",10)(22,"div",11)(23,"div",12)(24,"mat-form-field",13)(25,"mat-label"),t.EFF(26,"Search by"),t.k0s(),t.j41(27,"mat-select",14),t.bIt("ngModelChange",function(c){return e.searchBy=c})("selectionChange",function(){return e.updateSearchPlaceholder()}),t.j41(28,"mat-option",15),t.EFF(29,"Name "),t.k0s(),t.j41(30,"mat-option",16),t.EFF(31,"Email "),t.k0s(),t.j41(32,"mat-option",17),t.EFF(33,"Country "),t.k0s()()()(),t.j41(34,"div",18)(35,"mat-form-field",19)(36,"mat-icon",20),t.EFF(37),t.k0s(),t.j41(38,"mat-label"),t.EFF(39),t.k0s(),t.j41(40,"input",21),t.bIt("ngModelChange",function(c){return e.searchVal=c})("keydown.enter",function(){return e.getUsers()}),t.k0s()()(),t.j41(41,"div",12)(42,"mat-form-field",13)(43,"mat-label"),t.EFF(44,"Role"),t.k0s(),t.j41(45,"mat-select",14),t.bIt("ngModelChange",function(c){return e.roleId=c})("selectionChange",function(){return e.getUsers()}),t.j41(46,"mat-option",22),t.EFF(47,"All"),t.k0s(),t.j41(48,"mat-option",22),t.EFF(49,"Super admin"),t.k0s(),t.j41(50,"mat-option",22),t.EFF(51,"User System"),t.k0s()()()(),t.j41(52,"div",23)(53,"button",24),t.bIt("click",function(){return e.clearFilter()}),t.EFF(54," Clear filter "),t.k0s()()(),t.j41(55,"table",25)(56,"thead")(57,"tr")(58,"th",26),t.EFF(59,"User name"),t.k0s(),t.j41(60,"th"),t.EFF(61,"Image"),t.k0s(),t.j41(62,"th"),t.EFF(63,"Email"),t.k0s(),t.j41(64,"th"),t.EFF(65,"Phone"),t.k0s(),t.j41(66,"th"),t.EFF(67,"Country"),t.k0s(),t.j41(68,"th"),t.EFF(69,"Role"),t.k0s(),t.j41(70,"th"),t.EFF(71,"Actions"),t.k0s()()(),t.j41(72,"tbody"),t.DNE(73,Z,6,0,"ng-template",null,27,t.C5r),t.DNE(75,Q,2,2,"ng-container",28),t.k0s()(),t.j41(76,"mat-paginator",29),t.bIt("page",function(c){return e.handlePageEvent(c)}),t.k0s()()(),t.DNE(77,tt,4,0,"div",30)),2&r&&(t.R7$(27),t.Y8G("ngModel",e.searchBy),t.R7$(10),t.JRh(e.searchIcon),t.R7$(2),t.JRh(e.searchLabel),t.R7$(1),t.Y8G("ngModel",e.searchVal)("placeholder",e.searchPlaceholder),t.R7$(5),t.Y8G("ngModel",e.roleId),t.R7$(1),t.Y8G("value",e.roleId),t.R7$(2),t.Y8G("value",1),t.R7$(2),t.Y8G("value",2),t.R7$(25),t.Y8G("ngIf",!e.loading),t.R7$(1),t.Y8G("length",null==e.tableRes?null:e.tableRes.totalNumberOfRecords)("pageSize",e.pageSize)("pageIndex",e.pageNumber)("pageSizeOptions",t.lJ4(15,et)),t.R7$(1),t.Y8G("ngIf",e.loading))},dependencies:[d.Sq,d.bT,m.Wk,B.fg,C.rl,C.nJ,C.JW,V.iy,J.iY,P.kk,P.fb,P.Cp,X.An,a.me,a.BC,a.vS,L.VO,H.wT,q.LG],styles:[".center-div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.radius-16[_ngcontent-%COMP%]{border-radius:16px}.radius-8[_ngcontent-%COMP%]{border-radius:8px}.auth-padding[_ngcontent-%COMP%]{padding:2rem 1rem}.error-text[_ngcontent-%COMP%]{color:#d9534f;font-size:12px;margin-top:5px}.password[_ngcontent-%COMP%]{padding-right:3rem!important}body[_ngcontent-%COMP%]{font-family:Inter,sans-serif!important}.auth-header[_ngcontent-%COMP%]{color:#494949;font-size:25px;font-weight:700;line-height:30.26px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.auth-paragraph[_ngcontent-%COMP%]{color:#49494999;font-size:16px;font-weight:400;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;margin-bottom:.5rem}.green-text[_ngcontent-%COMP%]{color:#4aa35a;font-size:16px;font-weight:500;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.grey-text[_ngcontent-%COMP%]{color:#3a3a3d;font-size:16px;font-weight:500;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.light-green-btn[_ngcontent-%COMP%]{color:#fff;background-color:#4aa35a;border:none;border-radius:8px;height:2.5rem}@keyframes _ngcontent-%COMP%_float{0%{transform:translate(-10%,-50%) translateY(0)}50%{transform:translate(-10%,-50%) translateY(-10px)}to{transform:translate(-10%,-50%) translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}50%{opacity:1;transform:translateY(0)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_clockwise-spin{0%{transform:rotate(0) translate(50px) rotate(0)}25%{transform:rotate(90deg) translate(50px) rotate(-90deg)}50%{transform:rotate(180deg) translate(50px) rotate(-180deg)}75%{transform:rotate(270deg) translate(50px) rotate(-270deg)}to{transform:rotate(360deg) translate(50px) rotate(-360deg)}}@keyframes _ngcontent-%COMP%_counterclockwise-spin{0%{transform:rotate(0) translate(50px) rotate(0)}25%{transform:rotate(-90deg) translate(50px) rotate(90deg)}50%{transform:rotate(-180deg) translate(50px) rotate(180deg)}75%{transform:rotate(-270deg) translate(50px) rotate(270deg)}to{transform:rotate(-360deg) translate(50px) rotate(360deg)}}.table[_ngcontent-%COMP%]{--bs-table-bg: transparent}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(caption) > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{border:none}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#e2e5eb}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{padding-left:1.5rem;border-radius:15px 0 0 15px}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{border-radius:0 15px 15px 0}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:2rem 1rem;font-family:Poppins;font-size:16px;font-weight:500;color:#1f263e}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1.3rem}.first[_ngcontent-%COMP%]{height:13rem;background-image:url(header-bg.e7cd2c7a9e952177.svg);background-repeat:no-repeat;background-size:cover}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]{color:#fff;font-family:Roboto;z-index:10}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;font-weight:700;line-height:46.88px}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:40px;font-weight:lighter!important;color:#fff;text-decoration:none}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:95%}.first[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{position:absolute;animation:_ngcontent-%COMP%_float 3s infinite ease-in-out;top:33%;right:6%;z-index:10}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:500;line-height:30px;color:#1f263e}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;line-height:21px;color:#323c47}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .light-green-btn[_ngcontent-%COMP%]{background-color:#009247;padding:.75rem;width:100%;height:unset;font-size:16px;font-weight:700}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .light-green-btn[_ngcontent-%COMP%]:hover{background-color:#4aa35a;box-shadow:1px 1px 5px 1px #000}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{padding:10rem}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{vertical-align:middle;text-align:center}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:center}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{text-align:center}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:1.5rem}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]{font-size:20px;font-weight:700;line-height:24.2px;color:#494949}.text-truncate[_ngcontent-%COMP%]{max-width:11rem}"]})}}return n})()},{path:"create-admin",component:T}];let ot=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[m.iI.forChild(nt),m.iI]})}}return n})(),rt=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[d.MD,ot,x.G]})}}return n})()}}]);