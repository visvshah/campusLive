import React, {useState} from "react";
import {Container, Button, Paper, Grid} from "@material-ui/core";
export default function Auth() {
  return (
    <div>
        <Container component="main" maxWidth = "xs">
            <Paper className = "paper" elevation={3}>
                <h3>{signedUp ? "Sign Up" : "Sign In"}</h3>
                <form className = "form" onSubmit={handleSubmit}>
                    <Grid container spacing = {2}>
                        {
                            signedUp && (
                                <>
                                    <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half/>
                                    <Input name = "lastName" label = "Last Name" handleChange = {handleChange} half/>
                                </>
                            )
                        }
                        <Input name = "email" label = "Email Address" handleChange = {handleChange} type = "email"/>
                        <Input name = "password" label = "Password" handleChange = {handleChange} type = {showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword}/>
                        {signedUp && <Input name = "confirmPassword" label = "Repeat Password" handleChange={handleChange} type = "password"/>}
                        <Button type = "submit" fullWidth variant = "contained" color = "primary" className = "submit">
                            {signedUp ? "Sign Up" : "Sign In"}
                        </Button>
                    </Grid>
                    
                    <Grid container>
                        <Grid item>
                            <Button onClick = {switchMode}>
                                {signedUp ? "Sign In Instead" : "Sign Up Instead"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    </div>
  )
}
