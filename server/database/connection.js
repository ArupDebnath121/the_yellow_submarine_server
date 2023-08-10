import mongoose, { mongo } from mongoose;

export default async () => {
    return mongoose.connect(MONGO_URI)
}