import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: "148px",
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    opacity: 1,
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    backgroundColor: "#FFF",
                    border: "1px solid #00CC22",
                    height: "18px",
                    width: "18px",
                    '&::before': {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        boxShadow: "none",
                        backgroundColor: "#00CC22"
                    },
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
