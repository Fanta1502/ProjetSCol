!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[265],{86265:function(n,t,a){"use strict";a.r(t),a.d(t,{TablesModule:function(){return z}});var i=a(3679),c=a(47770),d=a(70419),m=a(4713),s=a(99763),l=a(37716),u=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-tables"]],decls:1,vars:0,template:function(e,n){1&e&&l["\u0275\u0275element"](0,"router-outlet")},directives:[s.lC],encapsulation:2}),e}(),h=a(98152),b=function(){var e=function(){function e(n){r(this,e),this.service=n,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},username:{title:"Username",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Age",type:"number"}}},this.source=new d.nC;var t=this.service.getData();this.source.load(t)}return o(e,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}]),e}();return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](h.B))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-smart-table"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275text"](2," Smart Table "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"nb-card-body"),l["\u0275\u0275elementStart"](4,"ng2-smart-table",0),l["\u0275\u0275listener"]("deleteConfirm",function(e){return n.onDeleteConfirm(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("settings",n.settings)("source",n.source))},directives:[c.Asz,c.ndF,c.yKW,d.T5],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),e}(),g=a(38583);function C(e,n){1&e&&l["\u0275\u0275element"](0,"tr",9)}function p(e,n){1&e&&l["\u0275\u0275element"](0,"tr",10)}function f(e,n){if(1&e&&(l["\u0275\u0275elementStart"](0,"th",11),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var t=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("nbSortHeader",t.getSortDirection(t.customColumn)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",t.customColumn," ")}}function O(e,n){if(1&e&&(l["\u0275\u0275elementStart"](0,"td",12),l["\u0275\u0275element"](1,"ngx-fs-icon",13),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"]()),2&e){var t=n.$implicit,o=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("kind",t.data.kind)("expanded",t.expanded),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",t.data[o.customColumn]," ")}}function M(e,n){if(1&e&&(l["\u0275\u0275elementStart"](0,"th",11),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var t=l["\u0275\u0275nextContext"]().$implicit,o=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("nbSortHeader",o.getSortDirection(t)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",t," ")}}function P(e,n){if(1&e&&(l["\u0275\u0275elementStart"](0,"td",12),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var t=n.$implicit,o=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](t.data[o]||"-")}}function _(e,n){if(1&e&&(l["\u0275\u0275elementContainerStart"](0,14),l["\u0275\u0275template"](1,M,2,2,"th",6),l["\u0275\u0275template"](2,P,2,1,"td",7),l["\u0275\u0275elementContainerEnd"]()),2&e){var t=n.$implicit,o=n.index,r=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("nbTreeGridColumnDef",t)("showOn",r.getShowOn(o))}}function w(e,n){if(1&e&&l["\u0275\u0275element"](0,"nb-tree-grid-row-toggle",2),2&e){var t=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("expanded",t.expanded)}}function k(e,n){1&e&&l["\u0275\u0275element"](0,"nb-icon",3)}var x=function(){var n=function(){function n(t){r(this,n),this.dataSourceBuilder=t,this.customColumn="name",this.defaultColumns=["size","kind","items"],this.allColumns=[this.customColumn].concat(e(this.defaultColumns)),this.sortDirection=c.mwv.NONE,this.data=[{data:{name:"Projects",size:"1.8 MB",items:5,kind:"dir"},children:[{data:{name:"project-1.doc",kind:"doc",size:"240 KB"}},{data:{name:"project-2.doc",kind:"doc",size:"290 KB"}},{data:{name:"project-3",kind:"txt",size:"466 KB"}},{data:{name:"project-4.docx",kind:"docx",size:"900 KB"}}]},{data:{name:"Reports",kind:"dir",size:"400 KB",items:2},children:[{data:{name:"Report 1",kind:"doc",size:"100 KB"}},{data:{name:"Report 2",kind:"doc",size:"300 KB"}}]},{data:{name:"Other",kind:"dir",size:"109 MB",items:2},children:[{data:{name:"backup.bkp",kind:"bkp",size:"107 MB"}},{data:{name:"secret-note.txt",kind:"txt",size:"2 MB"}}]}],this.dataSource=this.dataSourceBuilder.create(this.data)}return o(n,[{key:"updateSort",value:function(e){this.sortColumn=e.column,this.sortDirection=e.direction}},{key:"getSortDirection",value:function(e){return this.sortColumn===e?this.sortDirection:c.mwv.NONE}},{key:"getShowOn",value:function(e){return 400+100*e}}]),n}();return n.\u0275fac=function(e){return new(e||n)(l["\u0275\u0275directiveInject"](c.aDd))},n.\u0275cmp=l["\u0275\u0275defineComponent"]({type:n,selectors:[["ngx-tree-grid"]],decls:12,vars:7,consts:[["for","search",1,"search-label"],["nbInput","","id","search",1,"search-input",3,"nbFilterInput"],[3,"nbTreeGrid","nbSort","sort"],["nbTreeGridHeaderRow","",4,"nbTreeGridHeaderRowDef"],["nbTreeGridRow","",4,"nbTreeGridRowDef","nbTreeGridRowDefColumns"],[3,"nbTreeGridColumnDef"],["nbTreeGridHeaderCell","",3,"nbSortHeader",4,"nbTreeGridHeaderCellDef"],["nbTreeGridCell","",4,"nbTreeGridCellDef"],[3,"nbTreeGridColumnDef","showOn",4,"ngFor","ngForOf"],["nbTreeGridHeaderRow",""],["nbTreeGridRow",""],["nbTreeGridHeaderCell","",3,"nbSortHeader"],["nbTreeGridCell",""],[3,"kind","expanded"],[3,"nbTreeGridColumnDef","showOn"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-body"),l["\u0275\u0275elementStart"](2,"label",0),l["\u0275\u0275text"](3,"Search:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](4,"input",1),l["\u0275\u0275elementStart"](5,"table",2),l["\u0275\u0275listener"]("sort",function(e){return n.updateSort(e)}),l["\u0275\u0275template"](6,C,1,0,"tr",3),l["\u0275\u0275template"](7,p,1,0,"tr",4),l["\u0275\u0275elementContainerStart"](8,5),l["\u0275\u0275template"](9,f,2,2,"th",6),l["\u0275\u0275template"](10,O,3,3,"td",7),l["\u0275\u0275elementContainerEnd"](),l["\u0275\u0275template"](11,_,3,2,"ng-container",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("nbFilterInput",n.dataSource),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("nbTreeGrid",n.dataSource)("nbSort",n.dataSource),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("nbTreeGridHeaderRowDef",n.allColumns),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("nbTreeGridRowDefColumns",n.allColumns),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("nbTreeGridColumnDef",n.customColumn),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",n.defaultColumns))},directives:function(){return[c.Asz,c.yKW,c.h8i,c.WVR,c.D4l,c.LeH,c.Rky,c.faK,c.omC,c.iL,c.oN1,g.sg,c.CJ8,c.Snn,c.qpn,c.exr,c.BIT,y]},styles:[".nb-theme-default   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-default   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-default   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-default   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-dark   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-dark   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-dark   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-cosmic   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-corporate   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-corporate   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}"]}),n}(),y=function(){var e=function(){function e(){r(this,e)}return o(e,[{key:"isDir",value:function(){return"dir"===this.kind}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-fs-icon"]],inputs:{kind:"kind",expanded:"expanded"},decls:3,vars:2,consts:[[3,"expanded",4,"ngIf","ngIfElse"],["fileIcon",""],[3,"expanded"],["icon","file-text-outline"]],template:function(e,n){if(1&e&&(l["\u0275\u0275template"](0,w,1,1,"nb-tree-grid-row-toggle",0),l["\u0275\u0275template"](1,k,1,0,"ng-template",null,1,l["\u0275\u0275templateRefExtractor"])),2&e){var t=l["\u0275\u0275reference"](2);l["\u0275\u0275property"]("ngIf",n.isDir())("ngIfElse",t)}},directives:[g.O5,c.rvZ,c.fMN],encapsulation:2}),e}();a(22958),a(40786),a(95596),a(90716),a(78186);var v,S=[{path:"",component:u,children:[{path:"smart-table",component:b},{path:"tree-grid",component:x}]}],T=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[s.Bz.forChild(S)],s.Bz]}),e}(),z=((v=function e(){r(this,e)}).\u0275fac=function(e){return new(e||v)},v.\u0275mod=l["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[c.zyh,c.caZ,c.KdK,c.nKr,m.O,T,d.ne,c.T2N,i.UX]]}),v)}}])}();