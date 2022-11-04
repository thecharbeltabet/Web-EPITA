import mongoose, {Schema } from 'mongoose';

const todoSchema = new mongoose.Schema({

    label: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default mongoose.model('todo', todoSchema);