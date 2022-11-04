import mongoose, {Schema } from 'mongoose';

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        require: [true,"Enter your email: "],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Enter your password:'],
        trim: true,
        min:[6, "Your password should be at least 6 characters"]
    },

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default mongoose.model('User', userSchema);