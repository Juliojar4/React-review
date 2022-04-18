import bus from "../utility/bus/bus";

export default function useFlashMessage() {
    function setFlashMessage(msg) {
        bus.emit('flash', {
            message: msg,
        })
    }
    return { setFlashMessage }
}