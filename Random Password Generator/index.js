const pwd = document.getElementById('pwd');
const pwdbtn = document.getElementById('pwdbtn');

pwdbtn.addEventListener('click',generatePwd);

function generatePwd(){
    let password = '';
    let values = '012345{}[]6789'+'abcdefg@%^()hijklmnopqrstuvwxyz'+'AB_(!!^$CDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i=0;i<7;i++){
        let singleValue = Math.floor(Math.random()*values.length+1);
        password +=values.charAt(singleValue);

    }
    pwd.innerText = password;
}