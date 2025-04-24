interface Props {
    value: string;
    onClick: () => void;
}

export default function Square({ value, onClick }: Props) {
    // const handleClick = () => {
    //     setValue("X");
    // }
    
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}