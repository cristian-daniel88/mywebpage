import React from 'react'
import { DoneContact, hDone} from './DoneStyles'

function Done() {
    return (
        <DoneContact>
            <div>
                <h4 style={{'color': 'violet', 'fontSize': '3em'}}>
                    SENT
                </h4>
            </div>
        </DoneContact>
    )
}

export default Done
