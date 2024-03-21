import{d as T,T as U,D as a,o as m,c as P,w as t,e as b,g as k,a as d,t as g,b as e,F as q,h as N,E as B,k as E,u as y,i as L,G as Y,H as Z,s as F,Q,O as G}from"./app-CeeTN1tz.js";import{_ as J}from"./AppLayout-DUCgVVa2.js";import"./img-DNTK9n0h.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const K={key:0},W={class:"font-bold"},X={key:1},ee={class:"dialog-footer"},te={__name:"TaskModal",props:{allowedStatuses:Object,allowedPriorities:Object},emits:["taskCreated"],setup(o,{expose:v,emit:h}){const n=T(!1),s=T(null),_=T(!1),x=h;v({createTask:u,editTask:M});const l=T(U({}));function M(r){var i;l.value=U(r),_.value=!0,n.value=!0,(i=s.value)==null||i.clearValidate()}function u(){var r;l.value=U({title:"",description:"",due_date:"",status:"",priority:""}),_.value=!1,n.value=!0,(r=s.value)==null||r.clearValidate()}const c={title:[{required:!0,message:"Title is required",trigger:"blur"}],description:[{required:!0,message:"Description is required",trigger:"blur"}],due_date:[{required:!0,message:"Due date is required",trigger:"change"}],status:[{required:!0,message:"Status is required",trigger:"change"}],priority:[{required:!0,message:"Priority is required",trigger:"change"}]};function $(){s.value.validate(r=>{if(!r)return;const i=_.value?route("tasks.update",l.value.id):route("tasks.store"),C=_.value?"put":"post";l.value[C](i,{onSuccess:V=>{n.value=!1,l.value.reset(),_.value=!1,!_.value&&w("newTaskId")&&x("taskCreated",w("newTaskId"))}})})}function w(r){return new URLSearchParams(window.location.search).get(r)}return(r,i)=>{const C=a("el-input"),V=a("el-form-item"),j=a("el-date-picker"),D=a("el-option"),p=a("el-select"),O=a("el-form"),z=a("el-button"),I=a("el-dialog");return m(),P(I,{modelValue:n.value,"onUpdate:modelValue":i[5]||(i[5]=f=>n.value=f),width:"500"},{header:t(()=>[_.value?(m(),b("div",K,[k("Edit task "),d("span",W,g(l.value.title),1)])):(m(),b("div",X,"Create a new task"))]),footer:t(()=>[d("div",ee,[e(z,{loading:l.value.processing,onClick:$,type:"primary"},{default:t(()=>[k(g(_.value?"Update":"Create"),1)]),_:1},8,["loading"])])]),default:t(()=>[e(O,{ref_key:"formRef",ref:s,model:l.value,"label-position":"top",size:"large",rules:c},{default:t(()=>[e(V,{label:"Title",prop:"title"},{default:t(()=>[e(C,{modelValue:l.value.title,"onUpdate:modelValue":i[0]||(i[0]=f=>l.value.title=f),autofocus:""},null,8,["modelValue"])]),_:1}),e(V,{label:"Description",prop:"description"},{default:t(()=>[e(C,{type:"textarea",rows:"6",modelValue:l.value.description,"onUpdate:modelValue":i[1]||(i[1]=f=>l.value.description=f)},null,8,["modelValue"])]),_:1}),e(V,{label:"Due Date",prop:"due_date"},{default:t(()=>[e(j,{modelValue:l.value.due_date,"onUpdate:modelValue":i[2]||(i[2]=f=>l.value.due_date=f),type:"date",placeholder:"Pick a date",class:"!w-full"},null,8,["modelValue"])]),_:1}),e(V,{label:"Status",prop:"status"},{default:t(()=>[e(p,{modelValue:l.value.status,"onUpdate:modelValue":i[3]||(i[3]=f=>l.value.status=f),placeholder:"Select a status"},{default:t(()=>[(m(!0),b(q,null,N(o.allowedStatuses,(f,S)=>(m(),P(D,{key:S,label:f,value:S},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(V,{label:"Priority",prop:"priority"},{default:t(()=>[e(p,{modelValue:l.value.priority,"onUpdate:modelValue":i[4]||(i[4]=f=>l.value.priority=f),placeholder:"Select a priority"},{default:t(()=>[(m(!0),b(q,null,N(o.allowedPriorities,(f,S)=>(m(),P(D,{key:S,label:f,value:S},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}};function le(o,v){return m(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"})])}function oe(o,v){return m(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})])}function A(o){switch(o){case"in_progress":return"primary";case"completed":return"success";case"cancelled":return"danger";default:return"info"}}function H(o){switch(o){case"medium":return"warning";case"high":return"danger";default:return"info"}}function R(o){return B(o).format("DD-MM-YYYY")}const ae=d("div",{class:"font-bold text-sm"},"Notes",-1),se={key:0},ne={class:"mt-3 text-xs text-gray-400"},re={key:1},ie={class:"flex"},de={__name:"TaskNotes",props:{task:Object},setup(o){const v=o,h=E(()=>v.task.notes),n=U({note:""});function s(){n.note&&n.post(route("tasks.notes.store",v.task),{preserveState:!0,onSuccess:()=>{n.reset()}})}function _(x){confirm("Are you sure you want to delete this note?")&&n.delete(route("tasks.notes.destroy",[v.task,x]))}return(x,l)=>{const M=a("el-icon"),u=a("el-input"),c=a("el-form-item"),$=a("el-button"),w=a("el-form");return m(),b("div",null,[ae,h.value.length?(m(),b("div",se,[(m(!0),b(q,null,N(h.value,r=>(m(),b("div",{key:r.id,class:"p-2 my-2 rounded border-[1px] relative"},[d("div",null,g(r.note),1),d("div",ne,g(y(B)(r.created_at).format("DD-MM-YYYY HH:ss")),1),e(M,{class:"!absolute top-2 right-2 cursor-pointer",color:"red",size:"16",onClick:i=>_(r)},{default:t(()=>[e(y(oe))]),_:2},1032,["onClick"])]))),128))])):(m(),b("div",re," No notes created yet ")),e(w,{"label-position":"top",class:"mt-6"},{default:t(()=>[e(c,{label:"Add Note"},{default:t(()=>[e(u,{type:"textarea",rows:6,modelValue:y(n).note,"onUpdate:modelValue":l[0]||(l[0]=r=>y(n).note=r)},null,8,["modelValue"])]),_:1}),d("div",ie,[e($,{class:"ml-auto",type:"primary",onClick:L(s,["prevent"]),loading:y(n).processing},{default:t(()=>[k("Add Note")]),_:1},8,["loading"])])]),_:1})])}}},ue={class:"p-4 pt-0"},ce={class:"flex items-center"},pe={class:"bold text-2xl text-black"},me={class:"flex items-center mt-4"},_e={class:"flex"},fe=d("hr",{class:"my-6"},null,-1),ve={class:"whitespace-pre-line"},ke=d("hr",{class:"my-6"},null,-1),we={__name:"TaskViewModal",props:Y({allowedStatuses:Object,allowedPriorities:Object},{modelValue:{type:Object},modelModifiers:{}}),emits:Y(["editTask"],["update:modelValue"]),setup(o,{expose:v,emit:h}){const n=T(!1),s=Z(o,"modelValue"),_=h;v({openModal:x});function x(){n.value=!0}function l(){n.value=!1,_("editTask",s.value)}return(M,u)=>{const c=a("el-tag"),$=a("el-link"),w=a("el-dialog");return m(),P(w,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=r=>n.value=r),width:"50%"},{default:t(()=>[d("div",ue,[d("div",ce,[d("div",pe,"title"+g(s.value.title),1),e(c,{type:y(A)(s.value.status),class:"ml-4"},{default:t(()=>[k(g(o.allowedStatuses[s.value.status]),1)]),_:1},8,["type"])]),d("div",me,[e(c,{type:y(H)(s.value.priority)},{default:t(()=>[k(g(o.allowedPriorities[s.value.priority]),1)]),_:1},8,["type"]),e(c,{class:"ml-3"},{default:t(()=>[k("Due: "+g(y(R)(s.value.due_date)),1)]),_:1})]),d("div",_e,[e($,{class:"ml-auto !text-accent",onClick:l},{default:t(()=>[k("Edit Task")]),_:1})]),fe,d("div",ve,g(s.value.description),1),ke,e(de,{task:s.value},null,8,["task"])])]),_:1},8,["modelValue"])}}},ge=d("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Task Manager ",-1),ye={class:"py-6"},be={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},he={class:"mb-5"},xe={class:"bg-white overflow-hidden shadow-xl p-8 font-bold text-xl"},Me={__name:"Tasks",props:{tasks:Object,allowedStatuses:Object,allowedPriorities:Object},setup(o){const v=o,h=T(null),n=T(null),s=T(null);E(()=>Q().props.auth.user);function _(u){h.value.editTask(u)}function x(u){confirm("Are you sure you want to delete this task?")&&G.delete(route("tasks.destroy",u.id))}function l(u){s.value=u,n.value.openModal()}function M(u){l(v.tasks.data.find(c=>c.id===parseInt(u)))}return F(()=>v.tasks,()=>{s.value&&(s.value=v.tasks.data.find(u=>u.id===s.value.id))}),(u,c)=>{const $=a("el-button"),w=a("el-table-column"),r=a("el-tag"),i=a("el-icon"),C=a("el-dropdown-item"),V=a("el-dropdown-menu"),j=a("el-dropdown"),D=a("el-table");return m(),P(J,{title:"Tasks"},{header:t(()=>[ge]),default:t(()=>[d("div",ye,[d("div",be,[d("div",he,[e($,{type:"primary",onClick:c[0]||(c[0]=p=>u.$refs.formModal.createTask())},{default:t(()=>[k("Create Task")]),_:1})]),d("div",xe,[e(D,{data:o.tasks.data,"default-sort":{prop:"due_date",order:"descending"},style:{width:"100%"},onRowClick:l,class:"clickable"},{default:t(()=>[e(w,{prop:"title",label:"Title",sortable:""}),e(w,{prop:"due_date",label:"Due Date",sortable:""},{default:t(p=>[k(g(y(R)(p.row.due_date)),1)]),_:1}),e(w,{prop:"status",label:"Status",sortable:""},{default:t(p=>[e(r,{type:y(A)(p.row.status)},{default:t(()=>[k(g(o.allowedStatuses[p.row.status]),1)]),_:2},1032,["type"])]),_:1}),e(w,{prop:"priority",label:"Priority",sortable:""},{default:t(p=>[e(r,{type:y(H)(p.row.priority)},{default:t(()=>[k(g(o.allowedPriorities[p.row.priority]),1)]),_:2},1032,["type"])]),_:1}),e(w,{label:""},{default:t(p=>[e(j,null,{dropdown:t(()=>[e(V,null,{default:t(()=>[e(C,{onClick:O=>_(p.row)},{default:t(()=>[k("Edit")]),_:2},1032,["onClick"]),e(C,{onClick:O=>x(p.row),class:"!text-red-500"},{default:t(()=>[k("Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),default:t(()=>[e(i,{onClick:c[1]||(c[1]=L(()=>{},["prevent","stop"])),size:"32"},{default:t(()=>[e(y(le))]),_:1})]),_:2},1024)]),_:1})]),_:1},8,["data"])])])]),e(te,{ref_key:"formModal",ref:h,"allowed-priorities":o.allowedPriorities,"allowed-statuses":o.allowedStatuses,onTaskCreated:M},null,8,["allowed-priorities","allowed-statuses"]),e(we,{ref_key:"viewModal",ref:n,modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=p=>s.value=p),"allowed-statuses":o.allowedStatuses,"allowed-priorities":o.allowedPriorities,onEditTask:_},null,8,["modelValue","allowed-statuses","allowed-priorities"])]),_:1})}}};export{Me as default};
