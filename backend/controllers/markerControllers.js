import asyncHandler from "express-async-handler";
import Marker from "../models/markerModel.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";
export const getMarkers = asyncHandler(async (req, res) => {
    const markers = await Marker.find({ user: req.user.id })

    res.status(200).json(markers)
})


export const setMarkers = asyncHandler(async (req, res) => {
    
    try {
        const marker = await Marker.create({
            event: req.body.title,
            long: req.body.long,
            lat: req.body.lat,
            description: req.body.description
        })

        console.log(marker);

        res.status(201).json(marker);
    } catch (error) {
        console.log(error);
        res.statis(409).json({message: error})
    }
})


export const updateMarker = asyncHandler(async (req, res) => {
    const marker = await Marker.findById(req.params.id)
    if (!marker) {
        res.status(400)
        throw new Error('Marker not found')
    }

    const user = await User.findById(req.user.id)


    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }


    if(marker.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    const updatedMarker = await Marker.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedMarker)
})

export const deleteMarker = asyncHandler(async (req, res) => {
    const marker = await Marker.findById(req.params.id)
    
    const user = await User.findById(req.user.id)

    // check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure logged in users can only edit their goals
    if(marker.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    if (!marker) {
        res.status(400)
        throw new Error('Marker not found')
    }

    await marker.remove()

    res.status(200).json({ id: req.params.id})
})
