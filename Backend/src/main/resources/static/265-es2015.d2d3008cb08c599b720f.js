(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[265],{86265:function(e,n,t){"use strict";t.r(n),t.d(n,{TablesModule:function(){return y}});var o=t(3679),r=t(47770),a=t(70419),c=t(4713),i=t(99763),d=t(37716);let s=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-tables"]],decls:1,vars:0,template:function(e,n){1&e&&d["\u0275\u0275element"](0,"router-outlet")},directives:[i.lC],encapsulation:2}),e})();var m=t(98152);let l=(()=>{class e{constructor(e){this.service=e,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},username:{title:"Username",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Age",type:"number"}}},this.source=new a.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}return e.\u0275fac=function(n){return new(n||e)(d["\u0275\u0275directiveInject"](m.B))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-smart-table"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275text"](2," Smart Table "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"nb-card-body"),d["\u0275\u0275elementStart"](4,"ng2-smart-table",0),d["\u0275\u0275listener"]("deleteConfirm",function(e){return n.onDeleteConfirm(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("settings",n.settings)("source",n.source))},directives:[r.Asz,r.ndF,r.yKW,a.T5],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),e})();var h=t(38583);function b(e,n){1&e&&d["\u0275\u0275element"](0,"tr",9)}function g(e,n){1&e&&d["\u0275\u0275element"](0,"tr",10)}function u(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"th",11),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("nbSortHeader",e.getSortDirection(e.customColumn)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.customColumn," ")}}function C(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",12),d["\u0275\u0275element"](1,"ngx-fs-icon",13),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"]()),2&e){const e=n.$implicit,t=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("kind",e.data.kind)("expanded",e.expanded),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.data[t.customColumn]," ")}}function p(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"th",11),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().$implicit,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("nbSortHeader",n.getSortDirection(e)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function O(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",12),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=n.$implicit,t=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.data[t]||"-")}}function M(e,n){if(1&e&&(d["\u0275\u0275elementContainerStart"](0,14),d["\u0275\u0275template"](1,p,2,2,"th",6),d["\u0275\u0275template"](2,O,2,1,"td",7),d["\u0275\u0275elementContainerEnd"]()),2&e){const e=n.$implicit,t=n.index,o=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("nbTreeGridColumnDef",e)("showOn",o.getShowOn(t))}}function _(e,n){if(1&e&&d["\u0275\u0275element"](0,"nb-tree-grid-row-toggle",2),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("expanded",e.expanded)}}function P(e,n){1&e&&d["\u0275\u0275element"](0,"nb-icon",3)}let f=(()=>{class e{constructor(e){this.dataSourceBuilder=e,this.customColumn="name",this.defaultColumns=["size","kind","items"],this.allColumns=[this.customColumn,...this.defaultColumns],this.sortDirection=r.mwv.NONE,this.data=[{data:{name:"Projects",size:"1.8 MB",items:5,kind:"dir"},children:[{data:{name:"project-1.doc",kind:"doc",size:"240 KB"}},{data:{name:"project-2.doc",kind:"doc",size:"290 KB"}},{data:{name:"project-3",kind:"txt",size:"466 KB"}},{data:{name:"project-4.docx",kind:"docx",size:"900 KB"}}]},{data:{name:"Reports",kind:"dir",size:"400 KB",items:2},children:[{data:{name:"Report 1",kind:"doc",size:"100 KB"}},{data:{name:"Report 2",kind:"doc",size:"300 KB"}}]},{data:{name:"Other",kind:"dir",size:"109 MB",items:2},children:[{data:{name:"backup.bkp",kind:"bkp",size:"107 MB"}},{data:{name:"secret-note.txt",kind:"txt",size:"2 MB"}}]}],this.dataSource=this.dataSourceBuilder.create(this.data)}updateSort(e){this.sortColumn=e.column,this.sortDirection=e.direction}getSortDirection(e){return this.sortColumn===e?this.sortDirection:r.mwv.NONE}getShowOn(e){return 400+100*e}}return e.\u0275fac=function(n){return new(n||e)(d["\u0275\u0275directiveInject"](r.aDd))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-tree-grid"]],decls:12,vars:7,consts:[["for","search",1,"search-label"],["nbInput","","id","search",1,"search-input",3,"nbFilterInput"],[3,"nbTreeGrid","nbSort","sort"],["nbTreeGridHeaderRow","",4,"nbTreeGridHeaderRowDef"],["nbTreeGridRow","",4,"nbTreeGridRowDef","nbTreeGridRowDefColumns"],[3,"nbTreeGridColumnDef"],["nbTreeGridHeaderCell","",3,"nbSortHeader",4,"nbTreeGridHeaderCellDef"],["nbTreeGridCell","",4,"nbTreeGridCellDef"],[3,"nbTreeGridColumnDef","showOn",4,"ngFor","ngForOf"],["nbTreeGridHeaderRow",""],["nbTreeGridRow",""],["nbTreeGridHeaderCell","",3,"nbSortHeader"],["nbTreeGridCell",""],[3,"kind","expanded"],[3,"nbTreeGridColumnDef","showOn"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-body"),d["\u0275\u0275elementStart"](2,"label",0),d["\u0275\u0275text"](3,"Search:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"input",1),d["\u0275\u0275elementStart"](5,"table",2),d["\u0275\u0275listener"]("sort",function(e){return n.updateSort(e)}),d["\u0275\u0275template"](6,b,1,0,"tr",3),d["\u0275\u0275template"](7,g,1,0,"tr",4),d["\u0275\u0275elementContainerStart"](8,5),d["\u0275\u0275template"](9,u,2,2,"th",6),d["\u0275\u0275template"](10,C,3,3,"td",7),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275template"](11,M,3,2,"ng-container",8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("nbFilterInput",n.dataSource),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("nbTreeGrid",n.dataSource)("nbSort",n.dataSource),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("nbTreeGridHeaderRowDef",n.allColumns),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("nbTreeGridRowDefColumns",n.allColumns),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("nbTreeGridColumnDef",n.customColumn),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngForOf",n.defaultColumns))},directives:function(){return[r.Asz,r.yKW,r.h8i,r.WVR,r.D4l,r.LeH,r.Rky,r.faK,r.omC,r.iL,r.oN1,h.sg,r.CJ8,r.Snn,r.qpn,r.exr,r.BIT,w]},styles:[".nb-theme-default   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-default   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-default   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-default   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-dark   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-dark   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-dark   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-cosmic   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-corporate   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-corporate   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}"]}),e})(),w=(()=>{class e{isDir(){return"dir"===this.kind}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-fs-icon"]],inputs:{kind:"kind",expanded:"expanded"},decls:3,vars:2,consts:[[3,"expanded",4,"ngIf","ngIfElse"],["fileIcon",""],[3,"expanded"],["icon","file-text-outline"]],template:function(e,n){if(1&e&&(d["\u0275\u0275template"](0,_,1,1,"nb-tree-grid-row-toggle",0),d["\u0275\u0275template"](1,P,1,0,"ng-template",null,1,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](2);d["\u0275\u0275property"]("ngIf",n.isDir())("ngIfElse",e)}},directives:[h.O5,r.rvZ,r.fMN],encapsulation:2}),e})();t(22958),t(40786),t(95596),t(90716),t(78186);const x=[{path:"",component:s,children:[{path:"smart-table",component:l},{path:"tree-grid",component:f}]}];let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.Bz.forChild(x)],i.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[r.zyh,r.caZ,r.KdK,r.nKr,c.O,k,a.ne,r.T2N,o.UX]]}),e})()}}]);