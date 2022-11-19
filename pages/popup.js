import React, { useState } from 'react'
import Modal from 'react-awesome-modal';



function popUp() {


    const [visible, setVisible] = useState(false);




    return (

        <div>
            <input type="button" value="Open" onClick={() => setVisible(true)} />
            <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={() => setVisible(false)}>
                <div>
                    <h1>Title</h1>
                    <p>Some Contents</p>

                </div>
                
            </Modal>

        </div>




    )
}
export default popUp