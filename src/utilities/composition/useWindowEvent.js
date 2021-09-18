
import {onMounted, onUnmounted} from "vue";

export default function useWindowEvent(eventname, handleEvent){
    onMounted( ()=> window.addEventListener('keydown',handleEvent) );

    onUnmounted( () => {
        window.removeEventListener("keydown", handleEvent);
    })
}










