import React from 'react'

import DiretaFilho from './DiretaFilho'

const DiretaPai = _ => {
    return (
        <div>
            <DiretaFilho nome="Fernando" idade={29} nerd={true} />
            <DiretaFilho nome="Thaysa" idade={24} nerd={false} />
            <DiretaFilho nome="Sansa" idade={5} nerd={true} />
            <DiretaFilho nome="Dingoide" idade={15} nerd={false} />
        </div>
    )
}

export default DiretaPai