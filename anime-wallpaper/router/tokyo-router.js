import express from 'express';
import {isValid,tokyoControl,img1Control,img2Control,addImg,putImg,delImg} from '../controller/control.js';

const router=express.Router();
router.use(express.json())
// MIDDLEWARE
router.use('/tokyo-ghost/:name',isValid)

// GET
router.get('/',tokyoControl)
router.get('/img1',img1Control)
router.get('/img2',img2Control)

//POST
router.post('/',addImg)

// PUT
router.put('/',putImg)

// DELETE
router.delete('/',delImg)

export {router};