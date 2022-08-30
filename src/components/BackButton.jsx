import AnimatedPage from "./AnimatedPage"

export default function BackButton({onClick}){
    return (
        <AnimatedPage>
            <div className="backButton" onClick={onClick}>
                <p className="position-absolute top-0 start-0 d-flex align-items-center m-5">
                    <i 
                        className="bi bi-caret-left"
                    />
                    <span>Back</span>
                </p>
            </div>
        </AnimatedPage>
    )
}