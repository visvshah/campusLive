import React from "react";
import {IconButton, InputAdornment, Grid, TextField} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function input({name, label, autoFocus, type, handleChange, handleShowPassword, half}) {
  return (
    <Grid item xs = {12} md ={half ? 6: 12}>
        <TextField 
            variant = "outlined"
            required
            fullWidth
            name = {name} 
            label = {label}
            autoFocus = {autoFocus}
            type = {type}
            onChange = {handleChange} 
            InputProps = {name === "password" ? {
                endAdornment: (
                    <InputAdornment position = "end">
                        <IconButton onClick = {handleShowPassword}>
                            {type === "password" ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                ),
            }: null}
        />
    </Grid>
  )
}