import { customRef } from "vue"
export default function debounceRef(value, wait) {
    let timer
    return customRef((track, trigger) => ({
        get(value) {
            track();
            return value
        },
        set(val) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                value = val
                trigger()
            }, wait);
        }
    }))
}