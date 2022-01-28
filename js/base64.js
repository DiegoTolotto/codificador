

    function verifica (){
        let result = document.getElementById('entrada').value;
        var codific = btoa(result)
        document.getElementById("saida").innerHTML = codific;
        
    }

    function transfor (){
        let result = document.getElementById('entrada').value;
        var decodi = atob(result)
        document.getElementById("saida").innerText = decodi;
        
    }
