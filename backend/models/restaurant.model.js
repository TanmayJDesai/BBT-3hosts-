import mongoose from 'mongoose';

const restaurantSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    waitlistCount:{
        type: Number,
        required: true
    },
    occupancyPercentage:{
        type: Number,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }
}, {
    timestamps: true //createdAt, updatedAt, might be useful idk
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;