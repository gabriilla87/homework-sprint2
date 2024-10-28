import React from 'react'
import downArrow from '../assets/arrow-down.svg'
import upArrow from '../assets/arrow-up.svg'
import noneArrow from '../assets/none.svg'

// добавить в проект иконки и импортировать
const downIcon = downArrow
const upIcon = upArrow
const noneIcon = noneArrow

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === down ? up : sort === up ? "" : down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{display: "flex", alignItems: "center"}}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={"dirIcon"}
                style={{display: "inline-block"}}
            />
        </span>
    )
}

export default SuperSort
