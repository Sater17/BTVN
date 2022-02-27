import express from 'express';
import {videoStream} from '../controller/video.js'


const videoRouter = express.Router()

videoRouter.get('/',videoStream)


export {videoRouter};