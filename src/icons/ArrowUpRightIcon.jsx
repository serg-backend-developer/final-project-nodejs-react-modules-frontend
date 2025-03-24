import sprite from "../img/icons.svg"

const ArrowUpRightIcon = ({width=18, height=18, stroke='#ffffff'}) => {
    return (
        <svg width={width} height={height} stroke={stroke}>
            <use href={`${sprite}#icon-arrow-up-right`}/>
        </svg>
    )
};

export default ArrowUpRightIcon;