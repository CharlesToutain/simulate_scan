function simulateBarcodeScan(barcode) {

    // Créer et déclencher des événements pour chaque caractère du code-barres

    for (let i = 0; i < barcode.length; i++) {

        let charCode = barcode.charCodeAt(i);

        

        let downEvent = new KeyboardEvent('keydown', {

            key: barcode[i],

            keyCode: charCode,

            which: charCode

        });

        

        let upEvent = new KeyboardEvent('keyup', {

            key: barcode[i],

            keyCode: charCode,

            which: charCode

        });

        

        ﻿﻿document.body.dispatchEvent﻿﻿(downEvent);

        ﻿﻿document.body.dispatchEvent﻿﻿(upEvent);

    }



    // Créer et déclencher l'événement pour la touche "Entrée" à la fin

    let enterDownEvent = new KeyboardEvent('keydown', {

        key: 'Enter',

        keyCode: 13,

        which: 13

    });



    let enterUpEvent = new KeyboardEvent('keyup', {

        key: 'Enter',

        keyCode: 13,

        which: 13

    });



    ﻿﻿document.body.dispatchEvent﻿﻿(enterDownEvent);

    ﻿﻿document.body.dispatchEvent﻿﻿(enterUpEvent);

}



// Utilisation :

simulateBarcodeScan('1234')
