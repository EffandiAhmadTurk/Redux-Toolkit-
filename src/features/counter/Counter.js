import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './counterSlice'
import { useState } from 'react'
const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }
    return (
        <div>
            <section className=''>
                <div className='flex bg-black text-white shadow-lg py-8 justify-center'>
                    Redux Toolkit Counter
                </div>
                <p className='bg-gray-300 w-72 py-8 rounded-lg flex justify-center w-28 h-18 my-8 mx-auto'>{count}</p>
                <div className=''>
                    <input className='border-2 w-32' type="text" value={null} onChange={(e) => setIncrementAmount(e.target.value)} />
                </div>
                <div className='flex space-x-2 justify-center my-4'>
                    <button className='w-12 h-12 rounded-md bg-gray-300' onClick={() => dispatch(decrement())}>
                        -
                    </button>
                    <button className='w-12 h-12 rounded-md bg-gray-300' onClick={() => dispatch(increment())}>
                        +
                    </button>
                </div>
                <div onClick={() => dispatch(incrementByAmount(addValue))} className=''>
                    <button className='bg-black w-32 text-gray-300'>
                        Amount Add
                    </button>
                </div>
                <div onClick={resetAll} className='bg-black w-32 text-gray-300  my-4 mx-auto'>
                    <button>
                        Reset All
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Counter