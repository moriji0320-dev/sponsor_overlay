
const logos=[
"logos/dome-.png",
"logos/kawamol.png",
"logos/molhub.png",
"logos/molrogu.png",
"logos/shisho-.png"
];
const box=document.getElementById("sponsor-message");
let i=0;
function show(){
box.innerHTML='<img src="'+logos[i]+'?t='+Date.now()+'" alt="">';
i=(i+1)%logos.length;
}
show();
setInterval(show,5000);
