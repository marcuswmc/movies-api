import mongoose from 'mongoose';

export interface IMovie extends mongoose.Document {
  title: string;
  releaseDate: Date;
  trailerLink: string;
  posterUrl: string;
  genres: string[];
}

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  trailerLink: {
    type: String,
    required: true,
  },
  posterUrl: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
});

export default mongoose.model<IMovie>('Movie', MovieSchema);
