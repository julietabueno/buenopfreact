import { useState } from 'react'


export const useItemCount = (stock, onAdd) => {
    const [count, setCount] = useState(1);

    function add() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function substract() {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return {
        add, substract, count, onAdd
    }
}
