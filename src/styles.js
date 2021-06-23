import { makeStyles } from "@material-ui/core"


export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    heading: {
        color: '#595751',
        fontWeight: '500',
        opacity: 1
    },
    image: {
        marginLeft: '15px',
        opacity: 1
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}))