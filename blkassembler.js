(function () {
    window.BASSY = {
        assemble: function (element, sel) {
            var assemblySpec = null;

            var ele = document;
            if (element !== undefined) {
                ele = element;
            }

            var selQ = null;
            if (sel === undefined) {
                selQ = ele.querySelectorAll("script[type='text/assembler']");
            } else {
                selQ = ele.querySelectorAll(sel);
            }

            if (selQ != null) {
                assemblySpec = JSON.parse(selQ[0].innerHTML);
                for (i = 0; i < assemblySpec.length; i++) {
                    divsel = Object.getOwnPropertyNames(assemblySpec[i])[0];
                    tgtsel = assemblySpec[i][divsel]
                    divEl = ele.querySelectorAll(divsel)[0];
                    tgtEl = ele.querySelectorAll(tgtsel)[0];
                    tgtEl.appendChild(divEl);
                }
            } else {
                console.log("Error: selector not valid");
            }
        },


    };
})();