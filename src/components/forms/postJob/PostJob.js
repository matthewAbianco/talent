import React, { useState } from 'react';
import { DateTimePicker } from 'react-datetime-range-super-picker';
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import American from '../../../images/currency/American.png'
import Bitcoin from '../../../images/currency/Bitcoin.png'
import Canadian from '../../../images/currency/Canadian.png'
import Euro from '../../../images/currency/Euro.png'
import Pound from '../../../images/currency/Pound.png'
import Ruble from '../../../images/currency/Ruble.png'
import Rupee from '../../../images/currency/Rupee.png'
import Yen from '../../../images/currency/Yen.png'
import Yuan from '../../../images/currency/Yuan.png'

import 'react-datetime-range-super-picker/dist/index.css'

const JobPost = () => {

    const [currency, setCurrency] = useState('Select Currency')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [icon, setIcon] = useState('currency')
    const [curr_date, setDate] = useState(new Date())
    const handleChange = (event) => {
        setIcon(event.target.value)
    }

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
                                    value: /^([0-9]){1,8}$/,
                                    message: 'Enter a price'
                                }

                            })} placeholder="enter your price" />
                    <p>{errors.price?.message}</p>

                    <div className='sidebar__options'>
                        <Button
                            {...register('currency',
                                {
                                    required: true,
                                    message: 'Missing currency type'
                                })}
                            className='dropmenu__button'
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {currency}
                        </Button>
                        <div className='menu' >
                            <Menu
                                style={{ color: 'black' }}
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onClick={() => setCurrency(<img src={American} alt="" />)}><img src={American} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Canadian} alt="" />)}><img src={Canadian} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Bitcoin} alt="" />)}><img src={Bitcoin} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Euro} alt="" />)}><img src={Euro} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Pound} alt="" />)}><img src={Pound} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Ruble} alt="" />)}><img src={Ruble} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Rupee} alt="" />)}><img src={Rupee} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Yen} alt="" />)}><img src={Yen} alt="" /> </MenuItem>
                                <MenuItem onClick={() => setCurrency(<img src={Yuan} alt="" />)}><img src={Yuan} alt="" /> </MenuItem>
                            </Menu>
                        </div>
                    </div >
                    <input
                        {...register(
                            'location',
                            {
                                required: true,
                                message: 'Please enter the city you are from'
                            })} placeholder="City" />
                    <p>{errors.location?.message}</p>
                    <textarea
                        {...register(
                            'proposalMessage',
                            {
                                required: true,
                                pattern: {
                                    value: /^([A-Za-z!.?,/&0-9]{1,500})$/,
                                    message: 'What are you looking to accomplish with this project?'
                                }
                            })} placeholder="Notes about the job." rows='4' cols='50' minLength='1' maxLength='500'
                    />
                    <p>{errors.proposalMessage?.message}</p>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default JobPost