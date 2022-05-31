function add_fun(){
    
    var txt = document.getElementById('txt').value;
    var amt = document.getElementById('amount').value;
    amt = Number(amt);
    if(amt<0){
        var ht = '<li class="minus">'+
        txt+'<span>'+amt+'</span><button onclick="delete_item(this)" class="delete-btn">x</button></li>';
        document.getElementById('list').innerHTML+=ht;
        income = document.getElementById('money-minus').textContent;
        var res = "";
        for(i=2;i<income.length;i++){
            res+=income[i];
        }
        income = Number(res)-Number(amt);
        document.getElementById('money-minus').innerHTML = '-$'+Math.abs(income);
    }
    else{
        var ht = '<li class="plus">'+
        txt+'<span>'+amt+'</span><button onclick="delete_item(this)" class="delete-btn">x</button></li>';
        document.getElementById('list').innerHTML+=ht;
        income = document.getElementById('money-plus').textContent;
        var res = "";
        for(var i=2;i<income.length;i++){
            res+=income[i];
        }
        income = Number(res)+Number(amt);
        document.getElementById('money-plus').innerHTML = '+$'+income;
    }
    // var bal = document.getElementById('balance').textContent;
    var inc = document.getElementById('money-plus').textContent;
    var exp = document.getElementById('money-minus').textContent;
    var res="" , res1 = "";
    for(i=2;i<inc.length;i++){
        res+=inc[i];
    }
    for(i=2;i<exp.length;i++){
        res1+=exp[i];
    }
    res = Number(res) - Number(res1);
    document.getElementById('balance').innerHTML = '$'+res;
    
}
function delete_item(t){
    t.closest('li').style.display='none';
}
