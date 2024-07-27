const containerEl=document.querySelector(".mycontainer");
const options=["Make Money Online ?","Earn Using your Phone ?",
            "Make an Exta cash ?","Be Your Own Boss ?","Have a Well Paying Part-time Job ?"];
let careerIndex=0;
let characterIndex=0;
updateText();
function updateText(){
    characterIndex ++;
    containerEl.innerHTML=`<h1>Do You Want To  ${options[careerIndex].slice(0,characterIndex
    )}</h1>`;
    if(characterIndex === options[careerIndex].length){
        careerIndex ++;
        characterIndex=0;
    }
    if(careerIndex === options.length){
        careerIndex=0;
    }
    setTimeout(updateText,400);
}

