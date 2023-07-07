import bgImg from '../../images/background.png'

export const styles = {
    container: {
        background: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        background: '#fff',
        borderRadius: '15px'
    },
    btn: {
        color: '#000',
        position: 'absolute',
        left: '69%',
        fontSize: 20,
        borderRadius: '10px',
        paddingY: "12px",
        width: '10rem'
    }
}