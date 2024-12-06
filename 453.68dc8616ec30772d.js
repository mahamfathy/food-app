"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[453],{453:(N,_,r)=>{r.r(_),r.d(_,{CategoriesModule:()=>D});var l=r(177),u=r(7301),f=r(2791),s=r(5351),t=r(7705),M=r(9631),C=r(882),m=r(8834),d=r(9417);function O(o,g){1&o&&(t.j41(0,"mat-error")(1,"small"),t.EFF(2,"Category name is required."),t.k0s()())}function P(o,g){if(1&o&&(t.j41(0,"button",8),t.EFF(1," Save "),t.k0s()),2&o){const n=t.XpG(),e=t.sdS(7);t.Y8G("mat-dialog-close",n.data)("disabled",!n.isReadOnly&&e.invalid)}}let p=(()=>{class o{constructor(n,e){this.dialogRef=n,this.data=e,this.isReadOnly=!1,this.isReadOnly=e.isReadOnly||!1}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(e){return new(e||o)(t.rXU(s.CP),t.rXU(s.Vh))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-add-edit-category"]],decls:13,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["required","","matInput","",3,"readonly","ngModel","disabled","ngModelChange"],["categoryName","ngModel"],[4,"ngIf"],["mat-dialog-actions","",3,"align"],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close","disabled",4,"ngIf"],["mat-button","",3,"mat-dialog-close","disabled"]],template:function(e,a){if(1&e&&(t.j41(0,"h1",0),t.EFF(1),t.k0s(),t.j41(2,"div",1)(3,"mat-form-field")(4,"mat-label"),t.EFF(5,"Category Name"),t.k0s(),t.j41(6,"input",2,3),t.bIt("ngModelChange",function(c){return a.data.name=c}),t.k0s(),t.DNE(8,O,3,0,"mat-error",4),t.k0s()(),t.j41(9,"div",5)(10,"button",6),t.bIt("click",function(){return a.onNoClick()}),t.EFF(11,"Close"),t.k0s(),t.DNE(12,P,2,2,"button",7),t.k0s()),2&e){const i=t.sdS(7);t.R7$(1),t.SpI(" ",a.isReadOnly?"View Category":"Add/Edit Category","\n"),t.R7$(5),t.Y8G("readonly",a.isReadOnly)("ngModel",a.data.name)("disabled",a.isReadOnly),t.R7$(2),t.Y8G("ngIf",i.invalid&&i.touched),t.R7$(1),t.Y8G("align","end"),t.R7$(3),t.Y8G("ngIf",!a.isReadOnly)}},dependencies:[l.bT,M.fg,C.rl,C.nJ,C.TL,m.$z,d.me,d.BC,d.YS,d.vS,s.tx,s.BI,s.Yi,s.E7]})}}return o})(),b=(()=>{class o{constructor(n,e){this.dialogRef=n,this.data=e}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(e){return new(e||o)(t.rXU(s.CP),t.rXU(s.Vh))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-delete-category"]],decls:12,vars:2,consts:[["mat-dialog-content",""],["src","assets/img/no-data.svg","alt","delete",1,"text-center"],[1,"mt-2"],["mat-dialog-actions","",3,"align"],["mat-button","",3,"click"],["mat-button","",1,"btn","btn-danger",3,"mat-dialog-close"]],template:function(e,a){1&e&&(t.j41(0,"div",0)(1,"div"),t.nrm(2,"img",1),t.j41(3,"h5",2),t.EFF(4,"Delete this category?"),t.k0s(),t.j41(5,"p"),t.EFF(6," are you sure you want to delete this item ? if you are sure just click on delete it "),t.k0s()()(),t.j41(7,"div",3)(8,"button",4),t.bIt("click",function(){return a.onNoClick()}),t.EFF(9,"Close"),t.k0s(),t.j41(10,"button",5),t.EFF(11," Delete "),t.k0s()()),2&e&&(t.R7$(7),t.Y8G("align","end"),t.R7$(3),t.Y8G("mat-dialog-close",a.data))},dependencies:[m.$z,s.tx,s.Yi,s.E7],styles:[".mat-mdc-dialog-container.mdc-dialog.cdk-dialog-container.mdc-dialog--open{width:100%;text-align:center;height:-moz-fit-content;height:fit-content}.mdc-dialog__title[_ngcontent-%COMP%]:before{height:none!important}"]})}}return o})();var y=r(4959),x=r(5794),k=r(9570),v=r(6440),h=r(1806),F=r(9213),E=r(5596),j=r(9183);function R(o,g){1&o&&(t.j41(0,"tr")(1,"td",18),t.nrm(2,"img",19),t.k0s()(),t.j41(3,"tr")(4,"td",20),t.EFF(5,"No Data!"),t.k0s()())}function S(o,g){if(1&o){const n=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.nI1(5,"date"),t.k0s(),t.j41(6,"td"),t.EFF(7),t.nI1(8,"date"),t.k0s(),t.j41(9,"td")(10,"button",23)(11,"mat-icon"),t.EFF(12,"more_horiz"),t.k0s()(),t.j41(13,"mat-menu",null,24)(15,"button",25),t.bIt("click",function(){const i=t.eBV(n).$implicit,c=t.XpG(3);return t.Njj(c.viewCategory(i))}),t.j41(16,"mat-icon",26),t.EFF(17,"visibility"),t.k0s(),t.j41(18,"span",26),t.EFF(19,"View"),t.k0s()(),t.j41(20,"button",25),t.bIt("click",function(){const i=t.eBV(n).$implicit,c=t.XpG(3);return t.Njj(c.editCategory(i.id,i.name))}),t.j41(21,"mat-icon",26),t.EFF(22,"edit_note"),t.k0s(),t.j41(23,"span",26),t.EFF(24,"Edit"),t.k0s()(),t.j41(25,"button",27),t.bIt("click",function(){const i=t.eBV(n).$implicit,c=t.XpG(3);return t.Njj(c.deleteCategory(i.id))}),t.j41(26,"mat-icon",28),t.EFF(27,"delete"),t.k0s(),t.j41(28,"span"),t.EFF(29,"Delete"),t.k0s()()()()()}if(2&o){const n=g.$implicit,e=g.even,a=t.sdS(14);t.HbH(e?"bg-white":"bg-light"),t.R7$(2),t.JRh(n.name),t.R7$(2),t.JRh(t.i5U(5,6,n.creationDate,"dd/MM/yyyy HH:mm a")),t.R7$(3),t.SpI(" ",t.i5U(8,9,n.modificationDate,"dd/MM/yyyy HH:mm a")," "),t.R7$(3),t.Y8G("matMenuTriggerFor",a)}}function I(o,g){if(1&o&&(t.qex(0),t.DNE(1,S,30,12,"tr",22),t.bVm()),2&o){const n=t.XpG(2);t.R7$(1),t.Y8G("ngForOf",n.listData)}}function T(o,g){if(1&o&&(t.qex(0),t.DNE(1,I,2,1,"ng-container",21),t.bVm()),2&o){const n=t.XpG(),e=t.sdS(38);t.R7$(1),t.Y8G("ngIf",n.listData.length>0)("ngIfElse",e)}}function w(o,g){1&o&&(t.j41(0,"div",29)(1,"mat-progress-spinner",30)(2,"p",31),t.EFF(3,"Loading data, please wait..."),t.k0s()()())}const z=function(){return[5,10,25,100]},Y=[{path:"",component:(()=>{class o{constructor(n,e,a,i){this._CategoryService=n,this._ToastrService=e,this.dialog=a,this._HelperService=i,this.name="",this.listData=[],this.pageSize=10,this.pageNumber=1,this.searchVal="",this.loading=!1}ngOnInit(){this.getCategories()}openDialog(){this.dialog.open(p,{data:{name:""}}).afterClosed().subscribe(e=>{e&&this.addCategory(e)})}getCategories(){this.loading=!0,this._HelperService.getAllCategories({pageSize:this.pageSize,pageNumber:this.pageNumber,name:this.searchVal}).subscribe({next:e=>{this.loading=!1,this.listData=e.data,this.tableRes=e},error:e=>{this.loading=!1,this._ToastrService.error("Failed to load categories","Error")}})}handlePageEvent(n){this.pageSize=n.pageSize,this.pageNumber=n.pageIndex,this.getCategories()}addCategory(n){this._CategoryService.onAddCategory(n).subscribe({next:e=>{this.name=e.name},error:e=>{this._ToastrService.error("An unexpected error occurred","Error")},complete:()=>{this.getCategories(),this._ToastrService.success(`You have successfully added "${this.name}"`,"Success")}})}editCategory(n,e){this.dialog.open(p,{data:{name:e,isReadOnly:!1}}).afterClosed().subscribe(i=>{i&&this._CategoryService.updateCategory(n,i.name).subscribe({next:()=>{},error:()=>{this._ToastrService.error("Failed to update category","Error")},complete:()=>{this._ToastrService.success(`Category "${i.name}" updated successfully!`,"Success"),this.getCategories()}})})}viewCategory(n){this._CategoryService.getCategoryById(n.id).subscribe({next:e=>{},error:()=>{},complete:()=>{this.dialog.open(p,{data:{name:n.name,isReadOnly:!0}})}})}deleteCategory(n){this.dialog.open(b,{data:n}).afterClosed().subscribe(a=>{a&&this._CategoryService.deleteCategory(n).subscribe({next:()=>{},error:()=>{this._ToastrService.error("Failed to Delete category","Error")},complete:()=>{this._ToastrService.success("Category has been deleted successfully!","Success"),this.getCategories()}})})}static{this.\u0275fac=function(e){return new(e||o)(t.rXU(y.M),t.rXU(x.tw),t.rXU(s.bZ),t.rXU(k.w))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-categories"]],decls:42,vars:8,consts:[[1,"container-fluid"],[1,"row","radius-16","first","px-5","my-4"],[1,"col-md-12","d-flex","justify-content-between","align-items-center"],[1,"col-md-6","text-containter"],[1,"animated-text"],[1,"image-container"],["src","assets/img/eating2.svg","alt",""],[1,"row","second","d-flex","justify-content-between"],[1,"col-md-3","text-end"],["type","button",1,"light-green-btn",3,"click"],[1,"third"],[1,"my-3","w-75","mx-auto"],["placeholder","Search by name","type","text","name","search","id","search",1,"form-control",3,"ngModel","ngModelChange","keydown.enter"],[1,"table"],["noData",""],[4,"ngIf"],["aria-label","Select page",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["class","loader-container",4,"ngIf"],["colspan","4",1,"text-center","p-0","pb-2","pt-5"],["src","assets/img/no-data.svg","alt","No Data"],["colspan","4",1,"text-center","p-3"],[4,"ngIf","ngIfElse"],[3,"class",4,"ngFor","ngForOf"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"text-success"],["mat-menu-item","",1,"text-danger",3,"click"],[1,"text-danger"],[1,"loader-container"],["mode","indeterminate","color","primary","diameter","50"],[1,"loading-text"]],template:function(e,a){1&e&&(t.j41(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t.EFF(5,"Categories "),t.j41(6,"span",4),t.EFF(7,"item!"),t.k0s()(),t.j41(8,"p"),t.EFF(9," You can now add your items that any user can order it from the Application and you can edit "),t.k0s()(),t.j41(10,"div",5),t.nrm(11,"img",6),t.k0s()()(),t.j41(12,"div",7)(13,"div",3)(14,"h3"),t.EFF(15,"Categories table details"),t.k0s(),t.j41(16,"p"),t.EFF(17,"You can check all details"),t.k0s()(),t.j41(18,"div",8)(19,"button",9),t.bIt("click",function(){return a.openDialog()}),t.EFF(20," Add new category "),t.k0s()()(),t.j41(21,"div",10)(22,"mat-card")(23,"div",11)(24,"input",12),t.bIt("ngModelChange",function(c){return a.searchVal=c})("keydown.enter",function(){return a.getCategories()}),t.k0s()()(),t.j41(25,"table",13)(26,"thead")(27,"tr")(28,"th"),t.EFF(29,"Item name"),t.k0s(),t.j41(30,"th"),t.EFF(31,"Creation date"),t.k0s(),t.j41(32,"th"),t.EFF(33,"Modification date"),t.k0s(),t.j41(34,"th"),t.EFF(35,"Actions"),t.k0s()()(),t.j41(36,"tbody"),t.DNE(37,R,6,0,"ng-template",null,14,t.C5r),t.DNE(39,T,2,2,"ng-container",15),t.k0s()(),t.j41(40,"mat-paginator",16),t.bIt("page",function(c){return a.handlePageEvent(c)}),t.k0s()()(),t.DNE(41,w,4,0,"div",17)),2&e&&(t.R7$(24),t.Y8G("ngModel",a.searchVal),t.R7$(15),t.Y8G("ngIf",!a.loading),t.R7$(1),t.Y8G("length",null==a.tableRes?null:a.tableRes.totalNumberOfRecords)("pageSize",a.pageSize)("pageIndex",a.pageNumber)("pageSizeOptions",t.lJ4(7,z)),t.R7$(1),t.Y8G("ngIf",a.loading))},dependencies:[l.Sq,l.bT,v.iy,m.iY,h.kk,h.fb,h.Cp,F.An,E.RN,d.me,d.BC,d.vS,j.LG,l.vh],styles:[".center-div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.radius-16[_ngcontent-%COMP%]{border-radius:16px}.radius-8[_ngcontent-%COMP%]{border-radius:8px}.auth-padding[_ngcontent-%COMP%]{padding:2rem 1rem}.error-text[_ngcontent-%COMP%]{color:#d9534f;font-size:12px;margin-top:5px}.password[_ngcontent-%COMP%]{padding-right:3rem!important}body[_ngcontent-%COMP%]{font-family:Inter,sans-serif!important}.auth-header[_ngcontent-%COMP%]{color:#494949;font-size:25px;font-weight:700;line-height:30.26px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.auth-paragraph[_ngcontent-%COMP%]{color:#49494999;font-size:16px;font-weight:400;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;margin-bottom:.5rem}.green-text[_ngcontent-%COMP%]{color:#4aa35a;font-size:16px;font-weight:500;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.grey-text[_ngcontent-%COMP%]{color:#3a3a3d;font-size:16px;font-weight:500;line-height:19.36px;text-align:left;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.light-green-btn[_ngcontent-%COMP%]{color:#fff;background-color:#4aa35a;border:none;border-radius:8px;height:2.5rem}@keyframes _ngcontent-%COMP%_float{0%{transform:translate(-10%,-50%) translateY(0)}50%{transform:translate(-10%,-50%) translateY(-10px)}to{transform:translate(-10%,-50%) translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}50%{opacity:1;transform:translateY(0)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_clockwise-spin{0%{transform:rotate(0) translate(50px) rotate(0)}25%{transform:rotate(90deg) translate(50px) rotate(-90deg)}50%{transform:rotate(180deg) translate(50px) rotate(-180deg)}75%{transform:rotate(270deg) translate(50px) rotate(-270deg)}to{transform:rotate(360deg) translate(50px) rotate(-360deg)}}@keyframes _ngcontent-%COMP%_counterclockwise-spin{0%{transform:rotate(0) translate(50px) rotate(0)}25%{transform:rotate(-90deg) translate(50px) rotate(90deg)}50%{transform:rotate(-180deg) translate(50px) rotate(180deg)}75%{transform:rotate(-270deg) translate(50px) rotate(270deg)}to{transform:rotate(-360deg) translate(50px) rotate(360deg)}}.table[_ngcontent-%COMP%]{--bs-table-bg: transparent}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(caption) > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{border:none}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#e2e5eb}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{padding-left:1.5rem;border-radius:15px 0 0 15px}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{border-radius:0 15px 15px 0}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:2rem 1rem;font-family:Poppins;font-size:16px;font-weight:500;color:#1f263e}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1.3rem}.first[_ngcontent-%COMP%]{height:13rem;background-image:url(header-bg.e7cd2c7a9e952177.svg);background-repeat:no-repeat;background-size:cover}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]{color:#fff;font-family:Roboto;z-index:10}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;font-weight:700;line-height:46.88px}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:40px;font-weight:lighter!important;color:#fff;text-decoration:none}.first[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:95%}.first[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{position:absolute;animation:_ngcontent-%COMP%_float 3s infinite ease-in-out;top:33%;right:6%;z-index:10}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:500;line-height:30px;color:#1f263e}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .text-containter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;line-height:21px;color:#323c47}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .light-green-btn[_ngcontent-%COMP%]{background-color:#009247;padding:.75rem;width:100%;height:unset;font-size:16px;font-weight:700}section[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .light-green-btn[_ngcontent-%COMP%]:hover{background-color:#4aa35a;box-shadow:1px 1px 5px 1px #000}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{padding:10rem}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:end}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{text-align:end}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding-left:1.5rem}section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]{font-size:20px;font-weight:700;line-height:24.2px;color:#494949}"]})}}return o})()}];let $=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[f.iI.forChild(Y),f.iI]})}}return o})(),D=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[l.MD,$,u.G]})}}return o})()}}]);