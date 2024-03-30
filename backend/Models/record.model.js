import { Schema, model } from "mongoose";

const schema =  new Schema({
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const Record = model('Record',schema);
export default Record;