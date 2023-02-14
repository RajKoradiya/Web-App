import avtar from './image/Photo.png';
const portfolio = () => {
    return (
        <div class="bg">
            <div class="ig">
                <img src={avtar} class="photo" />
                <div class="text">
                    <p>Hi There,</p>
                    <p>I'm Raj Koradiya</p>
                    <h6>I am into <span>web develop!</span></h6>
                </div>
            </div>
        </div>
    );
};

export default portfolio;