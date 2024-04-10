interface MiddleDotProps {
    isSmall?: boolean;
}

function MiddleDot(props: MiddleDotProps) {
    const { isSmall } = props;
    return (
        <span
            style={{
                margin: isSmall ? '0' : '0 0.1vw',
            }}
        >
            •
        </span>
    );
}

export default MiddleDot;
