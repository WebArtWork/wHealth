import{e as F}from"./chunk-FBQ74VY3.js";import{I as c,L as v,M as y,Pa as g,R as w,Ra as S,Va as b,X as C,ab as l,db as j,eb as I,f as h,fb as k,hb as d,i as a,mb as M,r as f,s as u,tb as R,u as m,vb as x}from"./chunk-SV2KFDMP.js";var P={formId:"healthcomment",title:"Healthcomment",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill healthcomment title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill healthcomment description"},{name:"Label",value:"Description"}]}]};var T=(()=>{class o extends j{constructor(t,e,i,s){super({name:"healthcomment"},t,e,i,s)}static{this.\u0275fac=function(e){return new(e||o)(m(k),m(I),m(d),m(l))}}static{this.\u0275prov=f({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var n=(()=>{class o{constructor(t,e,i,s,p,D,A){this._translate=t,this._healthcommentService=e,this._alert=i,this._form=s,this._core=p,this._router=D,this._route=A,this.clinic_id=this._router.url.includes("comments/")?this._router.url.replace("/comments/",""):"",this.columns=["name","description"],this.form=this._form.getForm("healthcomment",P),this.config={paginate:this.setRows.bind(this),perPage:20,setPerPage:this._healthcommentService.setPerPage.bind(this._healthcommentService),allDocs:!1,create:()=>{this._form.modal(this.form,{label:"Create",click:(r,_)=>h(this,null,function*(){_(),this._preCreate(r),yield a(this._healthcommentService.create(r)),this.setRows()})})},update:r=>{this._form.modal(this.form,[],r).then(_=>{this._core.copy(_,r),this._healthcommentService.update(r)})},delete:r=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this healthcomment?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>h(this,null,function*(){yield a(this._healthcommentService.delete(r)),this.setRows()})}]})},buttons:[{icon:"cloud_download",click:r=>{this._form.modalUnique("healthcomment","url",r)}}],headerButtons:[{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"},{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]},this.rows=[],this.doctor_id="",this.pharmacy_id="",this.place_id="",this._page=1,this.setRows(),this._route.paramMap.subscribe(r=>{this.doctor_id=r.get("doctor_id")||"",this.pharmacy_id=r.get("pharmacy_id")||"",this.place_id=r.get("place_id")||""})}setRows(t=this._page){this._page=t,this._core.afterWhile(this,()=>{this._healthcommentService.get({page:t,query:this._query()}).subscribe(e=>{this.rows.splice(0,this.rows.length),this.rows.push(...e)})},250)}_bulkManagement(t=!0){return()=>{this._form.modalDocs(t?[]:this.rows).then(e=>h(this,null,function*(){if(t)for(let i of e)this._preCreate(i),yield a(this._healthcommentService.create(i));else{for(let i of this.rows)e.find(s=>s._id===i._id)||(yield a(this._healthcommentService.delete(i)));for(let i of e){let s=this.rows.find(p=>p._id===i._id);s?(this._core.copy(i,s),yield a(this._healthcommentService.update(s))):(this._preCreate(i),yield a(this._healthcommentService.create(i)))}}this.setRows()}))}}_preCreate(t){delete t.__created,this.clinic_id&&(t.clinic=this.clinic_id),this.doctor_id&&(t.doctor=this.doctor_id),this.pharmacy_id&&(t.pharmacy=this.pharmacy_id),this.place_id&&(t.place=this.place_id)}_query(){let t="";return this.clinic_id&&(t+=(t?"&":"")+"clinic="+this.clinic_id),this.doctor_id&&(t+=(t?"&":"")+"doctor="+this.doctor_id),this.pharmacy_id&&(t+=(t?"&":"")+"pharmacy="+this.pharmacy_id),this.place_id&&(t+=(t?"&":"")+"place="+this.place_id),t}static{this.\u0275fac=function(e){return new(e||o)(c(M),c(T),c(d),c(x),c(l),c(S),c(g))}}static{this.\u0275cmp=v({type:o,selectors:[["ng-component"]],standalone:!1,decls:1,vars:3,consts:[["title","Comments",3,"columns","config","rows"]],template:function(e,i){e&1&&C(0,"wtable",0),e&2&&w("columns",i.columns)("config",i.config)("rows",i.rows)},dependencies:[R],encapsulation:2})}}return o})();var L=[{path:"",component:n},{path:":clinic_id",component:n},{path:":clinic_id/doctors/:doctor_id",component:n},{path:":clinic_id/pharmacies/:pharmacy_id",component:n},{path:":clinic_id/places/:place_id",component:n}],Z=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=y({type:o})}static{this.\u0275inj=u({imports:[b.forChild(L),F]})}}return o})();export{Z as CommentsModule};