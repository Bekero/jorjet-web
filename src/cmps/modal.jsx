
export function Modal() {

    return (
        <div className="container">
            {/* <div className="interior">
                <a className="btn" >👋 Basic CSS-Only Modal</a>
            </div> */}
            <div id="open-modal" className="modal-window">
                <div>
                    <a href="#" title="Close" className="modal-close">Close</a>
                    <h1>Voilà!</h1>
                    <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
                    <div>
                        <div><small>Check out 👇</small></div>
                        Your new favorite eyedropper tool!
                    </div>
                </div >
            </div >
        </div >
    )
}
