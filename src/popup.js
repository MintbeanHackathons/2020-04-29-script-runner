let changeColor = document.getElementById('changeColor');
let scriptField = document.getElementById('scriptField');
let script = document.getElementById('script');
let btnCreate= document.getElementById('create');
let btnEdit= document.getElementById('edit');
let btnSave= document.getElementById('save');
let btnApply=document.getElementById('apply');

btnCreate.onclick = function() {
    if(scriptField.disabled = true)
    {
        scriptField.disabled = false;
    }
    };

btnEdit.onclick = function() {
        if(script.value != NULL)
        {
            if(scriptField.disabled = true)
            {
                scriptField.disabled = false;
                scriptField.innerHTML = script.value;
            }
        }
    };

btnSave.onclick = function() {
        
            if(scriptField.disabled = false)
            {
                script.innerHTML = scriptField.value;
                scriptField.disabled = true;
            }
        
    };

//TODO define function to apply the script
  btnApply.onclick = function(element) {
  };

//TODO script validation 