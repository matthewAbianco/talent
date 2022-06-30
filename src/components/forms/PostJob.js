import React, { useState } from 'react';
import { DateTimePicker } from 'react-datetime-range-super-picker';
import { useForm } from 'react-hook-form'
import "./JobPost.css"
import 'react-datetime-range-super-picker/dist/index.css'

const JobPost = () => {

    const [icon, setIcon] = useState('')

    const handleChange = (event) => {
        setIcon(event.target.value)
    }


    const [curr_date, setDate] = useState(new Date())

    const handleDateUpdate = ({ date }) => {
        setDate(date.date)
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()


    return (
        <>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>

                <DateTimePicker date={curr_date}
                    onDateTimeUpdate={handleDateUpdate} />

                <div>
                    <input
                        {...register(
                            'price',
                            {
                                required: true,
                                pattern: {
                                    value: /^([0-9]){1,6}$/,
                                    message: 'Enter a price'
                                }

                            })} placeholder="enter your price" />
                    <p>{errors.price?.message}</p>


                    <select className='test'
                        {...register('currency',
                            {
                                required: true,
                                message: 'Missing currency type'
                            })}
                        placeholder="currency">
                        <option value='canadian'>CDN</option>
                        <option value=''>USA</option>
                        <option value='euro'>EURO</option>
                        <option value='pound'>POUND</option>
                        <option value='yuan'>YUAN</option>
                        <option value='yen'>YEN</option>
                        <option value='rupee'>RUP</option>
                    </select>

                    <input
                        {...register(
                            'location',
                            {
                                required: true,
                                message: 'Please enter the city you are from'
                            })} />
                    <p>{errors.location?.message}</p>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default JobPost