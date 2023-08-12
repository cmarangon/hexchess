import { Schema, model } from 'mongoose';
import { IMatch } from '../interfaces/IMatch';

const matchSchema = new Schema<IMatch>({
    date: { type: Date, required: true },
    mode: { type: String, required: true },
    players: { type: [String], required: false },
});

export default model('Match', matchSchema);
