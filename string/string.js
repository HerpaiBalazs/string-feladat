let txt = "wadwepoakddeesakdASASsdeasdafsas";

console.log(txt.substring(0,5));
console.log(txt.slice(3,8));
console.log(txt.substring(5,txt.length));
console.log(txt.substr(5,6));
console.log(txt.toUpperCase());
let aaa="";
for (let i=1; i<txt.length;i++){
    if(i%2==0){
        aaa+=txt[i].toUpperCase();
    }
    else{
        aaa+=txt[i].toLowerCase();
    }
}
console.log(aaa);
console.log(txt.replace("e","E"));
let bbb=txt.split("e")
console.log(bbb)

