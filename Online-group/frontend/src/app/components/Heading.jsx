function Heading({ size, children }) {
    const style = { fontSize: '48px' }
    if (size) {
        switch (size) {
            case 1: 
                style.fontSize = '48px';
                break;
            case 2: 
                style.fontSize = '36px';
                break;
            case 3: 
                style.fontSize = '24px';
                break;
            case 4:
                style.fontSize = '18px';
                break;
            case 5:
                style.fontSize = '14px';
                break;
        }
    } 
    return (
        <>
            <h1 style={style}>
                { children }
            </h1>
            {/* JSX syntax  =>  {...} */}
        </>
    );
}

export default Heading;