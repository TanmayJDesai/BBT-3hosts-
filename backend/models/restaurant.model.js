import mongoose from 'mongoose';

const restaurantSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    owner_name:{
        type: String,
        required: true
    },
    owner_number:{
        type: Number,
        required: true
    },
    occupancy:{
        type: Number,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt, updatedAt, might be useful idk
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;