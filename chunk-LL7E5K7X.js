import{e as I}from"./chunk-FBQ74VY3.js";import{I as n,L as _,M as v,R as w,Va as S,X as C,ab as h,db as g,eb as y,f as l,fb as b,hb as m,i as s,mb as j,r as d,s as u,tb as k,u as a,vb as F}from"./chunk-SV2KFDMP.js";var M={formId:"healthclinic",title:"Healthclinic",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill healthclinic title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill healthclinic description"},{name:"Label",value:"Description"}]}]};var P=(()=>{class o extends g{constructor(c,e,t,r){super({name:"healthclinic"},c,e,t,r)}static{this.\u0275fac=function(e){return new(e||o)(a(b),a(y),a(m),a(h))}}static{this.\u0275prov=d({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var R=(()=>{class o{constructor(c,e,t,r,f){this._translate=c,this._healthclinicService=e,this._alert=t,this._form=r,this._core=f,this.columns=["name","description"],this.form=this._form.getForm("healthclinic",M),this.config={paginate:this.setRows.bind(this),perPage:20,setPerPage:this._healthclinicService.setPerPage.bind(this._healthclinicService),allDocs:!1,create:()=>{this._form.modal(this.form,{label:"Create",click:(i,p)=>l(this,null,function*(){p(),this._preCreate(i),yield s(this._healthclinicService.create(i)),this.setRows()})})},update:i=>{this._form.modal(this.form,[],i).then(p=>{this._core.copy(p,i),this._healthclinicService.update(i)})},delete:i=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this healthclinic?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>l(this,null,function*(){yield s(this._healthclinicService.delete(i)),this.setRows()})}]})},buttons:[{icon:"place",hrefFunc:i=>"/places/clinics/"+i._id},{icon:"health_and_safety",hrefFunc:i=>"/doctors/"+i._id},{icon:"comment",hrefFunc:i=>"/comments/"+i._id},{icon:"cloud_download",click:i=>{this._form.modalUnique("healthclinic","url",i)}}],headerButtons:[{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"},{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]},this.rows=[],this._page=1,this.setRows()}setRows(c=this._page){this._page=c,this._core.afterWhile(this,()=>{this._healthclinicService.get({page:c}).subscribe(e=>{this.rows.splice(0,this.rows.length),this.rows.push(...e)})},250)}_bulkManagement(c=!0){return()=>{this._form.modalDocs(c?[]:this.rows).then(e=>l(this,null,function*(){if(c)for(let t of e)this._preCreate(t),yield s(this._healthclinicService.create(t));else{for(let t of this.rows)e.find(r=>r._id===t._id)||(yield s(this._healthclinicService.delete(t)));for(let t of e){let r=this.rows.find(f=>f._id===t._id);r?(this._core.copy(t,r),yield s(this._healthclinicService.update(r))):(this._preCreate(t),yield s(this._healthclinicService.create(t)))}}this.setRows()}))}}_preCreate(c){delete c.__created}static{this.\u0275fac=function(e){return new(e||o)(n(j),n(P),n(m),n(F),n(h))}}static{this.\u0275cmp=_({type:o,selectors:[["ng-component"]],standalone:!1,decls:1,vars:3,consts:[["title","Clinics",3,"columns","config","rows"]],template:function(e,t){e&1&&C(0,"wtable",0),e&2&&w("columns",t.columns)("config",t.config)("rows",t.rows)},dependencies:[k],encapsulation:2})}}return o})();var H=[{path:"",component:R}],J=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=v({type:o})}static{this.\u0275inj=u({imports:[S.forChild(H),I]})}}return o})();export{J as ClinicsModule};