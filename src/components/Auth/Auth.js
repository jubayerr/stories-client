import React, { useState } from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router';
import Icon from './icon';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input';

const Auth = () => {
    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false)
    const [isSingup, setIsSignup] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()


    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup)=>!prevIsSignup)
        handleShowPassword(false)
    }

   const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    try {
        dispatch({type: 'AUTH', data: {result, token}})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
   }

   const googleFailure = () => {
    console.log('Google Sign in Failed. Please try again later.')
   }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutLinedIcon/>
            </Avatar>
            <Typography variant="h5">{isSingup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {
                    isSingup && (
                        <>
                    
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                    
                    
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                    
                        </>
                    )
                }
                <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                {isSingup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                {isSingup ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleLogin
            clientId="1016884608528-dorfttqiid8gtphj2kpfbjvaldgaaq91.apps.googleusercontent.com"
            render={(renderProps) => (
                <Button 
                className={classes.googleButton} 
                color='primary' 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                startIcon={<Icon/>} 
                variant='contained'
                >Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
            />
            <Grid container justify="flex-end">
                <Grid item>
                    <Button onClick={switchMode}>
                        {isSingup ? "Already have an account? Sign In" : "Don't have and account? Sign Up"}
                    </Button>
                </Grid>
            </Grid>
            </form>
            </Paper>
        </Container>
    );
};

export default Auth;