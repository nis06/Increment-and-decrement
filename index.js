const value=document.querySelector('#counter');

const increment = () => {
    let valueNew=parseInt(value.innerText);
    valueNew=valueNew + 1;
    value.innerText=valueNew;
    

};

const decrement = () => {
    let valueNew=parseInt(value.innerText);
    valueNew = valueNew-1;
    value.innerText=valueNew  ;
};

